import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-CTUgMGVb.mjs";
import { t as PageHero } from "./PageHero-D4yBh6hj.mjs";
import { t as g9_default } from "./g9-BJGNS4S4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-PbVIhmb-.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		title: "1. Introduction",
		body: "These Terms and Conditions govern your use of the Sketchers 3D website and any services provided by the studio. By accessing this site or engaging our services, you agree to be bound by these terms in full. If you disagree with any part of these terms, please refrain from using our site or services."
	},
	{
		title: "2. Intellectual Property",
		body: "All imagery, animations, renders, written content and design assets displayed on this website remain the exclusive intellectual property of Sketchers 3D unless explicitly stated otherwise. Reproduction, redistribution or commercial use of any material without prior written consent is strictly prohibited."
	},
	{
		title: "3. Engagement of Services",
		body: "Project engagements are formalised through a written proposal or Statement of Work. All timelines, deliverables and fees will be defined therein. Any modifications to scope must be agreed in writing and may incur additional fees. A non-refundable deposit is required to secure a slot in the studio calendar."
	},
	{
		title: "4. Payment Terms",
		body: "Invoices are issued according to the milestone schedule set out in the proposal. Payment is due within fourteen (14) days of invoice date. Late payments may incur interest at a rate of 1.5% per month. Final files and full usage rights are released only upon receipt of full payment."
	},
	{
		title: "5. Usage Rights & Licensing",
		body: "Upon final payment, the client is granted a non-exclusive worldwide licence to use the delivered assets for the agreed marketing and promotional purposes. Sketchers 3D retains the right to feature all completed work in its portfolio, awards submissions and case studies unless otherwise agreed in writing."
	},
	{
		title: "6. Confidentiality",
		body: "The studio treats all project materials, plans and communications with the strictest confidentiality. We are open to signing bespoke non-disclosure agreements where required, and we expect clients to extend the same discretion regarding our proprietary process and pricing."
	},
	{
		title: "7. Limitation of Liability",
		body: "Sketchers 3D shall not be liable for any indirect, incidental or consequential losses arising from the use of our services or deliverables. Our total liability for any claim shall not exceed the fees paid by the client for the specific project giving rise to the claim."
	},
	{
		title: "8. Governing Law",
		body: "These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Dubai."
	},
	{
		title: "9. Contact",
		body: "For any questions regarding these terms, please contact us at hello@sketchers3d.com."
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Legal",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Terms & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "italic",
					children: "Conditions."
				})] }),
				image: g9_default
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "py-16 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-3xl px-6 lg:px-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm uppercase tracking-[0.25em] text-muted-foreground",
						children: "Last updated — July 2026"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-3xl px-6 py-12 lg:px-0 lg:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-14",
						children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl md:text-3xl",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-[15px] leading-[1.8] text-foreground/75",
								children: s.body
							})]
						}, s.title))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { TermsPage as component };
