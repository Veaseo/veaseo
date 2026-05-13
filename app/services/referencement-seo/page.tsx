import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Search, TrendingUp, Target, FileText,
  Link2, BarChart3, MapPin, CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Référencement SEO local – 1ère page Google pour votre entreprise",
  description:
    "Expert SEO pour entreprises locales. Audit SEO, optimisation technique, netlinking, contenu. Stratégie sur-mesure pour apparaître en 1ère page Google.",
  alternates: { canonical: "https://veaseo.fr/services/referencement-seo" },
};

const pillars = [
  {
    icon: Target,
    title: "Audit & Stratégie SEO",
    desc: "Analyse complète de votre site, vos concurrents et les mots-clés stratégiques de votre secteur. Je définis un plan d'action clair avec des objectifs mesurables.",
  },
  {
    icon: FileText,
    title: "SEO On-Page & Contenu",
    desc: "Optimisation de chaque page : balises meta, structure H1/H2/H3, contenu SEO de qualité, Schema.org, vitesse et Core Web Vitals.",
  },
  {
    icon: Link2,
    title: "Netlinking & Autorité",
    desc: "Acquisition de liens entrants qualitatifs pour renforcer l'autorité de votre domaine et accélérer votre montée en position.",
  },
  {
    icon: MapPin,
    title: "SEO Local & Google Business",
    desc: "Optimisation de votre fiche Google My Business, citations locales et stratégie de mots-clés géolocalisés pour capter les recherches near-me.",
  },
  {
    icon: TrendingUp,
    title: "SEO Technique",
    desc: "Core Web Vitals, sitemap.xml, robots.txt, indexation, données structurées — je corrige tous les problèmes techniques qui bloquent votre référencement.",
  },
  {
    icon: BarChart3,
    title: "Suivi & Reporting",
    desc: "Rapport mensuel détaillé : positions, trafic organique, conversions, opportunités. Vous savez exactement où vous en êtes.",
  },
];

const results = [
  { metric: "+180%", label: "Trafic organique moyen à 6 mois" },
  { metric: "Top 3", label: "Positions atteintes sur les mots-clés cibles" },
  { metric: "3–6", label: "Mois pour les premiers résultats visibles" },
  { metric: "4.5×", label: "ROI moyen constaté" },
];

export default function ReferencementSEOPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/services" className="text-dark-400 hover:text-orange-400 text-sm transition-colors">Services</Link>
              <span className="text-dark-600">/</span>
              <span className="text-dark-300 text-sm">Référencement SEO</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Search className="w-7 h-7 text-orange-400" />
              </div>
              <span className="badge">Service #2</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              1ère page Google pour{" "}
              <span className="text-gradient">votre secteur local</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mb-8 leading-relaxed">
              97% des consommateurs recherchent des entreprises locales en ligne. Si vous n&apos;êtes pas visible, vous perdez des clients chaque jour. Ma stratégie SEO vous place là où vos clients vous cherchent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Audit SEO gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/realisations" className="btn-secondary px-8 py-4 text-base">
                Voir les résultats
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <AnimatedSection key={r.label} delay={i * 100} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">{r.metric}</div>
                <div className="text-sm text-dark-300">{r.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Approche"
            title="Une stratégie SEO"
            titleHighlight="à 360°"
            description="Je ne fais pas du SEO pour cocher des cases. Chaque action est motivée par un impact mesurable sur votre chiffre d'affaires."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <div className="card h-full">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              badge="Pour qui ?"
              title="Le SEO local est fait pour"
              titleHighlight="vous si..."
            />
            <div className="space-y-3">
              {[
                "Vous avez une entreprise locale (artisan, professionnel de santé, commerce, restauration...)",
                "Vos clients vous cherchent sur Google mais ne vous trouvent pas",
                "Vos concurrents apparaissent avant vous dans les résultats",
                "Vous recevez peu d'appels ou de demandes depuis votre site",
                "Vous voulez arrêter de dépendre uniquement du bouche-à-oreille",
                "Vous avez un budget marketing à rentabiliser sur le long terme",
              ].map((item, i) => (
                <AnimatedSection key={item} delay={i * 60}>
                  <div className="flex items-start gap-3 bg-dark-800 border border-white/5 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-dark-200 text-sm">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Où vous situez-vous sur Google ?"
        description="Obtenez un audit SEO gratuit et découvrez les opportunités que vous manquez actuellement."
        primaryLabel="Mon audit SEO gratuit"
        secondaryLabel="Voir tous les services"
        secondaryHref="/services"
      />
    </>
  );
}
