import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/inventory-selector")({
  head: () => ({
    meta: [
      { title: "Inventory Selector Module — Sketchers 3D" },
      { name: "description", content: "Real-time inventory updates with customizable 3D flat selection." },
      { property: "og:title", content: "Inventory Selector Module — Sketchers 3D" },
      { property: "og:description", content: "Real-time inventory updates with customizable 3D flat selection." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service"
      title="Inventory Selector Module"
      description="Real-time inventory updates with customizable 3D flat selection."
      points={[
        "Live availability synced with your CRM or sales system.",
        "Filter by floor, view, orientation, typology and price.",
        "Embeds into your website, sales suite touchscreens and iPads.",
      ]}
    />
  ),
});
