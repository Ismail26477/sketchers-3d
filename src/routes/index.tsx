import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Camera, Eye, Layers, LayoutGrid, Map, Video } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";


import g1 from "@/assets/1.jpeg";
import g2 from "@/assets/2.jpeg";
import g3 from "@/assets/3.jpeg";
import g4 from "@/assets/4.jpeg";
import g5 from "@/assets/5.jpeg";
import g6 from "@/assets/6.jpeg";
import g7 from "@/assets/7.jpeg";
import g8 from "@/assets/8.jpeg";
import g9 from "@/assets/9.jpeg";
import g10 from "@/assets/10.jpeg";
import g11 from "@/assets/11.jpeg";
import g12 from "@/assets/12.jpeg";
import g13 from "@/assets/13.jpeg";
import g14 from "@/assets/14.jpeg";
import g15 from "@/assets/15.jpeg";
import g16 from "@/assets/16.jpeg";
import g17 from "@/assets/17.jpeg";
import g18 from "@/assets/18.jpeg";
import g19 from "@/assets/19.jpeg";
import g20 from "@/assets/20.jpeg";
import g21 from "@/assets/21.png";
import g22 from "@/assets/22.png";
import g23 from "@/assets/23.png";
import g24 from "@/assets/24.png";
import g25 from "@/assets/25.png";
import g26 from "@/assets/26.jpeg";
import g27 from "@/assets/27.jpeg";
import g28 from "@/assets/28.jpeg";
import g29 from "@/assets/29.jpeg";
import g30 from "@/assets/30.jpeg";
import g31 from "@/assets/31.jpeg";
import g32 from "@/assets/32.jpeg";
import g33 from "@/assets/33.jpeg";
import g34 from "@/assets/34.jpeg";
import g35 from "@/assets/35.jpeg";
import g36 from "@/assets/36.jpeg";
import g37 from "@/assets/37.jpeg";
import g38 from "@/assets/38.jpeg";
import g39 from "@/assets/39.jpeg";
import g40 from "@/assets/40.jpeg";
import g41 from "@/assets/41.png";
import g43 from "@/assets/43.png";
import g45 from "@/assets/45.png";
import g46 from "@/assets/46.jpeg";
import g47 from "@/assets/47.jpeg";
import g48 from "@/assets/48.webp";
import g49 from "@/assets/49.jpeg";
import g50 from "@/assets/50.jpeg";
import g51 from "@/assets/51.jpeg";
import g52 from "@/assets/52.jpeg";
import g53 from "@/assets/53.jpeg";
import g54 from "@/assets/54.jpeg";
import g55 from "@/assets/55.jpeg";
import g56 from "@/assets/56.jpeg";
import g57 from "@/assets/57.jpeg";
import g58 from "@/assets/58.jpeg";
import g59 from "@/assets/59.jpeg";
import g60 from "@/assets/60.jpeg";
import g61 from "@/assets/61.jpeg";
import g62 from "@/assets/62.jpeg";
import g63 from "@/assets/63.jpeg";
import g64 from "@/assets/64.jpeg";
import g65 from "@/assets/65.jpeg";
import g66 from "@/assets/66.jpeg";
import g67 from "@/assets/67.jpeg";
import g68 from "@/assets/68.jpeg";
import g69 from "@/assets/69.jpeg";
import g70 from "@/assets/70.jpeg";
import g71 from "@/assets/71.jpeg";
import g72 from "@/assets/72.jpeg";
import g73 from "@/assets/73.jpeg";
import g74 from "@/assets/74.jpeg";
import g75 from "@/assets/75.jpeg";
import g76 from "@/assets/76.jpeg";
import g77 from "@/assets/77.jpeg";
import g78 from "@/assets/78.jpeg";
import g79 from "@/assets/79.png";
import g80 from "@/assets/80.jpeg";
import g81 from "@/assets/81.jpeg";
import g82 from "@/assets/82.jpeg";
import g83 from "@/assets/83.jpeg";




export const Route = createFileRoute("/")({
  component: LandingPage,
});

const HERO_VIDEO =
  "https://res.cloudinary.com/russ1zet/video/upload/v1784095512/WhatsApp_Video_2026-07-14_at_23.14.34_fgeaor.mp4";

function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.25] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={HERO_VIDEO}
      />
    </section>
  );
}/* ----------------------------- Solutions ------------------------------ */
const SOLUTION_LINKS = [
  { title: "Still Render", to: "/services/still-render" },
  { title: "Video Walkthrough", to: "/services/video-walkthrough" },
  { title: "VR Tours", to: "/services/vr-tours" },
  { title: "Inventory Selector Module", to: "/services/inventory-selector" },
  { title: "Interactive Scale Models", to: "/services/interactive-scale-models" },
  { title: "Neighborhood Map", to: "/services/neighborhood-map" },
] as const;

function Solutions() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <h2 className="font-sans text-3xl font-light uppercase leading-[1.15] tracking-[0.02em] text-foreground md:text-5xl">
            Visual Solutions<br />For New<br />Developments
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-foreground/70">
            We are an immersive design & tech company specializing in 3D, Virtual Reality, and advanced technology solutions for real estate.
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/70">
            By merging high-end design with cutting-edge technology, we elevate the real estate marketing and sales journey—transforming how projects are visualised, experienced, and sold.
          </p>
          <ul className="mt-4 max-w-md list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-foreground/70">
            <li>14+ years of expertise in the real estate and prop-tech industry.</li>
            <li>Delivered 1000+ projects across residential, commercial & mixed use developments.</li>
            <li>Trusted by 400+ clients including top Architects, developers & marketing agencies.</li>
            <li>Presence in 3 Offices across India, with our headquarters in Delhi.</li>
          </ul>
        </div>
        <div>
          <p className="font-sans text-3xl font-light uppercase tracking-[0.02em] text-foreground md:text-4xl">
            Solutions
          </p>
          <ul className="mt-8 space-y-4">
            {SOLUTION_LINKS.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="text-sm uppercase tracking-[0.18em] text-foreground/80 underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-[#111111] px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-primary"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


/* --------------------------------- Services --------------------------------- */
const SERVICES = [
  {
    icon: Camera,
    title: "Still Render",
    description:
      "High-quality, photorealistic images that bring your future home to life, helping visualize the design, finishes, and ambiance before it's built.",
  },
  {
    icon: Video,
    title: "Video Walkthrough",
    description:
      "Cinematic property walkthroughs showcasing features and amenities with high-quality 3D content.",
  },
  {
    icon: Eye,
    title: "VR Tours",
    description:
      "Immersive Virtual Reality tours that let users experience the property remotely.",
  },
  {
    icon: LayoutGrid,
    title: "Inventory Selector Module",
    description:
      "Real-time inventory updates with customizable 3D flat selection.",
  },
  {
    icon: Layers,
    title: "Interactive Scale Models",
    description:
      "Innovative hydraulic-enabled interactive scale models widely adopted across the industry.",
  },
  {
    icon: Map,
    title: "Neighborhood Map",
    description:
      "Bird's-eye view of nearby amenities, infrastructure, and lifestyle to help buyers assess the location.",
  },
];

function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary">
            Services
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
            Everything you need to{" "}
            <em className="italic">sell the vision.</em>
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group rounded-sm border border-border bg-card p-8 md:p-10 shadow-luxe transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="mt-8 font-display text-xl md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Gallery --------------------------------- */
const GALLERY = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
  g31, g32, g33, g34, g35, g36, g37, g38, g39, g40,
  g41, g43, g45, g46, g47, g48, g49, g50,
  g51, g52, g53, g54, g55, g56, g57, g58, g59, g60,
  g61, g62, g63, g64, g65, g66, g67, g68, g69, g70,
  g71, g72, g73, g74, g75, g76, g77, g78, g79, g80,
  g81, g82, g83,
];
// Editorial pattern: repeating groups
// Group A: 3 across (equal)
// Group B: 2 across (equal, larger)
// Group C: 1 full-width
// Group D: 3 across with middle wider (5-col: 1,3,1)
type Row = { cols: string; heights: string[] };
function buildRows(total: number): { indices: number[]; span: string; height: string }[] {
  const pattern: { count: number; spans: string[]; height: string }[] = [
    { count: 3, spans: ["md:col-span-4", "md:col-span-4", "md:col-span-4"], height: "h-[62vw] md:h-[24vw]" },
    { count: 2, spans: ["md:col-span-7", "md:col-span-5"], height: "h-[72vw] md:h-[30vw]" },
    { count: 1, spans: ["md:col-span-12"], height: "h-[80vw] md:h-[42vw]" },
    { count: 3, spans: ["md:col-span-3", "md:col-span-6", "md:col-span-3"], height: "h-[62vw] md:h-[26vw]" },
    { count: 2, spans: ["md:col-span-5", "md:col-span-7"], height: "h-[72vw] md:h-[30vw]" },
  ];
  const out: { indices: number[]; span: string; height: string }[] = [];
  let i = 0;
  let p = 0;
  while (i < total) {
    const row = pattern[p % pattern.length];
    const take = Math.min(row.count, total - i);
    for (let k = 0; k < take; k++) {
      out.push({ indices: [i + k], span: row.spans[k], height: row.height });
    }
    i += take;
    p++;
  }
  return out;
}

function Gallery() {
  const [index, setIndex] = useState(-1);
  const items = buildRows(GALLERY.length);
  return (
    <section id="gallery" className="py-4 md:py-6">
      <div className="px-1 md:px-2">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-12 md:gap-1">
          {items.map((it, i) => {
            const src = GALLERY[it.indices[0]];
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.06 }}
                onClick={() => setIndex(i)}
                className={`group relative overflow-hidden bg-secondary ${it.span} ${it.height}`}
                aria-label={`Open image ${i + 1}`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={items.map((it) => ({ src: GALLERY[it.indices[0]] }))}
        plugins={[Zoom]}
        animation={{ fade: 300, swipe: 400 }}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: false }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </section>
  );
}

/* --------------------------------- Clients --------------------------------- */
import client36 from "@/assets/Chattarpur.jpeg";
import client37 from "@/assets/Vrindavan.jpeg";
import client38 from "@/assets/Pyramid.jpeg";
import client39 from "@/assets/Chintamani.jpeg";
import client40 from "@/assets/Sivana.jpeg";
import client41 from "@/assets/Ambika.jpeg";
import client42 from "@/assets/LSSB.jpeg";
import client43 from "@/assets/Vistaar.jpeg";
import client44 from "@/assets/Compact.jpeg";
import client45 from "@/assets/TheFirstFerry.jpeg";
import client46 from "@/assets/Atharva.jpeg";
import client47 from "@/assets/Green.jpeg";
import client48 from "@/assets/LGDevelopers.jpeg";
import client49 from "@/assets/Emaarat.jpeg";
import client50 from "@/assets/sidde.jpeg";
import client51 from "@/assets/shriniwasa.jpeg";
import client52 from "@/assets/omsatyam.jpeg";
import client53 from "@/assets/Vatsalya.jpeg";

const CLIENTS = [
  { name: "Chattarpur Farms", src: client36 },
  { name: "Vrindavan Constructions", src: client37 },
  { name: "Pyramid Group", src: client38 },
  { name: "Chintamani Builders", src: client39 },
  { name: "Sivana Greens", src: client40 },
  { name: "Ambika Farms", src: client41 },
  { name: "SSB Homes", src: client42 },
  { name: "Vistaar Architects", src: client43 },
  { name: "Compact Builders", src: client44 },
  { name: "The First Ferry", src: client45 },
  { name: "Atharva Infrastructures", src: client46 },
  { name: "Green City Builders", src: client47 },
  { name: "LG Developers & Builders", src: client48 },
  { name: "Emaarat Creators", src: client49 },
  { name: "Siddheshwar Group", src: client50 },
  { name: "Shriniwasa Builders & Developers", src: client51 },
  { name: "Om Satyam Buildcons", src: client52 },
  { name: "Vatsalya Group", src: client53 },
];


function Clients() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section id="clients" className="border-t border-border py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="mb-8 text-center text-[11px] uppercase tracking-[0.4em] text-primary">
          Trusted by studios &amp; developers worldwide
        </p>
      </div>
      <div className="relative overflow-hidden pause-on-hover">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-child flex w-max items-center marquee-slow gap-16 px-8">
          {row.map((c, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-20 md:h-24">
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* --------------------------------- Testimonials --------------------------------- */
const TESTIMONIALS = [
  { q: "Sketchers 3D redefined how we present unbuilt architecture. Their renders sold half our tower off-plan.", n: "Ines Marchetti", r: "VP Development, Aurelius Group", p: "https://i.pravatar.cc/160?img=47" },
  { q: "The most cinematic architectural imagery we've commissioned. Every frame feels lived-in and true.", n: "Daniel Osei", r: "Principal Architect, Osei & Partners", p: "https://i.pravatar.cc/160?img=12" },
  { q: "Uncommonly patient, quietly obsessive. They delivered work our marketing team can't stop reusing.", n: "Sara Lindqvist", r: "Head of Brand, Maison Ko", p: "https://i.pravatar.cc/160?img=45" },
  { q: "A rare combination of technical mastery and artistic restraint. Zero drama, extraordinary output.", n: "Marcus Chen", r: "Director, Northwind Real Estate", p: "https://i.pravatar.cc/160?img=33" },
  { q: "They understood the brief better than we did by the second week. That's the mark of true craft.", n: "Amelia Rousseau", r: "Design Director, Helios Studio", p: "https://i.pravatar.cc/160?img=41" },
  { q: "Every deliverable arrived sharper than promised. A partner, not a vendor.", n: "Jonah Weiss", r: "Founder, Fieldnotes Architecture", p: "https://i.pravatar.cc/160?img=15" },
];

function Stars() {
  return (
    <div className="flex gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const controls = useAnimationControls();
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const steps = Math.ceil(TESTIMONIALS.length / perView);
    async function loop() {
      // start from 0
      await controls.set({ x: "0%" });
      while (!cancelled) {
        for (let i = 0; i < steps; i++) {
          if (cancelled) return;
          await controls.start({
            x: `-${i * 100}%`,
            transition: { duration: i === 0 ? 0 : 1.1, ease: [0.65, 0, 0.35, 1] },
          });
          await new Promise((r) => setTimeout(r, 3500));
        }
      }
    }
    loop();
    return () => {
      cancelled = true;
    };
  }, [controls, perView]);

  return (
    <section id="testimonials" className="border-t border-border bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-primary">04 — Client Voices</p>
          <h2 className="text-4xl md:text-6xl">
            Trusted by those who <em className="italic">build the future</em>.
          </h2>
        </div>
      </div>

      <div className="mt-10 overflow-hidden px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px] overflow-hidden">
          <motion.div className="flex" animate={controls} initial={{ x: "0%" }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="shrink-0 px-3 md:px-4"
                style={{ width: `${100 / perView}%` }}
              >
                <figure className="flex h-full flex-col justify-between rounded-sm border border-border bg-card p-8 md:p-10 shadow-luxe">
                  <div>
                    <Stars />
                    <blockquote className="mt-6 font-display text-xl leading-snug text-foreground/90">
                      "{t.q}"
                    </blockquote>
                  </div>
                  <figcaption className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                    <img src={t.p} alt={t.n} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <div className="text-sm text-foreground">{t.n}</div>
                      <div className="text-xs text-muted-foreground">{t.r}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ --------------------------------- */
const FAQS = [
  { q: "What types of projects do you take on?", a: "We specialize in premium architectural visualization — residential towers, hospitality, retail, master plans, and interior spaces. We work at every stage from concept to marketing-ready imagery." },
  { q: "How long does a typical project take?", a: "A single hero render runs 2–3 weeks. Full campaigns with animation and multiple views typically run 6–10 weeks. Rush timelines are possible for the right project." },
  { q: "What do you need from us to begin?", a: "CAD/BIM files or SketchUp models, material references, site context, and a mood direction. Our art directors will guide you through a short discovery call to align on the story." },
  { q: "Do you offer 3D animation and film?", a: "Yes — cinematic architectural films, drone-style flythroughs, and immersive VR walkthroughs are all part of our craft." },
  { q: "Where is Sketchers 3D based?", a: "We are a distributed studio with core teams in Dubai and Lisbon, serving clients across Europe, the Middle East, and North America." },
  { q: "How much does a project cost?", a: "Hero renders start at $2.8k. Full campaigns are scoped individually. We're transparent about pricing on the first call and never surprise you with change orders." },
];

function FAQ() {
  const [open, setOpen] = useState<number[]>([0, 1]);
  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  return (
    <section id="faq" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary">05 — Frequently Asked</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
            Questions,
            <br />
            <em className="italic">answered.</em>
          </h2>
          <p className="mt-8 text-sm text-foreground/60">
            Still curious? Reach out at{" "}
            <a href="mailto:hello@sketchers3d.com" className="text-primary hover:underline">
              hello@sketchers3d.com
            </a>
          </p>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {FAQS.map((f, i) => {
              const isOpen = open.includes(i);
              return (
                <li key={i}>
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-xl text-foreground md:text-2xl">{f.q}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-2xl pb-7 text-foreground/70 leading-relaxed">{f.a}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Page --------------------------------- */
function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Clients />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
