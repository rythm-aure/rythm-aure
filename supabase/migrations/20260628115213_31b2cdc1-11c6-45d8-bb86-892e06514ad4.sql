
-- =========================
-- ENUMS
-- =========================
CREATE TYPE public.app_role AS ENUM ('admin','user');
CREATE TYPE public.workshop_status AS ENUM ('draft','published','closed');
CREATE TYPE public.payment_status AS ENUM ('pending','verified','rejected');
CREATE TYPE public.booking_status AS ENUM ('pending','accepted','declined','completed');

-- =========================
-- updated_at helper
-- =========================
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- =========================
-- PROFILES
-- =========================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "profiles self read" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "profiles self upsert" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles self update" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =========================
-- USER ROLES
-- =========================
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE POLICY "roles self read" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "roles admin read all" ON public.user_roles FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "roles admin manage" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- =========================
-- handle new user: create profile + grant role (admin if first user, else user)
-- =========================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE _has_admin BOOLEAN;
BEGIN
  INSERT INTO public.profiles (id, full_name, email, phone)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', NEW.email),
    NEW.email,
    NEW.raw_user_meta_data->>'phone'
  ) ON CONFLICT (id) DO NOTHING;

  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') INTO _has_admin;
  IF NOT _has_admin THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin') ON CONFLICT DO NOTHING;
  ELSE
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user') ON CONFLICT DO NOTHING;
  END IF;

  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =========================
-- SITE SETTINGS (singleton)
-- =========================
CREATE TABLE public.site_settings (
  id INT PRIMARY KEY DEFAULT 1,
  studio_name TEXT NOT NULL DEFAULT 'Rhythm Aure',
  tagline TEXT DEFAULT 'Where rhythm meets elegance',
  hero_title TEXT DEFAULT 'Move with grace. Perform with fire.',
  hero_subtitle TEXT DEFAULT 'Premium dance workshops and bespoke choreography for unforgettable events.',
  hero_image_url TEXT,
  about_title TEXT DEFAULT 'About Rhythm Aure',
  about_body TEXT DEFAULT 'We are a contemporary dance studio dedicated to the art of movement.',
  contact_email TEXT,
  contact_phone TEXT,
  contact_address TEXT,
  instagram_url TEXT,
  youtube_url TEXT,
  facebook_url TEXT,
  upi_id TEXT,
  upi_qr_url TEXT,
  show_hero BOOLEAN NOT NULL DEFAULT true,
  show_workshops BOOLEAN NOT NULL DEFAULT true,
  show_booking BOOLEAN NOT NULL DEFAULT true,
  show_gallery BOOLEAN NOT NULL DEFAULT true,
  show_about BOOLEAN NOT NULL DEFAULT true,
  show_announcements BOOLEAN NOT NULL DEFAULT true,
  show_contact BOOLEAN NOT NULL DEFAULT true,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT site_settings_singleton CHECK (id = 1)
);
GRANT SELECT ON public.site_settings TO anon, authenticated;
GRANT UPDATE ON public.site_settings TO authenticated;
GRANT ALL ON public.site_settings TO service_role;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "settings public read" ON public.site_settings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "settings admin update" ON public.site_settings FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_settings_updated BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
INSERT INTO public.site_settings (id) VALUES (1) ON CONFLICT DO NOTHING;

-- =========================
-- WORKSHOPS
-- =========================
CREATE TABLE public.workshops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  cover_url TEXT,
  starts_at TIMESTAMPTZ NOT NULL,
  duration_minutes INT DEFAULT 90,
  location TEXT,
  level TEXT,
  price NUMERIC(10,2) NOT NULL DEFAULT 0,
  capacity INT NOT NULL DEFAULT 20,
  status public.workshop_status NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.workshops TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.workshops TO authenticated;
GRANT ALL ON public.workshops TO service_role;
ALTER TABLE public.workshops ENABLE ROW LEVEL SECURITY;
CREATE POLICY "workshops public read published" ON public.workshops FOR SELECT TO anon, authenticated USING (status = 'published' OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "workshops admin write" ON public.workshops FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_workshops_updated BEFORE UPDATE ON public.workshops FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =========================
-- WORKSHOP REGISTRATIONS
-- =========================
CREATE TABLE public.workshop_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id UUID NOT NULL REFERENCES public.workshops(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  upi_txn_ref TEXT,
  payment_status public.payment_status NOT NULL DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (workshop_id, user_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.workshop_registrations TO authenticated;
GRANT ALL ON public.workshop_registrations TO service_role;
ALTER TABLE public.workshop_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "reg owner read" ON public.workshop_registrations FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "reg owner insert" ON public.workshop_registrations FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "reg owner update ref" ON public.workshop_registrations FOR UPDATE TO authenticated USING (auth.uid() = user_id AND payment_status = 'pending') WITH CHECK (auth.uid() = user_id);
CREATE POLICY "reg admin manage" ON public.workshop_registrations FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_reg_updated BEFORE UPDATE ON public.workshop_registrations FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =========================
-- CHOREOGRAPHY BOOKINGS
-- =========================
CREATE TABLE public.choreography_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  event_type TEXT,
  event_date DATE NOT NULL,
  event_location TEXT,
  guests INT,
  message TEXT,
  status public.booking_status NOT NULL DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.choreography_bookings TO authenticated;
GRANT ALL ON public.choreography_bookings TO service_role;
ALTER TABLE public.choreography_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "book owner read" ON public.choreography_bookings FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "book owner insert" ON public.choreography_bookings FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "book admin manage" ON public.choreography_bookings FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_book_updated BEFORE UPDATE ON public.choreography_bookings FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =========================
-- AVAILABILITY BLOCKS (admin marks blocked dates)
-- =========================
CREATE TABLE public.availability_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blocked_date DATE NOT NULL UNIQUE,
  reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.availability_blocks TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.availability_blocks TO authenticated;
GRANT ALL ON public.availability_blocks TO service_role;
ALTER TABLE public.availability_blocks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "avail public read" ON public.availability_blocks FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "avail admin manage" ON public.availability_blocks FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- =========================
-- GALLERY
-- =========================
CREATE TABLE public.gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  caption TEXT,
  category TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.gallery_items TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.gallery_items TO authenticated;
GRANT ALL ON public.gallery_items TO service_role;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "gallery public read" ON public.gallery_items FOR SELECT TO anon, authenticated USING (is_active OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "gallery admin manage" ON public.gallery_items FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- =========================
-- ANNOUNCEMENTS
-- =========================
CREATE TABLE public.announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  body TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.announcements TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.announcements TO authenticated;
GRANT ALL ON public.announcements TO service_role;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ann public read" ON public.announcements FOR SELECT TO anon, authenticated USING (is_active OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "ann admin manage" ON public.announcements FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
