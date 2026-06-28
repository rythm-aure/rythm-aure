import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { DashShell } from "@/components/dash-shell";
import { adminOverview, adminListRegistrations, adminListBookings } from "@/lib/admin.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "../dashboard.index";

export const Route = createFileRoute("/_authenticated/dashboard/admin/")({ component: Page });

function Page() {
  const fn = useServerFn(adminOverview);
  const regsFn = useServerFn(adminListRegistrations);
  const bkFn = useServerFn(adminListBookings);
  const { data: o } = useQuery({ queryKey: ["admin_overview"], queryFn: () => fn() });
  const { data: regs = [] } = useQuery({ queryKey: ["admin_regs"], queryFn: () => regsFn() });
  const { data: bookings = [] } = useQuery({ queryKey: ["admin_bookings"], queryFn: () => bkFn() });

  const items = [
    { k: "Workshops", v: o?.workshops ?? 0 },
    { k: "Registrations", v: o?.registrations ?? 0 },
    { k: "Bookings", v: o?.bookings ?? 0 },
    { k: "Pending payments", v: o?.pending_payments ?? 0 },
  ];

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Admin overview</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <Card key={i.k}>
            <CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">{i.k}</CardTitle></CardHeader>
            <CardContent><p className="font-display text-4xl">{i.v}</p></CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-xl">Recent registrations</h2>
          <div className="mt-3 space-y-2">
            {regs.slice(0, 5).map((r: any) => (
              <div key={r.id} className="flex items-center justify-between rounded-lg border bg-card p-3">
                <div><p className="text-sm font-medium">{r.name}</p><p className="text-xs text-muted-foreground">{r.workshop?.title}</p></div>
                <StatusBadge status={r.payment_status} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-display text-xl">Recent bookings</h2>
          <div className="mt-3 space-y-2">
            {bookings.slice(0, 5).map((b: any) => (
              <div key={b.id} className="flex items-center justify-between rounded-lg border bg-card p-3">
                <div><p className="text-sm font-medium">{b.name}</p><p className="text-xs text-muted-foreground">{new Date(b.event_date).toDateString()}</p></div>
                <StatusBadge status={b.status} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashShell>
  );
}
