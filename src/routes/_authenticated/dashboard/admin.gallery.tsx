import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { DashShell } from "@/components/dash-shell";
import { adminListGallery, adminSaveGallery, adminDeleteGallery } from "@/lib/admin.functions";
import { uploadAndGetUrl } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard/admin/gallery")({ component: Page });

function Page() {
  const list = useServerFn(adminListGallery);
  const save = useServerFn(adminSaveGallery);
  const del = useServerFn(adminDeleteGallery);
  const qc = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ["admin_gallery"], queryFn: () => list() });
  const [caption, setCaption] = useState("");

  async function upload(f: File) {
    try {
      const url = await uploadAndGetUrl("gallery", f);
      await save({ data: { image_url: url, caption, sort_order: data.length } });
      toast.success("Added"); setCaption("");
      qc.invalidateQueries({ queryKey: ["admin_gallery"] });
      qc.invalidateQueries({ queryKey: ["gallery_pub"] });
    } catch (e) { toast.error((e as Error).message); }
  }

  async function remove(id: string) {
    if (!confirm("Delete?")) return;
    await del({ data: { id } });
    qc.invalidateQueries({ queryKey: ["admin_gallery"] });
    qc.invalidateQueries({ queryKey: ["gallery_pub"] });
  }

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Gallery</h1>
      <div className="mt-6 flex flex-wrap items-end gap-3 rounded-2xl border bg-card p-4">
        <div className="flex-1 min-w-[200px]"><Input placeholder="Caption (optional)" value={caption} onChange={(e) => setCaption(e.target.value)} /></div>
        <Input type="file" accept="image/*" className="w-auto" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((g: any) => (
          <div key={g.id} className="group relative overflow-hidden rounded-xl border bg-card">
            <img src={g.image_url} alt={g.caption ?? ""} className="aspect-square w-full object-cover" />
            <div className="p-2 text-xs text-muted-foreground">{g.caption}</div>
            <Button size="icon" variant="destructive" className="absolute right-2 top-2 opacity-0 transition group-hover:opacity-100" onClick={() => remove(g.id)}><Trash2 className="size-4" /></Button>
          </div>
        ))}
      </div>
    </DashShell>
  );
}
