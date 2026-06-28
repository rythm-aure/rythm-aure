import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site-nav";
import { getSiteSettings, getWorkshopById } from "@/lib/public.functions";
import { registerForWorkshop } from "@/lib/user.functions";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/workshops/$id")({
  loader: ({ context, params }) => {
    const qo = queryOptions({ queryKey: ["workshop", params.id], queryFn: () => getWorkshopById({ data: { id: params.id } }) });
    context.queryClient.ensureQueryData(qo);
    context.queryClient.ensureQueryData(queryOptions({ queryKey: ["site_settings"], queryFn: () => getSiteSettings() }));
  },
  errorComponent: ({ error }) => <div className="p-8">{error.message}</div>,
  notFoundComponent: () => <div className="p-8">Workshop not found</div>,
  component: Page,
});

function Page() {
  const { id } = Route.useParams();
  const wQO = queryOptions({ queryKey: ["workshop", id], queryFn: () => getWorkshopById({ data: { id } }) });
  const sQO = queryOptions({ queryKey: ["site_settings"], queryFn: () => getSiteSettings() });
  const { data: w } = useSuspenseQuery(wQO);
  const { data: s } = useSuspenseQuery(sQO);
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [step, setStep] = useState<"info" | "pay">("info");
  const [form, setForm] = useState({ name: "", email: "", phone: "", upi_txn_ref: "" });
  const [busy, setBusy] = useState(false);
  const register = useServerFn(registerForWorkshop);
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setAuthed(!!data.user);
      if (data.user) setForm((f) => ({ ...f, email: data.user.email ?? "", name: f.name || (data.user.user_metadata?.full_name ?? "") }));
    });
  }, []);

  if (!w) return <PageShell><div className="p-8">Workshop not found.</div></PageShell>;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      await register({ data: { workshop_id: id, ...form } });
      toast.success("Registration submitted! We'll verify your payment shortly.");
      router.invalidate();
      navigate({ to: "/dashboard/registrations" });
    } catch (err) {
      toast.error((err as Error).message);
    } finally { setBusy(false); }
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/workshops" className="text-sm text-accent hover:underline">← All workshops</Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              {w.cover_url && <img src={w.cover_url} alt={w.title} className="size-full object-cover" />}
            </div>
          </div>
          <div>
            <h1 className="font-display text-4xl">{w.title}</h1>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><CalendarDays className="size-4" />{new Date(w.starts_at).toLocaleString()}</span>
              {w.location && <span className="inline-flex items-center gap-1"><MapPin className="size-4" />{w.location}</span>}
              <span className="inline-flex items-center gap-1"><Users className="size-4" />{w.capacity} seats</span>
            </div>
            <p className="mt-2 text-2xl font-display text-accent">₹{Number(w.price).toLocaleString()}</p>
            {w.description && <p className="mt-4 whitespace-pre-wrap text-foreground/80">{w.description}</p>}

            <div className="mt-8 rounded-2xl border bg-card p-6">
              {authed === false && (
                <>
                  <p className="text-sm">Please sign in to register.</p>
                  <Button asChild className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/auth">Sign in / Sign up</Link></Button>
                </>
              )}
              {authed && step === "info" && (
                <form onSubmit={(e) => { e.preventDefault(); setStep("pay"); }} className="space-y-4">
                  <h3 className="font-display text-xl">Register</h3>
                  <div><Label>Your name</Label><Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                  <div><Label>Email</Label><Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                  <div><Label>Phone</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Continue to payment</Button>
                </form>
              )}
              {authed && step === "pay" && (
                <form onSubmit={submit} className="space-y-4">
                  <h3 className="font-display text-xl">Pay ₹{Number(w.price).toLocaleString()} via UPI</h3>
                  <div className="rounded-lg border bg-secondary/40 p-4 text-sm">
                    {s?.upi_id ? (
                      <p><strong>UPI ID:</strong> {s.upi_id}</p>
                    ) : (
                      <p className="text-muted-foreground">UPI details will be shared by the studio shortly.</p>
                    )}
                    {s?.upi_qr_url && <img src={s.upi_qr_url} alt="UPI QR" className="mt-3 size-48 rounded-md object-contain" />}
                  </div>
                  <div>
                    <Label>UPI Transaction Reference</Label>
                    <Input required value={form.upi_txn_ref} onChange={(e) => setForm({ ...form, upi_txn_ref: e.target.value })} placeholder="e.g. 4231XXXXXX" />
                    <p className="mt-1 text-xs text-muted-foreground">Enter the reference / UTR from your UPI app after payment.</p>
                  </div>
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" onClick={() => setStep("info")}>Back</Button>
                    <Button type="submit" disabled={busy} className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">{busy ? "Submitting…" : "Submit registration"}</Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
