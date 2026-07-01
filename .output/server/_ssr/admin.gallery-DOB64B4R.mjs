import { r as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { a as Trash2 } from "../_libs/lucide-react.mjs";
import { o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-D-tiWTBn.mjs";
import { n as adminDeleteGallery, p as adminSaveGallery, s as adminListGallery } from "./admin.functions-BXxmfY2y.mjs";
import { t as Input } from "./input-uzm9g8Y7.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as uploadAndGetUrl } from "./storage-04n7h2S8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.gallery-DOB64B4R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const list = useServerFn(adminListGallery);
	const save = useServerFn(adminSaveGallery);
	const del = useServerFn(adminDeleteGallery);
	const qc = useQueryClient();
	const { data = [] } = useQuery({
		queryKey: ["admin_gallery"],
		queryFn: () => list()
	});
	const [caption, setCaption] = (0, import_react.useState)("");
	async function upload(f) {
		try {
			await save({ data: {
				image_url: await uploadAndGetUrl("gallery", f),
				caption,
				sort_order: data.length
			} });
			toast.success("Added");
			setCaption("");
			qc.invalidateQueries({ queryKey: ["admin_gallery"] });
			qc.invalidateQueries({ queryKey: ["gallery_pub"] });
		} catch (e) {
			toast.error(e.message);
		}
	}
	async function remove(id) {
		if (!confirm("Delete?")) return;
		await del({ data: { id } });
		qc.invalidateQueries({ queryKey: ["admin_gallery"] });
		qc.invalidateQueries({ queryKey: ["gallery_pub"] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Gallery"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap items-end gap-3 rounded-2xl border bg-card p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 min-w-[200px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Caption (optional)",
					value: caption,
					onChange: (e) => setCaption(e.target.value)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "file",
				accept: "image/*",
				className: "w-auto",
				onChange: (e) => e.target.files?.[0] && upload(e.target.files[0])
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
			children: data.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative overflow-hidden rounded-xl border bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.image_url,
						alt: g.caption ?? "",
						className: "aspect-square w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 text-xs text-muted-foreground",
						children: g.caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "destructive",
						className: "absolute right-2 top-2 opacity-0 transition group-hover:opacity-100",
						onClick: () => remove(g.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})
				]
			}, g.id))
		})
	] });
}
//#endregion
export { Page as component };
