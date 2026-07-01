import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { b as Facebook, h as Mail, m as MapPin, t as Youtube, u as Phone, v as Instagram } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./site-nav-CCHsb5iF.mjs";
import { t as qo } from "./contact-cxuWKaBP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CLbhNkNw.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { data: s } = useSuspenseQuery(qo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm uppercase tracking-widest text-accent",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Let's talk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-4 text-lg",
				children: [
					s?.contact_email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-accent" }), s.contact_email]
					}),
					s?.contact_phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-accent" }), s.contact_phone]
					}),
					s?.contact_address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-accent" }), s.contact_address]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-4",
				children: [
					s?.instagram_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.instagram_url,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Instagram",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-6 text-accent hover:opacity-70" })
					}),
					s?.youtube_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.youtube_url,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "YouTube",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-6 text-accent hover:opacity-70" })
					}),
					s?.facebook_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.facebook_url,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Facebook",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-6 text-accent hover:opacity-70" })
					})
				]
			})
		]
	}) });
}
//#endregion
export { Page as component };
