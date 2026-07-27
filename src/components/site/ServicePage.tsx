import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import g4 from "@/assets/g4.jpg";

export function ServicePage({
  eyebrow,
  title,
  description,
  points,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  image?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHero eyebrow={eyebrow} title={title} image={image ?? g4} />
      <main>
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
              {description}
            </p>
            <ul className="mt-12 space-y-8">
              {points.map((p) => (
                <li
                  key={p}
                  className="border-b border-border pb-8 text-lg leading-relaxed text-foreground/80"
                >
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-14">
              <Link
                to="/contact"
                className="inline-block bg-[#111111] px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-primary"
              >
                Enquire
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
