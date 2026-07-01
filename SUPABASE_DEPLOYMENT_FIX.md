# Supabase Deployment Fix Guide

## Problem

The application was throwing "Invalid API key" errors on Netlify deployment even though:
- Local development works perfectly
- Netlify build succeeds
- The website loads initially

## Root Cause

The Supabase client initialization in [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts) was incorrectly trying to use environment variables at runtime instead of build-time.

**The Issue:**
- `import.meta.env.VITE_*` variables are replaced by Vite **at build time**, not runtime
- If these variables weren't available during the Netlify build, they became `undefined`
- The browser then tried to create a Supabase client with undefined credentials
- Supabase returned "Invalid API key"

## Solution Implemented

### 1. Fixed Environment Variable Resolution
**File: [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts)**

Changed from:
```typescript
const SERVER_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || process.env.SERVER_SUPABASE_URL;
const SERVER_SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SERVER_SUPABASE_PUBLISHABLE_KEY;
```

To:
```typescript
// Browser-only: Use VITE_* prefixed environment variables (replaced at Vite build time)
// These must be available in the Netlify build environment
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
```

**Why this works:**
- Removes the useless fallback to `process.env` (which never works in browser)
- Makes it explicit that VITE_* variables are required at build time
- Provides clear error messages if they're missing

### 2. Added Netlify Configuration
**File: [netlify.toml](netlify.toml)** (NEW)

Properly configures:
- Build command: `npm run build`
- Output directories for Vite and Netlify Functions
- SPA routing for client-side navigation
- Cache headers for assets and HTML
- Documentation of required environment variables

## What You Need to Do on Netlify

### Critical: Set Environment Variables in Netlify Dashboard

1. Go to your Netlify site dashboard
2. Navigate to: **Site settings → Build & deploy → Environment**
3. Add the following environment variables (values from your `.env`):

```
VITE_SUPABASE_URL = https://qsmhttdytievibgpdqde.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY = sb_publishable_kmr5xi7zTGb56Ho53ZKjAw_zxSUMEVl
SERVER_SUPABASE_URL = https://qsmhttdytievibgpdqde.supabase.co
SERVER_SUPABASE_PUBLISHABLE_KEY = sb_publishable_kmr5xi7zTGb56Ho53ZKjAw_zxSUMEVl
```

**IMPORTANT:** The `VITE_*` prefixed variables MUST be set because:
- Vite needs them at build time
- They're baked into the JavaScript bundle during build
- The browser uses these hard-coded values

### Optional: Trigger a Rebuild

After setting environment variables:
1. Go to **Deploys** tab
2. Find the latest deployment
3. Click **Trigger Deploy** → **Deploy Site**

This ensures the build happens with the correct environment variables.

## Files Changed

1. **[src/integrations/supabase/client.ts](src/integrations/supabase/client.ts)** - Fixed environment variable handling
2. **[netlify.toml](netlify.toml)** - NEW: Added Netlify deployment configuration

## Other Files (No Changes Needed)

These files are already correctly using environment variables:

- `src/integrations/supabase/auth-middleware.ts` - Uses `process.env.SERVER_*` (server-only) ✅
- `src/integrations/supabase/client.server.ts` - Uses `process.env.SERVER_*` (server-only) ✅
- `src/lib/public.functions.ts` - Uses `process.env.SERVER_*` (server function) ✅
- `src/lib/storage.ts` - Uses `import.meta.env.VITE_SUPABASE_URL` (browser) ✅

## Environment Variable Strategy Summary

| Context | Variables | Source | When Resolved |
|---------|-----------|--------|---------------|
| **Browser (client-side)** | `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` | `import.meta.env` | Build-time |
| **Server (SSR, functions)** | `SERVER_SUPABASE_URL`, `SERVER_SUPABASE_PUBLISHABLE_KEY`, `SERVER_SUPABASE_SERVICE_ROLE_KEY` | `process.env` | Runtime |

## How to Verify It Works

After deploying:

1. Open the deployed site in a browser
2. Open DevTools → Console
3. You should **NOT** see errors like: `Missing Supabase environment variable(s)`
4. Authentication should work (if you have login functionality)
5. Admin routes should load correctly

If you still see "Invalid API key":
- Check that VITE_* variables are set in Netlify dashboard
- Verify the values match your Supabase project
- Trigger a new deploy to rebuild with correct environment variables

## Local Development

No changes needed. Local development uses:
- `.env` file with VITE_* and SERVER_* variables
- Vite dev server automatically reads these

## Additional Notes

- The `.output/` directory contains pre-built artifacts from the last local build. You can safely delete it - Netlify will rebuild everything.
- The `netlify.toml` file ensures consistent deployment configuration across team members.
- All server-side operations properly use `SERVER_*` variables and won't be affected by this change.
