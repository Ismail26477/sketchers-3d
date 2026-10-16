import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getProject, PROJECTS, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Sketchers 3D" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Sketchers 3D` },
        { name: "description", content: `${project.title} — ${project.typology} in ${project.location}. Architectural visualization by Sketchers 3D.` },
        { property: "og:title", content: `${project.title} — Sketchers 3D` },
        { property: "og:description", content: `${project.typology} in ${project.location}. Architectural visualization by Sketchers 3D.` },
        { property: "og:image", content: project.cover },
        { name: "twitter:image", content: project.cover },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar solid />
      <div className="flex min-h-[70vh] items-center justify-center px-6 text-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary">404</p>
          <h1 className="mt-4 text-4xl md:text-6xl">Project not found</h1>
          <Link to="/projects" className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-primary hover:underline">
            View all projects
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const [index, setIndex] = useState(-1);

  const currentIdx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar solid />
      <main>
        {/* Hero image */}
        <section className="relative">
          <div className="relative h-[70vh] w-full overflow-hidden md:h-[85vh]">
            <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          </div>
        </section>

        {/* Title & meta */}
        <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary">{project.typology}</p>
              <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
                {project.title}
              </h1>
            </div>
            <div className="md:col-span-5">
              {project.description && (
                <p className="mb-10 max-w-md text-base leading-relaxed text-foreground/70">{project.description}</p>
              )}
              <dl className="grid grid-cols-2 gap-8 border-t border-border pt-8 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Client</dt>
                  <dd className="mt-2 text-foreground/90">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Architecture</dt>
                  <dd className="mt-2 text-foreground/90">{project.typology}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Location</dt>
                  <dd className="mt-2 text-foreground/90">{project.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Editorial gallery — mixed portrait/landscape */}
        <section className="relative z-0 mx-auto max-w-[1400px] px-[0.5%] pb-10 pt-[0.5%]">
          <div className="grid grid-cols-12 gap-2 md:gap-3">
            {project.images.map((src: string, i: number) => {
              const mod = i % 7;
              const cls =
                mod === 0 ? "col-span-12"
                : mod === 1 ? "col-span-12 md:col-span-7"
                : mod === 2 ? "col-span-12 md:col-span-5"
                : mod === 3 ? "col-span-12 md:col-span-5"
                : mod === 4 ? "col-span-12 md:col-span-7"
                : "col-span-6";
              return (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7 }}
                  onClick={() => setIndex(i)}
                  className={`group relative h-[clamp(18rem,32vw,34rem)] overflow-hidden rounded-sm bg-secondary ${cls}`}
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
        </section>

        {PROJECTS.length > 1 && (
          <section className="relative z-10 border-t border-border bg-background pt-2">
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group relative block h-[50vh] w-full overflow-hidden"
            >
              <img src={next.cover} alt={next.title} className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">Next Project</p>
                  <h3 className="mt-3 font-display text-4xl md:text-6xl">{next.title}</h3>
                </div>
              </div>
            </Link>
          </section>
        )}
      </main>
      <Footer />

      {index >= 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${index + 1} of ${project.images.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f7f5]/90 p-4 backdrop-blur-md md:p-8"
          onClick={() => setIndex(-1)}
        >
          <button
            type="button"
            onClick={() => setIndex(-1)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-3xl text-foreground/60 transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">×</span>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((index - 1 + project.images.length) % project.images.length);
            }}
            aria-label="Previous image"
            className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center text-4xl text-foreground/60 transition-colors hover:text-foreground md:left-6"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <img
            src={project.images[index]}
            alt={`${project.title} — image ${index + 1}`}
            className="max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] object-contain shadow-[0_24px_70px_rgba(17,17,17,0.18)] md:max-h-[calc(100vh-4rem)] md:max-w-[calc(100vw-8rem)]"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((index + 1) % project.images.length);
            }}
            aria-label="Next image"
            className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center text-4xl text-foreground/60 transition-colors hover:text-foreground md:right-6"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      )}
    </div>
  );
}
