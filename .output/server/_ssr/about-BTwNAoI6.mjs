import { t as g1_default } from "./g1-CKLM6qo0.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CTUgMGVb.mjs";
import { t as PageHero } from "./PageHero-D4yBh6hj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BTwNAoI6.js
var import_jsx_runtime = require_jsx_runtime();
var SOLUTION_LINKS = [
	{
		title: "Still Render",
		to: "/services/still-render"
	},
	{
		title: "Video Walkthrough",
		to: "/services/video-walkthrough"
	},
	{
		title: "VR Tours",
		to: "/services/vr-tours"
	},
	{
		title: "Inventory Selector Module",
		to: "/services/inventory-selector"
	},
	{
		title: "Interactive Scale Models",
		to: "/services/interactive-scale-models"
	},
	{
		title: "Neighborhood Map",
		to: "/services/neighborhood-map"
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "About the Studio",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Transforming spaces ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "italic",
					children: "into stories."
				})] }),
				image: g1_default
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-2 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-sans text-3xl font-light uppercase leading-[1.15] tracking-[0.02em] text-foreground md:text-5xl",
							children: [
								"Visual Solutions",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"For New",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Developments"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-md text-[15px] leading-relaxed text-foreground/70",
							children: "We are an immersive design & tech company specializing in 3D, Virtual Reality, and advanced technology solutions for real estate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-[15px] leading-relaxed text-foreground/70",
							children: "By merging high-end design with cutting-edge technology, we elevate the real estate marketing and sales journey—transforming how projects are visualised, experienced, and sold."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 max-w-md list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-foreground/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "14+ years of expertise in the real estate and prop-tech industry." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Delivered 1000+ projects across residential, commercial & mixed use developments." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Trusted by 400+ clients including top Architects, developers & marketing agencies." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Presence in 3 Offices across India, with our headquarters in Delhi." })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-3xl font-light uppercase tracking-[0.02em] text-foreground md:text-4xl",
							children: "Solutions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-4",
							children: SOLUTION_LINKS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: s.to,
								className: "text-sm uppercase tracking-[0.18em] text-foreground/80 underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground",
								children: s.title
							}) }, s.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-block bg-[#111111] px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-primary",
								children: "Enquire"
							})
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { AboutPage as component };
