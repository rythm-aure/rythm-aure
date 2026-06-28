import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign in — Rhythm Aure" }] }),
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"signin" | "signup" | "forgot">("signin");
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", full_name: "", phone: "" });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => { if (data.user) navigate({ to: "/dashboard" }); });
  }, [navigate]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault(); setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: form.email, password: form.password });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Welcome back!");
    navigate({ to: "/dashboard" });
  }

  async function signUp(e: React.FormEvent) {
    e.preventDefault(); setBusy(true);
    const { error } = await supabase.auth.signUp({
      email: form.email, password: form.password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: form.full_name, phone: form.phone },
      },
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Account created!");
    navigate({ to: "/dashboard" });
  }

  async function forgot(e: React.FormEvent) {
    e.preventDefault(); setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(form.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Password reset email sent.");
  }

  async function google() {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) toast.error(String(result.error));
    if (result.redirected) return;
    navigate({ to: "/dashboard" });
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden bg-midnight p-12 text-cream lg:flex lg:flex-col lg:justify-between">
        <Link to="/" className="font-display text-3xl">Rhythm <span className="text-accent">Aure</span></Link>
        <div>
          <h2 className="font-display text-5xl leading-tight">Step into the studio.</h2>
          <p className="mt-4 text-cream/70">Save workshop registrations, track choreography bookings, and never miss an upcoming class.</p>
        </div>
        <p className="text-xs text-cream/50">© {new Date().getFullYear()} Rhythm Aure</p>
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-6 inline-block font-display text-2xl lg:hidden">Rhythm <span className="text-accent">Aure</span></Link>
          <Tabs value={tab} onValueChange={(v) => setTab(v as any)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
              <TabsTrigger value="forgot">Reset</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="space-y-4 pt-6">
              <form onSubmit={signIn} className="space-y-4">
                <div><Label>Email</Label><Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                <div><Label>Password</Label><Input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></div>
                <Button type="submit" disabled={busy} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">{busy ? "…" : "Sign in"}</Button>
              </form>
              <div className="relative my-4 text-center text-xs uppercase tracking-widest text-muted-foreground"><span className="bg-background px-2">or</span><span className="absolute left-0 top-1/2 -z-10 h-px w-full bg-border" /></div>
              <Button type="button" variant="outline" className="w-full" onClick={google}>Continue with Google</Button>
            </TabsContent>
            <TabsContent value="signup" className="space-y-4 pt-6">
              <form onSubmit={signUp} className="space-y-4">
                <div><Label>Full name</Label><Input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} /></div>
                <div><Label>Phone</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                <div><Label>Email</Label><Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                <div><Label>Password</Label><Input type="password" required minLength={8} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></div>
                <Button type="submit" disabled={busy} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">{busy ? "…" : "Create account"}</Button>
              </form>
              <Button type="button" variant="outline" className="w-full" onClick={google}>Continue with Google</Button>
            </TabsContent>
            <TabsContent value="forgot" className="space-y-4 pt-6">
              <form onSubmit={forgot} className="space-y-4">
                <p className="text-sm text-muted-foreground">Enter your email and we'll send a reset link.</p>
                <div><Label>Email</Label><Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                <Button type="submit" disabled={busy} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">{busy ? "…" : "Send reset link"}</Button>
              </form>
            </TabsContent>
          </Tabs>
          <p className="mt-6 text-center text-xs text-muted-foreground"><Link to="/" className="hover:underline">← Back to site</Link></p>
        </div>
      </div>
    </div>
  );
}
