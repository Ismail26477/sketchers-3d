import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import g1 from "@/assets/g1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sketchers 3D" },
      { name: "description", content: "Sketchers 3D is an immersive design & tech company specializing in 3D, VR and advanced technology solutions for real estate." },
      { property: "og:title", content: "About — Sketchers 3D" },
      { property: "og:description", content: "Transforming spaces into stories through photorealistic architectural visualization." },
    ],
  }),
  component: AboutPage,
});

const SOLUTION_LINKS = [
  { title: "Still Render", to: "/services/still-render" },
  { title: "Video Walkthrough", to: "/services/video-walkthrough" },
  { title: "VR Tours", to: "/services/vr-tours" },
  { title: "Inventory Selector Module", to: "/services/inventory-selector" },
  { title: "Interactive Scale Models", to: "/services/interactive-scale-models" },
  { title: "Neighborhood Map", to: "/services/neighborhood-map" },
] as const;

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHero eyebrow="About the Studio" title={<>Transforming spaces <em className="italic">into stories.</em></>} image={g1} />

      <section id="about" className="py-14 md:py-20">
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

      <Footer />
    </div>
  );
}
