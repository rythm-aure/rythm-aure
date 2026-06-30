import { i as getPublishedWorkshops } from "./public.functions-Bl3KHXh9.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workshops.index-D0PN6fPQ.js
var qo = queryOptions({
	queryKey: ["workshops_pub"],
	queryFn: () => getPublishedWorkshops()
});
//#endregion
export { qo as t };
