"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{ transition: "background-color 200ms ease, border-color 200ms ease" }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-pitch/95 backdrop-blur-sm border-b border-divider"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20 h-[72px] flex items-center justify-between">

        {/* Logo — text placeholder, swap for client SVG */}
        <Link href="/" onClick={closeMenu} className="flex flex-col leading-none gap-[2px]">
          <span className="font-display font-bold text-[20px] text-bone tracking-[0.06em]">
            GARCIA&apos;S
          </span>
          <span className="font-display font-medium text-[10px] text-brass tracking-[0.18em] uppercase">
            AUTO DETAIL
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`font-display font-medium text-[13px] uppercase tracking-[0.10em] transition-colors duration-150 ${
                  isActive
                    ? "text-bone border-b border-brass pb-[4px]"
                    : "text-steel hover:text-bone"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="font-display font-bold text-[12px] uppercase tracking-[0.12em] text-pitch bg-brass hover:bg-[#D4AB48] px-6 py-[10px] rounded-[2px] transition-colors duration-150"
          >
            Book Now
          </Link>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 text-bone"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-5 h-px bg-bone origin-center"
            style={{
              transition: "transform 200ms ease",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px bg-bone"
            style={{
              transition: "opacity 200ms ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px bg-bone origin-center"
            style={{
              transition: "transform 200ms ease",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className="md:hidden fixed inset-0 bg-pitch flex flex-col items-center justify-center gap-10 z-40"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 200ms ease",
        }}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={closeMenu}
            className="font-display font-bold text-[44px] uppercase tracking-[0.01em] text-bone hover:text-brass transition-colors duration-150"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={closeMenu}
          className="mt-4 font-display font-bold text-[13px] uppercase tracking-[0.12em] text-pitch bg-brass hover:bg-[#D4AB48] px-8 py-[14px] rounded-[2px] transition-colors duration-150"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
