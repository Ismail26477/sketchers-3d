import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/still-render")({
  head: () => ({
    meta: [
      { title: "Still Render — Sketchers 3D" },
      { name: "description", content: "Photorealistic still renders that bring your future home to life before it's built." },
      { property: "og:title", content: "Still Render — Sketchers 3D" },
      { property: "og:description", content: "Photorealistic still renders that bring your future home to life before it's built." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service"
      title="CGI Renders & Animations"
      description="High-quality, photorealistic images that bring your future home to life, helping visualize the design, finishes, and ambiance before it's built."
      points={[
        "Cinematic composition, lighting and lens work tuned per shot.",
        "True-to-material finishes reviewed with your design team.",
        "Day, dusk and night variants delivered in print-ready resolution.",
      ]}
    />
  ),
});
