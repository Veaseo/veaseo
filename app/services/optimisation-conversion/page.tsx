import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MousePointerClick, Eye, TestTube2, FormInput, TrendingUp, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Optimisation CRO – Convertissez plus de visiteurs en clients",
  description:
    "Optimisation du taux de conversion (CRO) : heatmaps, tests A/B, optimisation des formulaires et CTA. Transformez votre trafic existant en plus de clients.",
  alternates: { canonical: "https://veaseo.fr/services/optimisation-conversion" },
};

const actions = [
  { icon: Eye, title: "Analyse comportementale", desc: "Heatmaps, enregistrements de sessions et funnel analysis pour comprendre pourquoi vos visiteurs ne convertissent pas." },
  { icon: TestTube2, title: "Tests A/B", desc: "Je teste différentes versions de vos pages pour identifier celle qui convertit le mieux, données à l'appui." },
  { icon: FormInput, title: "Optimisation des formulaires", desc: "Réduction de la friction dans les formulaires de contact, demandes de devis et tunnels d'inscription." },
  { icon: TrendingUp, title: "Optimisation des CTA", desc: "Placement, couleur, copyrighting et urgence : chaque bouton d'appel à l'action est optimisé pour le clic." },
  { icon: BarChart3, title: "Analyse du tunnel", desc: "Identification des points de friction dans votre parcours client et corrections pour réduire l'abandon." },
  { icon: MousePointerClick, title: "Suivi des conversions", desc: "Mise en place du tracking Google Analytics 4, Google Ads et Facebook Pixel pour mesurer chaque action." },
];

export default function OptimisationConversionPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/services" className="text-dark-400 hover:text-orange-400 text-sm transition-colors">Services</Link>
              <span className="text-dark-600">/</span>
              <span className="text-dark-300 text-sm">Optimisation CRO</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <MousePointerClick className="w-7 h-7 text-orange-400" />
              </div>
              <span className="badge">Service #3</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Plus de clients,{" "}
              <span className="text-gradient">sans plus de trafic</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mb-8 leading-relaxed">
              Doubler votre trafic coûte cher. Doubler votre taux de conversion, ça s&apos;optimise. Le CRO vous permet d&apos;obtenir plus de résultats avec le même nombre de visiteurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Analyse CRO gratuite <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "3.2×", label: "Taux de conversion moyen" },
              { value: "-45%", label: "Taux de rebond réduit" },
              { value: "+67%", label: "Leads générés en plus" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100} className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                <div className="text-sm text-dark-300">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Ce que je fais"
            title="Les leviers CRO que"
            titleHighlight="j'actionne"
            description="Une approche data-driven pour identifier et corriger chaque point de friction dans votre parcours client."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 100}>
                <div className="card h-full">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <a.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{a.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Combien de clients perdez-vous chaque mois ?"
        description="Une analyse CRO gratuite pour identifier les fuites dans votre tunnel de conversion."
        primaryLabel="Analyse CRO gratuite"
        secondaryLabel="Voir tous les services"
        secondaryHref="/services"
      />
    </>
  );
}
