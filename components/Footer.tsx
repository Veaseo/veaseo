import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/creation-site-web", label: "Création de site web" },
    { href: "/services/referencement-seo", label: "Référencement SEO" },
    { href: "/services/optimisation-conversion", label: "Optimisation CRO" },
    { href: "/services/refonte-site-web", label: "Refonte de site web" },
  ],
  pages: [
    { href: "/realisations", label: "Réalisations" },
    { href: "/a-propos", label: "À propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Confidentialité" },
    { href: "/sitemap.xml", label: "Plan du site" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="container-custom py-12">
          <div className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Prêt à dominer Google ?
              </h2>
              <p className="text-dark-300">
                Obtenez votre audit SEO gratuit et découvrez votre potentiel de croissance.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary whitespace-nowrap text-base px-8 py-4 shrink-0"
            >
              Audit gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-orange-500 rounded-xl">
                <Rocket className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold text-white">
                vea<span className="text-orange-500">seo</span>
              </span>
            </Link>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              Webdesigner spécialisé SEO pour les entreprises locales. Je transforme votre visibilité Google en clients réels.
            </p>
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", href: "https://linkedin.com", abbr: "in" },
                { label: "Instagram", href: "https://instagram.com", abbr: "ig" },
                { label: "Twitter/X", href: "https://twitter.com", abbr: "x" },
              ].map(({ href, label, abbr }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-dark-300 transition-colors duration-200 text-xs font-bold uppercase"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
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

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.pages.map((link) => (
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

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@veaseo.fr"
                  className="flex items-center gap-2 text-dark-300 hover:text-orange-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  contact@veaseo.fr
                </a>
              </li>
              <li>
                <a
                  href="tel:+33600000000"
                  className="flex items-center gap-2 text-dark-300 hover:text-orange-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +33 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2 text-dark-300 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                France
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dark-400 text-xs">
            © {new Date().getFullYear()} Veaseo. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
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
