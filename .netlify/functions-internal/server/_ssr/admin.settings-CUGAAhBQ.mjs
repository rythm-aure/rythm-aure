import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as getSiteSettings } from "./public.functions-Bl3KHXh9.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-C675DuMy.mjs";
import { y as adminUpdateSettings } from "./admin.functions-BXxmfY2y.mjs";
import { t as Input } from "./input-uzm9g8Y7.mjs";
import { t as Textarea } from "./textarea-DjqHhWkA.mjs";
import { t as Switch } from "./switch-DtEVXaE2.mjs";
import { t as Label } from "./label-BeT0bXvu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as uploadAndGetUrl } from "./storage-W8cIB9PI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-CUGAAhBQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const get = useServerFn(getSiteSettings);
	const save = useServerFn(adminUpdateSettings);
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["admin_settings"],
		queryFn: () => get()
	});
	const [s, setS] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (data && !s) setS(data);
	}, [data, s]);
	if (!s) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Loading…" }) });
	const set = (k, v) => setS({
		...s,
		[k]: v
	});
	async function submit(e) {
		e.preventDefault();
		try {
			const payload = { ...s };
			delete payload.id;
			delete payload.updated_at;
			await save({ data: payload });
			qc.invalidateQueries({ queryKey: ["site_settings"] });
			qc.invalidateQueries({ queryKey: ["admin_settings"] });
			toast.success("Saved");
		} catch (e) {
			toast.error(e.message);
		}
	}
	async function uploadQr(f) {
		try {
			set("upi_qr_url", await uploadAndGetUrl("settings", f, "qr/"));
		} catch (e) {
			toast.error(e.message);
		}
	}
	async function uploadHero(f) {
		try {
			set("hero_image_url", await uploadAndGetUrl("settings", f, "hero/"));
		} catch (e) {
			toast.error(e.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl",
		children: "Site settings"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "mt-6 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Brand"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Studio name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: s.studio_name,
						onChange: (e) => set("studio_name", e.target.value)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Tagline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: s.tagline ?? "",
						onChange: (e) => set("tagline", e.target.value)
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Hero"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Hero title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: s.hero_title ?? "",
							onChange: (e) => set("hero_title", e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Hero subtitle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: s.hero_subtitle ?? "",
							onChange: (e) => set("hero_subtitle", e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Hero background image" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "file",
								accept: "image/*",
								onChange: (e) => e.target.files?.[0] && uploadHero(e.target.files[0])
							}),
							s.hero_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.hero_image_url,
								alt: "",
								className: "mt-2 h-32 rounded-md object-cover"
							})
						] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "About"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "About title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: s.about_title ?? "",
						onChange: (e) => set("about_title", e.target.value)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "About body" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 6,
						value: s.about_body ?? "",
						onChange: (e) => set("about_body", e.target.value)
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Contact & social"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							value: s.contact_email ?? "",
							onChange: (e) => set("contact_email", e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: s.contact_phone ?? "",
							onChange: (e) => set("contact_phone", e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.contact_address ?? "",
								onChange: (e) => set("contact_address", e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Instagram URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: s.instagram_url ?? "",
							onChange: (e) => set("instagram_url", e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "YouTube URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: s.youtube_url ?? "",
							onChange: (e) => set("youtube_url", e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Facebook URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: s.facebook_url ?? "",
							onChange: (e) => set("facebook_url", e.target.value)
						})] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "UPI payment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "UPI ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: s.upi_id ?? "",
						onChange: (e) => set("upi_id", e.target.value),
						placeholder: "yourname@upi"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "UPI QR image" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "file",
							accept: "image/*",
							onChange: (e) => e.target.files?.[0] && uploadQr(e.target.files[0])
						}),
						s.upi_qr_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.upi_qr_url,
							alt: "",
							className: "mt-2 h-40 rounded-md object-contain"
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Section visibility"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: [
						["show_hero", "Hero section"],
						["show_workshops", "Workshops section"],
						["show_booking", "Booking section"],
						["show_gallery", "Gallery section"],
						["show_about", "About section"],
						["show_announcements", "Announcements bar"],
						["show_contact", "Contact section"]
					].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center justify-between rounded-md border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: !!s[k],
							onCheckedChange: (v) => set(k, v)
						})]
					}, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "w-full bg-accent text-accent-foreground hover:bg-accent/90",
				children: "Save all settings"
			})
		]
	})] });
}
//#endregion
export { Page as component };
