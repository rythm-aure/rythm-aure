import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/site-nav";
import { getSiteSettings } from "@/lib/public.functions";

const qo = queryOptions({ queryKey: ["site_settings"], queryFn: () => getSiteSettings() });

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Rhythm Aure" }, { name: "description", content: "The story behind Rhythm Aure." }] }),
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
        <p className="text-sm uppercase tracking-widest text-accent">About</p>
        <h1 className="mt-2 font-display text-5xl">{s?.about_title}</h1>
        <div className="mt-8 whitespace-pre-wrap text-lg leading-relaxed text-foreground/80">{s?.about_body}</div>
      </div>
    </PageShell>
  );
}
