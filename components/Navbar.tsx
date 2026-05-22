"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Rocket, Phone } from "lucide-react";
import { services, business, telLink } from "@/lib/business";

const navLinks: Array<{
  href: string;
  label: string;
  hasMegaMenu?: boolean;
}> = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services", hasMegaMenu: true },
  { href: "/realisations", label: "Réalisations" },
  { href: "/zones-intervention", label: "Zones" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center bg-orange-500 rounded-xl group-hover:bg-orange-600 transition-colors duration-200">
            <Rocket className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <span className="text-xl font-bold text-white">
            vea<span className="text-orange-500">seo</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasMegaMenu ? (
              <div key={link.href} className="relative group">
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    pathname.startsWith("/services")
                      ? "text-orange-400"
                      : "text-dark-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    strokeWidth={2}
                  />
                </button>
                {/* Mega menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <div className="bg-dark-800 border border-white/10 rounded-2xl p-4 shadow-card">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => {
                        const href = `/services/${service.slug}`;
                        const isActive = pathname === href;
                        return (
                          <Link
                            key={service.slug}
                            href={href}
                            className={`block px-4 py-3 rounded-xl transition-colors duration-150 ${
                              isActive
                                ? "bg-orange-500/10"
                                : "hover:bg-white/5"
                            }`}
                          >
                            <div
                              className={`font-semibold text-sm mb-0.5 ${
                                isActive ? "text-orange-400" : "text-white"
                              }`}
                            >
                              {service.name}
                            </div>
                            <div className="text-dark-400 text-xs leading-snug">
                              {service.description}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-1 px-4 py-2.5 rounded-xl text-sm text-orange-400 hover:bg-orange-500/10 transition-colors duration-150 font-semibold"
                      >
                        Voir tous les services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-orange-400"
                    : "text-dark-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={telLink}
            className="hidden xl:flex items-center gap-2 text-dark-200 hover:text-orange-400 text-sm font-semibold transition-colors"
            aria-label={`Appeler ${business.name}`}
          >
            <Phone className="w-4 h-4" />
            {business.phone}
          </a>
          <Link href="/contact" className="btn-primary text-sm py-2 px-5">
            Devis gratuit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-dark-200 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom pb-6 pt-4 space-y-1 border-t border-white/5 mt-3">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-orange-400 bg-orange-500/10"
                    : "text-dark-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
              {link.hasMegaMenu && (
                <div className="ml-4 mt-1 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 rounded-xl text-xs text-dark-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <a
              href={telLink}
              className="btn-secondary text-sm justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> {business.phone}
            </a>
            <Link href="/contact" className="btn-primary text-sm justify-center">
              Devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
