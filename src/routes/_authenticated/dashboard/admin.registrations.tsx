import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DashShell } from "@/components/dash-shell";
import { adminListRegistrations, adminUpdateRegistration } from "@/lib/admin.functions";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "../dashboard.index";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard/admin/registrations")({ component: Page });

function Page() {
  const list = useServerFn(adminListRegistrations);
  const upd = useServerFn(adminUpdateRegistration);
  const qc = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ["admin_regs"], queryFn: () => list() });

  async function setStatus(id: string, status: "verified" | "rejected" | "pending") {
    try {
      await upd({ data: { id, payment_status: status } });
      toast.success("Updated");
      qc.invalidateQueries({ queryKey: ["admin_regs"] });
    } catch (e) { toast.error((e as Error).message); }
  }

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Registrations</h1>
      <div className="mt-8 overflow-x-auto rounded-2xl border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr><th className="p-3">Attendee</th><th className="p-3">Workshop</th><th className="p-3">Contact</th><th className="p-3">UPI Ref</th><th className="p-3">Status</th><th className="p-3">Action</th></tr>
          </thead>
          <tbody>
            {data.map((r: any) => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-medium">{r.name}</td>
                <td className="p-3">{r.workshop?.title}</td>
                <td className="p-3 text-xs">{r.email}<br />{r.phone}</td>
                <td className="p-3 font-mono text-xs">{r.upi_txn_ref}</td>
                <td className="p-3"><StatusBadge status={r.payment_status} /></td>
                <td className="p-3 space-x-2 whitespace-nowrap">
                  <Button size="sm" onClick={() => setStatus(r.id, "verified")} className="bg-emerald-600 hover:bg-emerald-700">Verify</Button>
                  <Button size="sm" variant="destructive" onClick={() => setStatus(r.id, "rejected")}>Reject</Button>
                </td>
              </tr>
            ))}
            {data.length === 0 && <tr><td colSpan={6} className="p-8 text-center text-muted-foreground">No registrations yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </DashShell>
  );
}
