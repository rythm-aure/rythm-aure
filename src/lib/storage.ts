import { supabase } from "@/integrations/supabase/client";

const PROJECT_URL = import.meta.env.VITE_SUPABASE_URL as string;

/**
 * Builds a long-lived signed URL for a stored object (private bucket).
 * Stored URL is rebuilt at upload time only.
 */
export async function uploadAndGetUrl(bucket: string, file: File, prefix = "") {
  const ext = file.name.split(".").pop() ?? "bin";
  const path = `${prefix}${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
    contentType: file.type,
  });
  if (error) throw error;
  // Try public URL first; if buckets get switched public later it just works.
  const publicUrl = `${PROJECT_URL}/storage/v1/object/public/${bucket}/${path}`;
  // For private buckets, also create a 10-year signed URL fallback.
  const { data: signed } = await supabase.storage.from(bucket).createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
  return signed?.signedUrl ?? publicUrl;
}
