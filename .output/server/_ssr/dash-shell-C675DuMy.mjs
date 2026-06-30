import { r as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link, l as useRouterState, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { t as supabase } from "./client-Du7C0C37.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { E as Calendar, _ as LayoutDashboard, c as Shield, g as LogOut, j as House, o as Ticket } from "../_libs/lucide-react.mjs";
import { o as useServerFn, r as getMyRole } from "./user.functions-BZm-ztTP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dash-shell-C675DuMy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var userLinks = [
	{
		to: "/dashboard",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/dashboard/registrations",
		label: "My Registrations",
		icon: Ticket
	},
	{
		to: "/dashboard/bookings",
		label: "My Bookings",
		icon: Calendar
	}
];
var adminLinks = [
	{
		to: "/dashboard/admin",
		label: "Admin Home",
		icon: Shield,
		exact: true
	},
	{
		to: "/dashboard/admin/workshops",
		label: "Workshops"
	},
	{
		to: "/dashboard/admin/registrations",
		label: "Registrations"
	},
	{
		to: "/dashboard/admin/bookings",
		label: "Bookings"
	},
	{
		to: "/dashboard/admin/availability",
		label: "Availability"
	},
	{
		to: "/dashboard/admin/gallery",
		label: "Gallery"
	},
	{
		to: "/dashboard/admin/announcements",
		label: "Announcements"
	},
	{
		to: "/dashboard/admin/settings",
		label: "Site Settings"
	},
	{
		to: "/dashboard/admin/users",
		label: "Users"
	}
];
function DashShell({ children }) {
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const getRole = useServerFn(getMyRole);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const router = useRouter();
	const qc = useQueryClient();
	(0, import_react.useEffect)(() => {
		getRole().then((r) => setIsAdmin(r.isAdmin)).catch(() => {});
	}, [getRole]);
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		router.navigate({
			to: "/auth",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-secondary/30 lg:flex-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border-r border-border bg-midnight text-cream lg:w-72",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-display text-2xl",
						children: ["Rhythm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "Aure"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "space-y-1 px-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pb-2 pt-4 text-xs uppercase tracking-widest text-cream/50",
							children: "Your account"
						}),
						userLinks.map((l) => {
							const active = l.exact ? pathname === l.to : pathname.startsWith(l.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								className: `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition ${active ? "bg-accent text-accent-foreground" : "text-cream/80 hover:bg-cream/5"}`,
								children: [l.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "size-4" }), l.label]
							}, l.to);
						}),
						isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pb-2 pt-6 text-xs uppercase tracking-widest text-cream/50",
							children: "Admin"
						}), adminLinks.map((l) => {
							const active = l.exact ? pathname === l.to : pathname.startsWith(l.to);
							const Icon = l.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								className: `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition ${active ? "bg-accent text-accent-foreground" : "text-cream/80 hover:bg-cream/5"}`,
								children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }) : null, l.label]
							}, l.to);
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-2 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						className: "w-full justify-start text-cream/80 hover:bg-cream/5 hover:text-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "mr-2 size-4" }), "Back to site"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: signOut,
						className: "w-full justify-start text-cream/80 hover:bg-cream/5 hover:text-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 size-4" }), "Sign out"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1 p-6 lg:p-10",
			children
		})]
	});
}
//#endregion
export { DashShell as t };
