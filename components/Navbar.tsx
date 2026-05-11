"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Amenities", href: "#amenities" },
  { label: "Price", href: "#price" },
  { label: "Gallery", href: "#gallery" },
  { label: "Master Floor Plan", href: "#plans" },
  { label: "Location", href: "#location" },
  { label: "Virtual Tour", href: "#virtual-tour" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 0);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-[68px] w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1100px] items-center px-[43px] 2xl:px-0">
        <a href="#home" aria-label="Eldeco home" className="shrink-0">
          <img
            src="/logo/logo.png"
            alt="Eldeco"
            width={150}
            height={36}
            className="h-auto w-[150px]"
          />
        </a>

        <nav className="ml-[35px] hidden flex-1 items-center justify-between lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap text-[12px] font-extrabold leading-none transition-colors ${
                isScrolled
                  ? "text-[#222] hover:text-[#c29b37]"
                  : "text-white hover:text-[#e0ca72]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
