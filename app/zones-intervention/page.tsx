import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import { cities, business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Zones d'intervention – Création de site internet dans le Morbihan",
  description:
    "Veaseo intervient dans toutes les principales villes du Morbihan et de Bretagne sud : Vannes, Lorient, Auray, Pontivy, Ploërmel, Rennes, Saint-Brieuc et plus.",
  alternates: { canonical: `${business.url}/zones-intervention` },
};

// Group cities by department
const grouped = cities.reduce<Record<string, typeof cities[number][]>>((acc, city) => {
  if (!acc[city.department]) acc[city.department] = [];
  acc[city.department].push(city);
  return acc;
}, {});

export default function ZonesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: business.url },
              { "@type": "ListItem", position: 2, name: "Zones d'intervention", item: `${business.url}/zones-intervention` },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="badge mb-6">
              <MapPin className="w-3.5 h-3.5" /> {cities.length} villes desservies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Zones d&apos;intervention{" "}
              <span className="text-gradient">en Bretagne</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Basé à {business.address.locality}, j&apos;accompagne les entreprises locales du Morbihan, des Côtes-d&apos;Armor, de l&apos;Ille-et-Vilaine et du Finistère. Tout le process se fait en visio et par email — peu importe la distance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CITIES BY DEPARTMENT */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Toutes les villes"
            title="Où j&apos;interviens"
            titleHighlight="en Bretagne sud"
            description="Cliquez sur votre ville pour découvrir les services de création de site internet et SEO local disponibles près de chez vous."
          />

          <div className="space-y-12">
            {Object.entries(grouped).map(([department, depCities]) => (
              <AnimatedSection key={department}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-orange-500 rounded-full" />
                  {department}
                  <span className="text-dark-400 text-sm font-normal ml-2">
                    ({depCities.length} villes)
                  </span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {depCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/zones-intervention/${city.slug}`}
                      className="card group flex items-center justify-between gap-3 hover:border-orange-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                        <span className="text-white font-medium text-sm truncate">
                          {city.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-dark-400 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* OUT OF ZONE */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous n&apos;êtes pas dans cette liste&nbsp;?
            </h2>
            <p className="text-dark-300 leading-relaxed mb-6">
              Aucun souci : tout le process de création se fait en visio et par mail. Je travaille avec des entreprises locales partout en France. Contactez-moi pour discuter de votre projet, où que vous soyez.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Me contacter <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Prêt à lancer votre projet ?"
        description="Brief offert de 30 min en visio pour comprendre votre activité et vous proposer un devis précis sous 48h."
        primaryLabel="Démarrer mon projet"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  );
}
