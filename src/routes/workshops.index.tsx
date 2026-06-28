import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/site-nav";
import { getPublishedWorkshops } from "@/lib/public.functions";
import { CalendarDays, MapPin, Users } from "lucide-react";

const qo = queryOptions({ queryKey: ["workshops_pub"], queryFn: () => getPublishedWorkshops() });

export const Route = createFileRoute("/workshops/")({
  head: () => ({
    meta: [
      { title: "Workshops — Rhythm Aure" },
      { name: "description", content: "Upcoming dance workshops at Rhythm Aure." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(qo),
  errorComponent: ({ error }) => <div className="p-8">{error.message}</div>,
  notFoundComponent: () => <div className="p-8">Not found</div>,
  component: Page,
});

function Page() {
  const { data: workshops } = useSuspenseQuery(qo);
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-accent">Workshops</p>
        <h1 className="mt-2 font-display text-5xl">Upcoming sessions</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Reserve your spot. Pay via UPI and our team will verify your registration.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.length === 0 && <p className="text-muted-foreground">No workshops scheduled.</p>}
          {workshops.map((w) => (
            <Link key={w.id} to="/workshops/$id" params={{ id: w.id }} className="group overflow-hidden rounded-2xl border bg-card transition hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {w.cover_url && <img src={w.cover_url} alt={w.title} className="size-full object-cover transition group-hover:scale-105" />}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl">{w.title}</h3>
                  {w.level && <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">{w.level}</span>}
                </div>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><CalendarDays className="size-4" />{new Date(w.starts_at).toLocaleString()}</span>
                  {w.location && <span className="inline-flex items-center gap-1"><MapPin className="size-4" />{w.location}</span>}
                  <span className="inline-flex items-center gap-1"><Users className="size-4" />{w.capacity} seats</span>
                </div>
                <p className="mt-3 font-medium text-accent">₹{Number(w.price).toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
