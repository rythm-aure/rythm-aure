import { a as getSiteSettings, i as getPublishedWorkshops, r as getGallery, t as getAnnouncements } from "./public.functions-Bl3KHXh9.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C9YGuzY_.js
var settingsQO = queryOptions({
	queryKey: ["site_settings"],
	queryFn: () => getSiteSettings()
});
var workshopsQO = queryOptions({
	queryKey: ["workshops_pub"],
	queryFn: () => getPublishedWorkshops()
});
var galleryQO = queryOptions({
	queryKey: ["gallery_pub"],
	queryFn: () => getGallery()
});
var annQO = queryOptions({
	queryKey: ["ann_pub"],
	queryFn: () => getAnnouncements()
});
//#endregion
export { workshopsQO as i, galleryQO as n, settingsQO as r, annQO as t };
