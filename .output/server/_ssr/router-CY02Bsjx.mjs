import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$13 } from "./projects._slug-CsjytSd7.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CY02Bsjx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BkWuV9d6.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sketchers 3D — Transforming Spaces into Stories" },
			{
				name: "description",
				content: "Sketchers 3D is a premium architectural visualization studio crafting cinematic 3D renders, animations, and immersive spaces for the world's most ambitious developers."
			},
			{
				property: "og:title",
				content: "Sketchers 3D — Transforming Spaces into Stories"
			},
			{
				property: "og:description",
				content: "Sketchers 3D is a premium architectural visualization studio crafting cinematic 3D renders, animations, and immersive spaces for the world's most ambitious developers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Sketchers 3D — Transforming Spaces into Stories"
			},
			{
				name: "twitter:description",
				content: "Sketchers 3D is a premium architectural visualization studio crafting cinematic 3D renders, animations, and immersive spaces for the world's most ambitious developers."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a3d277d4-03ce-474c-be5c-e641aee203a4/id-preview-0e0d5116--32c0ebb7-c8e8-4615-8ca6-2a09fa37b127.lovable.app-1784042689668.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a3d277d4-03ce-474c-be5c-e641aee203a4/id-preview-0e0d5116--32c0ebb7-c8e8-4615-8ca6-2a09fa37b127.lovable.app-1784042689668.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return router.subscribe("onResolved", ({ toLocation }) => {
			if (!toLocation.hash) window.scrollTo(0, 0);
		});
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$11 = () => import("./routes-DMHErKcX.mjs");
var Route$11 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./about-BTwNAoI6.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Sketchers 3D" },
		{
			name: "description",
			content: "Sketchers 3D is an immersive design & tech company specializing in 3D, VR and advanced technology solutions for real estate."
		},
		{
			property: "og:title",
			content: "About — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Transforming spaces into stories through photorealistic architectural visualization."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./case-studies-BCpAekIN.mjs");
var Route$9 = createFileRoute("/case-studies")({
	head: () => ({ meta: [
		{ title: "Case Studies — Sketchers 3D" },
		{
			name: "description",
			content: "In-depth case studies from Sketchers 3D — process, craft and outcomes across landmark architectural visualization commissions."
		},
		{
			property: "og:title",
			content: "Case Studies — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Process, craft and outcomes across landmark architectural visualization commissions."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-pltp21HX.mjs");
var Route$8 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [
		{ title: "Contact — Sketchers 3D" },
		{
			name: "description",
			content: "Get in touch with Sketchers 3D for photorealistic CGI renders, walkthroughs and architectural animation."
		},
		{
			property: "og:title",
			content: "Contact — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Start a project with Sketchers 3D."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$7 = () => import("./terms-PbVIhmb-.mjs");
var Route$7 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions — Sketchers 3D" },
		{
			name: "description",
			content: "The terms and conditions governing the use of the Sketchers 3D website and engagement of studio services."
		},
		{
			property: "og:title",
			content: "Terms & Conditions — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Terms and conditions governing engagement with Sketchers 3D."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./projects.index-BKrGh8Iv.mjs");
var Route$6 = createFileRoute("/projects/")({
	head: () => ({ meta: [
		{ title: "Projects — Sketchers 3D" },
		{
			name: "description",
			content: "Sketchers 3D projects — coming soon."
		},
		{
			property: "og:title",
			content: "Projects — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "A curated archive of our recent architectural visualization commissions — coming soon."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./services.interactive-scale-models-CzGMsyE8.mjs");
var Route$5 = createFileRoute("/services/interactive-scale-models")({
	head: () => ({ meta: [
		{ title: "Interactive Scale Models — Sketchers 3D" },
		{
			name: "description",
			content: "Innovative hydraulic-enabled interactive scale models widely adopted across the industry."
		},
		{
			property: "og:title",
			content: "Interactive Scale Models — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Innovative hydraulic-enabled interactive scale models widely adopted across the industry."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./services.inventory-selector-O78U5rCz.mjs");
var Route$4 = createFileRoute("/services/inventory-selector")({
	head: () => ({ meta: [
		{ title: "Inventory Selector Module — Sketchers 3D" },
		{
			name: "description",
			content: "Real-time inventory updates with customizable 3D flat selection."
		},
		{
			property: "og:title",
			content: "Inventory Selector Module — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Real-time inventory updates with customizable 3D flat selection."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services.neighborhood-map-BAndL_jD.mjs");
var Route$3 = createFileRoute("/services/neighborhood-map")({
	head: () => ({ meta: [
		{ title: "Neighborhood Map — Sketchers 3D" },
		{
			name: "description",
			content: "Bird's-eye view of nearby amenities, infrastructure, and lifestyle to help buyers assess the location."
		},
		{
			property: "og:title",
			content: "Neighborhood Map — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Bird's-eye view of nearby amenities, infrastructure, and lifestyle to help buyers assess the location."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services.still-render--wHEN8ev.mjs");
var Route$2 = createFileRoute("/services/still-render")({
	head: () => ({ meta: [
		{ title: "Still Render — Sketchers 3D" },
		{
			name: "description",
			content: "Photorealistic still renders that bring your future home to life before it's built."
		},
		{
			property: "og:title",
			content: "Still Render — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Photorealistic still renders that bring your future home to life before it's built."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.video-walkthrough-DiDHkIaM.mjs");
var Route$1 = createFileRoute("/services/video-walkthrough")({
	head: () => ({ meta: [
		{ title: "Video Walkthrough — Sketchers 3D" },
		{
			name: "description",
			content: "Cinematic property walkthroughs showcasing features and amenities with high-quality 3D content."
		},
		{
			property: "og:title",
			content: "Video Walkthrough — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Cinematic property walkthroughs showcasing features and amenities with high-quality 3D content."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services.vr-tours-DYhBj3oS.mjs");
var Route = createFileRoute("/services/vr-tours")({
	head: () => ({ meta: [
		{ title: "VR Tours — Sketchers 3D" },
		{
			name: "description",
			content: "Immersive Virtual Reality tours that let users experience the property remotely."
		},
		{
			property: "og:title",
			content: "VR Tours — Sketchers 3D"
		},
		{
			property: "og:description",
			content: "Immersive Virtual Reality tours that let users experience the property remotely."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var CaseStudiesRoute = Route$9.update({
	id: "/case-studies",
	path: "/case-studies",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var TermsRoute = Route$7.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$12
});
var ProjectsIndexRoute = Route$6.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CaseStudiesRoute,
	ContactRoute,
	TermsRoute,
	ProjectsSlugRoute: Route$13.update({
		id: "/projects/$slug",
		path: "/projects/$slug",
		getParentRoute: () => Route$12
	}),
	ServicesInteractiveScaleModelsRoute: Route$5.update({
		id: "/services/interactive-scale-models",
		path: "/services/interactive-scale-models",
		getParentRoute: () => Route$12
	}),
	ServicesInventorySelectorRoute: Route$4.update({
		id: "/services/inventory-selector",
		path: "/services/inventory-selector",
		getParentRoute: () => Route$12
	}),
	ServicesNeighborhoodMapRoute: Route$3.update({
		id: "/services/neighborhood-map",
		path: "/services/neighborhood-map",
		getParentRoute: () => Route$12
	}),
	ServicesStillRenderRoute: Route$2.update({
		id: "/services/still-render",
		path: "/services/still-render",
		getParentRoute: () => Route$12
	}),
	ServicesVideoWalkthroughRoute: Route$1.update({
		id: "/services/video-walkthrough",
		path: "/services/video-walkthrough",
		getParentRoute: () => Route$12
	}),
	ServicesVrToursRoute: Route.update({
		id: "/services/vr-tours",
		path: "/services/vr-tours",
		getParentRoute: () => Route$12
	}),
	ProjectsIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
