"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(27,42,74,0.12),0_8px_30px_-12px_rgba(27,42,74,0.18)]" : ""
      } bg-paper/95 backdrop-blur border-b border-navy/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <Logo light={false} />

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-navy/70 hover:text-navy dark:text-white/70 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop controls — right */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-navy/60 hover:text-navy dark:text-white/60 dark:hover:text-white transition-colors"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <span
              className="h-5 w-px bg-navy/15 dark:bg-white/15"
              aria-hidden="true"
            />
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-navy text-white dark:bg-gold dark:text-navy text-[11px] uppercase tracking-[0.18em] font-bold hover:brightness-110 transition-all"
            >
              Engage Us
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-navy/60 hover:text-navy dark:text-white/60 dark:hover:text-white transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-8 h-8"
              aria-label="Toggle menu"
            >
              {open ? (
                <X size={22} className="text-navy dark:text-white" />
              ) : (
                <Menu size={22} className="text-navy dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-paper dark:bg-dark-page border-t border-navy/10 dark:border-white/10 px-4 pb-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold border-b border-navy/10 dark:border-white/10 ${
                pathname === link.href
                  ? "text-gold"
                  : "text-navy/70 dark:text-white/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-5 block text-center px-5 py-3 bg-navy text-white dark:bg-gold dark:text-navy text-[11px] uppercase tracking-[0.2em] font-bold"
          >
            Engage Us
          </Link>
        </div>
      )}
    </header>
  );
}
