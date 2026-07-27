import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { PROJECTS } from "@/lib/projects";
import g9 from "@/assets/g9.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Sketchers 3D" },
      {
        name: "description",
        content:
          "In-depth case studies from Sketchers 3D — process, craft and outcomes across landmark architectural visualization commissions.",
      },
      {
        property: "og:title",
        content: "Case Studies — Sketchers 3D",
      },
      {
        property: "og:description",
        content:
          "Process, craft and outcomes across landmark architectural visualization commissions.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

const STUDIES = PROJECTS.slice(0, 6).map((p, i) => ({
  ...p,
  chapter: String(i + 1).padStart(2, "0"),
  headline:
    i % 3 === 0
      ? "Selling a tower off-plan through cinematic renders."
      : i % 3 === 1
      ? "A single hero frame that anchored a brand launch."
      : "Rebuilding a heritage narrative for a global audience.",
  metric:
    i % 3 === 0
      ? "62% pre-sales in 8 weeks"
      : i % 3 === 1
      ? "3.4M impressions in one week"
      : "Featured in 12 publications",
}));

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Craft, <em className="italic">measured.</em>
          </>
        }
        image={g9}
      />

      <main className="py-16 md:py-20">
        <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-12 lg:pb-32">
          <div className="space-y-24 md:space-y-40">
            {STUDIES.map((s, i) => (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="grid gap-10 md:grid-cols-12 md:gap-16"
              >
                <div
                  className={`md:col-span-7 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Link
                    to="/projects/$slug"
                    params={{ slug: s.slug }}
                    className="group block overflow-hidden rounded-sm bg-secondary"
                  >
                    <img
                      src={s.cover}
                      alt={s.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                    />
                  </Link>
                </div>

                <div
                  className={`md:col-span-5 ${
                    i % 2 === 1 ? "md:order-1" : ""
                  } flex flex-col justify-center`}
                >
                  <div className="text-[11px] uppercase tracking-[0.4em] text-primary">
                    Case {s.chapter} — {s.typology}
                  </div>

                  <h2 className="mt-6 text-3xl leading-tight md:text-5xl">
                    {s.headline}
                  </h2>

                  <p className="mt-6 leading-relaxed text-foreground/70">
                    {s.title} in {s.location} for {s.client}. A study in
                    restraint, composition and light — every frame designed to
                    carry the weight of the architecture without ornament.
                  </p>

                  <div className="mt-10 flex items-center gap-6 border-t border-border pt-6">
                    <div className="font-display text-2xl text-primary">
                      {s.metric}
                    </div>
                  </div>

                  <Link
                    to="/projects/$slug"
                    params={{ slug: s.slug }}
                    className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-foreground transition-colors hover:text-primary"
                  >
                    Read the project →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}