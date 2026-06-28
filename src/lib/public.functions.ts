import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function publicClient() {
  return createClient<Database>(
    "https://qsmhttdytievibgpdqde.supabase.co",
    "sb_publishable_kmr5xi7zTGb56Ho53ZKjAw_zxSUMEVl",
    {
      auth: {
        storage: undefined,
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}

export const getSiteSettings = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb.from("site_settings").select("*").eq("id", 1).maybeSingle();
  if (error) throw new Error(error.message);
  return data;
});

export const getPublishedWorkshops = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb
    .from("workshops")
    .select("*")
    .eq("status", "published")
    .order("starts_at", { ascending: true });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const getWorkshopById = createServerFn({ method: "GET" })
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: row, error } = await sb.from("workshops").select("*").eq("id", data.id).maybeSingle();
    if (error) throw new Error(error.message);
    return row;
  });

export const getGallery = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb
    .from("gallery_items")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const getAnnouncements = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb
    .from("announcements")
    .select("*")
    .eq("is_active", true)
    .order("published_at", { ascending: false })
    .limit(10);
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const getBlockedDates = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb.from("availability_blocks").select("blocked_date");
  if (error) throw new Error(error.message);
  return (data ?? []).map((r) => r.blocked_date);
});
