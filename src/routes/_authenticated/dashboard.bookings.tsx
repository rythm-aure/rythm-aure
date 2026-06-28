import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { DashShell } from "@/components/dash-shell";
import { getMyBookings } from "@/lib/user.functions";
import { StatusBadge } from "./dashboard.index";

export const Route = createFileRoute("/_authenticated/dashboard/bookings")({ component: Page });

function Page() {
  const fn = useServerFn(getMyBookings);
  const { data = [] } = useQuery({ queryKey: ["my_bookings"], queryFn: () => fn() });
  return (
    <DashShell>
      <h1 className="font-display text-3xl">My choreography bookings</h1>
      <p className="mt-1 text-muted-foreground">See if the studio has accepted your request.</p>
      <div className="mt-8 space-y-3">
        {data.map((b: any) => (
          <div key={b.id} className="rounded-2xl border bg-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg">{b.event_type ?? "Event"} — {new Date(b.event_date).toDateString()}</p>
                <p className="text-sm text-muted-foreground">{b.event_location ?? ""}{b.guests ? ` · ${b.guests} guests` : ""}</p>
              </div>
              <StatusBadge status={b.status} />
            </div>
            {b.message && <p className="mt-3 text-sm">{b.message}</p>}
            {b.admin_notes && <div className="mt-3 rounded-md bg-accent/10 p-3 text-sm"><strong>Studio note:</strong> {b.admin_notes}</div>}
          </div>
        ))}
        {data.length === 0 && <p className="text-muted-foreground">No bookings yet.</p>}
      </div>
    </DashShell>
  );
}
