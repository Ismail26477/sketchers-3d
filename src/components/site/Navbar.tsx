import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white/0 border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-4 sm:h-24 sm:px-6 lg:h-24 lg:px-12">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Sketchers 3D"
            className="h-20 w-auto sm:h-12 lg:h-16"
          />
        </Link>

        <Link
          to="/contact"
          className="border border-black bg-black px-4 py-2 text-[15px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-6 sm:py-2.5 sm:text-[10px] lg:px-8 lg:py-3 lg:text-[11px] lg:tracking-[0.25em]"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}