import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getMyRole } from "@/lib/user.functions";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { LayoutDashboard, Ticket, Calendar, Shield, LogOut, Home } from "lucide-react";

const userLinks = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/registrations", label: "My Registrations", icon: Ticket },
  { to: "/dashboard/bookings", label: "My Bookings", icon: Calendar },
];

const adminLinks = [
  { to: "/dashboard/admin", label: "Admin Home", icon: Shield, exact: true },
  { to: "/dashboard/admin/workshops", label: "Workshops" },
  { to: "/dashboard/admin/registrations", label: "Registrations" },
  { to: "/dashboard/admin/bookings", label: "Bookings" },
  { to: "/dashboard/admin/availability", label: "Availability" },
  { to: "/dashboard/admin/gallery", label: "Gallery" },
  { to: "/dashboard/admin/announcements", label: "Announcements" },
  { to: "/dashboard/admin/settings", label: "Site Settings" },
  { to: "/dashboard/admin/users", label: "Users" },
];

export function DashShell({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const getRole = useServerFn(getMyRole);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const router = useRouter();
  const qc = useQueryClient();

  useEffect(() => { getRole().then((r) => setIsAdmin(r.isAdmin)).catch(() => {}); }, [getRole]);

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    router.navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col bg-secondary/30 lg:flex-row">
      <aside className="border-r border-border bg-midnight text-cream lg:w-72">
        <div className="flex items-center justify-between p-6">
          <Link to="/" className="font-display text-2xl">Rhythm <span className="text-accent">Aure</span></Link>
        </div>
        <nav className="space-y-1 px-3">
          <p className="px-3 pb-2 pt-4 text-xs uppercase tracking-widest text-cream/50">Your account</p>
          {userLinks.map((l) => {
            const active = l.exact ? pathname === l.to : pathname.startsWith(l.to);
            return (
              <Link key={l.to} to={l.to} className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition ${active ? "bg-accent text-accent-foreground" : "text-cream/80 hover:bg-cream/5"}`}>
                {l.icon && <l.icon className="size-4" />}{l.label}
              </Link>
            );
          })}
          {isAdmin && (
            <>
              <p className="px-3 pb-2 pt-6 text-xs uppercase tracking-widest text-cream/50">Admin</p>
              {adminLinks.map((l) => {
                const active = l.exact ? pathname === l.to : pathname.startsWith(l.to);
                const Icon = (l as { icon?: typeof Shield }).icon;
                return (
                  <Link key={l.to} to={l.to} className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition ${active ? "bg-accent text-accent-foreground" : "text-cream/80 hover:bg-cream/5"}`}>
                    {Icon ? <Icon className="size-4" /> : null}{l.label}
                  </Link>
                );
              })}
            </>
          )}
        </nav>
        <div className="mt-6 space-y-2 p-3">
          <Button asChild variant="ghost" className="w-full justify-start text-cream/80 hover:bg-cream/5 hover:text-cream"><Link to="/"><Home className="mr-2 size-4" />Back to site</Link></Button>
          <Button variant="ghost" onClick={signOut} className="w-full justify-start text-cream/80 hover:bg-cream/5 hover:text-cream"><LogOut className="mr-2 size-4" />Sign out</Button>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-10">{children}</main>
    </div>
  );
}
