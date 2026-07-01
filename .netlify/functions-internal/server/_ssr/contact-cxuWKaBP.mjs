import { a as getSiteSettings } from "./public.functions-Bl3KHXh9.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-cxuWKaBP.js
var qo = queryOptions({
	queryKey: ["site_settings"],
	queryFn: () => getSiteSettings()
});
//#endregion
export { qo as t };
