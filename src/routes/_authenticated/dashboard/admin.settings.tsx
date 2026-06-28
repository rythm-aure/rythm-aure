import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DashShell } from "@/components/dash-shell";
import { getSiteSettings } from "@/lib/public.functions";
import { adminUpdateSettings } from "@/lib/admin.functions";
import { uploadAndGetUrl } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard/admin/settings")({ component: Page });

function Page() {
  const get = useServerFn(getSiteSettings);
  const save = useServerFn(adminUpdateSettings);
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin_settings"], queryFn: () => get() });
  const [s, setS] = useState<any>(null);
  useEffect(() => { if (data && !s) setS(data); }, [data, s]);

  if (!s) return <DashShell><p>Loading…</p></DashShell>;

  const set = (k: string, v: any) => setS({ ...s, [k]: v });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const payload = { ...s };
      delete payload.id; delete payload.updated_at;
      await save({ data: payload });
      qc.invalidateQueries({ queryKey: ["site_settings"] });
      qc.invalidateQueries({ queryKey: ["admin_settings"] });
      toast.success("Saved");
    } catch (e) { toast.error((e as Error).message); }
  }

  async function uploadQr(f: File) {
    try { const url = await uploadAndGetUrl("settings", f, "qr/"); set("upi_qr_url", url); } catch (e) { toast.error((e as Error).message); }
  }
  async function uploadHero(f: File) {
    try { const url = await uploadAndGetUrl("settings", f, "hero/"); set("hero_image_url", url); } catch (e) { toast.error((e as Error).message); }
  }

  const toggles = [
    ["show_hero", "Hero section"],
    ["show_workshops", "Workshops section"],
    ["show_booking", "Booking section"],
    ["show_gallery", "Gallery section"],
    ["show_about", "About section"],
    ["show_announcements", "Announcements bar"],
    ["show_contact", "Contact section"],
  ] as const;

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Site settings</h1>
      <form onSubmit={submit} className="mt-6 space-y-8">
        <section className="rounded-2xl border bg-card p-6">
          <h2 className="font-display text-xl">Brand</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div><Label>Studio name</Label><Input value={s.studio_name} onChange={(e) => set("studio_name", e.target.value)} /></div>
            <div><Label>Tagline</Label><Input value={s.tagline ?? ""} onChange={(e) => set("tagline", e.target.value)} /></div>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6">
          <h2 className="font-display text-xl">Hero</h2>
          <div className="mt-4 space-y-4">
            <div><Label>Hero title</Label><Input value={s.hero_title ?? ""} onChange={(e) => set("hero_title", e.target.value)} /></div>
            <div><Label>Hero subtitle</Label><Textarea value={s.hero_subtitle ?? ""} onChange={(e) => set("hero_subtitle", e.target.value)} /></div>
            <div>
              <Label>Hero background image</Label>
              <Input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && uploadHero(e.target.files[0])} />
              {s.hero_image_url && <img src={s.hero_image_url} alt="" className="mt-2 h-32 rounded-md object-cover" />}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6">
          <h2 className="font-display text-xl">About</h2>
          <div className="mt-4 space-y-4">
            <div><Label>About title</Label><Input value={s.about_title ?? ""} onChange={(e) => set("about_title", e.target.value)} /></div>
            <div><Label>About body</Label><Textarea rows={6} value={s.about_body ?? ""} onChange={(e) => set("about_body", e.target.value)} /></div>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6">
          <h2 className="font-display text-xl">Contact & social</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div><Label>Email</Label><Input type="email" value={s.contact_email ?? ""} onChange={(e) => set("contact_email", e.target.value)} /></div>
            <div><Label>Phone</Label><Input value={s.contact_phone ?? ""} onChange={(e) => set("contact_phone", e.target.value)} /></div>
            <div className="sm:col-span-2"><Label>Address</Label><Input value={s.contact_address ?? ""} onChange={(e) => set("contact_address", e.target.value)} /></div>
            <div><Label>Instagram URL</Label><Input value={s.instagram_url ?? ""} onChange={(e) => set("instagram_url", e.target.value)} /></div>
            <div><Label>YouTube URL</Label><Input value={s.youtube_url ?? ""} onChange={(e) => set("youtube_url", e.target.value)} /></div>
            <div><Label>Facebook URL</Label><Input value={s.facebook_url ?? ""} onChange={(e) => set("facebook_url", e.target.value)} /></div>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6">
          <h2 className="font-display text-xl">UPI payment</h2>
          <div className="mt-4 space-y-4">
            <div><Label>UPI ID</Label><Input value={s.upi_id ?? ""} onChange={(e) => set("upi_id", e.target.value)} placeholder="yourname@upi" /></div>
            <div>
              <Label>UPI QR image</Label>
              <Input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && uploadQr(e.target.files[0])} />
              {s.upi_qr_url && <img src={s.upi_qr_url} alt="" className="mt-2 h-40 rounded-md object-contain" />}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6">
          <h2 className="font-display text-xl">Section visibility</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {toggles.map(([k, label]) => (
              <label key={k} className="flex items-center justify-between rounded-md border p-3">
                <span>{label}</span>
                <Switch checked={!!s[k]} onCheckedChange={(v) => set(k, v)} />
              </label>
            ))}
          </div>
        </section>

        <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Save all settings</Button>
      </form>
    </DashShell>
  );
}
