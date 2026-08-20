import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/video-walkthrough")({
  head: () => ({
    meta: [
      { title: "Video Walkthrough — Sketchers 3D" },
      { name: "description", content: "Cinematic property walkthroughs showcasing features and amenities with high-quality 3D content." },
      { property: "og:title", content: "Video Walkthrough — Sketchers 3D" },
      { property: "og:description", content: "Cinematic property walkthroughs showcasing features and amenities with high-quality 3D content." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service"
      title="Photorealistic Walkthroughs"
      description="Cinematic property walkthroughs showcasing features and amenities with high-quality 3D content."
      points={[
        "Story-driven camera choreography tailored to the project.",
        "Motion, sound design and color grade finished in-house.",
        "Delivered in 4K, ready for social, sales suites and pitches.",
      ]}
    />
  ),
});
