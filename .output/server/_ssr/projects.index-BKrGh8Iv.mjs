import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-CTUgMGVb.mjs";
import { t as PageHero } from "./PageHero-D4yBh6hj.mjs";
import { t as g5_default } from "./g5-DPlfeVvH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects.index-BKrGh8Iv.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Selected Work",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Projects, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "italic",
					children: "an archive."
				})] }),
				image: g5_default
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-12 md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.4em] text-primary",
						children: "Coming Soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl",
						children: ["A new archive is ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-foreground/60",
							children: "on the way."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-foreground/70",
						children: "We're curating a fresh selection of our most recent commissions across residential, hospitality, cultural and master-plan work. Check back shortly, or reach out to request a private portfolio."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProjectsPage as component };
