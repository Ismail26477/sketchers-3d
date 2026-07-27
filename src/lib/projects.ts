import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import g10 from "@/assets/g10.jpg";
import g11 from "@/assets/g11.jpg";
import g12 from "@/assets/g12.jpg";
import g13 from "@/assets/g13.jpg";
import g14 from "@/assets/g14.jpg";
import g15 from "@/assets/g15.jpg";
import g16 from "@/assets/g16.jpg";
import g17 from "@/assets/g17.jpg";
import g18 from "@/assets/g18.jpg";
import g19 from "@/assets/g19.jpg";
import g20 from "@/assets/g20.jpg";

const ALL = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20];

export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  typology: string;
  client: string;
  cover: string;
  images: string[];
};

function pick(start: number, count = 16): string[] {
  return Array.from({ length: count }, (_, i) => ALL[(start + i) % ALL.length]);
}

export const PROJECTS: Project[] = [
  { slug: "serenity-tower", title: "Serenity Tower", year: "2024", location: "Dubai, UAE", typology: "Residential High-Rise", client: "Aurelius Group", cover: g1, images: pick(0, 18) },
  { slug: "azure-residences", title: "Azure Residences", year: "2024", location: "Lisbon, Portugal", typology: "Coastal Residential", client: "Maison Ko", cover: g2, images: pick(2, 17) },
  { slug: "vertex-pavilion", title: "Vertex Pavilion", year: "2023", location: "Kyoto, Japan", typology: "Cultural Pavilion", client: "Helios Studio", cover: g3, images: pick(4, 16) },
  { slug: "meridian-heights", title: "Meridian Heights", year: "2024", location: "New York, USA", typology: "Mixed-Use Tower", client: "Northwind", cover: g4, images: pick(6, 18) },
  { slug: "kai-loft", title: "Kai Loft", year: "2023", location: "Copenhagen, Denmark", typology: "Interior Residential", client: "Kai & Co", cover: g5, images: pick(8, 15) },
  { slug: "helios-atrium", title: "Helios Atrium", year: "2024", location: "Marrakech, Morocco", typology: "Hospitality", client: "Fieldnotes", cover: g6, images: pick(10, 17) },
  { slug: "northwind-marina", title: "Northwind Marina", year: "2023", location: "Oslo, Norway", typology: "Master Plan", client: "Northwind", cover: g7, images: pick(12, 18) },
  { slug: "volta-cultural", title: "Volta Cultural Centre", year: "2024", location: "Barcelona, Spain", typology: "Civic & Cultural", client: "Volta", cover: g8, images: pick(1, 16) },
  { slug: "obscura-retreat", title: "Obscura Retreat", year: "2023", location: "Reykjavík, Iceland", typology: "Boutique Retreat", client: "Obscura", cover: g9, images: pick(3, 17) },
  { slug: "parallel-workspace", title: "Parallel Workspace", year: "2024", location: "Berlin, Germany", typology: "Commercial Interior", client: "Parallel", cover: g10, images: pick(5, 15) },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
