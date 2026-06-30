import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const RegisterSchema = z.object({
  workshop_id: z.string().uuid(),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(20).optional(),
  upi_txn_ref: z.string().trim().min(3).max(100),
});

export const registerForWorkshop = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => RegisterSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: row, error } = await supabase
      .from("workshop_registrations")
      .upsert({
        workshop_id: data.workshop_id,
        user_id: userId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        upi_txn_ref: data.upi_txn_ref,
        payment_status: "pending",
      }, { onConflict: "workshop_id,user_id" })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const getMyRegistrations = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("workshop_registrations")
      .select("*, workshop:workshops(*)")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

const BookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(20),
  event_type: z.string().trim().max(80).optional(),
  event_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  event_location: z.string().trim().max(200).optional(),
  guests: z.number().int().positive().max(10000).optional(),
  message: z.string().trim().max(2000).optional(),
});

export const submitBooking = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => BookingSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: row, error } = await supabase
      .from("choreography_bookings")
      .insert({ ...data, user_id: userId, status: "pending" })
      .select().single();
    if (error) throw new Error(error.message);
    return row;
  });

export const getMyBookings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("choreography_bookings")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const getMyRole = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    console.log("Current User ID:", context.userId);

    const { data, error } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId);

    console.log("DB Result:", data);
    console.log("DB Error:", error);

    if (error) throw new Error(error.message);

    const roles = (data ?? []).map((r) => r.role);

    console.log("Roles:", roles);

    return {
      roles,
      isAdmin: roles.includes("admin"),
    };
  });

export const getMyProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.from("profiles").select("*").eq("id", context.userId).maybeSingle();
    return data;
  });
