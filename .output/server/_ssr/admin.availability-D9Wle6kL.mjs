import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-D-tiWTBn.mjs";
import { a as adminListBlocks, g as adminToggleBlock } from "./admin.functions-BXxmfY2y.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Calendar$1 } from "./calendar-BHsBzqjb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.availability-D9Wle6kL.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const list = useServerFn(adminListBlocks);
	const toggle = useServerFn(adminToggleBlock);
	const qc = useQueryClient();
	const { data = [] } = useQuery({
		queryKey: ["admin_blocks"],
		queryFn: () => list()
	});
	const blockedDates = data.map((b) => /* @__PURE__ */ new Date(b.blocked_date + "T00:00:00"));
	async function pick(d) {
		if (!d) return;
		function formatDate(date) {
			return [
				date.getFullYear(),
				String(date.getMonth() + 1).padStart(2, "0"),
				String(date.getDate()).padStart(2, "0")
			].join("-");
		}
		const iso = formatDate(d);
		try {
			const res = await toggle({ data: { date: iso } });
			toast.success(res.blocked ? "Date blocked" : "Date unblocked");
			qc.invalidateQueries({ queryKey: ["admin_blocks"] });
			qc.invalidateQueries({ queryKey: ["blocked_dates"] });
		} catch (e) {
			toast.error(e.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Calendar availability"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-muted-foreground",
			children: "Click any date to toggle whether choreography bookings can be made for it."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 inline-block rounded-2xl border bg-card p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
				mode: "single",
				onSelect: pick,
				modifiers: { blocked: blockedDates },
				modifiersClassNames: { blocked: "line-through opacity-50" }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Blocked dates"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [data.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full bg-secondary px-3 py-1 text-sm",
					children: new Date(b.blocked_date).toDateString()
				}, b.id)), data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted-foreground",
					children: "None."
				})]
			})]
		})
	] });
}
//#endregion
export { Page as component };
