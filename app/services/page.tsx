import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe, Search, Map, Building2, RefreshCw, PenTool, MapPin,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import { services, business } from "@/lib/business";

const iconMap = {
  Globe, Search, Map, Building2, RefreshCw, PenTool, MapPin,
} as const;

export const metadata: Metadata = {
  title: "Services – Création de site, SEO local & Google Maps dans le Morbihan",
  description:
    "Tous les services Veaseo : création de site internet, SEO local, Google Maps, refonte, rédaction SEO. Spécialiste des entreprises locales dans le Morbihan.",
  alternates: { canonical: `${business.url}/services` },
};

const guarantees = [
  "Livraison rapide (30 jours pour un site)",
  "Score PageSpeed mobile > 95%",
  "Site 100% à vous à la livraison",
  "Spécialiste exclusif SEO local Morbihan",
];

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: business.url },
              { "@type": "ListItem", position: 2, name: "Services", item: `${business.url}/services` },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="badge mb-6">
              <MapPin className="w-3.5 h-3.5" /> Morbihan & Bretagne sud
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tout ce qu&apos;il faut pour{" "}
              <span className="text-gradient">dominer Google localement</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-8">
              Une gamme complète de services SEO local, conçue pour les entreprises du Morbihan qui veulent attirer plus de clients via Google.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Guarantees */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-12">
              {guarantees.map((g) => (
                <div key={g} className="flex items-center gap-2 text-dark-200 text-xs md:text-sm justify-start text-left">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  {g}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Mes 7 services"
            title="Une expertise"
            titleHighlight="100% SEO local"
            description="Chaque service est pensé pour répondre à un besoin précis des entreprises locales. Pris seuls ou combinés, ils forment l'écosystème complet de votre visibilité."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
              return (
                <AnimatedSection key={service.slug} delay={i * 80}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="card-glow group h-full flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">
                      {service.name}
                    </h2>
                    <p className="text-dark-300 text-sm leading-relaxed mb-6 flex-1">
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

      <CTABanner
        title="Vous ne savez pas par où commencer ?"
        description="Brief offert de 30 min en visio. Je vous aide à identifier le service le plus stratégique pour votre business — sans engagement."
        primaryLabel="Brief gratuit"
        secondaryLabel="En savoir plus sur moi"
        secondaryHref="/a-propos"
      />
    </>
  );
}
