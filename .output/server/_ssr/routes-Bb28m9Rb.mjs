import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-PwNqyxv_.mjs";
import { A as Sparkles, D as CalendarDays, O as ArrowUpRight, f as Music2, k as ArrowDown, l as Quote, m as MapPin, s as Star, y as Flame } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./site-nav-CCHsb5iF.mjs";
import { i as workshopsQO, n as galleryQO, r as settingsQO, t as annQO } from "./routes-C9YGuzY_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bb28m9Rb.js
var import_jsx_runtime = require_jsx_runtime();
var DISCIPLINES = [
	"Contemporary",
	"Bollywood Fusion",
	"Hip-Hop",
	"Jazz Funk",
	"Lyrical",
	"Bridal Choreography",
	"Cinematic"
];
var STATS = [
	{
		k: "",
		v: "Years on stage"
	},
	{
		k: "",
		v: "Dancers trained"
	},
	{
		k: "",
		v: "Events choreographed"
	},
	{
		k: "",
		v: "Stage productions"
	}
];
var PROCESS = [
	{
		n: "01",
		t: "Discover",
		d: "We listen to your story — the song, the moment, the people who will share it with you."
	},
	{
		n: "02",
		t: "Design",
		d: "A bespoke routine, sketched move by move to your skill, your stage, your shoes."
	},
	{
		n: "03",
		t: "Rehearse",
		d: "Hands-on sessions with patient repetition until every step feels effortless."
	},
	{
		n: "04",
		t: "Perform",
		d: "Showtime — we stay by your side from the green room to the final bow."
	}
];
var TESTIMONIALS = [
	{
		q: "They turned our sangeet into a film. Three weeks, a packed dance floor, zero stress.",
		a: "Aanya & Rohan",
		r: "Wedding sangeet"
	},
	{
		q: "I joined for one workshop and stayed for a year. The studio is the warmest room I know.",
		a: "Meera K.",
		r: "Contemporary student"
	},
	{
		q: "Polished, punctual, and breathtaking on stage. Our corporate gala still gets compliments.",
		a: "Vikram R.",
		r: "Event director"
	}
];
function Home() {
	const { data: settings } = useSuspenseQuery(settingsQO);
	const { data: workshops } = useSuspenseQuery(workshopsQO);
	const { data: gallery } = useSuspenseQuery(galleryQO);
	const { data: announcements } = useSuspenseQuery(annQO);
	const s = settings;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		s?.show_hero && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative grain min-h-[100svh] overflow-hidden bg-midnight text-cream",
			children: [
				s?.hero_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.hero_image_url,
					alt: "",
					className: "absolute inset-0 size-full object-cover opacity-40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,#0b0d1f_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 top-1/4 size-[36rem] rounded-full bg-accent/15 blur-3xl animate-float-slow" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 bottom-0 size-[40rem] rounded-full bg-accent/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-y-0 left-0 hidden w-14 flex-col items-center justify-between border-r border-cream/10 py-8 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rotate-180 text-[10px] tracking-[0.4em] uppercase text-cream/60 [writing-mode:vertical-rl]",
						children: "Est. 2026 · India"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-4 text-accent" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-y-0 right-0 hidden w-14 flex-col items-center justify-between border-l border-cream/10 py-8 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] tracking-[0.4em] uppercase text-cream/60 [writing-mode:vertical-rl]",
						children: "Scroll to explore"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 py-24 sm:px-10 md:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise-in flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-10 bg-accent" }), s?.tagline ?? "Premium Choreography Atelier"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise-in",
							style: { animationDelay: "120ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "Rhythm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block italic text-accent",
									children: "Aure."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-6 md:grid-cols-3 md:items-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "md:col-span-2 max-w-xl text-lg text-cream/75",
									children: s?.hero_subtitle ?? "A premium dance studio crafting bespoke choreography for stages, weddings and unforgettable nights."
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise-in flex flex-wrap items-end justify-between gap-6",
							style: { animationDelay: "260ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-none bg-accent px-8 text-accent-foreground hover:bg-accent/90",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/workshops",
										children: ["Join a workshop ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-1 size-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "rounded-none border-cream/30 bg-transparent px-8 text-cream hover:bg-cream/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/booking",
										children: "Book choreography"
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4 animate-bounce text-accent" }), " Scroll"]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden border-y border-border bg-midnight text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-marquee py-6",
				children: [...DISCIPLINES, ...DISCIPLINES].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mx-8 flex items-center gap-8 font-display text-2xl md:text-4xl",
					children: [
						d,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-accent" })
					]
				}, i))
			})
		}),
		s?.show_announcements && announcements.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-accent/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-3 sm:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-accent",
							children: "Now on:"
						}),
						" ",
						announcements[0].title,
						announcements[0].body ? ` — ${announcements[0].body}` : ""
					]
				})
			})
		}),
		s?.show_workshops && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative flex min-h-[100svh] flex-col justify-center bg-background py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-7xl px-6 sm:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-end gap-8 md:grid-cols-[1fr_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.4em] text-accent",
							children: "Upcoming · Open enrolment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-5xl leading-tight md:text-7xl",
							children: [
								"Workshops that ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-accent",
									children: "move"
								}),
								" you."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-muted-foreground",
							children: "Small-batch sessions led by our principal choreographers. Beginner-friendly, performance-ready."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/workshops",
						className: "group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition group-hover:rotate-45" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: [workshops.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-full rounded-2xl border border-dashed bg-card/50 p-12 text-center text-muted-foreground",
						children: [
							"New workshops are being curated. Come back soon — or ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/booking",
								className: "text-accent underline",
								children: "book private choreography"
							}),
							"."
						]
					}), workshops.slice(0, 6).map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/workshops/$id",
						params: { id: w.id },
						className: "group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-4 top-4 z-10 rounded-full bg-midnight px-3 py-1 text-[10px] uppercase tracking-widest text-cream",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] overflow-hidden bg-muted",
								children: w.cover_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: w.cover_url,
									alt: w.title,
									className: "size-full object-cover transition duration-700 group-hover:scale-110"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-3 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl leading-tight",
										children: w.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-3 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }), new Date(w.starts_at).toLocaleDateString()]
										}), w.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), w.location]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex items-center justify-between border-t pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-display text-2xl text-accent",
											children: ["₹", Number(w.price).toLocaleString()]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase tracking-widest text-foreground/60 group-hover:text-accent",
											children: "Reserve →"
										})]
									})
								]
							})
						]
					}, w.id))]
				})]
			})
		}),
		s?.show_about && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-[100svh] items-center bg-midnight text-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(212,175,90,0.18),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 sm:px-10 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.4em] text-accent",
						children: "here we go again"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl leading-tight md:text-7xl",
						children: s?.about_title ?? "Where rhythm meets elegance."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-lg leading-relaxed text-cream/75",
						children: s?.about_body ?? "Rhythm Aure is a movement studio built on craft and patience. We choreograph for the dancer in front of us — never a template."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-6",
						children: STATS.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-2 border-accent pl-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl text-cream",
								children: st.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-cream/60",
								children: st.v
							})]
						}, st.k))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[3/4] overflow-hidden rounded-2xl bg-cream/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuY2V8ZW58MHx8MHx8fDA%3D",
								alt: "Dance Performance",
								className: "size-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 aspect-[3/4] overflow-hidden rounded-2xl bg-cream/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://cdn.pixabay.com/photo/2023/01/21/12/04/bharatanatyam-7733727_1280.jpg",
								alt: "Bharatanatyam Performance",
								className: "size-full object-cover"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-6 -left-6 hidden rounded-2xl border border-cream/20 bg-midnight/80 p-6 backdrop-blur md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-accent",
							children: "\""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xs text-sm text-cream/80",
							children: "Crafted choreography, taught with grace."
						})]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex min-h-[100svh] items-center bg-secondary/50 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-7xl px-6 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.4em] text-accent",
						children: "The process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl leading-tight md:text-7xl",
						children: "From first beat to final bow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
						children: PROCESS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-6xl text-accent/30 transition group-hover:text-accent",
									children: p.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl",
									children: p.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.d
								})
							]
						}, p.n))
					})
				]
			})
		}),
		s?.show_gallery && gallery.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex min-h-[100svh] flex-col justify-center bg-background py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-7xl px-6 sm:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.4em] text-accent",
						children: "Moments"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl leading-tight md:text-7xl",
						children: "In motion."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "hidden text-sm font-medium text-accent hover:underline sm:inline",
						children: "Full gallery →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]",
					children: gallery.slice(0, 8).map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `overflow-hidden rounded-xl bg-muted ${i % 5 === 0 ? "row-span-2" : ""} ${i % 7 === 0 ? "col-span-2" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.image_url,
							alt: g.caption ?? "",
							className: "size-full object-cover transition duration-700 hover:scale-110"
						})
					}, g.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex min-h-[100svh] items-center bg-midnight py-24 text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-7xl px-6 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.4em] text-accent",
						children: "Kind words"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl leading-tight md:text-7xl",
						children: "Voices from the floor."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 md:grid-cols-3",
						children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "relative rounded-2xl border border-cream/15 bg-cream/[0.03] p-8 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-7 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-4 font-display text-xl leading-relaxed text-cream/90",
									children: [
										"\"",
										t.q,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-6 border-t border-cream/15 pt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-cream",
											children: t.a
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-widest text-cream/60",
											children: t.r
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 flex gap-0.5 text-accent",
											children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-current" }, k))
										})
									]
								})
							]
						}, i))
					})
				]
			})
		}),
		s?.show_contact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-[100svh] items-center overflow-hidden bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,175,90,0.18),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-5xl px-6 py-24 text-center sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.4em] text-accent",
						children: "Step onto the floor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-6xl leading-[0.95] md:text-8xl",
						children: [
							"Ready to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-accent",
								children: "dance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"with us?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground",
						children: "Whether it's a one-night performance or a year-long journey, we'd love to choreograph it with you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-none bg-accent px-8 text-accent-foreground hover:bg-accent/90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/workshops",
								children: "Join a workshop"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "rounded-none px-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Talk to us"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground",
						children: [s?.contact_email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["✉ ", s.contact_email] }), s?.contact_phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["☎ ", s.contact_phone] })]
					})
				]
			})]
		})
	] });
}
//#endregion
export { Home as component };
