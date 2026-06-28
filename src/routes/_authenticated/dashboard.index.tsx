import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { DashShell } from "@/components/dash-shell";
import { getMyBookings, getMyRegistrations } from "@/lib/user.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Calendar } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/_authenticated/dashboard/")({ component: Page });


function Page() { 

  const regsFn = useServerFn(getMyRegistrations);
  const bookFn = useServerFn(getMyBookings);
  const { data: regs = [] } = useQuery({ queryKey: ["my_regs"], queryFn: () => regsFn() });
  const { data: bookings = [] } = useQuery({ queryKey: ["my_bookings"], queryFn: () => bookFn() });

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Welcome back</h1>
      <p className="mt-1 text-muted-foreground">Quick view of your activity at Rhythm Aure.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Ticket className="size-5 text-accent" /> Workshop registrations</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-display">{regs.length}</p>
            <Link to="/dashboard/registrations" className="mt-2 inline-block text-sm text-accent hover:underline">View all →</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="size-5 text-accent" /> Choreography bookings</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-display">{bookings.length}</p>
            <Link to="/dashboard/bookings" className="mt-2 inline-block text-sm text-accent hover:underline">View all →</Link>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 font-display text-xl">Recent registrations</h2>
      <div className="mt-4 space-y-2">
        {regs.slice(0, 5).map((r: any) => (
          <div key={r.id} className="flex items-center justify-between rounded-lg border bg-card p-4">
            <div>
              <p className="font-medium">{r.workshop?.title ?? "—"}</p>
              <p className="text-xs text-muted-foreground">{r.workshop?.starts_at ? new Date(r.workshop.starts_at).toLocaleString() : ""}</p>
            </div>
            <StatusBadge status={r.payment_status} />
          </div>
        ))}
        {regs.length === 0 && <p className="text-sm text-muted-foreground">No registrations yet.</p>}
      </div>

      <h2 className="mt-10 font-display text-xl">Recent bookings</h2>
      <div className="mt-4 space-y-2">
        {bookings.slice(0, 5).map((b: any) => (
          <div key={b.id} className="flex items-center justify-between rounded-lg border bg-card p-4">
            <div><p className="font-medium">{b.event_type ?? "Event"} — {new Date(b.event_date).toDateString()}</p><p className="text-xs text-muted-foreground">{b.event_location ?? ""}</p></div>
            <StatusBadge status={b.status} />
          </div>
        ))}
        {bookings.length === 0 && <p className="text-sm text-muted-foreground">No bookings yet.</p>}
      </div>
    </DashShell>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-amber-100 text-amber-800",
    verified: "bg-emerald-100 text-emerald-800",
    rejected: "bg-red-100 text-red-800",
    accepted: "bg-emerald-100 text-emerald-800",
    declined: "bg-red-100 text-red-800",
    completed: "bg-blue-100 text-blue-800",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${map[status] ?? "bg-muted"}`}>{status}</span>;
}
