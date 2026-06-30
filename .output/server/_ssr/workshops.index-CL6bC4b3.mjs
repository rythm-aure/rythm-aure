import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { D as CalendarDays, m as MapPin, r as Users } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./site-nav-CC_QrQzD.mjs";
import { t as qo } from "./workshops.index-D0PN6fPQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workshops.index-CL6bC4b3.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { data: workshops } = useSuspenseQuery(qo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm uppercase tracking-widest text-accent",
				children: "Workshops"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Upcoming sessions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted-foreground",
				children: "Reserve your spot. Pay via UPI and our team will verify your registration."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: [workshops.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "No workshops scheduled."
				}), workshops.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/workshops/$id",
					params: { id: w.id },
					className: "group overflow-hidden rounded-2xl border bg-card transition hover:shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden bg-muted",
						children: w.cover_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: w.cover_url,
							alt: w.title,
							className: "size-full object-cover transition group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: w.title
								}), w.level && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent",
									children: w.level
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }), new Date(w.starts_at).toLocaleString()]
									}),
									w.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), w.location]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" }),
											w.capacity,
											" seats"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-medium text-accent",
								children: ["₹", Number(w.price).toLocaleString()]
							})
						]
					})]
				}, w.id))]
			})
		]
	}) });
}
//#endregion
export { Page as component };
