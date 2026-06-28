import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DashShell } from "@/components/dash-shell";
import { adminListBlocks, adminToggleBlock } from "@/lib/admin.functions";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard/admin/availability")({ component: Page });

function Page() {
  const list = useServerFn(adminListBlocks);
  const toggle = useServerFn(adminToggleBlock);
  const qc = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ["admin_blocks"], queryFn: () => list() });

  const blockedDates = data.map((b: any) => new Date(b.blocked_date + "T00:00:00"));

  async function pick(d: Date | undefined) {
    if (!d) return;

    function formatDate(date: Date) {
      return [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
      ].join("-");
    }

    const iso = formatDate(d);
    
    try {
      const res = await toggle({ data: { date: iso } });
      toast.success(res.blocked ? "Date blocked" : "Date unblocked");
      qc.invalidateQueries({ queryKey: ["admin_blocks"] });
      qc.invalidateQueries({ queryKey: ["blocked_dates"] });
    } catch (e) { toast.error((e as Error).message); }
  }

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Calendar availability</h1>
      <p className="mt-1 text-muted-foreground">Click any date to toggle whether choreography bookings can be made for it.</p>
      <div className="mt-8 inline-block rounded-2xl border bg-card p-4">
        <Calendar mode="single" onSelect={pick} modifiers={{ blocked: blockedDates }} modifiersClassNames={{ blocked: "line-through opacity-50" }} />
      </div>
      <div className="mt-6">
        <h2 className="font-display text-xl">Blocked dates</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {data.map((b: any) => <li key={b.id} className="rounded-full bg-secondary px-3 py-1 text-sm">{new Date(b.blocked_date).toDateString()}</li>)}
          {data.length === 0 && <li className="text-sm text-muted-foreground">None.</li>}
        </ul>
      </div>
    </DashShell>
  );
}
