import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-C675DuMy.mjs";
import { c as adminListRegistrations, d as adminOverview, o as adminListBookings } from "./admin.functions-BXxmfY2y.mjs";
import { n as StatusBadge } from "./dashboard.index-B3jEX9dx.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Befnk9fX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-zcANwUBL.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const fn = useServerFn(adminOverview);
	const regsFn = useServerFn(adminListRegistrations);
	const bkFn = useServerFn(adminListBookings);
	const { data: o } = useQuery({
		queryKey: ["admin_overview"],
		queryFn: () => fn()
	});
	const { data: regs = [] } = useQuery({
		queryKey: ["admin_regs"],
		queryFn: () => regsFn()
	});
	const { data: bookings = [] } = useQuery({
		queryKey: ["admin_bookings"],
		queryFn: () => bkFn()
	});
	const items = [
		{
			k: "Workshops",
			v: o?.workshops ?? 0
		},
		{
			k: "Registrations",
			v: o?.registrations ?? 0
		},
		{
			k: "Bookings",
			v: o?.bookings ?? 0
		},
		{
			k: "Pending payments",
			v: o?.pending_payments ?? 0
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Admin overview"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-sm font-medium text-muted-foreground",
				children: i.k
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl",
				children: i.v
			}) })] }, i.k))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Recent registrations"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-2",
				children: regs.slice(0, 5).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-lg border bg-card p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: r.workshop?.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.payment_status })]
				}, r.id))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Recent bookings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-2",
				children: bookings.slice(0, 5).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-lg border bg-card p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: b.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: new Date(b.event_date).toDateString()
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: b.status })]
				}, b.id))
			})] })]
		})
	] });
}
//#endregion
export { Page as component };
