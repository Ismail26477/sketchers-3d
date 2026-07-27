import { a as __toESM } from "../_runtime.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CTUgMGVb.mjs";
import { t as PROJECTS } from "./projects-BCYxraiV.mjs";
import { t as Route } from "./projects._slug-CsjytSd7.mjs";
import { n as Lightbox, t as Zoom } from "../_libs/yet-another-react-lightbox.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-DvvH-Fbj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { project } = Route.useLoaderData();
	const [index, setIndex] = (0, import_react.useState)(-1);
	const next = PROJECTS[(PROJECTS.findIndex((p) => p.slug === project.slug) + 1) % PROJECTS.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { solid: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-[70vh] w-full overflow-hidden md:h-[85vh]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.cover,
								alt: project.title,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-12 md:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.4em] text-primary",
									children: project.typology
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 text-5xl leading-[1.05] md:text-7xl",
									children: project.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "grid grid-cols-2 gap-8 border-t border-border pt-8 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
											children: "Location"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-2 text-foreground/90",
											children: project.location
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
											children: "Year"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-2 text-foreground/90",
											children: project.year
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
											children: "Client"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-2 text-foreground/90",
											children: project.client
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
											children: "Discipline"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-2 text-foreground/90",
											children: "Visualization"
										})] })
									]
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto max-w-[1400px] px-6 pb-24 lg:px-12 lg:pb-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-12 gap-6 md:gap-10",
							children: project.images.map((src, i) => {
								const mod = i % 7;
								const cls = mod === 0 ? "col-span-12 aspect-[16/9]" : mod === 1 ? "col-span-12 md:col-span-7 aspect-[4/3]" : mod === 2 ? "col-span-12 md:col-span-5 aspect-[3/4]" : mod === 3 ? "col-span-12 md:col-span-5 aspect-[3/4]" : mod === 4 ? "col-span-12 md:col-span-7 aspect-[4/3]" : mod === 5 ? "col-span-6 aspect-[4/5]" : "col-span-6 aspect-[4/5]";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									initial: {
										opacity: 0,
										y: 24
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: {
										once: true,
										margin: "-60px"
									},
									transition: { duration: .7 },
									onClick: () => setIndex(i),
									className: `group relative overflow-hidden rounded-sm bg-secondary ${cls}`,
									"aria-label": `Open image ${i + 1}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src,
										alt: "",
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
									})
								}, i);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects/$slug",
							params: { slug: next.slug },
							className: "group relative block h-[50vh] w-full overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: next.cover,
									alt: next.title,
									className: "h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center justify-center text-center text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.4em] text-white/70",
										children: "Next Project"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-4xl md:text-6xl",
										children: next.title
									})] })
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				open: index >= 0,
				index,
				close: () => setIndex(-1),
				slides: project.images.map((src) => ({ src })),
				plugins: [Zoom],
				animation: {
					fade: 400,
					swipe: 400
				},
				controller: { closeOnBackdropClick: true },
				carousel: { finite: false },
				zoom: {
					maxZoomPixelRatio: 3,
					scrollToZoom: true
				},
				styles: {
					container: {
						backgroundColor: "rgba(10, 10, 10, 0.96)",
						backdropFilter: "blur(20px)"
					},
					slide: { padding: "5%" }
				}
			})
		]
	});
}
//#endregion
export { ProjectPage as component };
