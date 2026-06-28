import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Reset password — Rhythm Aure" }] }),
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Password updated");
    navigate({ to: "/dashboard" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4 rounded-2xl border bg-card p-8">
        <h1 className="font-display text-2xl">Set a new password</h1>
        <div><Label>New password</Label><Input type="password" required minLength={8} value={pw} onChange={(e) => setPw(e.target.value)} /></div>
        <Button type="submit" disabled={busy} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">{busy ? "…" : "Update password"}</Button>
      </form>
    </div>
  );
}
