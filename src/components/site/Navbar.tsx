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
className="
mx-auto
flex
h-16
items-center
justify-between

px-4

sm:h-20
sm:px-6

lg:h-24
lg:px-12
"        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Sketchers 3D"
            className="h-11 w-auto md:h-14 lg:h-16"
          />
        </Link>

        <Link
          to="/contact"
className="
bg-black
text-white
uppercase
tracking-[0.22em]
font-medium
border
border-black
rounded-none

px-4 py-2 text-[11px]

sm:px-5 sm:py-2.5 sm:text-xs

lg:px-8 lg:py-3 lg:text-[11px]

transition-all
hover:bg-white
hover:text-black
"        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
