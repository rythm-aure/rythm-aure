import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as qo } from "./about-BHwY-PFJ.mjs";
import { t as PageShell } from "./site-nav-CC_QrQzD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DGBObUIN.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { data: s } = useSuspenseQuery(qo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm uppercase tracking-widest text-accent",
				children: "About"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: s?.about_title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 whitespace-pre-wrap text-lg leading-relaxed text-foreground/80",
				children: s?.about_body
			})
		]
	}) });
}
//#endregion
export { Page as component };
