import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, CheckCircle2, MapPin, Phone, Mail, Clock,
  Globe, Search, Map, Building2, RefreshCw, PenTool,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import {
  cities,
  services,
  business,
  getCityBySlug,
  telLink,
  mailtoLink,
} from "@/lib/business";

const iconMap = {
  Globe, Search, Map, Building2, RefreshCw, PenTool, MapPin,
} as const;

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.slug);
  if (!city) return {};

  return {
    title: `Création de site internet à ${city.name} – Webdesigner SEO local`,
    description: `Création de site internet à ${city.name} (${city.department}). Sites ultra-rapides, SEO local et livraison en 30 jours. Pour artisans, commerçants et PME de ${city.name} et alentours.`,
    alternates: {
      canonical: `${business.url}/zones-intervention/${city.slug}`,
    },
    openGraph: {
      title: `Création de site internet à ${city.name} – Veaseo`,
      description: `Webdesigner SEO local à ${city.name}. Sites web professionnels pour entreprises locales.`,
      url: `${business.url}/zones-intervention/${city.slug}`,
      type: "website",
    },
  };
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug);
  if (!city) notFound();

  // Cross-link suggestions: 5 other cities
  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 8);

  return (
    <>
      {/* LocalBusiness Schema (city-specific) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `${business.name} — ${city.name}`,
            url: `${business.url}/zones-intervention/${city.slug}`,
            description: `Création de site internet et SEO local à ${city.name}. ${business.description}`,
            telephone: business.phoneE164,
            email: business.email,
            priceRange: "€€€",
            areaServed: {
              "@type": "City",
              name: city.name,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: business.address.locality,
              addressRegion: business.address.region,
              addressCountry: business.address.country,
            },
            provider: { "@id": `${business.url}/#localbusiness` },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: business.url },
              { "@type": "ListItem", position: 2, name: "Zones d'intervention", item: `${business.url}/zones-intervention` },
              { "@type": "ListItem", position: 3, name: city.name, item: `${business.url}/zones-intervention/${city.slug}` },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Link href="/zones-intervention" className="text-dark-400 hover:text-orange-400 transition-colors">
                Zones d&apos;intervention
              </Link>
              <span className="text-dark-600">/</span>
              <span className="text-dark-300">{city.name}</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-orange-400" />
              </div>
              <span className="badge">{city.department}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Création de site internet{" "}
              <span className="text-gradient">à {city.name}</span>
            </h1>
            <p className="text-dark-200 text-xl max-w-3xl mb-4 leading-relaxed font-medium">
              Un webdesigner spécialisé SEO local à votre service.
            </p>
            <p className="text-dark-300 text-lg max-w-3xl mb-8 leading-relaxed">
              Vous êtes une entreprise locale à {city.name} ? Je crée des sites internet sur-mesure qui transforment les recherches Google de vos prospects en appels, devis et rendez-vous. Sites ultra-rapides, optimisés pour le SEO local, livrés en 30 jours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Démarrer mon projet <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={telLink} className="btn-secondary px-8 py-4 text-base">
                <Phone className="w-5 h-5" /> {business.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE VEASEO */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge={`Webdesigner à ${city.name}`}
            title="Pourquoi choisir Veaseo"
            titleHighlight={`pour votre site à ${city.name}`}
            description="Une spécialisation 100% entreprises locales, basée en Bretagne sud, pour des sites pensés pour Google et vos clients."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: `Connaissance du marché ${city.department}`,
                desc: `Je connais les particularités du marché breton et adapte chaque site aux habitudes de recherche locales.`,
              },
              {
                title: "Spécialiste SEO local",
                desc: `Mots-clés ciblés type "votre métier ${city.name}", Schema.org LocalBusiness, fiche Google Business optimisée.`,
              },
              {
                title: "Performance technique",
                desc: "Score PageSpeed mobile > 95%, certificat SSL, conformité RGPD complète, sauvegardes automatiques.",
              },
              {
                title: "Process humain",
                desc: "5 questionnaires détaillés + atelier visio pour comprendre vraiment votre activité. Aucune approximation.",
              },
              {
                title: "Livraison en 30 jours",
                desc: "Engagement contractuel. Pas de promesses vagues, pas de délais qui dérapent.",
              },
              {
                title: "Site 100% à vous",
                desc: "Code, hébergement et nom de domaine transférés à votre nom à la livraison. Aucune dépendance.",
              },
            ].map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 60}>
                <div className="card h-full">
                  <CheckCircle2 className="w-7 h-7 text-orange-400 mb-3" />
                  <h3 className="text-white font-bold mb-2">{b.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES IN THIS CITY */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Tous les services"
            title={`Mes 7 services à`}
            titleHighlight={city.name}
            description="Une offre complète pour la visibilité locale de votre entreprise."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
              return (
                <AnimatedSection key={service.slug} delay={i * 60}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="card-glow group h-full flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {service.name} à {city.name}
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>
                    <span className="text-orange-400 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT QUICK */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="card grid md:grid-cols-3 gap-6 text-center">
              <a href={telLink} className="group">
                <Phone className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">{business.phone}</div>
                <div className="text-dark-400 text-xs mt-1">Appel direct</div>
              </a>
              <a href={mailtoLink} className="group">
                <Mail className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">{business.email}</div>
                <div className="text-dark-400 text-xs mt-1">Réponse sous 24h</div>
              </a>
              <div>
                <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-white font-semibold">{business.openingHoursHuman}</div>
                <div className="text-dark-400 text-xs mt-1">Devis sous 48h</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OTHER CITIES */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="J'interviens aussi à"
            title="D&apos;autres villes"
            titleHighlight="du Morbihan"
          />
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/zones-intervention/${c.slug}`}
                className="bg-dark-800 border border-white/10 hover:border-orange-500/30 text-dark-200 hover:text-orange-400 text-sm px-4 py-2 rounded-full transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-orange-400" />
                {c.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/zones-intervention"
              className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-semibold"
            >
              Voir toutes les zones d&apos;intervention →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Prêt à lancer votre site à ${city.name} ?`}
        description="Brief offert de 30 min en visio. Devis sous 48h, aucun engagement."
        primaryLabel="Démarrer mon projet"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  );
}
