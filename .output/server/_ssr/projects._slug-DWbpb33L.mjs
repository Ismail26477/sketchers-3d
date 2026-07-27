import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CTUgMGVb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-DWbpb33L.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "min-h-screen bg-background text-foreground",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { solid: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-[70vh] items-center justify-center px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.4em] text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl md:text-6xl",
					children: "Project not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects",
					className: "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-primary hover:underline",
					children: "View all projects"
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
