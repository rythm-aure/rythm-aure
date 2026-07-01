import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as PageShell } from "./site-nav-CC_QrQzD.mjs";
import { t as qo } from "./gallery-C0zExLSF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CASDnnb1.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { data } = useSuspenseQuery(qo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm uppercase tracking-widest text-accent",
				children: "Gallery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Moments in motion"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3",
				children: [data.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mb-4 break-inside-avoid overflow-hidden rounded-xl bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.image_url,
						alt: g.caption ?? "",
						className: "w-full",
						loading: "lazy"
					}), g.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "p-3 text-sm text-muted-foreground",
						children: g.caption
					})]
				}, g.id)), data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Gallery is being curated."
				})]
			})
		]
	}) });
}
//#endregion
export { Page as component };
