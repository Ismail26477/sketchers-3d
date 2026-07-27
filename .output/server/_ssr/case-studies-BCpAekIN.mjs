import { n as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CTUgMGVb.mjs";
import { t as PageHero } from "./PageHero-D4yBh6hj.mjs";
import { t as PROJECTS } from "./projects-BCYxraiV.mjs";
import { t as g9_default } from "./g9-BJGNS4S4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies-BCpAekIN.js
var import_jsx_runtime = require_jsx_runtime();
var STUDIES = PROJECTS.slice(0, 6).map((p, i) => ({
	...p,
	chapter: String(i + 1).padStart(2, "0"),
	headline: i % 3 === 0 ? "Selling a tower off-plan through cinematic renders." : i % 3 === 1 ? "A single hero frame that anchored a brand launch." : "Rebuilding a heritage narrative for a global audience.",
	metric: i % 3 === 0 ? "62% pre-sales in 8 weeks" : i % 3 === 1 ? "3.4M impressions in one week" : "Featured in 12 publications"
}));
function CaseStudiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Case Studies",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Craft, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "italic",
					children: "measured."
				})] }),
				image: g9_default
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "py-16 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1400px] px-6 pb-24 lg:px-12 lg:pb-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-24 md:space-y-40",
						children: STUDIES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							initial: {
								opacity: 0,
								y: 32
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: { duration: .8 },
							className: "grid gap-10 md:grid-cols-12 md:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/projects/$slug",
									params: { slug: s.slug },
									className: "group block overflow-hidden rounded-sm bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.cover,
										alt: s.title,
										className: "aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""} flex flex-col justify-center`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] uppercase tracking-[0.4em] text-primary",
										children: [
											"Case ",
											s.chapter,
											" — ",
											s.typology
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-6 text-3xl leading-tight md:text-5xl",
										children: s.headline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-6 leading-relaxed text-foreground/70",
										children: [
											s.title,
											" in ",
											s.location,
											" for ",
											s.client,
											". A study in restraint, composition and light — every frame designed to carry the weight of the architecture without ornament."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-10 flex items-center gap-6 border-t border-border pt-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-2xl text-primary",
											children: s.metric
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/projects/$slug",
										params: { slug: s.slug },
										className: "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-foreground transition-colors hover:text-primary",
										children: "Read the project →"
									})
								]
							})]
						}, s.slug))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CaseStudiesPage as component };
