import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import g9 from "@/assets/g9.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Sketchers 3D" },
      { name: "description", content: "Get in touch with Sketchers 3D for photorealistic CGI renders, walkthroughs and architectural animation." },
      { property: "og:title", content: "Contact — Sketchers 3D" },
      { property: "og:description", content: "Start a project with Sketchers 3D." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's build <em className="italic">something remarkable.</em></>}
        image={g9}
      />

      <main className="py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary">Studio</p>
            <h2 className="mt-6 font-display text-3xl leading-[1.1] md:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/70">
              Share your timeline, scope and references. Our team will respond within one business day.
            </p>
            <ul className="mt-10 space-y-4 text-sm">
              <li><span className="text-foreground/50 uppercase tracking-[0.2em] text-[11px] mr-3">Email</span><a href="mailto:sketchers3dofficial@gmail.com" className="underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground">sketchers3dofficial@gmail.com</a></li>
              <li><span className="text-foreground/50 uppercase tracking-[0.2em] text-[11px] mr-3">Phone</span><a href="tel:+919595376600" className="underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground">+91 95953 76600</a></li>
              <li><span className="text-foreground/50 uppercase tracking-[0.2em] text-[11px] mr-3">Phone</span><a href="tel:+919518913547" className="underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground">+91 95189 13547</a></li>
              <li><span className="text-foreground/50 uppercase tracking-[0.2em] text-[11px] mr-3">Phone</span><a href="tel:+917620720321" className="underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground">+91 76207 20321</a></li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-8"
          >
            <div>
              <label className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full border-0 border-b border-foreground/20 bg-transparent pb-3 text-sm focus:border-foreground focus:outline-none" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full border-0 border-b border-foreground/20 bg-transparent pb-3 text-sm focus:border-foreground focus:outline-none" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Project details</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none border-0 border-b border-foreground/20 bg-transparent pb-3 text-sm focus:border-foreground focus:outline-none" />
            </div>
            <button type="submit" className="inline-block bg-[#111111] px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-primary">
              {sent ? "Thank you — we'll be in touch" : "Send Enquiry"}
            </button>
          </form>
        </div>

        <div className="mx-auto mt-20 max-w-[1400px] px-6 lg:px-12">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary">Find us</p>
          <div className="mt-6 aspect-[16/9] w-full overflow-hidden border border-border">
            <iframe
              title="Sketchers 3D location"
      src="https://www.google.com/maps?q=Nagpur,Maharashtra,India&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
