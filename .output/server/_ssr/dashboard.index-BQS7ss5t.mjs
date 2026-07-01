import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { E as Calendar, o as Ticket } from "../_libs/lucide-react.mjs";
import { n as getMyRegistrations, o as useServerFn, t as getMyBookings } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-D-tiWTBn.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Befnk9fX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-BQS7ss5t.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const regsFn = useServerFn(getMyRegistrations);
	const bookFn = useServerFn(getMyBookings);
	const { data: regs = [] } = useQuery({
		queryKey: ["my_regs"],
		queryFn: () => regsFn()
	});
	const { data: bookings = [] } = useQuery({
		queryKey: ["my_bookings"],
		queryFn: () => bookFn()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Welcome back"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-muted-foreground",
			children: "Quick view of your activity at Rhythm Aure."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { className: "size-5 text-accent" }), " Workshop registrations"]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-3xl font-display",
				children: regs.length
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard/registrations",
				className: "mt-2 inline-block text-sm text-accent hover:underline",
				children: "View all →"
			})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-5 text-accent" }), " Choreography bookings"]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-3xl font-display",
				children: bookings.length
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard/bookings",
				className: "mt-2 inline-block text-sm text-accent hover:underline",
				children: "View all →"
			})] })] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl",
			children: "Recent registrations"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-2",
			children: [regs.slice(0, 5).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-lg border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: r.workshop?.title ?? "—"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: r.workshop?.starts_at ? new Date(r.workshop.starts_at).toLocaleString() : ""
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.payment_status })]
			}, r.id)), regs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No registrations yet."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl",
			children: "Recent bookings"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-2",
			children: [bookings.slice(0, 5).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-lg border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-medium",
					children: [
						b.event_type ?? "Event",
						" — ",
						new Date(b.event_date).toDateString()
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: b.event_location ?? ""
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: b.status })]
			}, b.id)), bookings.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No bookings yet."
			})]
		})
	] });
}
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `rounded-full px-3 py-1 text-xs font-medium capitalize ${{
			pending: "bg-amber-100 text-amber-800",
			verified: "bg-emerald-100 text-emerald-800",
			rejected: "bg-red-100 text-red-800",
			accepted: "bg-emerald-100 text-emerald-800",
			declined: "bg-red-100 text-red-800",
			completed: "bg-blue-100 text-blue-800"
		}[status] ?? "bg-muted"}`,
		children: status
	});
}
//#endregion
export { StatusBadge, Page as component };
