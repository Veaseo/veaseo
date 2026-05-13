import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Globe, Zap, Smartphone,
  Search, Shield, BarChart3, Code2, Layout,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Création de site web professionnel – Design sur-mesure & SEO",
  description:
    "Création de site web professionnel, rapide et optimisé SEO. Design sur-mesure, mobile-first, score PageSpeed 100. Pour les entreprises locales qui veulent convertir.",
  alternates: { canonical: "https://veaseo.fr/services/creation-site-web" },
};

const features = [
  { icon: Layout, title: "Design sur-mesure", desc: "Aucun template générique. Votre site reflète votre identité et rassure vos prospects dès la première seconde." },
  { icon: Smartphone, title: "Mobile-first", desc: "60% de vos visiteurs viennent du mobile. Votre site est parfait sur tous les écrans, toutes les tailles." },
  { icon: Zap, title: "Performance 100/100", desc: "Score PageSpeed optimal pour un chargement ultra-rapide qui réduit le taux de rebond et améliore le SEO." },
  { icon: Search, title: "SEO on-page intégré", desc: "Balises meta, structure H1/H2/H3, Schema.org, URLs propres — tout est pensé SEO dès la conception." },
  { icon: Shield, title: "Sécurité & RGPD", desc: "SSL, protection contre les attaques, conformité RGPD et politique de confidentialité inclus." },
  { icon: BarChart3, title: "Analytics & tracking", desc: "Suivi des performances, comportement des visiteurs et conversions pour optimiser en continu." },
];

const techStack = [
  "Next.js / React", "Tailwind CSS", "TypeScript", "Vercel", "Sanity / Contentful", "Google Analytics 4",
];

const packages = [
  {
    name: "Starter",
    price: "1 500€",
    desc: "Pour les indépendants et petites entreprises",
    features: [
      "5 pages personnalisées",
      "Design responsive",
      "Formulaire de contact",
      "SEO on-page basique",
      "Hébergement 1 an inclus",
      "Support 30 jours",
    ],
    cta: "Choisir Starter",
    highlight: false,
  },
  {
    name: "Business",
    price: "3 500€",
    desc: "Pour les PME et commerces locaux",
    features: [
      "10 pages personnalisées",
      "Blog / actualités intégré",
      "SEO on-page avancé",
      "Google Analytics + Search Console",
      "Vitesse optimisée 95+",
      "Support 3 mois",
      "Formation CMS incluse",
    ],
    cta: "Choisir Business",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Sur devis",
    desc: "Pour les projets ambitieux",
    features: [
      "Pages illimitées",
      "E-commerce ou réservation",
      "SEO technique avancé",
      "Intégrations API",
      "A/B testing CRO",
      "Support 12 mois",
      "Reporting mensuel inclus",
    ],
    cta: "Demander un devis",
    highlight: false,
  },
];

export default function CreationSiteWebPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/services" className="text-dark-400 hover:text-orange-400 text-sm transition-colors">
                Services
              </Link>
              <span className="text-dark-600">/</span>
              <span className="text-dark-300 text-sm">Création de site web</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Globe className="w-7 h-7 text-orange-400" />
              </div>
              <span className="badge">Service #1</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Un site web qui{" "}
              <span className="text-gradient">travaille pour vous</span>{" "}
              24h/24
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mb-8 leading-relaxed">
              Je conçois des sites web professionnels qui combinent un design qui impressionne, une vitesse qui retient l&apos;attention et un SEO qui attire les bonnes personnes. Le résultat : des visiteurs qui deviennent des clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Démarrer mon projet <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/realisations" className="btn-secondary px-8 py-4 text-base">
                Voir les réalisations
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-custom">
          <SectionHeader
            badge="Fonctionnalités"
            title="Tout ce qui fait un site"
            titleHighlight="vraiment performant"
            description="Chaque site que je crée intègre ces fondamentaux pour garantir visibilité, confiance et conversions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 100}>
                <div className="card h-full">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{f.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Tarifs"
            title="Des forfaits clairs,"
            titleHighlight="sans surprise"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 100}>
                <div
                  className={`rounded-3xl p-8 border flex flex-col h-full ${
                    pkg.highlight
                      ? "bg-gradient-to-b from-orange-500/20 to-dark-800 border-orange-500/40 relative"
                      : "bg-dark-800 border-white/5"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Populaire
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl mb-1">{pkg.name}</h3>
                    <p className="text-dark-400 text-sm mb-4">{pkg.desc}</p>
                    <div className="text-3xl font-bold text-orange-400">{pkg.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-dark-200">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={pkg.highlight ? "btn-primary justify-center" : "btn-secondary justify-center"}
                  >
                    {pkg.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <p className="text-dark-400 text-sm mb-6">Technologies utilisées</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-dark-700 border border-white/10 text-dark-200 text-sm px-4 py-2 rounded-full"
                >
                  <Code2 className="w-3.5 h-3.5 inline mr-1.5 text-orange-400" />
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Prêt à lancer votre nouveau site ?"
        description="Parlons de votre projet. Je vous propose un brief gratuit pour définir vos besoins et vous donner un devis précis."
        primaryLabel="Démarrer mon projet"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  );
}
