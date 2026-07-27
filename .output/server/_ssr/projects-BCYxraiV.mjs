import { t as g1_default } from "./g1-CKLM6qo0.mjs";
import { t as g5_default } from "./g5-DPlfeVvH.mjs";
import { t as g9_default } from "./g9-BJGNS4S4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/g4-UhX85iXn.js
var g4_default = "/assets/g4-DGT69Ca-.jpg";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BCYxraiV.js
var g2_default = "/assets/g2-Cyxfg9YX.jpg";
var g3_default = "/assets/g3-BJvhCGEh.jpg";
var g6_default = "/assets/g6-z6Z3m8k6.jpg";
var g7_default = "/assets/g7-CYOv3a87.jpg";
var g8_default = "/assets/g8-Dt70kJPs.jpg";
var g10_default = "/assets/g10-Clk-DQar.jpg";
var ALL = [
	g1_default,
	g2_default,
	g3_default,
	g4_default,
	g5_default,
	g6_default,
	g7_default,
	g8_default,
	g9_default,
	g10_default,
	"/assets/g11-1SoqB0mj.jpg",
	"/assets/g12-CtjwusNm.jpg",
	"/assets/g13-Dc2PzsPs.jpg",
	"/assets/g14-B0YfrxUS.jpg",
	"/assets/g15-ByBIRyiF.jpg",
	"/assets/g16-BpL1V4xO.jpg",
	"/assets/g17-v9D19oz_.jpg",
	"/assets/g18-mNig3gNV.jpg",
	"/assets/g19-bKna5TlX.jpg",
	"/assets/g20-BL6GChEB.jpg"
];
function pick(start, count = 16) {
	return Array.from({ length: count }, (_, i) => ALL[(start + i) % ALL.length]);
}
var PROJECTS = [
	{
		slug: "serenity-tower",
		title: "Serenity Tower",
		year: "2024",
		location: "Dubai, UAE",
		typology: "Residential High-Rise",
		client: "Aurelius Group",
		cover: g1_default,
		images: pick(0, 18)
	},
	{
		slug: "azure-residences",
		title: "Azure Residences",
		year: "2024",
		location: "Lisbon, Portugal",
		typology: "Coastal Residential",
		client: "Maison Ko",
		cover: g2_default,
		images: pick(2, 17)
	},
	{
		slug: "vertex-pavilion",
		title: "Vertex Pavilion",
		year: "2023",
		location: "Kyoto, Japan",
		typology: "Cultural Pavilion",
		client: "Helios Studio",
		cover: g3_default,
		images: pick(4, 16)
	},
	{
		slug: "meridian-heights",
		title: "Meridian Heights",
		year: "2024",
		location: "New York, USA",
		typology: "Mixed-Use Tower",
		client: "Northwind",
		cover: g4_default,
		images: pick(6, 18)
	},
	{
		slug: "kai-loft",
		title: "Kai Loft",
		year: "2023",
		location: "Copenhagen, Denmark",
		typology: "Interior Residential",
		client: "Kai & Co",
		cover: g5_default,
		images: pick(8, 15)
	},
	{
		slug: "helios-atrium",
		title: "Helios Atrium",
		year: "2024",
		location: "Marrakech, Morocco",
		typology: "Hospitality",
		client: "Fieldnotes",
		cover: g6_default,
		images: pick(10, 17)
	},
	{
		slug: "northwind-marina",
		title: "Northwind Marina",
		year: "2023",
		location: "Oslo, Norway",
		typology: "Master Plan",
		client: "Northwind",
		cover: g7_default,
		images: pick(12, 18)
	},
	{
		slug: "volta-cultural",
		title: "Volta Cultural Centre",
		year: "2024",
		location: "Barcelona, Spain",
		typology: "Civic & Cultural",
		client: "Volta",
		cover: g8_default,
		images: pick(1, 16)
	},
	{
		slug: "obscura-retreat",
		title: "Obscura Retreat",
		year: "2023",
		location: "Reykjavík, Iceland",
		typology: "Boutique Retreat",
		client: "Obscura",
		cover: g9_default,
		images: pick(3, 17)
	},
	{
		slug: "parallel-workspace",
		title: "Parallel Workspace",
		year: "2024",
		location: "Berlin, Germany",
		typology: "Commercial Interior",
		client: "Parallel",
		cover: g10_default,
		images: pick(5, 15)
	}
];
function getProject(slug) {
	return PROJECTS.find((p) => p.slug === slug);
}
//#endregion
export { getProject as n, PROJECTS as t };
