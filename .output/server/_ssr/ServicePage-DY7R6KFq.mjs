import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CTUgMGVb.mjs";
import { t as PageHero } from "./PageHero-D4yBh6hj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServicePage-DY7R6KFq.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage({ eyebrow, title, description, points, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow,
				title,
				image: image ?? "/assets/g4-DGT69Ca-.jpg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1100px] px-6 lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-lg leading-relaxed text-foreground/70",
							children: description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-12 space-y-8",
							children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-border pb-8 text-lg leading-relaxed text-foreground/80",
								children: p
							}, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-block bg-[#111111] px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-primary",
								children: "Enquire"
							})
						})
					]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ServicePage as t };
