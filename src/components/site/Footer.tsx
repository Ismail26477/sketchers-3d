import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

const colHeading =
  "text-[11px] uppercase tracking-[0.3em] text-white/50 mb-5";
const linkCls =
  "inline-block text-sm text-white/90 underline underline-offset-[6px] decoration-white/30 hover:decoration-white transition-colors";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer id="contact" className="bg-[#111111] text-white">
      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 lg:px-12 lg:pt-16 lg:pb-12">
        {/* Brand row */}
        <div className="mb-10 flex items-center gap-4 lg:mb-12">
          <img
            src={logo}
            alt="Sketchers 3D"
            className="h-12 w-auto md:h-16"
          />
        </div>


        {/* Four columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Navigate */}
          <div>
            <div className={colHeading}>Navigate</div>
            <ul className="space-y-3">
              <li><Link to="/" className={linkCls}>Home</Link></li>
              <li><Link to="/about" className={linkCls}>About</Link></li>
              <li><Link to="/projects" className={linkCls}>Projects</Link></li>
              <li><Link to="/case-studies" className={linkCls}>Case Studies</Link></li>
              <li><Link to="/terms" className={linkCls}>Terms &amp; Conditions</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 2 — Services */}
          <div>
            <div className={colHeading}>Services</div>
            <ul className="space-y-3">
              <li><Link to="/services/still-render" className={linkCls}>Still Render</Link></li>
              <li><Link to="/services/video-walkthrough" className={linkCls}>Video Walkthrough</Link></li>
              <li><Link to="/services/vr-tours" className={linkCls}>VR Tours</Link></li>
              <li><Link to="/services/inventory-selector" className={linkCls}>Inventory Selector Module</Link></li>
              <li><Link to="/services/interactive-scale-models" className={linkCls}>Interactive Scale Models</Link></li>
              <li><Link to="/services/neighborhood-map" className={linkCls}>Neighborhood Map</Link></li>
            </ul>
          </div>


          {/* Column 3 — Contact */}
          {/* Column 3 — Contact */}
<div>
  <div className={colHeading}>Contact Us</div>
  <ul className="space-y-3">
    <li>
      <a href="tel:+919595376600" className={linkCls}>
        +91 95953 76600
      </a>
    </li>

    <li>
      <a href="tel:+919518913547" className={linkCls}>
        +91 95189 13547
      </a>
    </li>

    <li>
      <a
        href="mailto:sketchers3dofficial@gmail.com"
        className={linkCls}
      >
        sketchers3dofficial@gmail.com
      </a>
    </li>

    <li>
      <a
        href="https://www.instagram.com/sketchers3d?igsh=d3AwcW5xcXQ5a3l4"
        target="_blank"
        rel="noopener noreferrer"
        className={linkCls}
      >
        Instagram
      </a>
    </li>

    <li>
      <a
        href="https://www.linkedin.com/company/sketchers-3d/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkCls}
      >
        LinkedIn
      </a>
    </li>

    <li>
      <a
        href="https://youtube.com/@sketchers3d?si=xoItqCWj3g5Xe01v"
        target="_blank"
        rel="noopener noreferrer"
        className={linkCls}
      >
        YouTube
      </a>
    </li>
  </ul>
</div>


          {/* Column 4 — Newsletter */}
          <div>
            <div className={colHeading}>Newsletter</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="space-y-6"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border-0 border-b border-white/30 bg-transparent pb-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.3em] text-white underline underline-offset-[6px] decoration-white/40 hover:decoration-white"
              >
                Sign Up
              </button>
              <p className="text-xs text-white/50">We respect your privacy.</p>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center lg:mt-12">
          <div>© {new Date().getFullYear()} Sketchers 3D. All rights reserved.</div>
          <div>Crafted with intention.</div>
        </div>
      </div>
    </footer>
  );
}
