import { r as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { _ as useNavigate, g as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getSiteSettings, o as getWorkshopById } from "./public.functions-Bl3KHXh9.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as useSuspenseQuery, t as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { t as supabase } from "./client-SYK2JaWV.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { D as CalendarDays, m as MapPin, r as Users } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./site-nav-CCHsb5iF.mjs";
import { i as registerForWorkshop, o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as Input } from "./input-uzm9g8Y7.mjs";
import { t as Label } from "./label-BeT0bXvu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./workshops._id-DUszDwUn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workshops._id-BjJRR0WE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { id } = Route.useParams();
	const wQO = queryOptions({
		queryKey: ["workshop", id],
		queryFn: () => getWorkshopById({ data: { id } })
	});
	const sQO = queryOptions({
		queryKey: ["site_settings"],
		queryFn: () => getSiteSettings()
	});
	const { data: w } = useSuspenseQuery(wQO);
	const { data: s } = useSuspenseQuery(sQO);
	const [authed, setAuthed] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)("info");
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		upi_txn_ref: ""
	});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const register = useServerFn(registerForWorkshop);
	const navigate = useNavigate();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			setAuthed(!!data.user);
			if (data.user) setForm((f) => ({
				...f,
				email: data.user.email ?? "",
				name: f.name || (data.user.user_metadata?.full_name ?? "")
			}));
		});
	}, []);
	if (!w) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-8",
		children: "Workshop not found."
	}) });
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		try {
			await register({ data: {
				workshop_id: id,
				...form
			} });
			toast.success("Registration submitted! We'll verify your payment shortly.");
			router.invalidate();
			navigate({ to: "/dashboard/registrations" });
		} catch (err) {
			toast.error(err.message);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/workshops",
			className: "text-sm text-accent hover:underline",
			children: "← All workshops"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/3] overflow-hidden rounded-2xl bg-muted",
				children: w.cover_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: w.cover_url,
					alt: w.title,
					className: "size-full object-cover"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl",
					children: w.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground",
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
					className: "mt-2 text-2xl font-display text-accent",
					children: ["₹", Number(w.price).toLocaleString()]
				}),
				w.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 whitespace-pre-wrap text-foreground/80",
					children: w.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-2xl border bg-card p-6",
					children: [
						authed === false && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "Please sign in to register."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-3 bg-accent text-accent-foreground hover:bg-accent/90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth",
								children: "Sign in / Sign up"
							})
						})] }),
						authed && step === "info" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setStep("pay");
							},
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Register"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Your name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									required: true,
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									required: true,
									type: "email",
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.phone,
									onChange: (e) => setForm({
										...form,
										phone: e.target.value
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full bg-accent text-accent-foreground hover:bg-accent/90",
									children: "Continue to payment"
								})
							]
						}),
						authed && step === "pay" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-xl",
									children: [
										"Pay ₹",
										Number(w.price).toLocaleString(),
										" via UPI"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border bg-secondary/40 p-4 text-sm",
									children: [s?.upi_id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "UPI ID:" }),
										" ",
										s.upi_id
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "UPI details will be shared by the studio shortly."
									}), s?.upi_qr_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.upi_qr_url,
										alt: "UPI QR",
										className: "mt-3 size-48 rounded-md object-contain"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "UPI Transaction Reference" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										value: form.upi_txn_ref,
										onChange: (e) => setForm({
											...form,
											upi_txn_ref: e.target.value
										}),
										placeholder: "e.g. 4231XXXXXX"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Enter the reference / UTR from your UPI app after payment."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										onClick: () => setStep("info"),
										children: "Back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: busy,
										className: "flex-1 bg-accent text-accent-foreground hover:bg-accent/90",
										children: busy ? "Submitting…" : "Submit registration"
									})]
								})
							]
						})
					]
				})
			] })]
		})]
	}) });
}
//#endregion
export { Page as component };
