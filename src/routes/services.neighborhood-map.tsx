import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/neighborhood-map")({
  head: () => ({
    meta: [
      { title: "Neighborhood Map — Sketchers 3D" },
      { name: "description", content: "Bird's-eye view of nearby amenities, infrastructure, and lifestyle to help buyers assess the location." },
      { property: "og:title", content: "Neighborhood Map — Sketchers 3D" },
      { property: "og:description", content: "Bird's-eye view of nearby amenities, infrastructure, and lifestyle to help buyers assess the location." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service"
      title="Neighborhood Map"
      description="Bird's-eye view of nearby amenities, infrastructure, and lifestyle to help buyers assess the location."
      points={[
        "Layered maps for schools, transit, retail, dining and green space.",
        "Custom illustrations aligned to your project's brand.",
        "Available as static graphics or interactive web modules.",
      ]}
    />
  ),
});
