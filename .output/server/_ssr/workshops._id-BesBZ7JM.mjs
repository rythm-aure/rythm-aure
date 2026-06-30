import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getSiteSettings, o as getWorkshopById } from "./public.functions-Bl3KHXh9.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workshops._id-BesBZ7JM.js
var $$splitComponentImporter = () => import("./workshops._id-CkO5-B5Y.mjs");
var $$splitNotFoundComponentImporter = () => import("./workshops._id-ByNui-w_.mjs");
var $$splitErrorComponentImporter = () => import("./workshops._id-ByY8xZD4.mjs");
var Route = createFileRoute("/workshops/$id")({
	loader: ({ context, params }) => {
		const qo = queryOptions({
			queryKey: ["workshop", params.id],
			queryFn: () => getWorkshopById({ data: { id: params.id } })
		});
		context.queryClient.ensureQueryData(qo);
		context.queryClient.ensureQueryData(queryOptions({
			queryKey: ["site_settings"],
			queryFn: () => getSiteSettings()
		}));
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
