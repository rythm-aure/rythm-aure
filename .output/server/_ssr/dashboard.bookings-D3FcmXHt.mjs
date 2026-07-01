import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { o as useServerFn, t as getMyBookings } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-C675DuMy.mjs";
import { n as StatusBadge } from "./dashboard.index-B3jEX9dx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.bookings-D3FcmXHt.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const fn = useServerFn(getMyBookings);
	const { data = [] } = useQuery({
		queryKey: ["my_bookings"],
		queryFn: () => fn()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "My choreography bookings"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-muted-foreground",
			children: "See if the studio has accepted your request."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-3",
			children: [data.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg",
							children: [
								b.event_type ?? "Event",
								" — ",
								new Date(b.event_date).toDateString()
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [b.event_location ?? "", b.guests ? ` · ${b.guests} guests` : ""]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: b.status })]
					}),
					b.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: b.message
					}),
					b.admin_notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-md bg-accent/10 p-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Studio note:" }),
							" ",
							b.admin_notes
						]
					})
				]
			}, b.id)), data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "No bookings yet."
			})]
		})
	] });
}
//#endregion
export { Page as component };
