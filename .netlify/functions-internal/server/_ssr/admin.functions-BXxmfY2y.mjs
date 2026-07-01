import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DIANvJev.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BmV9FEGH.mjs";
import { a as objectType, i as numberType, n as enumType, o as stringType, r as literalType, t as booleanType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-BXxmfY2y.js
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
var adminListWorkshops = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("bb2b331df6588c587d12262ab83041d034de57859317204a1fef533c7b499cac"));
var adminSaveWorkshop = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => WorkshopInput.parse(d)).handler(createSsrRpc("b0edebe2ddc0092ee137d71c6e476f948392a6324e4b61563fd0a7cd7333855c"));
var adminDeleteWorkshop = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("5b1ed486ad05cf0092a22308113c004294116b115029817ada9ace4aca28564f"));
var adminListRegistrations = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("f312ae33d73d903457f8cbb2b8c6d3e63a0bbf00f04a9266fd9b8e2bd6298832"));
var adminUpdateRegistration = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("3822cf6a98737c9f4cd707b253262bf00f466e929f9b625108858b47238baf9e"));
var adminListBookings = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("c9a9a52b5fc63be3d469bba72091278aa72096a847ce75d9e200e278f3d5cea4"));
var adminUpdateBooking = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("af5ce6f1fce4cc635e39d9007bda2b619998387de6be9383de7670a89d34a6a0"));
var adminListBlocks = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("9d862929aa14c18a13f3f3fc94e797ec074cf94f63180d6a70601b0eca795b57"));
var adminToggleBlock = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("b493a284cf5d1288ef3332d0dbf4596bae8d05fc34b84b49d713566d266b9b61"));
var adminListGallery = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("4bc10790bcfc1e1d422aff5c1b2ceeb50cf43e95d79c1583fa0e7bbd876f172b"));
var adminSaveGallery = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("4d1f394e1e26b5577c36a2b148457e2a59f473aa39ab07f82fd8d91d21e88134"));
var adminDeleteGallery = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("4ebe92c722f8ecad4ef2674862b2dd3e3501c73811d6eb57a18110844ed2ca21"));
var adminListAnnouncements = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("03054503f0d151eb1f4f0e5990390270331a69638f407ba3f1688e191abad49c"));
var adminSaveAnnouncement = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("832ab5fadaabee82423d4c7b46c1715452f99036107e6cd7ad1ed2063ecc8fd2"));
var adminDeleteAnnouncement = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("6b55fedba258e3655eb452b0b007f92900dd5302f65938be67119213faa9459e"));
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
var adminUpdateSettings = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => SettingsInput.parse(d)).handler(createSsrRpc("e078a971dab9be475414606cb4b44659a840b7f88ab7bd2113fd0b66f57db84a"));
var adminListUsers = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("35cf6cc28f61c798a570ec39672552de8ed250f60706565e25b34a66f0c5b240"));
var adminSetRole = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("154da85bc7e5915df5164155bbb68a97441082079312d44aab513dabc82f59c3"));
var adminOverview = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("65dbdd42678d4cf3348f8143806993df600c6d6e2d11eded1594324413609a95"));
//#endregion
export { adminUpdateBooking as _, adminListBlocks as a, adminListRegistrations as c, adminOverview as d, adminSaveAnnouncement as f, adminToggleBlock as g, adminSetRole as h, adminListAnnouncements as i, adminListUsers as l, adminSaveWorkshop as m, adminDeleteGallery as n, adminListBookings as o, adminSaveGallery as p, adminDeleteWorkshop as r, adminListGallery as s, adminDeleteAnnouncement as t, adminListWorkshops as u, adminUpdateRegistration as v, adminUpdateSettings as y };
