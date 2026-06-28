import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { PageShell } from "@/components/site-nav";
import { getAnnouncements, getGallery, getPublishedWorkshops, getSiteSettings } from "@/lib/public.functions";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Sparkles, Music2, Flame, Star, Quote } from "lucide-react";

const settingsQO = queryOptions({ queryKey: ["site_settings"], queryFn: () => getSiteSettings() });
const workshopsQO = queryOptions({ queryKey: ["workshops_pub"], queryFn: () => getPublishedWorkshops() });
const galleryQO = queryOptions({ queryKey: ["gallery_pub"], queryFn: () => getGallery() });
const annQO = queryOptions({ queryKey: ["ann_pub"], queryFn: () => getAnnouncements() });

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rhythm Aure — Premium Dance Studio & Choreography" },
      { name: "description", content: "Premium dance workshops and bespoke event choreography where rhythm meets elegance." },
      { property: "og:title", content: "Rhythm Aure" },
      { property: "og:description", content: "Dance beyond imagination." },
    ],
  }),
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(settingsQO);
    context.queryClient.ensureQueryData(workshopsQO);
    context.queryClient.ensureQueryData(galleryQO);
    context.queryClient.ensureQueryData(annQO);
  },
  errorComponent: ({ error }) => <div className="p-8 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-8 text-center">Not found</div>,
  component: Home,
});

const DISCIPLINES = [
  "Contemporary", "Bollywood Fusion", "Kathak", "Hip-Hop", "Bharatanatyam",
  "Jazz Funk", "Lyrical", "Bridal Choreography", "Cinematic", "Belly Dance",
];

const STATS = [
  { k: "", v: "Years on stage" },
  { k: "", v: "Dancers trained" },
  { k: "", v: "Events choreographed" },
  { k: "", v: "Stage productions" },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "We listen to your story — the song, the moment, the people who will share it with you." },
  { n: "02", t: "Design", d: "A bespoke routine, sketched move by move to your skill, your stage, your shoes." },
  { n: "03", t: "Rehearse", d: "Hands-on sessions with patient repetition until every step feels effortless." },
  { n: "04", t: "Perform", d: "Showtime — we stay by your side from the green room to the final bow." },
];

const TESTIMONIALS = [
  { q: "They turned our sangeet into a film. Three weeks, a packed dance floor, zero stress.", a: "Aanya & Rohan", r: "Wedding sangeet" },
  { q: "I joined for one workshop and stayed for a year. The studio is the warmest room I know.", a: "Meera K.", r: "Contemporary student" },
  { q: "Polished, punctual, and breathtaking on stage. Our corporate gala still gets compliments.", a: "Vikram R.", r: "Event director" },
];

function Home() {
  const { data: settings } = useSuspenseQuery(settingsQO);
  const { data: workshops } = useSuspenseQuery(workshopsQO);
  const { data: gallery } = useSuspenseQuery(galleryQO);
  const { data: announcements } = useSuspenseQuery(annQO);
  const s = settings;

  return (
    <PageShell>
      {/* ============ HERO — full screen, cinematic ============ */}
      {s?.show_hero && (
        <section className="relative grain min-h-[100svh] overflow-hidden bg-midnight text-cream">
          {/* Background image */}
          {s?.hero_image_url && (
            <img src={s.hero_image_url} alt="" className="absolute inset-0 size-full object-cover opacity-40" />
          )}
          {/* Gradient washes */}
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,#0b0d1f_100%)]" />
          <div className="absolute -left-32 top-1/4 size-[36rem] rounded-full bg-accent/15 blur-3xl animate-float-slow" />
          <div className="absolute -right-40 bottom-0 size-[40rem] rounded-full bg-accent/10 blur-3xl" />

          {/* Side rails */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-14 flex-col items-center justify-between border-r border-cream/10 py-8 md:flex">
            <span className="rotate-180 text-[10px] tracking-[0.4em] uppercase text-cream/60 [writing-mode:vertical-rl]">Est. 2026 · India</span>
            <Music2 className="size-4 text-accent" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-14 flex-col items-center justify-between border-l border-cream/10 py-8 md:flex">
            <Flame className="size-4 text-accent" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-cream/60 [writing-mode:vertical-rl]">Scroll to explore</span>
          </div>

          {/* Centerpiece */}
          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 py-24 sm:px-10 md:px-16">
            <div className="animate-rise-in flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-accent">
              <span className="inline-block h-px w-10 bg-accent" />
              {s?.tagline ?? "Premium Choreography Atelier"}
            </div>

            <div className="animate-rise-in" style={{ animationDelay: "120ms" }}>
              <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-tight">
                <span className="block">Rhythm</span>
                <span className="block italic text-accent">Aure.</span>
              </h1>
              <div className="mt-6 grid gap-6 md:grid-cols-3 md:items-end">
                <p className="md:col-span-2 max-w-xl text-lg text-cream/75">
                  {s?.hero_subtitle ?? "A premium dance studio crafting bespoke choreography for stages, weddings and unforgettable nights."}
                </p>
                {/*
                <div className="flex items-center justify-start gap-4 md:justify-end">
                  <div className="text-right">
                    <p className="font-display text-4xl text-cream">12<span className="text-accent">+</span></p>
                    <p className="text-[11px] uppercase tracking-widest text-cream/60">Years in motion</p>
                  </div>
                  <div className="h-12 w-px bg-cream/20" />
                  <div>
                    <p className="font-display text-4xl text-cream">4.2k</p>
                    <p className="text-[11px] uppercase tracking-widest text-cream/60">Dancers trained</p>
                  </div>
                </div>
                */}
                
              </div>
            </div>

            <div className="animate-rise-in flex flex-wrap items-end justify-between gap-6" style={{ animationDelay: "260ms" }}>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-none bg-accent px-8 text-accent-foreground hover:bg-accent/90">
                  <Link to="/workshops">Join a workshop <ArrowUpRight className="ml-1 size-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-cream/30 bg-transparent px-8 text-cream hover:bg-cream/10">
                  <Link to="/booking">Book choreography</Link>
                </Button>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/60">
                <ArrowDown className="size-4 animate-bounce text-accent" /> Scroll
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ MARQUEE — disciplines ============ */}
      <section className="relative overflow-hidden border-y border-border bg-midnight text-cream">
        <div className="flex w-max animate-marquee py-6">
          {[...DISCIPLINES, ...DISCIPLINES].map((d, i) => (
            <span key={i} className="mx-8 flex items-center gap-8 font-display text-2xl md:text-4xl">
              {d} <Sparkles className="size-4 text-accent" />
            </span>
          ))}
        </div>
      </section>

      {/* ============ ANNOUNCEMENT BAR ============ */}
      {s?.show_announcements && announcements.length > 0 && (
        <section className="bg-accent/10">
          <div className="mx-auto max-w-7xl px-6 py-3 sm:px-10">
            <p className="text-sm"><strong className="text-accent">Now on:</strong> {announcements[0].title}{announcements[0].body ? ` — ${announcements[0].body}` : ""}</p>
          </div>
        </section>
      )}

      {/* ============ WORKSHOPS — full screen ============ */}
      {s?.show_workshops && (
        <section className="relative flex min-h-[100svh] flex-col justify-center bg-background py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
            <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-accent">Upcoming · Open enrolment</p>
                <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl">
                  Workshops that <span className="italic text-accent">move</span> you.
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Small-batch sessions led by our principal choreographers. Beginner-friendly, performance-ready.
                </p>
              </div>
              <Link to="/workshops" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent">
                View all <ArrowUpRight className="size-4 transition group-hover:rotate-45" />
              </Link>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workshops.length === 0 && (
                <div className="col-span-full rounded-2xl border border-dashed bg-card/50 p-12 text-center text-muted-foreground">
                  New workshops are being curated. Come back soon — or <Link to="/booking" className="text-accent underline">book private choreography</Link>.
                </div>
              )}
              {workshops.slice(0, 6).map((w, i) => (
                <Link
                  key={w.id}
                  to="/workshops/$id"
                  params={{ id: w.id }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-midnight px-3 py-1 text-[10px] uppercase tracking-widest text-cream">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    {w.cover_url && <img src={w.cover_url} alt={w.title} className="size-full object-cover transition duration-700 group-hover:scale-110" />}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-display text-2xl leading-tight">{w.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><CalendarDays className="size-4" />{new Date(w.starts_at).toLocaleDateString()}</span>
                      {w.location && <span className="inline-flex items-center gap-1"><MapPin className="size-4" />{w.location}</span>}
                    </div>
                    <div className="mt-auto flex items-center justify-between border-t pt-4">
                      <p className="font-display text-2xl text-accent">₹{Number(w.price).toLocaleString()}</p>
                      <span className="text-xs uppercase tracking-widest text-foreground/60 group-hover:text-accent">Reserve →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ ABOUT — split full screen ============ */}
      {s?.show_about && (
        <section className="relative flex min-h-[100svh] items-center bg-midnight text-cream">
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(212,175,90,0.18),transparent_70%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 sm:px-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-accent">The atelier</p>
              <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl">
                {s?.about_title ?? "Where rhythm meets elegance."}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">
                {s?.about_body ?? "Rhythm Aure is a movement studio built on craft and patience. We choreograph for the dancer in front of us — never a template."}
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {STATS.map((st) => (
                  <div key={st.k} className="border-l-2 border-accent pl-4">
                    <p className="font-display text-4xl text-cream">{st.k}</p>
                    <p className="text-xs uppercase tracking-widest text-cream/60">{st.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-cream/5">
                  <img
                    src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2V8ZW58MHx8MHx8fDA%3D"
                    alt="Dance Performance"
                    className="size-full object-cover"
                  />
                </div>
                              
                <div className="mt-12 aspect-[3/4] overflow-hidden rounded-2xl bg-cream/5">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/01/21/12/04/bharatanatyam-7733727_1280.jpg"
                    alt="Bharatanatyam Performance"
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-cream/20 bg-midnight/80 p-6 backdrop-blur md:block">
                <p className="font-display text-3xl text-accent">"</p>
                <p className="max-w-xs text-sm text-cream/80">Crafted choreography, taught with grace.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ PROCESS — how we work ============ */}
      <section className="flex min-h-[100svh] items-center bg-secondary/50 py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-accent">The process</p>
          <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl">From first beat to final bow.</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.n} className="group relative rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <p className="font-display text-6xl text-accent/30 transition group-hover:text-accent">{p.n}</p>
                <h3 className="mt-4 font-display text-2xl">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY — full screen mosaic ============ */}
      {s?.show_gallery && gallery.length > 0 && (
        <section className="flex min-h-[100svh] flex-col justify-center bg-background py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-accent">Moments</p>
                <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl">In motion.</h2>
              </div>
              <Link to="/gallery" className="hidden text-sm font-medium text-accent hover:underline sm:inline">Full gallery →</Link>
            </div>
            <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
              {gallery.slice(0, 8).map((g, i) => (
                <div
                  key={g.id}
                  className={`overflow-hidden rounded-xl bg-muted ${i % 5 === 0 ? "row-span-2" : ""} ${i % 7 === 0 ? "col-span-2" : ""}`}
                >
                  <img src={g.image_url} alt={g.caption ?? ""} className="size-full object-cover transition duration-700 hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ TESTIMONIALS ============ */}
      <section className="flex min-h-[100svh] items-center bg-midnight py-24 text-cream">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-accent">Kind words</p>
          <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl">Voices from the floor.</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="relative rounded-2xl border border-cream/15 bg-cream/[0.03] p-8 backdrop-blur">
                <Quote className="size-7 text-accent" />
                <blockquote className="mt-4 font-display text-xl leading-relaxed text-cream/90">"{t.q}"</blockquote>
                <figcaption className="mt-6 border-t border-cream/15 pt-4">
                  <p className="font-medium text-cream">{t.a}</p>
                  <p className="text-xs uppercase tracking-widest text-cream/60">{t.r}</p>
                  <div className="mt-2 flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-3 fill-current" />)}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA — full screen finale ============ */}
      {s?.show_contact && (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,90,0.18),transparent_70%)]" />
          <div className="relative mx-auto w-full max-w-5xl px-6 py-24 text-center sm:px-10">
            <p className="text-[11px] uppercase tracking-[0.4em] text-accent">Step onto the floor</p>
            <h2 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              Ready to <span className="italic text-accent">dance</span><br />with us?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Whether it's a one-night performance or a year-long journey, we'd love to choreograph it with you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-none bg-accent px-8 text-accent-foreground hover:bg-accent/90">
                <Link to="/workshops">Join a workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-8">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
              {s?.contact_email && <span>✉ {s.contact_email}</span>}
              {s?.contact_phone && <span>☎ {s.contact_phone}</span>}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
