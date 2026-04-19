"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";

interface HeaderProps {
  dark?: boolean;
}

export default function Header({ dark = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const transparent = dark && !scrolled;
  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (href.includes("#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm";
  const focusRingTransparent =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light focus-visible:outline-offset-2 rounded-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-10 h-[68px] flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo — sceau circulaire + wordmark serif */}
        <Link
          href="/"
          aria-label={`${SITE.shortName} — Accueil`}
          aria-current={isActive("/") ? "page" : undefined}
          className={`group inline-flex items-center gap-3 transition-colors duration-500 ${
            transparent ? focusRingTransparent : focusRing
          }`}
        >
          <span
            aria-hidden="true"
            className={`inline-flex items-center justify-center w-7 h-7 border transition-colors duration-500 ${
              transparent
                ? "border-white/40 text-white/80"
                : "border-accent/60 text-accent"
            }`}
          >
            <span className="font-serif text-[11px] tracking-[0.05em] leading-none">
              VAR
            </span>
          </span>
          <span
            className={`font-serif text-[15px] tracking-[0.04em] leading-none transition-colors duration-500 ${
              transparent ? "text-white" : "text-foreground"
            }`}
          >
            Vasseur · Aubry · Roussel
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                "children" in item ? setActiveDropdown(item.label) : undefined
              }
              onMouseLeave={() => setActiveDropdown(null)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setActiveDropdown(null);
              }}
            >
              {"children" in item ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className={`flex items-center gap-1 px-3.5 py-2 text-[12px] uppercase tracking-[0.1em] transition-colors duration-300 ${focusRing} ${
                      transparent
                        ? "text-white/70 hover:text-white"
                        : "text-muted hover:text-foreground"
                    }`}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <ul className="absolute top-full left-0 mt-0 w-60 bg-background border border-border/50 py-2 shadow-xl shadow-foreground/5 animate-[fadeInUp_0.15s_ease-out_both]">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`block px-5 py-2.5 text-[12px] uppercase tracking-[0.06em] text-muted hover:text-foreground hover:bg-surface/60 transition-colors ${focusRing}`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`px-3.5 py-2 text-[12px] uppercase tracking-[0.1em] transition-colors duration-300 ${focusRing} ${
                    transparent
                      ? "text-white/70 hover:text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-[12px] uppercase tracking-[0.1em] border transition-all duration-300 ${focusRing} ${
                transparent
                  ? "border-white/40 text-white hover:bg-white hover:text-foreground"
                  : "border-foreground text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              Prendre rendez-vous
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center">
          <button
            className={`lg:hidden relative z-50 p-2 transition-colors duration-300 ${focusRing} ${
              transparent && !mobileOpen ? "text-white" : "text-foreground"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background overflow-y-auto animate-[fadeIn_0.3s_ease-out_both]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div className="min-h-full flex flex-col pt-24 pb-16 px-8">
            <nav aria-label="Navigation mobile" className="flex-1">
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) =>
                  "children" in item ? (
                    <li
                      key={item.label}
                      className="border-t border-border/40 pt-6 pb-2"
                    >
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-muted mb-4">
                        {item.label}
                      </span>
                      <ul className="space-y-4">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={`font-serif text-3xl sm:text-4xl text-foreground hover:text-accent transition-colors ${focusRing}`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li
                      key={item.label}
                      className="border-t border-border/40 pt-6 pb-2"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`font-serif text-3xl sm:text-4xl text-foreground hover:text-accent transition-colors ${focusRing}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
                <li className="border-t border-border/40 pt-6 pb-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className={`font-serif text-3xl sm:text-4xl text-foreground hover:text-accent transition-colors ${focusRing}`}
                  >
                    Prendre rendez-vous
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-16 pt-8 border-t border-border/40 space-y-2">
              <a
                href={`tel:${SITE.contact.phone.replace(/\s+/g, "")}`}
                className={`block text-base text-muted hover:text-foreground transition-colors ${focusRing}`}
              >
                {SITE.contact.phone}
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className={`block text-base text-muted hover:text-foreground transition-colors ${focusRing}`}
              >
                {SITE.contact.email}
              </a>
              <p className="pt-2 text-[13px] text-muted">
                {SITE.contact.address}
                <br />
                {SITE.contact.postalCode} {SITE.contact.city}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
