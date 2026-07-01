import { r as __toESM } from "../_runtime.mjs";
import { O as isRedirect, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DIANvJev.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BmV9FEGH.mjs";
import { a as objectType, i as numberType, o as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/user.functions-BZm-ztTP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var RegisterSchema = objectType({
	workshop_id: stringType().uuid(),
	name: stringType().trim().min(1).max(100),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().min(5).max(20).optional(),
	upi_txn_ref: stringType().trim().min(3).max(100)
});
var registerForWorkshop = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => RegisterSchema.parse(d)).handler(createSsrRpc("4d9937bf30f8e22b61d617f85c231df039135590b93982a02080c6266aed8ea6"));
var getMyRegistrations = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("50d1c0d9692e2f9319a22aaa8551473da2beb1c4934e97516dd42deabd0a417a"));
var BookingSchema = objectType({
	name: stringType().trim().min(1).max(100),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().min(5).max(20),
	event_type: stringType().trim().max(80).optional(),
	event_date: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
	event_location: stringType().trim().max(200).optional(),
	guests: numberType().int().positive().max(1e4).optional(),
	message: stringType().trim().max(2e3).optional()
});
var submitBooking = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => BookingSchema.parse(d)).handler(createSsrRpc("0f64f21b98927953f949a43a2a5aac11e5fbc123c032bcefbfd01012fe8b1a4a"));
var getMyBookings = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("9130e2954a9aaa4008ec0ff0696f482b7331f26205dd7935a817fb44318f8bc8"));
var getMyRole = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("8a2a02e78b2b9583b4ddbe9ed22aa1eca7e3f31fd7502d41422c55fe6c704010"));
createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("17da8c0ac7464fe32c1d4076af2c8b5bd4bbed0370cb9fa66f11822acc74354f"));
//#endregion
export { submitBooking as a, registerForWorkshop as i, getMyRegistrations as n, useServerFn as o, getMyRole as r, getMyBookings as t };
