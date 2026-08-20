import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo1.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateLogoColor = () => {
      // Home page hero
      let hero = document.getElementById("top");

      // Other pages — detect the first section inside main
      if (!hero) {
        hero = document.querySelector("main > section");
      }

      // If the page doesn't have a hero section,
      // use normal scroll detection
      if (!hero) {
        setScrolled(window.scrollY > 30);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;

      // White logo while hero is visible
      // Blue logo after hero has completely passed
      setScrolled(heroBottom <= 0);
    };

    // Wait until the new page/hero is rendered
    const timeout = setTimeout(() => {
      updateLogoColor();
    }, 50);

    window.addEventListener("scroll", updateLogoColor, {
      passive: true,
    });

    window.addEventListener("resize", updateLogoColor);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", updateLogoColor);
      window.removeEventListener("resize", updateLogoColor);
    };
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:h-24 sm:px-6 lg:h-24 lg:px-12">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <div className="relative h-16 w-[180px] sm:h-12 sm:w-[170px] lg:h-24 lg:w-[230px]">
            {/* WHITE LOGO — HERO */}
            <img
              src={logo}
              alt="Sketchers 3D"
              className={`
                absolute inset-0 h-full w-full object-contain object-left
                transition-opacity duration-500 ease-in-out
                ${scrolled ? "opacity-0" : "opacity-100"}
              `}
            />

            {/* BLUE LOGO — AFTER HERO */}
            <img
              src={logo}
              alt="Sketchers 3D"
              className={`
                absolute inset-0 h-full w-full object-contain object-left
                transition-opacity duration-500 ease-in-out
                ${scrolled ? "opacity-100" : "opacity-0"}
              `}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(32%) sepia(98%) saturate(1847%) hue-rotate(204deg) brightness(92%) contrast(96%)",
              }}
            />
          </div>
        </Link>

        {/* CONTACT */}
        <Link
          to="/contact"
          className="
            border border-black bg-black
            px-3 py-2
            text-[13px] font-medium uppercase tracking-[0.15em] text-white
            transition-all duration-300
            hover:bg-white hover:text-black
            sm:px-6 sm:py-2.5 sm:text-[10px]
            lg:px-8 lg:py-3 lg:text-[11px] lg:tracking-[0.25em]
          "
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
