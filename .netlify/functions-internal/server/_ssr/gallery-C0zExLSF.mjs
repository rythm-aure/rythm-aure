import { r as getGallery } from "./public.functions-Bl3KHXh9.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-C0zExLSF.js
var qo = queryOptions({
	queryKey: ["gallery_pub"],
	queryFn: () => getGallery()
});
//#endregion
export { qo as t };
