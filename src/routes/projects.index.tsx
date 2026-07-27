import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import g5 from "@/assets/g5.jpg";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Sketchers 3D" },
      { name: "description", content: "Sketchers 3D projects — coming soon." },
      { property: "og:title", content: "Projects — Sketchers 3D" },
      { property: "og:description", content: "A curated archive of our recent architectural visualization commissions — coming soon." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Selected Work"
        title={<>Projects, <em className="italic">an archive.</em></>}
        image={g5}
      />
      <section className="mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-12 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.4em] text-primary">Coming Soon</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
          A new archive is <em className="italic text-foreground/60">on the way.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-foreground/70">
          We're curating a fresh selection of our most recent commissions across residential,
          hospitality, cultural and master-plan work. Check back shortly, or reach out to
          request a private portfolio.
        </p>
      </section>
      <Footer />
    </div>
  );
}
