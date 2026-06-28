import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { DashShell } from "@/components/dash-shell";
import { adminListBookings, adminUpdateBooking } from "@/lib/admin.functions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "../dashboard.index";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard/admin/bookings")({ component: Page });

function Page() {
  const list = useServerFn(adminListBookings);
  const upd = useServerFn(adminUpdateBooking);
  const qc = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ["admin_bookings"], queryFn: () => list() });
  const [notes, setNotes] = useState<Record<string, string>>({});

  async function setStatus(id: string, status: "accepted" | "declined" | "completed" | "pending") {
    try {
      await upd({ data: { id, status, admin_notes: notes[id] } });
      toast.success("Updated");
      qc.invalidateQueries({ queryKey: ["admin_bookings"] });
    } catch (e) { toast.error((e as Error).message); }
  }

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Choreography bookings</h1>
      <div className="mt-8 space-y-4">
        {data.map((b: any) => (
          <div key={b.id} className="rounded-2xl border bg-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg">{b.name} — {b.event_type ?? "Event"}</p>
                <p className="text-sm text-muted-foreground">{new Date(b.event_date).toDateString()} · {b.event_location ?? ""} · {b.guests ?? "?"} guests</p>
                <p className="text-xs text-muted-foreground">{b.email} · {b.phone}</p>
              </div>
              <StatusBadge status={b.status} />
            </div>
            {b.message && <p className="mt-3 rounded-md bg-secondary/40 p-3 text-sm">{b.message}</p>}
            <Textarea className="mt-3" placeholder="Notes for client (optional)" defaultValue={b.admin_notes ?? ""} onChange={(e) => setNotes((n) => ({ ...n, [b.id]: e.target.value }))} />
            <div className="mt-3 flex flex-wrap gap-2">
              <Button size="sm" onClick={() => setStatus(b.id, "accepted")} className="bg-emerald-600 hover:bg-emerald-700">Accept</Button>
              <Button size="sm" variant="destructive" onClick={() => setStatus(b.id, "declined")}>Decline</Button>
              <Button size="sm" variant="outline" onClick={() => setStatus(b.id, "completed")}>Mark completed</Button>
            </div>
          </div>
        ))}
        {data.length === 0 && <p className="text-muted-foreground">No bookings yet.</p>}
      </div>
    </DashShell>
  );
}
