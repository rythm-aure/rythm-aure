import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as qo } from "./about-BHwY-PFJ.mjs";
import { t as supabase } from "./client-Du7C0C37.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$21 } from "./dashboard.index-B3jEX9dx.mjs";
import { t as qo$1 } from "./booking-DRA8w3qh.mjs";
import { t as qo$2 } from "./contact-cxuWKaBP.mjs";
import { t as qo$3 } from "./gallery-C0zExLSF.mjs";
import { i as workshopsQO, n as galleryQO, r as settingsQO, t as annQO } from "./routes-C9YGuzY_.mjs";
import { t as qo$4 } from "./workshops.index-D0PN6fPQ.mjs";
import { t as Route$22 } from "./workshops._id-BesBZ7JM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B7u-YB20.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-prHTevlK.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-display text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Back home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-display tracking-tight",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: error.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$20 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Rhythm Aure — Dance Studio & Choreography" },
			{
				name: "description",
				content: "Premium dance workshops and bespoke event choreography. Book classes, reserve performances."
			},
			{
				property: "og:title",
				content: "Rhythm Aure"
			},
			{
				property: "og:description",
				content: "Where rhythm meets elegance."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => data.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			richColors: true,
			position: "top-center"
		})]
	});
}
var $$splitComponentImporter$19 = () => import("./reset-password-BgIPyUtw.mjs");
var Route$19 = createFileRoute("/reset-password")({
	head: () => ({ meta: [{ title: "Reset password — Rhythm Aure" }] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./gallery-CASDnnb1.mjs");
var $$splitNotFoundComponentImporter$5 = () => import("./gallery-D9Zh3Bff.mjs");
var $$splitErrorComponentImporter$5 = () => import("./gallery-Dd8wQUgT.mjs");
var Route$18 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery — Rhythm Aure" }, {
		name: "description",
		content: "Moments from the Rhythm Aure stage and studio."
	}] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(qo$3),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$5, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$5, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./contact-B2yeYMYF.mjs");
var $$splitNotFoundComponentImporter$4 = () => import("./contact-sVo-h01x.mjs");
var $$splitErrorComponentImporter$4 = () => import("./contact-DSdWzQKS.mjs");
var Route$17 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Rhythm Aure" }, {
		name: "description",
		content: "Get in touch with Rhythm Aure."
	}] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(qo$2),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$4, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$4, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./booking-CTRtPN4L.mjs");
var $$splitNotFoundComponentImporter$3 = () => import("./booking-OyTZ52PB.mjs");
var $$splitErrorComponentImporter$3 = () => import("./booking-BL1pPqXw.mjs");
var Route$16 = createFileRoute("/booking")({
	head: () => ({ meta: [{ title: "Book Choreography — Rhythm Aure" }, {
		name: "description",
		content: "Reserve bespoke choreography for your event."
	}] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(qo$1),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./auth-TAxE5R3s.mjs");
var Route$15 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign in — Rhythm Aure" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./about-DGBObUIN.mjs");
var $$splitNotFoundComponentImporter$2 = () => import("./about-B3NgsTB9.mjs");
var $$splitErrorComponentImporter$2 = () => import("./about-DqvC059Z.mjs");
var Route$14 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Rhythm Aure" }, {
		name: "description",
		content: "The story behind Rhythm Aure."
	}] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(qo),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./route-Di7iQBCH.mjs");
var Route$13 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./routes-CJ2snoxX.mjs");
var $$splitNotFoundComponentImporter$1 = () => import("./routes-DsMNPORk.mjs");
var $$splitErrorComponentImporter$1 = () => import("./routes-BQwiV9u1.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Rhythm Aure — Premium Dance Studio & Choreography" },
		{
			name: "description",
			content: "Premium dance workshops and bespoke event choreography where rhythm meets elegance."
		},
		{
			property: "og:title",
			content: "Rhythm Aure"
		},
		{
			property: "og:description",
			content: "Dance beyond imagination."
		}
	] }),
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(settingsQO);
		context.queryClient.ensureQueryData(workshopsQO);
		context.queryClient.ensureQueryData(galleryQO);
		context.queryClient.ensureQueryData(annQO);
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./workshops.index-CL6bC4b3.mjs");
var $$splitNotFoundComponentImporter = () => import("./workshops.index-KOp2tsaw.mjs");
var $$splitErrorComponentImporter = () => import("./workshops.index-E9MJulTG.mjs");
var Route$11 = createFileRoute("/workshops/")({
	head: () => ({ meta: [{ title: "Workshops — Rhythm Aure" }, {
		name: "description",
		content: "Upcoming dance workshops at Rhythm Aure."
	}] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(qo$4),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./dashboard.registrations-PEAmiO3x.mjs");
var Route$10 = createFileRoute("/_authenticated/dashboard/registrations")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./dashboard.bookings-D3FcmXHt.mjs");
var Route$9 = createFileRoute("/_authenticated/dashboard/bookings")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./admin.index-zcANwUBL.mjs");
var Route$8 = createFileRoute("/_authenticated/dashboard/admin/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./admin.workshops-eCn7Ub1w.mjs");
var Route$7 = createFileRoute("/_authenticated/dashboard/admin/workshops")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./admin.users-CM7_B8oA.mjs");
var Route$6 = createFileRoute("/_authenticated/dashboard/admin/users")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.settings-CUGAAhBQ.mjs");
var Route$5 = createFileRoute("/_authenticated/dashboard/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.registrations-B4KAZmbV.mjs");
var Route$4 = createFileRoute("/_authenticated/dashboard/admin/registrations")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.gallery-Dbf8pmGr.mjs");
var Route$3 = createFileRoute("/_authenticated/dashboard/admin/gallery")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.bookings-DoOjoZUU.mjs");
var Route$2 = createFileRoute("/_authenticated/dashboard/admin/bookings")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.availability-D74NovFM.mjs");
var Route$1 = createFileRoute("/_authenticated/dashboard/admin/availability")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.announcements-CyOmxmUL.mjs");
var Route = createFileRoute("/_authenticated/dashboard/admin/announcements")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var ResetPasswordRoute = Route$19.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$20
});
var GalleryRoute = Route$18.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$17.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var BookingRoute = Route$16.update({
	id: "/booking",
	path: "/booking",
	getParentRoute: () => Route$20
});
var AuthRoute = Route$15.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$20
});
var AboutRoute = Route$14.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$20
});
var AuthenticatedRouteRoute = Route$13.update({
	id: "/_authenticated",
	getParentRoute: () => Route$20
});
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var WorkshopsIndexRoute = Route$11.update({
	id: "/workshops/",
	path: "/workshops/",
	getParentRoute: () => Route$20
});
var WorkshopsIdRoute = Route$22.update({
	id: "/workshops/$id",
	path: "/workshops/$id",
	getParentRoute: () => Route$20
});
var AuthenticatedDashboardIndexRoute = Route$21.update({
	id: "/dashboard/",
	path: "/dashboard/",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardRegistrationsRoute = Route$10.update({
	id: "/dashboard/registrations",
	path: "/dashboard/registrations",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardBookingsRoute = Route$9.update({
	id: "/dashboard/bookings",
	path: "/dashboard/bookings",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardAdminIndexRoute = Route$8.update({
	id: "/dashboard/admin/",
	path: "/dashboard/admin/",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardAdminWorkshopsRoute = Route$7.update({
	id: "/dashboard/admin/workshops",
	path: "/dashboard/admin/workshops",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardAdminUsersRoute = Route$6.update({
	id: "/dashboard/admin/users",
	path: "/dashboard/admin/users",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardAdminSettingsRoute = Route$5.update({
	id: "/dashboard/admin/settings",
	path: "/dashboard/admin/settings",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardAdminRegistrationsRoute = Route$4.update({
	id: "/dashboard/admin/registrations",
	path: "/dashboard/admin/registrations",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardAdminGalleryRoute = Route$3.update({
	id: "/dashboard/admin/gallery",
	path: "/dashboard/admin/gallery",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardAdminBookingsRoute = Route$2.update({
	id: "/dashboard/admin/bookings",
	path: "/dashboard/admin/bookings",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardAdminAvailabilityRoute = Route$1.update({
	id: "/dashboard/admin/availability",
	path: "/dashboard/admin/availability",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedDashboardBookingsRoute,
	AuthenticatedDashboardRegistrationsRoute,
	AuthenticatedDashboardIndexRoute,
	AuthenticatedDashboardAdminAnnouncementsRoute: Route.update({
		id: "/dashboard/admin/announcements",
		path: "/dashboard/admin/announcements",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedDashboardAdminAvailabilityRoute,
	AuthenticatedDashboardAdminBookingsRoute,
	AuthenticatedDashboardAdminGalleryRoute,
	AuthenticatedDashboardAdminRegistrationsRoute,
	AuthenticatedDashboardAdminSettingsRoute,
	AuthenticatedDashboardAdminUsersRoute,
	AuthenticatedDashboardAdminWorkshopsRoute,
	AuthenticatedDashboardAdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AuthRoute,
	BookingRoute,
	ContactRoute,
	GalleryRoute,
	ResetPasswordRoute,
	WorkshopsIdRoute,
	WorkshopsIndexRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
