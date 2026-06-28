import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/site-nav";
import { getGallery } from "@/lib/public.functions";

const qo = queryOptions({ queryKey: ["gallery_pub"], queryFn: () => getGallery() });

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Rhythm Aure" }, { name: "description", content: "Moments from the Rhythm Aure stage and studio." }] }),
  loader: ({ context }) => context.queryClient.ensureQueryData(qo),
  errorComponent: ({ error }) => <div className="p-8">{error.message}</div>,
  notFoundComponent: () => <div className="p-8">Not found</div>,
  component: Page,
});

function Page() {
  const { data } = useSuspenseQuery(qo);
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-accent">Gallery</p>
        <h1 className="mt-2 font-display text-5xl">Moments in motion</h1>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {data.map((g) => (
            <figure key={g.id} className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-muted">
              <img src={g.image_url} alt={g.caption ?? ""} className="w-full" loading="lazy" />
              {g.caption && <figcaption className="p-3 text-sm text-muted-foreground">{g.caption}</figcaption>}
            </figure>
          ))}
          {data.length === 0 && <p className="text-muted-foreground">Gallery is being curated.</p>}
        </div>
      </div>
    </PageShell>
  );
}
