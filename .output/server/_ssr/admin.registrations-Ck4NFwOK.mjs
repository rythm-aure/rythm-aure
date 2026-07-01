import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-D-tiWTBn.mjs";
import { c as adminListRegistrations, v as adminUpdateRegistration } from "./admin.functions-BXxmfY2y.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as StatusBadge } from "./dashboard.index-BVrngWLB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.registrations-Ck4NFwOK.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const list = useServerFn(adminListRegistrations);
	const upd = useServerFn(adminUpdateRegistration);
	const qc = useQueryClient();
	const { data = [] } = useQuery({
		queryKey: ["admin_regs"],
		queryFn: () => list()
	});
	async function setStatus(id, status) {
		try {
			await upd({ data: {
				id,
				payment_status: status
			} });
			toast.success("Updated");
			qc.invalidateQueries({ queryKey: ["admin_regs"] });
		} catch (e) {
			toast.error(e.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl",
		children: "Registrations"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 overflow-x-auto rounded-2xl border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-secondary/60 text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Attendee"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Workshop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "UPI Ref"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Status"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "p-3",
						children: "Action"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [data.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "p-3 font-medium",
						children: r.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "p-3",
						children: r.workshop?.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "p-3 text-xs",
						children: [
							r.email,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							r.phone
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "p-3 font-mono text-xs",
						children: r.upi_txn_ref
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.payment_status })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "p-3 space-x-2 whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => setStatus(r.id, "verified"),
							className: "bg-emerald-600 hover:bg-emerald-700",
							children: "Verify"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "destructive",
							onClick: () => setStatus(r.id, "rejected"),
							children: "Reject"
						})]
					})
				]
			}, r.id)), data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 6,
				className: "p-8 text-center text-muted-foreground",
				children: "No registrations yet."
			}) })] })]
		})
	})] });
}
//#endregion
export { Page as component };
