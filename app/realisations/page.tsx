import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Réalisations – Portfolio de sites web et résultats SEO",
  description:
    "Découvrez les projets réalisés par Veaseo : sites web, référencement SEO, et résultats concrets pour des entreprises locales partout en France.",
  alternates: { canonical: "https://veaseo.fr/realisations" },
};

const projects = [
  {
    title: "L'Atelier Coiffure",
    category: "Salon de coiffure",
    services: ["Création site web", "SEO Local"],
    description:
      "Refonte complète avec stratégie SEO locale. Positionnement en top 3 sur 'coiffeur Paris 11' en 4 mois.",
    results: [
      { metric: "+210%", label: "Réservations" },
      { metric: "#1", label: "Position Google" },
      { metric: "4 mois", label: "Pour les résultats" },
    ],
    color: "from-pink-500/20",
    sector: "Beauté & Bien-être",
  },
  {
    title: "Garage Auto Renard",
    category: "Garage automobile",
    services: ["Création site web", "SEO", "CRO"],
    description:
      "Site avec système de prise de RDV, SEO technique poussé. 15 à 20 appels qualifiés par semaine générés.",
    results: [
      { metric: "20", label: "Appels/semaine" },
      { metric: "+340%", label: "Trafic organique" },
      { metric: "6 mois", label: "ROI atteint" },
    ],
    color: "from-blue-500/20",
    sector: "Automobile",
  },
  {
    title: "Cabinet Psy Paris",
    category: "Psychologue",
    services: ["Création site web", "SEO Local"],
    description:
      "Site minimaliste et rassurant avec SEO géolocalisé. Agenda complet dès le 2ème mois post-lancement.",
    results: [
      { metric: "2 mois", label: "Agenda complet" },
      { metric: "Top 3", label: "Mots-clés cibles" },
      { metric: "+180%", label: "Prises de contact" },
    ],
    color: "from-green-500/20",
    sector: "Santé & Bien-être",
  },
  {
    title: "Plombier Express 75",
    category: "Plombier",
    services: ["Refonte site web", "SEO d'urgence"],
    description:
      "Refonte avec focus urgence SEO locale. Visibilité maximale sur les recherches 'plombier urgence Paris'.",
    results: [
      { metric: "+280%", label: "Appels entrants" },
      { metric: "#2", label: "Position locale" },
      { metric: "3 mois", label: "Pour les résultats" },
    ],
    color: "from-orange-500/20",
    sector: "Artisanat",
  },
  {
    title: "Restaurant Le Comptoir",
    category: "Restaurant",
    services: ["Création site web", "SEO Local", "CRO"],
    description:
      "Site avec menu en ligne et réservation. SEO local pour capter les recherches 'restaurant + quartier'.",
    results: [
      { metric: "+150%", label: "Réservations en ligne" },
      { metric: "Top 5", label: "Sur 12 mots-clés" },
      { metric: "4 mois", label: "De délai résultats" },
    ],
    color: "from-yellow-500/20",
    sector: "Restauration",
  },
  {
    title: "Cabinet Comptable RD",
    category: "Expert-comptable",
    services: ["Création site web", "SEO"],
    description:
      "Site professionnel avec contenu SEO expert. Génération de leads qualifiés TPE/PME en Île-de-France.",
    results: [
      { metric: "+95%", label: "Leads qualifiés" },
      { metric: "#3", label: "Sur mots-clés cibles" },
      { metric: "5 mois", label: "ROI positif" },
    ],
    color: "from-purple-500/20",
    sector: "Services B2B",
  },
];

const sectors = ["Tous", "Beauté & Bien-être", "Automobile", "Santé & Bien-être", "Artisanat", "Restauration", "Services B2B"];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="badge mb-6">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Des résultats qui{" "}
              <span className="text-gradient">parlent d&apos;eux-mêmes</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-8">
              Chaque projet Veaseo est une success story. Découvrez comment j&apos;aide les entreprises locales à transformer leur présence digitale en moteur de croissance.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-10">
              {[
                { value: "50+", label: "Projets livrés" },
                { value: "97%", label: "Satisfaction" },
                { value: "4.9/5", label: "Note moyenne" },
              ].map((stat) => (
                <div key={stat.label} className="card text-center">
                  <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                  <div className="text-dark-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 100}>
                <div className={`card-glow h-full flex flex-col bg-gradient-to-br ${project.color} to-dark-800`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xs text-dark-400 mb-1">{project.sector}</div>
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                      <p className="text-orange-400 text-sm">{project.category}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-dark-400" />
                  </div>

                  {/* Services tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((s) => (
                      <span key={s} className="text-xs bg-dark-700 text-dark-300 px-2 py-1 rounded-full border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-dark-300 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                    {project.results.map((r) => (
                      <div key={r.label} className="text-center">
                        <div className="text-orange-400 font-bold text-sm">{r.metric}</div>
                        <div className="text-dark-400 text-xs">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors served */}
      <section className="py-16 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom text-center">
          <AnimatedSection>
            <p className="text-dark-400 text-sm mb-6">Secteurs accompagnés</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {sectors.slice(1).map((sector) => (
                <span
                  key={sector}
                  className="bg-dark-700 border border-white/10 text-dark-200 text-sm px-4 py-2 rounded-full"
                >
                  {sector}
                </span>
              ))}
            </div>
            <p className="text-dark-400 text-sm mt-6">
              Votre secteur n&apos;est pas listé ?{" "}
              <Link href="/contact" className="text-orange-400 hover:underline">
                Contactez-moi quand même →
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Réalisations Veaseo",
            itemListElement: projects.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              description: p.description,
            })),
          }),
        }}
      />

      <CTABanner
        title="Votre entreprise sera la prochaine success story"
        description="Rejoignez les 50+ entreprises locales qui ont choisi Veaseo pour transformer leur visibilité digitale."
        primaryLabel="Démarrer mon projet"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  );
}
