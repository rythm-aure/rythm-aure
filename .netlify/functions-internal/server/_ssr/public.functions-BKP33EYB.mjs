import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public.functions-BKP33EYB.js
function publicClient() {
	const url = process.env.SERVER_SUPABASE_URL;
	const key = process.env.SERVER_SUPABASE_PUBLISHABLE_KEY;
	if (!url || !key) throw new Error("Missing Supabase environment variables.");
	return createClient(url, key, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} });
}
var getSiteSettings_createServerFn_handler = createServerRpc({
	id: "0c185dbf420c4692df2b6b53186abf36ad89ce5b844995a994479b3fab702875",
	name: "getSiteSettings",
	filename: "src/lib/public.functions.ts"
}, (opts) => getSiteSettings.__executeServer(opts));
var getSiteSettings = createServerFn({ method: "GET" }).handler(getSiteSettings_createServerFn_handler, async () => {
	const { data, error } = await publicClient().from("site_settings").select("*").eq("id", 1).maybeSingle();
	if (error) throw new Error(error.message);
	return data;
});
var getPublishedWorkshops_createServerFn_handler = createServerRpc({
	id: "7c5242aae5d33edb860d1bf7783a41bb0f9154c1c48f722942ece951f3be2172",
	name: "getPublishedWorkshops",
	filename: "src/lib/public.functions.ts"
}, (opts) => getPublishedWorkshops.__executeServer(opts));
var getPublishedWorkshops = createServerFn({ method: "GET" }).handler(getPublishedWorkshops_createServerFn_handler, async () => {
	const { data, error } = await publicClient().from("workshops").select("*").eq("status", "published").order("starts_at", { ascending: true });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var getWorkshopById_createServerFn_handler = createServerRpc({
	id: "540968422ffe31714fca0289215a6c4cf535eda3e585649c5dd57bd38e15bd8c",
	name: "getWorkshopById",
	filename: "src/lib/public.functions.ts"
}, (opts) => getWorkshopById.__executeServer(opts));
var getWorkshopById = createServerFn({ method: "GET" }).inputValidator((d) => d).handler(getWorkshopById_createServerFn_handler, async ({ data }) => {
	const { data: row, error } = await publicClient().from("workshops").select("*").eq("id", data.id).maybeSingle();
	if (error) throw new Error(error.message);
	return row;
});
var getGallery_createServerFn_handler = createServerRpc({
	id: "bd09992c07bcc3898a896aa2e292023f57c3839dc22f10b30da45e80608e08c3",
	name: "getGallery",
	filename: "src/lib/public.functions.ts"
}, (opts) => getGallery.__executeServer(opts));
var getGallery = createServerFn({ method: "GET" }).handler(getGallery_createServerFn_handler, async () => {
	const { data, error } = await publicClient().from("gallery_items").select("*").eq("is_active", true).order("sort_order", { ascending: true });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var getAnnouncements_createServerFn_handler = createServerRpc({
	id: "fdd1cca3b64d73935eb97749b0435714580a598e12d174ef26445767bdfcfb1a",
	name: "getAnnouncements",
	filename: "src/lib/public.functions.ts"
}, (opts) => getAnnouncements.__executeServer(opts));
var getAnnouncements = createServerFn({ method: "GET" }).handler(getAnnouncements_createServerFn_handler, async () => {
	const { data, error } = await publicClient().from("announcements").select("*").eq("is_active", true).order("published_at", { ascending: false }).limit(10);
	if (error) throw new Error(error.message);
	return data ?? [];
});
var getBlockedDates_createServerFn_handler = createServerRpc({
	id: "17fe20f6a325f5a909373b108b565c2a946edf7f03c3ddaf393b8047a13c95c2",
	name: "getBlockedDates",
	filename: "src/lib/public.functions.ts"
}, (opts) => getBlockedDates.__executeServer(opts));
var getBlockedDates = createServerFn({ method: "GET" }).handler(getBlockedDates_createServerFn_handler, async () => {
	const { data, error } = await publicClient().from("availability_blocks").select("blocked_date");
	if (error) throw new Error(error.message);
	return (data ?? []).map((r) => r.blocked_date);
});
//#endregion
export { getAnnouncements_createServerFn_handler, getBlockedDates_createServerFn_handler, getGallery_createServerFn_handler, getPublishedWorkshops_createServerFn_handler, getSiteSettings_createServerFn_handler, getWorkshopById_createServerFn_handler };
