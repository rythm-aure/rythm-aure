import { r as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { a as Trash2 } from "../_libs/lucide-react.mjs";
import { o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-C675DuMy.mjs";
import { f as adminSaveAnnouncement, i as adminListAnnouncements, t as adminDeleteAnnouncement } from "./admin.functions-BXxmfY2y.mjs";
import { t as Input } from "./input-uzm9g8Y7.mjs";
import { t as Textarea } from "./textarea-DjqHhWkA.mjs";
import { t as Switch } from "./switch-DtEVXaE2.mjs";
import { t as Label } from "./label-BeT0bXvu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.announcements-CyOmxmUL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const list = useServerFn(adminListAnnouncements);
	const save = useServerFn(adminSaveAnnouncement);
	const del = useServerFn(adminDeleteAnnouncement);
	const qc = useQueryClient();
	const { data = [] } = useQuery({
		queryKey: ["admin_ann"],
		queryFn: () => list()
	});
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		body: "",
		is_active: true
	});
	async function add(e) {
		e.preventDefault();
		try {
			await save({ data: form });
			setForm({
				title: "",
				body: "",
				is_active: true
			});
			qc.invalidateQueries({ queryKey: ["admin_ann"] });
			qc.invalidateQueries({ queryKey: ["ann_pub"] });
			toast.success("Posted");
		} catch (e) {
			toast.error(e.message);
		}
	}
	async function toggle(id, is_active, title) {
		await save({ data: {
			id,
			title,
			is_active
		} });
		qc.invalidateQueries({ queryKey: ["admin_ann"] });
		qc.invalidateQueries({ queryKey: ["ann_pub"] });
	}
	async function remove(id) {
		if (!confirm("Delete?")) return;
		await del({ data: { id } });
		qc.invalidateQueries({ queryKey: ["admin_ann"] });
		qc.invalidateQueries({ queryKey: ["ann_pub"] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Announcements"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: add,
			className: "mt-6 space-y-3 rounded-2xl border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					required: true,
					value: form.title,
					onChange: (e) => setForm({
						...form,
						title: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Body" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 3,
					value: form.body,
					onChange: (e) => setForm({
						...form,
						body: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "bg-accent text-accent-foreground hover:bg-accent/90",
					children: "Post announcement"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-3",
			children: data.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 rounded-xl border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: a.title
					}), a.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: a.body
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: a.is_active,
						onCheckedChange: (v) => toggle(a.id, v, a.title)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						onClick: () => remove(a.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})]
				})]
			}, a.id))
		})
	] });
}
//#endregion
export { Page as component };
