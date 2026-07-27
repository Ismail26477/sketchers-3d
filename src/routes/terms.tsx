import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import g9 from "@/assets/g9.jpg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Sketchers 3D" },
      {
        name: "description",
        content:
          "The terms and conditions governing the use of the Sketchers 3D website and engagement of studio services.",
      },
      {
        property: "og:title",
        content: "Terms & Conditions — Sketchers 3D",
      },
      {
        property: "og:description",
        content:
          "Terms and conditions governing engagement with Sketchers 3D.",
      },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    title: "1. Introduction",
    body:
      "These Terms and Conditions govern your use of the Sketchers 3D website and any services provided by the studio. By accessing this site or engaging our services, you agree to be bound by these terms in full. If you disagree with any part of these terms, please refrain from using our site or services.",
  },
  {
    title: "2. Intellectual Property",
    body:
      "All imagery, animations, renders, written content and design assets displayed on this website remain the exclusive intellectual property of Sketchers 3D unless explicitly stated otherwise. Reproduction, redistribution or commercial use of any material without prior written consent is strictly prohibited.",
  },
  {
    title: "3. Engagement of Services",
    body:
      "Project engagements are formalised through a written proposal or Statement of Work. All timelines, deliverables and fees will be defined therein. Any modifications to scope must be agreed in writing and may incur additional fees. A non-refundable deposit is required to secure a slot in the studio calendar.",
  },
  {
    title: "4. Payment Terms",
    body:
      "Invoices are issued according to the milestone schedule set out in the proposal. Payment is due within fourteen (14) days of invoice date. Late payments may incur interest at a rate of 1.5% per month. Final files and full usage rights are released only upon receipt of full payment.",
  },
  {
    title: "5. Usage Rights & Licensing",
    body:
      "Upon final payment, the client is granted a non-exclusive worldwide licence to use the delivered assets for the agreed marketing and promotional purposes. Sketchers 3D retains the right to feature all completed work in its portfolio, awards submissions and case studies unless otherwise agreed in writing.",
  },
  {
    title: "6. Confidentiality",
    body:
      "The studio treats all project materials, plans and communications with the strictest confidentiality. We are open to signing bespoke non-disclosure agreements where required, and we expect clients to extend the same discretion regarding our proprietary process and pricing.",
  },
  {
    title: "7. Limitation of Liability",
    body:
      "Sketchers 3D shall not be liable for any indirect, incidental or consequential losses arising from the use of our services or deliverables. Our total liability for any claim shall not exceed the fees paid by the client for the specific project giving rise to the claim.",
  },
  {
    title: "8. Governing Law",
    body:
      "These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Dubai.",
  },
  {
    title: "9. Contact",
    body:
      "For any questions regarding these terms, please contact us at hello@sketchers3d.com.",
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms &amp; <em className="italic">Conditions.</em>
          </>
        }
        image={g9}
      />

      <main className="py-16 md:py-20">
        <section className="mx-auto max-w-3xl px-6 lg:px-0">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Last updated — July 2026
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-12 lg:px-0 lg:py-16">
          <div className="space-y-14">
            {SECTIONS.map((s) => (
              <div key={s.title} className="border-t border-border pt-10">
                <h2 className="font-display text-2xl md:text-3xl">
                  {s.title}
                </h2>

                <p className="mt-5 text-[15px] leading-[1.8] text-foreground/75">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}