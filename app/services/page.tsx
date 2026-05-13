import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe, Search, MousePointerClick, Zap, ArrowRight,
  CheckCircle2, TrendingUp, BarChart3,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Services – Création site web, SEO, CRO pour entreprises locales",
  description:
    "Découvrez tous les services Veaseo : création de site web, référencement SEO, optimisation des conversions et refonte. Résultats garantis.",
  alternates: { canonical: "https://veaseo.fr/services" },
};

const services = [
  {
    icon: Globe,
    title: "Création de site web",
    slug: "creation-site-web",
    tagline: "Votre vitrine digitale, optimisée pour convertir",
    description:
      "Un site web professionnel, rapide et pensé SEO dès la conception. Design sur-mesure, mobile-first, et intégration des meilleures pratiques de conversion.",
    features: [
      "Design 100% personnalisé",
      "Mobile-first & responsive",
      "Score PageSpeed 90+",
      "Optimisation SEO on-page",
      "Formulaires de contact & CTA",
      "Hébergement & maintenance",
    ],
    price: "À partir de 1 500€",
    delay: 300,
  },
  {
    icon: Search,
    title: "Référencement SEO",
    slug: "referencement-seo",
    tagline: "1ère page Google pour vos mots-clés stratégiques",
    description:
      "Stratégie SEO complète : audit technique, optimisation on-page, netlinking et contenu. Je vous positionne sur les recherches de vos clients locaux.",
    features: [
      "Audit SEO complet",
      "Recherche de mots-clés",
      "Optimisation technique",
      "Création de contenu SEO",
      "Netlinking qualitatif",
      "Reporting mensuel",
    ],
    price: "À partir de 400€/mois",
    delay: 400,
  },
  {
    icon: MousePointerClick,
    title: "Optimisation CRO",
    slug: "optimisation-conversion",
    tagline: "Plus de clients sans plus de trafic",
    description:
      "Analysez le comportement de vos visiteurs et optimisez chaque élément de votre site pour maximiser les conversions : formulaires, CTA, tunnel d'achat.",
    features: [
      "Analyse heatmaps & sessions",
      "Tests A/B",
      "Optimisation des formulaires",
      "Amélioration des CTA",
      "Réduction du taux de rebond",
      "Augmentation du panier moyen",
    ],
    price: "À partir de 600€",
    delay: 500,
  },
  {
    icon: Zap,
    title: "Refonte de site web",
    slug: "refonte-site-web",
    tagline: "Modernisez votre site, boostez vos résultats",
    description:
      "Votre site web est lent, vieillissant ou ne convertit plus ? Je l'analyse, le redesigne et l'optimise pour en faire une machine à générer des clients.",
    features: [
      "Audit de l'existant",
      "Migration sans perte SEO",
      "Nouveau design moderne",
      "Amélioration performances",
      "Restructuration du contenu",
      "Formation & accompagnement",
    ],
    price: "À partir de 1 200€",
    delay: 600,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="badge mb-6">Mes services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tout ce qu&apos;il faut pour{" "}
              <span className="text-gradient">dominer Google</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-8">
              Des services complémentaires conçus pour un seul objectif : transformer votre présence digitale en moteur de croissance pour votre entreprise.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding">
        <div className="container-custom space-y-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 100}>
              <div className="card-glow group">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">{service.title}</h2>
                        <p className="text-orange-400 text-sm">{service.tagline}</p>
                      </div>
                    </div>
                    <p className="text-dark-300 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-dark-200">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:border-l lg:border-white/5 lg:pl-8 flex flex-col justify-between">
                    <div>
                      <div className="text-dark-400 text-sm mb-1">Investissement</div>
                      <div className="text-2xl font-bold text-orange-400 mb-4">{service.price}</div>
                      <div className="space-y-2 mb-6">
                        {[
                          { icon: TrendingUp, text: "ROI mesurable" },
                          { icon: BarChart3, text: "Reporting transparent" },
                        ].map(({ icon: Icon, text }) => (
                          <div key={text} className="flex items-center gap-2 text-sm text-dark-300">
                            <Icon className="w-4 h-4 text-orange-400" />
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-primary w-full justify-center text-sm"
                    >
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTABanner
        title="Vous ne savez pas par où commencer ?"
        description="Commençons par un audit gratuit pour identifier les actions prioritaires pour votre business."
        primaryLabel="Audit SEO gratuit"
        secondaryLabel="En savoir plus sur moi"
        secondaryHref="/a-propos"
      />
    </>
  );
}
