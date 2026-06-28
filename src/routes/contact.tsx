import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/site-nav";
import { getSiteSettings } from "@/lib/public.functions";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";

const qo = queryOptions({ queryKey: ["site_settings"], queryFn: () => getSiteSettings() });

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Rhythm Aure" }, { name: "description", content: "Get in touch with Rhythm Aure." }] }),
  loader: ({ context }) => context.queryClient.ensureQueryData(qo),
  errorComponent: ({ error }) => <div className="p-8">{error.message}</div>,
  notFoundComponent: () => <div className="p-8">Not found</div>,
  component: Page,
});

function Page() {
  const { data: s } = useSuspenseQuery(qo);
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-accent">Contact</p>
        <h1 className="mt-2 font-display text-5xl">Let's talk</h1>
        <div className="mt-10 space-y-4 text-lg">
          {s?.contact_email && <p className="flex items-center gap-3"><Mail className="size-5 text-accent" />{s.contact_email}</p>}
          {s?.contact_phone && <p className="flex items-center gap-3"><Phone className="size-5 text-accent" />{s.contact_phone}</p>}
          {s?.contact_address && <p className="flex items-center gap-3"><MapPin className="size-5 text-accent" />{s.contact_address}</p>}
        </div>
        <div className="mt-8 flex gap-4">
          {s?.instagram_url && <a href={s.instagram_url} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="size-6 text-accent hover:opacity-70" /></a>}
          {s?.youtube_url && <a href={s.youtube_url} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube className="size-6 text-accent hover:opacity-70" /></a>}
          {s?.facebook_url && <a href={s.facebook_url} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="size-6 text-accent hover:opacity-70" /></a>}
        </div>
      </div>
    </PageShell>
  );
}
