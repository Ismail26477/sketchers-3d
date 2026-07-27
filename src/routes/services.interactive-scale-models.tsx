import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/interactive-scale-models")({
  head: () => ({
    meta: [
      { title: "Interactive Scale Models — Sketchers 3D" },
      { name: "description", content: "Innovative hydraulic-enabled interactive scale models widely adopted across the industry." },
      { property: "og:title", content: "Interactive Scale Models — Sketchers 3D" },
      { property: "og:description", content: "Innovative hydraulic-enabled interactive scale models widely adopted across the industry." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service"
      title="Interactive Scale Models"
      description="Innovative hydraulic-enabled interactive scale models widely adopted across the industry."
      points={[
        "Hydraulic movement paired with synchronized lighting and audio.",
        "Touch-driven storytelling of masterplans and phasing.",
        "Engineered, fabricated and installed by our in-house team.",
      ]}
    />
  ),
});
