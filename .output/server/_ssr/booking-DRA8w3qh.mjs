import { n as getBlockedDates } from "./public.functions-Bl3KHXh9.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-DRA8w3qh.js
var qo = queryOptions({
	queryKey: ["blocked_dates"],
	queryFn: () => getBlockedDates()
});
//#endregion
export { qo as t };
