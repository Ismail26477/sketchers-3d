import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProject } from "./projects-BCYxraiV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-CsjytSd7.js
var $$splitNotFoundComponentImporter = () => import("./projects._slug-DWbpb33L.mjs");
var $$splitComponentImporter = () => import("./projects._slug-DvvH-Fbj.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Project not found — Sketchers 3D" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { project } = loaderData;
		return { meta: [
			{ title: `${project.title} — Sketchers 3D` },
			{
				name: "description",
				content: `${project.title} — ${project.typology} in ${project.location}. Architectural visualization by Sketchers 3D.`
			},
			{
				property: "og:title",
				content: `${project.title} — Sketchers 3D`
			},
			{
				property: "og:description",
				content: `${project.typology} in ${project.location}. Architectural visualization by Sketchers 3D.`
			},
			{
				property: "og:image",
				content: project.cover
			},
			{
				name: "twitter:image",
				content: project.cover
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
