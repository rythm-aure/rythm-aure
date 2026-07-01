import { r as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { _ as useNavigate, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as supabase } from "./client-SYK2JaWV.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { t as PageShell } from "./site-nav-CCHsb5iF.mjs";
import { a as submitBooking, o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as Input } from "./input-uzm9g8Y7.mjs";
import { t as Textarea } from "./textarea-DjqHhWkA.mjs";
import { t as Label } from "./label-BeT0bXvu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Calendar$1 } from "./calendar-BHsBzqjb.mjs";
import { t as qo } from "./booking-DRA8w3qh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-BQuEJi_h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { data: blocked } = useSuspenseQuery(qo);
	const blockedDates = blocked.map((d) => /* @__PURE__ */ new Date(d + "T00:00:00"));
	const [date, setDate] = (0, import_react.useState)();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		event_type: "",
		event_location: "",
		guests: "",
		message: ""
	});
	const [authed, setAuthed] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = useServerFn(submitBooking);
	const navigate = useNavigate();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			setAuthed(!!data.user);
			if (data.user) setForm((f) => ({
				...f,
				email: data.user.email ?? ""
			}));
		});
	}, []);
	async function handle(e) {
		e.preventDefault();
		if (!date) return toast.error("Pick an event date");
		setBusy(true);
		try {
			await submit({ data: {
				name: form.name,
				email: form.email,
				phone: form.phone,
				event_type: form.event_type || void 0,
				event_date: date.toISOString().slice(0, 10),
				event_location: form.event_location || void 0,
				guests: form.guests ? Number(form.guests) : void 0,
				message: form.message || void 0
			} });
			toast.success("Booking request sent! We'll respond within 24 hours.");
			router.invalidate();
			navigate({ to: "/dashboard/bookings" });
		} catch (err) {
			toast.error(err.message);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm uppercase tracking-widest text-accent",
				children: "Book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Choreography for your event"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted-foreground",
				children: "Pick a date and tell us about your event. Greyed-out dates are unavailable."
			}),
			authed === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border bg-card p-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Please sign in to submit a booking request." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-4 bg-accent text-accent-foreground hover:bg-accent/90",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/auth",
						children: "Sign in"
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handle,
				className: "mt-10 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Event date" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
								mode: "single",
								selected: date,
								onSelect: setDate,
								disabled: [{ before: /* @__PURE__ */ new Date() }, ...blockedDates.map((d) => ({
									from: d,
									to: d
								}))]
							})
						}),
						date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-center text-sm",
							children: ["Selected: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: date.toDateString() })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 rounded-2xl border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Your name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								})
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								value: form.phone,
								onChange: (e) => setForm({
									...form,
									phone: e.target.value
								})
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							type: "email",
							value: form.email,
							onChange: (e) => setForm({
								...form,
								email: e.target.value
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Event type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Wedding, corporate…",
								value: form.event_type,
								onChange: (e) => setForm({
									...form,
									event_type: e.target.value
								})
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Guests" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 1,
								value: form.guests,
								onChange: (e) => setForm({
									...form,
									guests: e.target.value
								})
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Venue / location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.event_location,
							onChange: (e) => setForm({
								...form,
								event_location: e.target.value
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Tell us about your vision" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 4,
							value: form.message,
							onChange: (e) => setForm({
								...form,
								message: e.target.value
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							className: "w-full bg-accent text-accent-foreground hover:bg-accent/90",
							children: busy ? "Sending…" : "Send booking request"
						})
					]
				})]
			})
		]
	}) });
}
//#endregion
export { Page as component };
