import { r as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { o as useServerFn } from "./user.functions-BZm-ztTP.mjs";
import { t as DashShell } from "./dash-shell-C675DuMy.mjs";
import { _ as adminUpdateBooking, o as adminListBookings } from "./admin.functions-BXxmfY2y.mjs";
import { t as Textarea } from "./textarea-DjqHhWkA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as StatusBadge } from "./dashboard.index-B3jEX9dx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.bookings-DoOjoZUU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const list = useServerFn(adminListBookings);
	const upd = useServerFn(adminUpdateBooking);
	const qc = useQueryClient();
	const { data = [] } = useQuery({
		queryKey: ["admin_bookings"],
		queryFn: () => list()
	});
	const [notes, setNotes] = (0, import_react.useState)({});
	async function setStatus(id, status) {
		try {
			await upd({ data: {
				id,
				status,
				admin_notes: notes[id]
			} });
			toast.success("Updated");
			qc.invalidateQueries({ queryKey: ["admin_bookings"] });
		} catch (e) {
			toast.error(e.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl",
		children: "Choreography bookings"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 space-y-4",
		children: [data.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg",
							children: [
								b.name,
								" — ",
								b.event_type ?? "Event"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								new Date(b.event_date).toDateString(),
								" · ",
								b.event_location ?? "",
								" · ",
								b.guests ?? "?",
								" guests"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								b.email,
								" · ",
								b.phone
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: b.status })]
				}),
				b.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 rounded-md bg-secondary/40 p-3 text-sm",
					children: b.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					className: "mt-3",
					placeholder: "Notes for client (optional)",
					defaultValue: b.admin_notes ?? "",
					onChange: (e) => setNotes((n) => ({
						...n,
						[b.id]: e.target.value
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => setStatus(b.id, "accepted"),
							className: "bg-emerald-600 hover:bg-emerald-700",
							children: "Accept"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "destructive",
							onClick: () => setStatus(b.id, "declined"),
							children: "Decline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setStatus(b.id, "completed"),
							children: "Mark completed"
						})
					]
				})
			]
		}, b.id)), data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "No bookings yet."
		})]
	})] });
}
//#endregion
export { Page as component };
