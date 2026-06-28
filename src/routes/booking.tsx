import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getBlockedDates } from "@/lib/public.functions";
import { submitBooking } from "@/lib/user.functions";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const qo = queryOptions({ queryKey: ["blocked_dates"], queryFn: () => getBlockedDates() });

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Choreography — Rhythm Aure" },
      { name: "description", content: "Reserve bespoke choreography for your event." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(qo),
  errorComponent: ({ error }) => <div className="p-8">{error.message}</div>,
  notFoundComponent: () => <div className="p-8">Not found</div>,
  component: Page,
});

function Page() {
  const { data: blocked } = useSuspenseQuery(qo);
  const blockedDates = blocked.map((d) => new Date(d + "T00:00:00"));
  const [date, setDate] = useState<Date | undefined>();
  const [form, setForm] = useState({ name: "", email: "", phone: "", event_type: "", event_location: "", guests: "", message: "" });
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const submit = useServerFn(submitBooking);
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setAuthed(!!data.user);
      if (data.user) setForm((f) => ({ ...f, email: data.user.email ?? "" }));
    });
  }, []);

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    if (!date) return toast.error("Pick an event date");
    setBusy(true);
    try {
      await submit({
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          event_type: form.event_type || undefined,
          event_date: date.toISOString().slice(0, 10),
          event_location: form.event_location || undefined,
          guests: form.guests ? Number(form.guests) : undefined,
          message: form.message || undefined,
        },
      });
      toast.success("Booking request sent! We'll respond within 24 hours.");
      router.invalidate();
      navigate({ to: "/dashboard/bookings" });
    } catch (err) {
      toast.error((err as Error).message);
    } finally { setBusy(false); }
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-accent">Book</p>
        <h1 className="mt-2 font-display text-5xl">Choreography for your event</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Pick a date and tell us about your event. Greyed-out dates are unavailable.</p>

        {authed === false ? (
          <div className="mt-10 rounded-2xl border bg-card p-8 text-center">
            <p>Please sign in to submit a booking request.</p>
            <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="/auth">Sign in</a>
            </Button>
          </div>
        ) : (
          <form onSubmit={handle} className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6">
              <Label>Event date</Label>
              <div className="mt-3 flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={[{ before: new Date() }, ...blockedDates.map((d) => ({ from: d, to: d }))]}
                />
              </div>
              {date && <p className="mt-3 text-center text-sm">Selected: <strong>{date.toDateString()}</strong></p>}
            </div>

            <div className="space-y-4 rounded-2xl border bg-card p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label>Your name</Label><Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                <div><Label>Phone</Label><Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
              </div>
              <div><Label>Email</Label><Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label>Event type</Label><Input placeholder="Wedding, corporate…" value={form.event_type} onChange={(e) => setForm({ ...form, event_type: e.target.value })} /></div>
                <div><Label>Guests</Label><Input type="number" min={1} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} /></div>
              </div>
              <div><Label>Venue / location</Label><Input value={form.event_location} onChange={(e) => setForm({ ...form, event_location: e.target.value })} /></div>
              <div><Label>Tell us about your vision</Label><Textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
              <Button type="submit" disabled={busy} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {busy ? "Sending…" : "Send booking request"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </PageShell>
  );
}
