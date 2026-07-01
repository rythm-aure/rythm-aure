globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/QueryClientProvider-BWMony6d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c7ac-GNvlMOd/Mz3IBC3Ye4Up72PXUw8\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 51116,
		"path": "../public/assets/QueryClientProvider-BWMony6d.js"
	},
	"/assets/about-C_aOvSMb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-fpTdOl9qdllKGybnaWAvtkekLHk\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 149,
		"path": "../public/assets/about-C_aOvSMb.js"
	},
	"/assets/about-Cpv2gBMS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-bYBUw/eoh8CR6QQ4rwaf+4lIjhs\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 153,
		"path": "../public/assets/about-Cpv2gBMS.js"
	},
	"/assets/about-D8kXaEOS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"264-vrXmWlUiDbsCCrc+zKWAR/xvqOo\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 612,
		"path": "../public/assets/about-D8kXaEOS.js"
	},
	"/assets/admin.announcements-CAldTvzr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a12-0/lB2EdEZXhRHH03vqi31NNhzvQ\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 2578,
		"path": "../public/assets/admin.announcements-CAldTvzr.js"
	},
	"/assets/admin.availability-C0nsFVOz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6fe-6sKldHSREaEsk5NfII+Q/d0DHSA\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 1790,
		"path": "../public/assets/admin.availability-C0nsFVOz.js"
	},
	"/assets/admin.bookings-BbvzJkGq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f7-UO8RfTSw9JAs7POjg3LYmtk875M\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 2295,
		"path": "../public/assets/admin.bookings-BbvzJkGq.js"
	},
	"/assets/admin.functions-MMZOdGf-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98e-DZlTfJvWp364iVRTW1EukMqARQU\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 2446,
		"path": "../public/assets/admin.functions-MMZOdGf-.js"
	},
	"/assets/admin.gallery-D-yMqe1a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87b-NLNKe7TseghdlkPUGHhH3ncPB+U\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 2171,
		"path": "../public/assets/admin.gallery-D-yMqe1a.js"
	},
	"/assets/admin.index-DI_qkRq8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ee-Ti+ypFaNItH7MI2rddrbYiF1iic\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 2286,
		"path": "../public/assets/admin.index-DI_qkRq8.js"
	},
	"/assets/admin.settings-CJTEnURj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"177d-vp4YQd19YNjNOF/vwtkmc7srhhQ\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 6013,
		"path": "../public/assets/admin.settings-CJTEnURj.js"
	},
	"/assets/admin.registrations-UQiEIlQv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a9-6stzBOsemNvszT/Ho3tXfHvzC88\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 2217,
		"path": "../public/assets/admin.registrations-UQiEIlQv.js"
	},
	"/assets/admin.users-DyP1Q9h8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c5-48SmE5fXdtw8iLDj8RyV3/7YsNA\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 1733,
		"path": "../public/assets/admin.users-DyP1Q9h8.js"
	},
	"/assets/auth-CvcLlB4p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e8f-ECMzwcsFP74MYX+Xnm3+LAR92Wo\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 16015,
		"path": "../public/assets/auth-CvcLlB4p.js"
	},
	"/assets/admin.workshops-Ceh4I5vE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13add-G/RBKZLFSqOIHGEikieFNQ0YTik\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 80605,
		"path": "../public/assets/admin.workshops-Ceh4I5vE.js"
	},
	"/assets/booking-C_aOvSMb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-fpTdOl9qdllKGybnaWAvtkekLHk\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 149,
		"path": "../public/assets/booking-C_aOvSMb.js"
	},
	"/assets/booking-CnipZEXy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1066-guk1EySy1ILros2PbHNEZRTyai0\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 4198,
		"path": "../public/assets/booking-CnipZEXy.js"
	},
	"/assets/booking-Cpv2gBMS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-bYBUw/eoh8CR6QQ4rwaf+4lIjhs\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 153,
		"path": "../public/assets/booking-Cpv2gBMS.js"
	},
	"/assets/button-D6Tq1Wih.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7abd-D8fLXfiVVd4gQ82P+rDLxLiFAgs\"",
		"mtime": "2026-07-01T04:46:29.839Z",
		"size": 31421,
		"path": "../public/assets/button-D6Tq1Wih.js"
	},
	"/assets/calendar-DjpMKihP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118b2-m8GXXu7+tjK+PkHlbrLNnH1ETL8\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 71858,
		"path": "../public/assets/calendar-DjpMKihP.js"
	},
	"/assets/calendar-days-B7SU-yoI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-alN1TlmDr0iYQDd3iVJ/l3wF+h8\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 494,
		"path": "../public/assets/calendar-days-B7SU-yoI.js"
	},
	"/assets/card-BCUd0sC9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"438-zYQO1ILYd/LN+owmluFYMFXuG3s\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1080,
		"path": "../public/assets/card-BCUd0sC9.js"
	},
	"/assets/chevron-down-DkJLL6he.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80-hgHV3qZR/6fxpJkUrPVvsGKF6Oc\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 128,
		"path": "../public/assets/chevron-down-DkJLL6he.js"
	},
	"/assets/client-5vCIwrgs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32951-Prsjw084kWAIiyiIWMEKz3Ar9uQ\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 207185,
		"path": "../public/assets/client-5vCIwrgs.js"
	},
	"/assets/contact-C_aOvSMb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-fpTdOl9qdllKGybnaWAvtkekLHk\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 149,
		"path": "../public/assets/contact-C_aOvSMb.js"
	},
	"/assets/contact-Cpv2gBMS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-bYBUw/eoh8CR6QQ4rwaf+4lIjhs\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 153,
		"path": "../public/assets/contact-Cpv2gBMS.js"
	},
	"/assets/contact-DSYjAa1W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8a-cu/N0qU3stMMuQeZ1gh6NGOlxm0\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 2698,
		"path": "../public/assets/contact-DSYjAa1W.js"
	},
	"/assets/createLucideIcon-CZsbcE6F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2799-EKZnVRhOy6I08+Pte2QQG3vnTvQ\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 10137,
		"path": "../public/assets/createLucideIcon-CZsbcE6F.js"
	},
	"/assets/dash-shell-DzdAwBb4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1224-uTalOaxHQO/9+9QTdyvs6vBXwGQ\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 4644,
		"path": "../public/assets/dash-shell-DzdAwBb4.js"
	},
	"/assets/dashboard.bookings-C5HkEpPo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"596-QPfFrZ1I3hcwZK5zgUI2YLBPThg\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1430,
		"path": "../public/assets/dashboard.bookings-C5HkEpPo.js"
	},
	"/assets/dashboard.index-CI7Y71aV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ccd-9ipQgyJ8q2LSRRptIKOtEnxl7A8\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 3277,
		"path": "../public/assets/dashboard.index-CI7Y71aV.js"
	},
	"/assets/dashboard.registrations-C8RiyC_4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c6-fywqgsITN8qw8xmRqDk1pHie6vg\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1734,
		"path": "../public/assets/dashboard.registrations-C8RiyC_4.js"
	},
	"/assets/dist-BMXCD-fL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"303-H5FDP99BlkVBvXtNy8gnx17/wrI\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 771,
		"path": "../public/assets/dist-BMXCD-fL.js"
	},
	"/assets/dist-CWEl0Tqb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"894-UB479QyvRrpBSXSBw3Njh1KuLsg\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 2196,
		"path": "../public/assets/dist-CWEl0Tqb.js"
	},
	"/assets/dist-D-pF1Bvy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5d-Kz/FLh544sTjZuyBKB1/LcMuZtk\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 3933,
		"path": "../public/assets/dist-D-pF1Bvy.js"
	},
	"/assets/gallery-9pkydaeF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e8-Ey4RYDAzLyskmz9Wjxv6Ip6gCVs\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1e3,
		"path": "../public/assets/gallery-9pkydaeF.js"
	},
	"/assets/gallery-C_aOvSMb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-fpTdOl9qdllKGybnaWAvtkekLHk\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 149,
		"path": "../public/assets/gallery-C_aOvSMb.js"
	},
	"/assets/gallery-Cpv2gBMS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-bYBUw/eoh8CR6QQ4rwaf+4lIjhs\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 153,
		"path": "../public/assets/gallery-Cpv2gBMS.js"
	},
	"/assets/input-0wajT1rn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"289-xN3sm6gYdUpBbJQkgCV2ttgTdEE\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 649,
		"path": "../public/assets/input-0wajT1rn.js"
	},
	"/assets/jsx-runtime-DUAcabCT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42a-6CWT3JsIzkgrrMo5qQ6L1UWEbvM\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1066,
		"path": "../public/assets/jsx-runtime-DUAcabCT.js"
	},
	"/assets/index-BfXUgvZ_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b1e0-dYecr4HHWwhGV6h6sveK5AvakEY\"",
		"mtime": "2026-07-01T04:46:29.838Z",
		"size": 307680,
		"path": "../public/assets/index-BfXUgvZ_.js"
	},
	"/assets/label-C1OlKezC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44c-WXeinZHSBRCglWPjkWV2Dzyc2XY\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1100,
		"path": "../public/assets/label-C1OlKezC.js"
	},
	"/assets/matchContext-B64hBjTo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45d-hefn8RDgOw+24IvRRSHqVXpX7ds\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1117,
		"path": "../public/assets/matchContext-B64hBjTo.js"
	},
	"/assets/map-pin-D4BBqyBb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-Mb22Z/eigsW2ctlkTWwM9F3sC4g\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 259,
		"path": "../public/assets/map-pin-D4BBqyBb.js"
	},
	"/assets/reset-password-D4i9PhNQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4af-BooT1/V3Ywg7QtYOMmAK3brwvrc\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1199,
		"path": "../public/assets/reset-password-D4i9PhNQ.js"
	},
	"/assets/route-DIYuaWPD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-bMvVZOTKxlhGvC4pX3Ev0wftJbc\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 141,
		"path": "../public/assets/route-DIYuaWPD.js"
	},
	"/assets/routes-CU5vWL9O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1-7Be5ptYYbAMOy4D4vrjmEBxtOjY\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 161,
		"path": "../public/assets/routes-CU5vWL9O.js"
	},
	"/assets/routes-BwNSePCZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-ZHgnqk9/bFbtWggvybhf/HJdG3E\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 165,
		"path": "../public/assets/routes-BwNSePCZ.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/link-Bxgvt-bk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1142-e4kTGOBUiMnA9jVVbXwDIH8qLds\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 4418,
		"path": "../public/assets/link-Bxgvt-bk.js"
	},
	"/assets/routes-DaTy0KF2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"428b-WSUwbHQlrv1LgsveBIR3u8vlHzk\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 17035,
		"path": "../public/assets/routes-DaTy0KF2.js"
	},
	"/assets/site-nav-D70-YNTS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"143b-sLn/SdjxkocqAHAl/sM6WEOdN6M\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 5179,
		"path": "../public/assets/site-nav-D70-YNTS.js"
	},
	"/assets/storage-uB9qj5pb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c9-cZqlNVGNhGj8ATNFJOm1z6iflUc\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 457,
		"path": "../public/assets/storage-uB9qj5pb.js"
	},
	"/assets/styles-prHTevlK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15c07-+F5AMT2YD/J7UEmtv1TasdE7alE\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 89095,
		"path": "../public/assets/styles-prHTevlK.css"
	},
	"/assets/switch-OYkXm8Pd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e45-R8BSsBMnawX4sg/Q35ilnu9dzI4\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 3653,
		"path": "../public/assets/switch-OYkXm8Pd.js"
	},
	"/assets/textarea-BMwqKNwV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"223-cpThMsTak2IJmc8KAPUAp070Oso\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 547,
		"path": "../public/assets/textarea-BMwqKNwV.js"
	},
	"/assets/trash-2-DJOX2usE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148-LiqiHe4xwZfMcOAsk9/+zH3vGcc\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 328,
		"path": "../public/assets/trash-2-DJOX2usE.js"
	},
	"/assets/useRouter-BVWhQYgF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fda-Y79en3ykImTRRngTgwCZXLJ9F94\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 8154,
		"path": "../public/assets/useRouter-BVWhQYgF.js"
	},
	"/assets/useStore-CSE0wnwj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4846-lcO/CcfqzUmISeytXOCHz7jIGIs\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 18502,
		"path": "../public/assets/useStore-CSE0wnwj.js"
	},
	"/assets/user.functions-nlD0sb_p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f8-gldaMYeeynfPfYXVuvY96J74OnQ\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 1272,
		"path": "../public/assets/user.functions-nlD0sb_p.js"
	},
	"/assets/users-CvsxOtPK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-3gPg4WJruiDx5UfxvZYSx8yejW0\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 306,
		"path": "../public/assets/users-CvsxOtPK.js"
	},
	"/assets/workshops._id-CCNygyYf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-ggpJ7Pq+H55yvUMiNaJMHK8HFDM\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 158,
		"path": "../public/assets/workshops._id-CCNygyYf.js"
	},
	"/assets/workshops._id-Cpv2gBMS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-bYBUw/eoh8CR6QQ4rwaf+4lIjhs\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 153,
		"path": "../public/assets/workshops._id-Cpv2gBMS.js"
	},
	"/assets/workshops._id-DGJlw9Ab.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"146b-dpjS7MGqDxjurghW/PEYwt7JH/I\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 5227,
		"path": "../public/assets/workshops._id-DGJlw9Ab.js"
	},
	"/assets/workshops.index-C_aOvSMb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-fpTdOl9qdllKGybnaWAvtkekLHk\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 149,
		"path": "../public/assets/workshops.index-C_aOvSMb.js"
	},
	"/assets/workshops.index-Cpv2gBMS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-bYBUw/eoh8CR6QQ4rwaf+4lIjhs\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 153,
		"path": "../public/assets/workshops.index-Cpv2gBMS.js"
	},
	"/assets/workshops.index-KRQn505Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8fa-Q4N5z6wM7n9NzJmIbpakq77fze0\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 2298,
		"path": "../public/assets/workshops.index-KRQn505Q.js"
	},
	"/assets/x-DgZ0bRvO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-65FUeUpO8974dOY7sVS4VAZXHJQ\"",
		"mtime": "2026-07-01T04:46:29.840Z",
		"size": 154,
		"path": "../public/assets/x-DgZ0bRvO.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_NtOBpB = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_NtOBpB
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
