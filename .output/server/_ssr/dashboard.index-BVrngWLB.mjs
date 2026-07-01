import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-BVrngWLB.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./dashboard.index-BQS7ss5t.mjs");
var Route = createFileRoute("/_authenticated/dashboard/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
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
export { StatusBadge as n, Route as t };
