import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/vr-tours")({
  head: () => ({
    meta: [
      { title: "VR Tours — Sketchers 3D" },
      { name: "description", content: "Immersive Virtual Reality tours that let users experience the property remotely." },
      { property: "og:title", content: "VR Tours — Sketchers 3D" },
      { property: "og:description", content: "Immersive Virtual Reality tours that let users experience the property remotely." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service"
      title="VR Tours"
      description="Immersive Virtual Reality tours that let users experience the property remotely."
      points={[
        "Room-scale walkthroughs viewable on headset, desktop and mobile.",
        "Interactive hotspots for finishes, floor plans and options.",
        "Perfect for remote buyers, expos and sales galleries.",
      ]}
    />
  ),
});
