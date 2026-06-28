
-- Public read for displayable assets
CREATE POLICY "public read media" ON storage.objects FOR SELECT TO anon, authenticated
  USING (bucket_id IN ('workshops','gallery','settings'));

-- Admin write
CREATE POLICY "admin upload media" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id IN ('workshops','gallery','settings') AND public.has_role(auth.uid(),'admin'));
CREATE POLICY "admin update media" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id IN ('workshops','gallery','settings') AND public.has_role(auth.uid(),'admin'));
CREATE POLICY "admin delete media" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id IN ('workshops','gallery','settings') AND public.has_role(auth.uid(),'admin'));
