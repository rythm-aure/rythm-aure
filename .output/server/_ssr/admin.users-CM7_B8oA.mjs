import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-C675DuMy.mjs";
import { h as adminSetRole, l as adminListUsers } from "./admin.functions-BXxmfY2y.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.users-CM7_B8oA.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const list = useServerFn(adminListUsers);
	const setRole = useServerFn(adminSetRole);
	const qc = useQueryClient();
	const { data = [] } = useQuery({
		queryKey: ["admin_users"],
		queryFn: () => list()
	});
	async function toggleAdmin(id, isAdmin) {
		try {
			await setRole({ data: {
				user_id: id,
				role: "admin",
				grant: !isAdmin
			} });
			toast.success("Updated");
			qc.invalidateQueries({ queryKey: ["admin_users"] });
		} catch (e) {
			toast.error(e.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl",
		children: "Users"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 overflow-hidden rounded-2xl border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-secondary/60 text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Roles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "p-3" })
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.map((u) => {
				const isAdmin = u.roles.includes("admin");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-3",
							children: u.full_name ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-3",
							children: u.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-3",
							children: u.roles.join(", ") || "user"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-3 text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: isAdmin ? "outline" : "default",
								onClick: () => toggleAdmin(u.id, isAdmin),
								className: isAdmin ? "" : "bg-accent text-accent-foreground hover:bg-accent/90",
								children: isAdmin ? "Revoke admin" : "Make admin"
							})
						})
					]
				}, u.id);
			}) })]
		})
	})] });
}
//#endregion
export { Page as component };
