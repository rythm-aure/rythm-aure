import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DIANvJev.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public.functions-Bl3KHXh9.js
var getSiteSettings = createServerFn({ method: "GET" }).handler(createSsrRpc("0c185dbf420c4692df2b6b53186abf36ad89ce5b844995a994479b3fab702875"));
var getPublishedWorkshops = createServerFn({ method: "GET" }).handler(createSsrRpc("7c5242aae5d33edb860d1bf7783a41bb0f9154c1c48f722942ece951f3be2172"));
var getWorkshopById = createServerFn({ method: "GET" }).inputValidator((d) => d).handler(createSsrRpc("540968422ffe31714fca0289215a6c4cf535eda3e585649c5dd57bd38e15bd8c"));
var getGallery = createServerFn({ method: "GET" }).handler(createSsrRpc("bd09992c07bcc3898a896aa2e292023f57c3839dc22f10b30da45e80608e08c3"));
var getAnnouncements = createServerFn({ method: "GET" }).handler(createSsrRpc("fdd1cca3b64d73935eb97749b0435714580a598e12d174ef26445767bdfcfb1a"));
var getBlockedDates = createServerFn({ method: "GET" }).handler(createSsrRpc("17fe20f6a325f5a909373b108b565c2a946edf7f03c3ddaf393b8047a13c95c2"));
//#endregion
export { getSiteSettings as a, getPublishedWorkshops as i, getBlockedDates as n, getWorkshopById as o, getGallery as r, getAnnouncements as t };
