import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/workshops", label: "Workshops" },
  { to: "/booking", label: "Book Choreography" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUser({ id: data.user.id, email: data.user.email ?? undefined });
    });
    const { data } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ? { id: session.user.id, email: session.user.email ?? undefined } : null);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Rhythm <span className="text-accent">Aure</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm font-medium text-foreground/80 transition hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <Button asChild variant="outline" size="sm"><Link to="/dashboard"><User className="mr-2 size-4" />Dashboard</Link></Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm"><Link to="/auth">Sign in</Link></Button>
              <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/auth">Get started</Link></Button>
            </>
          )}
        </div>
        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="py-2 text-base">{l.label}</Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border/60 pt-3">
              {user ? (
                <Link to="/dashboard" className="rounded-md bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground">Dashboard</Link>
              ) : (
                <Link to="/auth" className="rounded-md bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground">Sign in / Sign up</Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-midnight text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-2xl text-cream">Rhythm <span className="text-accent">Aure</span></p>
          <p className="mt-3 text-sm">Where rhythm meets elegance — premium dance workshops and event choreography.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-cream">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-cream">For students</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/dashboard" className="hover:text-accent">My dashboard</Link></li>
            <li><Link to="/auth" className="hover:text-accent">Sign in</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-cream">Stay in rhythm</p>
          <p className="mt-3 text-sm">Follow our journey and upcoming workshops.</p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Rhythm Aure. All rights reserved.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
