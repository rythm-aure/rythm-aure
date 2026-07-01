import { t as supabase } from "./client-SYK2JaWV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/storage-04n7h2S8.js
var PROJECT_URL = "https://qsmhttdytievibgpdqde.supabase.co";
/**
* Builds a long-lived signed URL for a stored object (private bucket).
* Stored URL is rebuilt at upload time only.
*/
async function uploadAndGetUrl(bucket, file, prefix = "") {
	const ext = file.name.split(".").pop() ?? "bin";
	const path = `${prefix}${crypto.randomUUID()}.${ext}`;
	const { error } = await supabase.storage.from(bucket).upload(path, file, {
		cacheControl: "31536000",
		upsert: false,
		contentType: file.type
	});
	if (error) throw error;
	const publicUrl = `${PROJECT_URL}/storage/v1/object/public/${bucket}/${path}`;
	const { data: signed } = await supabase.storage.from(bucket).createSignedUrl(path, 3600 * 24 * 365 * 10);
	return signed?.signedUrl ?? publicUrl;
}
//#endregion
export { uploadAndGetUrl as t };
