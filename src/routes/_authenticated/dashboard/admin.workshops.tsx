import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { DashShell } from "@/components/dash-shell";
import { adminListWorkshops, adminSaveWorkshop, adminDeleteWorkshop } from "@/lib/admin.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { uploadAndGetUrl } from "@/lib/storage";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard/admin/workshops")({ component: Page });

const empty = { title: "", description: "", cover_url: "", starts_at: "", duration_minutes: 90, location: "", level: "", price: 0, capacity: 20, status: "draft" as const };

function Page() {
  const list = useServerFn(adminListWorkshops);
  const save = useServerFn(adminSaveWorkshop);
  const del = useServerFn(adminDeleteWorkshop);
  const qc = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ["admin_workshops"], queryFn: () => list() });
  const [editing, setEditing] = useState<any | null>(null);
  const [open, setOpen] = useState(false);

  function startNew() { setEditing({ ...empty }); setOpen(true); }
  function startEdit(w: any) { setEditing({ ...w, starts_at: new Date(w.starts_at).toISOString().slice(0, 16) }); setOpen(true); }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await save({ data: { ...editing, price: Number(editing.price), capacity: Number(editing.capacity), duration_minutes: Number(editing.duration_minutes), starts_at: new Date(editing.starts_at).toISOString() } });
      toast.success("Saved");
      setOpen(false);
      qc.invalidateQueries({ queryKey: ["admin_workshops"] });
    } catch (e) { toast.error((e as Error).message); }
  }

  async function onUpload(f: File) {
    try {
      const url = await uploadAndGetUrl("workshops", f);
      setEditing((s: any) => ({ ...s, cover_url: url }));
    } catch (e) { toast.error((e as Error).message); }
  }

  async function remove(id: string) {
    if (!confirm("Delete this workshop?")) return;
    await del({ data: { id } });
    qc.invalidateQueries({ queryKey: ["admin_workshops"] });
  }

  return (
    <DashShell>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">Workshops</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button onClick={startNew} className="bg-accent text-accent-foreground hover:bg-accent/90">+ New workshop</Button></DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader><DialogTitle>{editing?.id ? "Edit workshop" : "New workshop"}</DialogTitle></DialogHeader>
            {editing && (
              <form onSubmit={submit} className="space-y-4">
                <div><Label>Title</Label><Input required value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} /></div>
                <div><Label>Description</Label><Textarea rows={4} value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} /></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label>Starts at</Label><Input type="datetime-local" required value={editing.starts_at} onChange={(e) => setEditing({ ...editing, starts_at: e.target.value })} /></div>
                  <div><Label>Duration (min)</Label><Input type="number" value={editing.duration_minutes ?? 90} onChange={(e) => setEditing({ ...editing, duration_minutes: e.target.value })} /></div>
                  <div><Label>Location</Label><Input value={editing.location ?? ""} onChange={(e) => setEditing({ ...editing, location: e.target.value })} /></div>
                  <div><Label>Level</Label><Input value={editing.level ?? ""} onChange={(e) => setEditing({ ...editing, level: e.target.value })} /></div>
                  <div><Label>Price (₹)</Label><Input type="number" required value={editing.price} onChange={(e) => setEditing({ ...editing, price: e.target.value })} /></div>
                  <div><Label>Capacity</Label><Input type="number" required value={editing.capacity} onChange={(e) => setEditing({ ...editing, capacity: e.target.value })} /></div>
                </div>
                <div>
                  <Label>Cover image</Label>
                  <Input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])} />
                  {editing.cover_url && <img src={editing.cover_url} alt="" className="mt-2 h-32 rounded-md object-cover" />}
                </div>
                <div>
                  <Label>Status</Label>
                  <Select value={editing.status} onValueChange={(v) => setEditing({ ...editing, status: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Save</Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left"><tr><th className="p-3">Title</th><th className="p-3">Starts</th><th className="p-3">Status</th><th className="p-3">Price</th><th className="p-3"></th></tr></thead>
          <tbody>
            {data.map((w: any) => (
              <tr key={w.id} className="border-t">
                <td className="p-3 font-medium">{w.title}</td>
                <td className="p-3">{new Date(w.starts_at).toLocaleString()}</td>
                <td className="p-3 capitalize">{w.status}</td>
                <td className="p-3">₹{Number(w.price).toLocaleString()}</td>
                <td className="p-3 text-right">
                  <Button size="icon" variant="ghost" onClick={() => startEdit(w)}><Pencil className="size-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => remove(w.id)}><Trash2 className="size-4" /></Button>
                </td>
              </tr>
            ))}
            {data.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">No workshops yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </DashShell>
  );
}
