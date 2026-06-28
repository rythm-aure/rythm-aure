import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { DashShell } from "@/components/dash-shell";
import { adminListAnnouncements, adminSaveAnnouncement, adminDeleteAnnouncement } from "@/lib/admin.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard/admin/announcements")({ component: Page });

function Page() {
  const list = useServerFn(adminListAnnouncements);
  const save = useServerFn(adminSaveAnnouncement);
  const del = useServerFn(adminDeleteAnnouncement);
  const qc = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ["admin_ann"], queryFn: () => list() });
  const [form, setForm] = useState({ title: "", body: "", is_active: true });

  async function add(e: React.FormEvent) {
    e.preventDefault();
    try {
      await save({ data: form });
      setForm({ title: "", body: "", is_active: true });
      qc.invalidateQueries({ queryKey: ["admin_ann"] });
      qc.invalidateQueries({ queryKey: ["ann_pub"] });
      toast.success("Posted");
    } catch (e) { toast.error((e as Error).message); }
  }

  async function toggle(id: string, is_active: boolean, title: string) {
    await save({ data: { id, title, is_active } });
    qc.invalidateQueries({ queryKey: ["admin_ann"] });
    qc.invalidateQueries({ queryKey: ["ann_pub"] });
  }

  async function remove(id: string) {
    if (!confirm("Delete?")) return;
    await del({ data: { id } });
    qc.invalidateQueries({ queryKey: ["admin_ann"] });
    qc.invalidateQueries({ queryKey: ["ann_pub"] });
  }

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Announcements</h1>
      <form onSubmit={add} className="mt-6 space-y-3 rounded-2xl border bg-card p-5">
        <div><Label>Title</Label><Input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
        <div><Label>Body</Label><Textarea rows={3} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} /></div>
        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Post announcement</Button>
      </form>
      <div className="mt-6 space-y-3">
        {data.map((a: any) => (
          <div key={a.id} className="flex items-start justify-between gap-3 rounded-xl border bg-card p-4">
            <div className="flex-1">
              <p className="font-medium">{a.title}</p>
              {a.body && <p className="text-sm text-muted-foreground">{a.body}</p>}
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={a.is_active} onCheckedChange={(v) => toggle(a.id, v, a.title)} />
              <Button size="icon" variant="ghost" onClick={() => remove(a.id)}><Trash2 className="size-4" /></Button>
            </div>
          </div>
        ))}
      </div>
    </DashShell>
  );
}
