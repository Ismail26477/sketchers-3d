import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-CTUgMGVb.mjs";
import { t as PageHero } from "./PageHero-D4yBh6hj.mjs";
import { t as g9_default } from "./g9-BJGNS4S4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-pltp21HX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Get in touch",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's build ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "italic",
					children: "something remarkable."
				})] }),
				image: g9_default
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "py-16 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.4em] text-primary",
							children: "Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-3xl leading-[1.1] md:text-4xl",
							children: "Tell us about your project."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-[15px] leading-relaxed text-foreground/70",
							children: "Share your timeline, scope and references. Our team will respond within one business day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-10 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/50 uppercase tracking-[0.2em] text-[11px] mr-3",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:sketchers3dofficial@gmail.com",
									className: "underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground",
									children: "sketchers3dofficial@gmail.com"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/50 uppercase tracking-[0.2em] text-[11px] mr-3",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919595376600",
									className: "underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground",
									children: "+91 95953 76600"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/50 uppercase tracking-[0.2em] text-[11px] mr-3",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919518913547",
									className: "underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground",
									children: "+91 95189 13547"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/50 uppercase tracking-[0.2em] text-[11px] mr-3",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+917620720321",
									className: "underline underline-offset-[6px] decoration-foreground/30 hover:decoration-foreground",
									children: "+91 76207 20321"
								})] })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								className: "mt-2 w-full border-0 border-b border-foreground/20 bg-transparent pb-3 text-sm focus:border-foreground focus:outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								className: "mt-2 w-full border-0 border-b border-foreground/20 bg-transparent pb-3 text-sm focus:border-foreground focus:outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50",
								children: "Project details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 5,
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								className: "mt-2 w-full resize-none border-0 border-b border-foreground/20 bg-transparent pb-3 text-sm focus:border-foreground focus:outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "inline-block bg-[#111111] px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-primary",
								children: sent ? "Thank you — we'll be in touch" : "Send Enquiry"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-20 max-w-[1400px] px-6 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.4em] text-primary",
						children: "Find us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 aspect-[16/9] w-full overflow-hidden border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Sketchers 3D location",
							src: "https://www.google.com/maps?q=Nagpur,Maharashtra,India&output=embed",
							className: "h-full w-full",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
