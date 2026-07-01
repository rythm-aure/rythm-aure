import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BmV9FEGH.mjs";
import { a as objectType, i as numberType, o as stringType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/user.functions-BBijNe38.js
var RegisterSchema = objectType({
	workshop_id: stringType().uuid(),
	name: stringType().trim().min(1).max(100),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().min(5).max(20).optional(),
	upi_txn_ref: stringType().trim().min(3).max(100)
});
var registerForWorkshop_createServerFn_handler = createServerRpc({
	id: "4d9937bf30f8e22b61d617f85c231df039135590b93982a02080c6266aed8ea6",
	name: "registerForWorkshop",
	filename: "src/lib/user.functions.ts"
}, (opts) => registerForWorkshop.__executeServer(opts));
var registerForWorkshop = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => RegisterSchema.parse(d)).handler(registerForWorkshop_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	const { data: row, error } = await supabase.from("workshop_registrations").upsert({
		workshop_id: data.workshop_id,
		user_id: userId,
		name: data.name,
		email: data.email,
		phone: data.phone,
		upi_txn_ref: data.upi_txn_ref,
		payment_status: "pending"
	}, { onConflict: "workshop_id,user_id" }).select().single();
	if (error) throw new Error(error.message);
	return row;
});
var getMyRegistrations_createServerFn_handler = createServerRpc({
	id: "50d1c0d9692e2f9319a22aaa8551473da2beb1c4934e97516dd42deabd0a417a",
	name: "getMyRegistrations",
	filename: "src/lib/user.functions.ts"
}, (opts) => getMyRegistrations.__executeServer(opts));
var getMyRegistrations = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getMyRegistrations_createServerFn_handler, async ({ context }) => {
	const { data, error } = await context.supabase.from("workshop_registrations").select("*, workshop:workshops(*)").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var BookingSchema = objectType({
	name: stringType().trim().min(1).max(100),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().min(5).max(20),
	event_type: stringType().trim().max(80).optional(),
	event_date: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
	event_location: stringType().trim().max(200).optional(),
	guests: numberType().int().positive().max(1e4).optional(),
	message: stringType().trim().max(2e3).optional()
});
var submitBooking_createServerFn_handler = createServerRpc({
	id: "0f64f21b98927953f949a43a2a5aac11e5fbc123c032bcefbfd01012fe8b1a4a",
	name: "submitBooking",
	filename: "src/lib/user.functions.ts"
}, (opts) => submitBooking.__executeServer(opts));
var submitBooking = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => BookingSchema.parse(d)).handler(submitBooking_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	const { data: row, error } = await supabase.from("choreography_bookings").insert({
		...data,
		user_id: userId,
		status: "pending"
	}).select().single();
	if (error) throw new Error(error.message);
	return row;
});
var getMyBookings_createServerFn_handler = createServerRpc({
	id: "9130e2954a9aaa4008ec0ff0696f482b7331f26205dd7935a817fb44318f8bc8",
	name: "getMyBookings",
	filename: "src/lib/user.functions.ts"
}, (opts) => getMyBookings.__executeServer(opts));
var getMyBookings = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getMyBookings_createServerFn_handler, async ({ context }) => {
	const { data, error } = await context.supabase.from("choreography_bookings").select("*").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var getMyRole_createServerFn_handler = createServerRpc({
	id: "8a2a02e78b2b9583b4ddbe9ed22aa1eca7e3f31fd7502d41422c55fe6c704010",
	name: "getMyRole",
	filename: "src/lib/user.functions.ts"
}, (opts) => getMyRole.__executeServer(opts));
var getMyRole = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getMyRole_createServerFn_handler, async ({ context }) => {
	console.log("Current User ID:", context.userId);
	const { data, error } = await context.supabase.from("user_roles").select("role").eq("user_id", context.userId);
	console.log("DB Result:", data);
	console.log("DB Error:", error);
	if (error) throw new Error(error.message);
	const roles = (data ?? []).map((r) => r.role);
	console.log("Roles:", roles);
	return {
		roles,
		isAdmin: roles.includes("admin")
	};
});
var getMyProfile_createServerFn_handler = createServerRpc({
	id: "17da8c0ac7464fe32c1d4076af2c8b5bd4bbed0370cb9fa66f11822acc74354f",
	name: "getMyProfile",
	filename: "src/lib/user.functions.ts"
}, (opts) => getMyProfile.__executeServer(opts));
var getMyProfile = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getMyProfile_createServerFn_handler, async ({ context }) => {
	const { data } = await context.supabase.from("profiles").select("*").eq("id", context.userId).maybeSingle();
	return data;
});
//#endregion
export { getMyBookings_createServerFn_handler, getMyProfile_createServerFn_handler, getMyRegistrations_createServerFn_handler, getMyRole_createServerFn_handler, registerForWorkshop_createServerFn_handler, submitBooking_createServerFn_handler };
