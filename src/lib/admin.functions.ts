import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

async function assertAdmin(supabase: any, userId: string) {
  const { data } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (!data) throw new Error("Forbidden");
}

// --- Workshops ---
const WorkshopInput = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1).max(150),
  description: z.string().max(5000).optional().nullable(),
  cover_url: z.string().url().max(500).optional().nullable(),
  starts_at: z.string(),
  duration_minutes: z.number().int().min(15).max(720).optional(),
  location: z.string().max(200).optional().nullable(),
  level: z.string().max(60).optional().nullable(),
  price: z.number().min(0),
  capacity: z.number().int().min(1).max(10000),
  status: z.enum(["draft", "published", "closed"]),
});

export const adminListWorkshops = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase.from("workshops").select("*").order("starts_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const adminSaveWorkshop = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => WorkshopInput.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    if (data.id) {
      const { id, ...rest } = data;
      const { error } = await context.supabase.from("workshops").update(rest).eq("id", id);
      if (error) throw new Error(error.message);
      return { id };
    }
    const { data: row, error } = await context.supabase.from("workshops").insert(data).select().single();
    if (error) throw new Error(error.message);
    return row;
  });

export const adminDeleteWorkshop = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("workshops").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// --- Registrations ---
export const adminListRegistrations = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase
      .from("workshop_registrations")
      .select("*, workshop:workshops(title, starts_at, price)")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const adminUpdateRegistration = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string; payment_status: "pending" | "verified" | "rejected"; admin_notes?: string }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase
      .from("workshop_registrations")
      .update({ payment_status: data.payment_status, admin_notes: data.admin_notes ?? null })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// --- Bookings ---
export const adminListBookings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase
      .from("choreography_bookings").select("*").order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const adminUpdateBooking = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string; status: "pending" | "accepted" | "declined" | "completed"; admin_notes?: string }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase
      .from("choreography_bookings")
      .update({ status: data.status, admin_notes: data.admin_notes ?? null })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// --- Availability ---
export const adminListBlocks = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase.from("availability_blocks").select("*").order("blocked_date");
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const adminToggleBlock = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { date: string; reason?: string }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data: existing } = await context.supabase.from("availability_blocks").select("id").eq("blocked_date", data.date).maybeSingle();
    if (existing) {
      const { error } = await context.supabase.from("availability_blocks").delete().eq("id", existing.id);
      if (error) throw new Error(error.message);
      return { blocked: false };
    }
    const { error } = await context.supabase.from("availability_blocks").insert({ blocked_date: data.date, reason: data.reason });
    if (error) throw new Error(error.message);
    return { blocked: true };
  });

// --- Gallery ---
export const adminListGallery = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase.from("gallery_items").select("*").order("sort_order");
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const adminSaveGallery = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id?: string; image_url: string; caption?: string; category?: string; sort_order?: number; is_active?: boolean }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    if (data.id) {
      const { id, ...rest } = data;
      const { error } = await context.supabase.from("gallery_items").update(rest).eq("id", id);
      if (error) throw new Error(error.message);
      return { id };
    }
    const { data: row, error } = await context.supabase.from("gallery_items").insert(data).select().single();
    if (error) throw new Error(error.message);
    return row;
  });

export const adminDeleteGallery = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("gallery_items").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// --- Announcements ---
export const adminListAnnouncements = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase.from("announcements").select("*").order("published_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const adminSaveAnnouncement = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id?: string; title: string; body?: string; is_active?: boolean }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    if (data.id) {
      const { id, ...rest } = data;
      const { error } = await context.supabase.from("announcements").update(rest).eq("id", id);
      if (error) throw new Error(error.message);
      return { id };
    }
    const { data: row, error } = await context.supabase.from("announcements").insert(data).select().single();
    if (error) throw new Error(error.message);
    return row;
  });

export const adminDeleteAnnouncement = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("announcements").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// --- Site settings ---
const SettingsInput = z.object({
  studio_name: z.string().min(1).max(120),
  tagline: z.string().max(200).optional().nullable(),
  hero_title: z.string().max(200).optional().nullable(),
  hero_subtitle: z.string().max(500).optional().nullable(),
  hero_image_url: z.string().url().max(500).optional().nullable(),
  about_title: z.string().max(150).optional().nullable(),
  about_body: z.string().max(5000).optional().nullable(),
  contact_email: z.string().email().max(255).optional().nullable().or(z.literal("")),
  contact_phone: z.string().max(40).optional().nullable(),
  contact_address: z.string().max(500).optional().nullable(),
  instagram_url: z.string().max(500).optional().nullable(),
  youtube_url: z.string().max(500).optional().nullable(),
  facebook_url: z.string().max(500).optional().nullable(),
  upi_id: z.string().max(120).optional().nullable(),
  upi_qr_url: z.string().max(500).optional().nullable(),
  show_hero: z.boolean(),
  show_workshops: z.boolean(),
  show_booking: z.boolean(),
  show_gallery: z.boolean(),
  show_about: z.boolean(),
  show_announcements: z.boolean(),
  show_contact: z.boolean(),
});

export const adminUpdateSettings = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => SettingsInput.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("site_settings").update(data).eq("id", 1);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// --- Users / roles ---
export const adminListUsers = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data: profiles, error } = await context.supabase
      .from("profiles").select("*").order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    const { data: roles } = await context.supabase.from("user_roles").select("user_id, role");
    return (profiles ?? []).map((p) => ({
      ...p,
      roles: (roles ?? []).filter((r) => r.user_id === p.id).map((r) => r.role),
    }));
  });

export const adminSetRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { user_id: string; role: "admin" | "user"; grant: boolean }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    if (data.grant) {
      const { error } = await context.supabase.from("user_roles").insert({ user_id: data.user_id, role: data.role });
      if (error && !`${error.message}`.includes("duplicate")) throw new Error(error.message);
    } else {
      const { error } = await context.supabase.from("user_roles").delete().eq("user_id", data.user_id).eq("role", data.role);
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });

export const adminOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const [w, r, b, pending] = await Promise.all([
      context.supabase.from("workshops").select("id", { count: "exact", head: true }),
      context.supabase.from("workshop_registrations").select("id", { count: "exact", head: true }),
      context.supabase.from("choreography_bookings").select("id", { count: "exact", head: true }),
      context.supabase.from("workshop_registrations").select("id", { count: "exact", head: true }).eq("payment_status", "pending"),
    ]);
    return {
      workshops: w.count ?? 0,
      registrations: r.count ?? 0,
      bookings: b.count ?? 0,
      pending_payments: pending.count ?? 0,
    };
  });
