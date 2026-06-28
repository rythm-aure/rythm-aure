import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { DashShell } from "@/components/dash-shell";
import { getMyRegistrations } from "@/lib/user.functions";
import { StatusBadge } from "./dashboard.index";

export const Route = createFileRoute("/_authenticated/dashboard/registrations")({ component: Page });

function Page() {
  const fn = useServerFn(getMyRegistrations);
  const { data = [] } = useQuery({ queryKey: ["my_regs"], queryFn: () => fn() });
  return (
    <DashShell>
      <h1 className="font-display text-3xl">My workshop registrations</h1>
      <p className="mt-1 text-muted-foreground">Track payment verification status here.</p>
      <div className="mt-8 overflow-hidden rounded-2xl border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr>
              <th className="p-3">Workshop</th><th className="p-3">Date</th><th className="p-3">UPI Ref</th><th className="p-3">Status</th><th className="p-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r: any) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-medium">{r.workshop?.title ?? "—"}</td>
                <td className="p-3">{r.workshop?.starts_at ? new Date(r.workshop.starts_at).toLocaleString() : ""}</td>
                <td className="p-3 font-mono text-xs">{r.upi_txn_ref ?? "—"}</td>
                <td className="p-3"><StatusBadge status={r.payment_status} /></td>
                <td className="p-3 text-muted-foreground">{r.admin_notes ?? ""}</td>
              </tr>
            ))}
            {data.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">No registrations yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </DashShell>
  );
}
