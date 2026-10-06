import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { PROJECTS } from "@/lib/projects";

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
        image={PROJECTS[0].cover}
      />
      <main>
        <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-24 lg:px-12 lg:pb-24 lg:pt-32">
          <div className="flex flex-col justify-between gap-8 border-b border-border pb-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary">Selected work</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
                Spaces with a <em className="italic text-foreground/60">story.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground/65">
              Explore a selection of architectural worlds shaped through light, material and atmosphere.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-6 gap-y-16 px-6 pb-28 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: (index % 3) * 0.08 }}
            >
              <Link to="/projects/$slug" params={{ slug: project.slug }} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={project.cover} alt={`${project.title} architectural visualization`} className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
                  <span className="absolute right-5 top-5 flex size-10 translate-y-2 items-center justify-center rounded-full bg-background/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-5">
                  <div>
                    <h3 className="font-display text-2xl">{project.title}</h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{project.typology} · {project.location}</p>
                  </div>
                  <span className="pt-1 text-xs text-muted-foreground">{project.year}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
