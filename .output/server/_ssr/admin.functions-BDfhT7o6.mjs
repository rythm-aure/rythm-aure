import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BmV9FEGH.mjs";
import { a as objectType, i as numberType, n as enumType, o as stringType, r as literalType, t as booleanType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-BDfhT7o6.js
async function assertAdmin(supabase, userId) {
	const { data } = await supabase.rpc("has_role", {
		_user_id: userId,
		_role: "admin"
	});
	if (!data) throw new Error("Forbidden");
}
var WorkshopInput = objectType({
	id: stringType().uuid().optional(),
	title: stringType().min(1).max(150),
	description: stringType().max(5e3).optional().nullable(),
	cover_url: stringType().url().max(500).optional().nullable(),
	starts_at: stringType(),
	duration_minutes: numberType().int().min(15).max(720).optional(),
	location: stringType().max(200).optional().nullable(),
	level: stringType().max(60).optional().nullable(),
	price: numberType().min(0),
	capacity: numberType().int().min(1).max(1e4),
	status: enumType([
		"draft",
		"published",
		"closed"
	])
});
var adminListWorkshops_createServerFn_handler = createServerRpc({
	id: "bb2b331df6588c587d12262ab83041d034de57859317204a1fef533c7b499cac",
	name: "adminListWorkshops",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListWorkshops.__executeServer(opts));
var adminListWorkshops = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListWorkshops_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { data, error } = await context.supabase.from("workshops").select("*").order("starts_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSaveWorkshop_createServerFn_handler = createServerRpc({
	id: "b0edebe2ddc0092ee137d71c6e476f948392a6324e4b61563fd0a7cd7333855c",
	name: "adminSaveWorkshop",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminSaveWorkshop.__executeServer(opts));
var adminSaveWorkshop = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => WorkshopInput.parse(d)).handler(adminSaveWorkshop_createServerFn_handler, async ({ data, context }) => {
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
var adminDeleteWorkshop_createServerFn_handler = createServerRpc({
	id: "5b1ed486ad05cf0092a22308113c004294116b115029817ada9ace4aca28564f",
	name: "adminDeleteWorkshop",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminDeleteWorkshop.__executeServer(opts));
var adminDeleteWorkshop = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminDeleteWorkshop_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { error } = await context.supabase.from("workshops").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListRegistrations_createServerFn_handler = createServerRpc({
	id: "f312ae33d73d903457f8cbb2b8c6d3e63a0bbf00f04a9266fd9b8e2bd6298832",
	name: "adminListRegistrations",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListRegistrations.__executeServer(opts));
var adminListRegistrations = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListRegistrations_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { data, error } = await context.supabase.from("workshop_registrations").select("*, workshop:workshops(title, starts_at, price)").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminUpdateRegistration_createServerFn_handler = createServerRpc({
	id: "3822cf6a98737c9f4cd707b253262bf00f466e929f9b625108858b47238baf9e",
	name: "adminUpdateRegistration",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpdateRegistration.__executeServer(opts));
var adminUpdateRegistration = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminUpdateRegistration_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { error } = await context.supabase.from("workshop_registrations").update({
		payment_status: data.payment_status,
		admin_notes: data.admin_notes ?? null
	}).eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListBookings_createServerFn_handler = createServerRpc({
	id: "c9a9a52b5fc63be3d469bba72091278aa72096a847ce75d9e200e278f3d5cea4",
	name: "adminListBookings",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListBookings.__executeServer(opts));
var adminListBookings = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListBookings_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { data, error } = await context.supabase.from("choreography_bookings").select("*").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminUpdateBooking_createServerFn_handler = createServerRpc({
	id: "af5ce6f1fce4cc635e39d9007bda2b619998387de6be9383de7670a89d34a6a0",
	name: "adminUpdateBooking",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpdateBooking.__executeServer(opts));
var adminUpdateBooking = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminUpdateBooking_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { error } = await context.supabase.from("choreography_bookings").update({
		status: data.status,
		admin_notes: data.admin_notes ?? null
	}).eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListBlocks_createServerFn_handler = createServerRpc({
	id: "9d862929aa14c18a13f3f3fc94e797ec074cf94f63180d6a70601b0eca795b57",
	name: "adminListBlocks",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListBlocks.__executeServer(opts));
var adminListBlocks = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListBlocks_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { data, error } = await context.supabase.from("availability_blocks").select("*").order("blocked_date");
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminToggleBlock_createServerFn_handler = createServerRpc({
	id: "b493a284cf5d1288ef3332d0dbf4596bae8d05fc34b84b49d713566d266b9b61",
	name: "adminToggleBlock",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminToggleBlock.__executeServer(opts));
var adminToggleBlock = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminToggleBlock_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { data: existing } = await context.supabase.from("availability_blocks").select("id").eq("blocked_date", data.date).maybeSingle();
	if (existing) {
		const { error } = await context.supabase.from("availability_blocks").delete().eq("id", existing.id);
		if (error) throw new Error(error.message);
		return { blocked: false };
	}
	const { error } = await context.supabase.from("availability_blocks").insert({
		blocked_date: data.date,
		reason: data.reason
	});
	if (error) throw new Error(error.message);
	return { blocked: true };
});
var adminListGallery_createServerFn_handler = createServerRpc({
	id: "4bc10790bcfc1e1d422aff5c1b2ceeb50cf43e95d79c1583fa0e7bbd876f172b",
	name: "adminListGallery",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListGallery.__executeServer(opts));
var adminListGallery = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListGallery_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { data, error } = await context.supabase.from("gallery_items").select("*").order("sort_order");
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSaveGallery_createServerFn_handler = createServerRpc({
	id: "4d1f394e1e26b5577c36a2b148457e2a59f473aa39ab07f82fd8d91d21e88134",
	name: "adminSaveGallery",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminSaveGallery.__executeServer(opts));
var adminSaveGallery = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminSaveGallery_createServerFn_handler, async ({ data, context }) => {
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
var adminDeleteGallery_createServerFn_handler = createServerRpc({
	id: "4ebe92c722f8ecad4ef2674862b2dd3e3501c73811d6eb57a18110844ed2ca21",
	name: "adminDeleteGallery",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminDeleteGallery.__executeServer(opts));
var adminDeleteGallery = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminDeleteGallery_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { error } = await context.supabase.from("gallery_items").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListAnnouncements_createServerFn_handler = createServerRpc({
	id: "03054503f0d151eb1f4f0e5990390270331a69638f407ba3f1688e191abad49c",
	name: "adminListAnnouncements",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListAnnouncements.__executeServer(opts));
var adminListAnnouncements = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListAnnouncements_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { data, error } = await context.supabase.from("announcements").select("*").order("published_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSaveAnnouncement_createServerFn_handler = createServerRpc({
	id: "832ab5fadaabee82423d4c7b46c1715452f99036107e6cd7ad1ed2063ecc8fd2",
	name: "adminSaveAnnouncement",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminSaveAnnouncement.__executeServer(opts));
var adminSaveAnnouncement = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminSaveAnnouncement_createServerFn_handler, async ({ data, context }) => {
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
var adminDeleteAnnouncement_createServerFn_handler = createServerRpc({
	id: "6b55fedba258e3655eb452b0b007f92900dd5302f65938be67119213faa9459e",
	name: "adminDeleteAnnouncement",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminDeleteAnnouncement.__executeServer(opts));
var adminDeleteAnnouncement = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminDeleteAnnouncement_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { error } = await context.supabase.from("announcements").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var SettingsInput = objectType({
	studio_name: stringType().min(1).max(120),
	tagline: stringType().max(200).optional().nullable(),
	hero_title: stringType().max(200).optional().nullable(),
	hero_subtitle: stringType().max(500).optional().nullable(),
	hero_image_url: stringType().url().max(500).optional().nullable(),
	about_title: stringType().max(150).optional().nullable(),
	about_body: stringType().max(5e3).optional().nullable(),
	contact_email: stringType().email().max(255).optional().nullable().or(literalType("")),
	contact_phone: stringType().max(40).optional().nullable(),
	contact_address: stringType().max(500).optional().nullable(),
	instagram_url: stringType().max(500).optional().nullable(),
	youtube_url: stringType().max(500).optional().nullable(),
	facebook_url: stringType().max(500).optional().nullable(),
	upi_id: stringType().max(120).optional().nullable(),
	upi_qr_url: stringType().max(500).optional().nullable(),
	show_hero: booleanType(),
	show_workshops: booleanType(),
	show_booking: booleanType(),
	show_gallery: booleanType(),
	show_about: booleanType(),
	show_announcements: booleanType(),
	show_contact: booleanType()
});
var adminUpdateSettings_createServerFn_handler = createServerRpc({
	id: "e078a971dab9be475414606cb4b44659a840b7f88ab7bd2113fd0b66f57db84a",
	name: "adminUpdateSettings",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpdateSettings.__executeServer(opts));
var adminUpdateSettings = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => SettingsInput.parse(d)).handler(adminUpdateSettings_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { error } = await context.supabase.from("site_settings").update(data).eq("id", 1);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListUsers_createServerFn_handler = createServerRpc({
	id: "35cf6cc28f61c798a570ec39672552de8ed250f60706565e25b34a66f0c5b240",
	name: "adminListUsers",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListUsers.__executeServer(opts));
var adminListUsers = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListUsers_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { data: profiles, error } = await context.supabase.from("profiles").select("*").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	const { data: roles } = await context.supabase.from("user_roles").select("user_id, role");
	return (profiles ?? []).map((p) => ({
		...p,
		roles: (roles ?? []).filter((r) => r.user_id === p.id).map((r) => r.role)
	}));
});
var adminSetRole_createServerFn_handler = createServerRpc({
	id: "154da85bc7e5915df5164155bbb68a97441082079312d44aab513dabc82f59c3",
	name: "adminSetRole",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminSetRole.__executeServer(opts));
var adminSetRole = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(adminSetRole_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	if (data.grant) {
		const { error } = await context.supabase.from("user_roles").insert({
			user_id: data.user_id,
			role: data.role
		});
		if (error && !`${error.message}`.includes("duplicate")) throw new Error(error.message);
	} else {
		const { error } = await context.supabase.from("user_roles").delete().eq("user_id", data.user_id).eq("role", data.role);
		if (error) throw new Error(error.message);
	}
	return { ok: true };
});
var adminOverview_createServerFn_handler = createServerRpc({
	id: "65dbdd42678d4cf3348f8143806993df600c6d6e2d11eded1594324413609a95",
	name: "adminOverview",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminOverview.__executeServer(opts));
var adminOverview = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminOverview_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context.supabase, context.userId);
	const [w, r, b, pending] = await Promise.all([
		context.supabase.from("workshops").select("id", {
			count: "exact",
			head: true
		}),
		context.supabase.from("workshop_registrations").select("id", {
			count: "exact",
			head: true
		}),
		context.supabase.from("choreography_bookings").select("id", {
			count: "exact",
			head: true
		}),
		context.supabase.from("workshop_registrations").select("id", {
			count: "exact",
			head: true
		}).eq("payment_status", "pending")
	]);
	return {
		workshops: w.count ?? 0,
		registrations: r.count ?? 0,
		bookings: b.count ?? 0,
		pending_payments: pending.count ?? 0
	};
});
//#endregion
export { adminDeleteAnnouncement_createServerFn_handler, adminDeleteGallery_createServerFn_handler, adminDeleteWorkshop_createServerFn_handler, adminListAnnouncements_createServerFn_handler, adminListBlocks_createServerFn_handler, adminListBookings_createServerFn_handler, adminListGallery_createServerFn_handler, adminListRegistrations_createServerFn_handler, adminListUsers_createServerFn_handler, adminListWorkshops_createServerFn_handler, adminOverview_createServerFn_handler, adminSaveAnnouncement_createServerFn_handler, adminSaveGallery_createServerFn_handler, adminSaveWorkshop_createServerFn_handler, adminSetRole_createServerFn_handler, adminToggleBlock_createServerFn_handler, adminUpdateBooking_createServerFn_handler, adminUpdateRegistration_createServerFn_handler, adminUpdateSettings_createServerFn_handler };
