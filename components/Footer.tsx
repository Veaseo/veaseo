import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { business, services, cities, telLink, mailtoLink } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/zones-intervention", label: "Zones d'intervention" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/sitemap.xml", label: "Plan du site" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="container-custom py-12">
          <div className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Prêt à dominer Google localement&nbsp;?
              </h2>
              <p className="text-dark-300">
                Brief offert de 30 min en visio · Devis sous 48h · Aucun engagement.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary whitespace-nowrap text-base px-8 py-4 shrink-0"
            >
              Devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-orange-500 rounded-xl">
                <Rocket className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold text-white">
                vea<span className="text-orange-500">seo</span>
              </span>
            </Link>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              {business.description}
            </p>

            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={telLink}
                  className="flex items-center gap-2 text-dark-200 hover:text-orange-400 text-sm transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 shrink-0 text-orange-400" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={mailtoLink}
                  className="flex items-center gap-2 text-dark-200 hover:text-orange-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-orange-400" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-dark-300 text-sm">
                <MapPin className="w-4 h-4 shrink-0 text-orange-400" />
                {business.address.locality}, {business.address.department}
              </li>
              <li className="flex items-center gap-2 text-dark-300 text-sm">
                <Clock className="w-4 h-4 shrink-0 text-orange-400" />
                {business.openingHoursHuman}
              </li>
            </ul>

            <div className="flex gap-3">
              <a
                href={business.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-dark-300 transition-colors text-xs font-bold uppercase"
              >
                in
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-dark-300 transition-colors text-xs font-bold uppercase"
              >
                ig
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-dark-300 hover:text-orange-400 text-sm transition-colors duration-150"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-orange-400 text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">Zones d&apos;intervention</h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/zones-intervention/${city.slug}`}
                    className="text-dark-300 hover:text-orange-400 text-xs transition-colors duration-150"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/zones-intervention"
              className="inline-flex items-center gap-1 mt-4 text-orange-400 text-xs font-semibold hover:text-orange-300 transition-colors"
            >
              Voir toutes les zones <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dark-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {business.name} — SIRET {business.siret} — Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-400 hover:text-dark-200 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
