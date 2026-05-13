import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, Smartphone, Search, Shield, RefreshCw, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Refonte de site web – Modernisez et boostez vos performances",
  description:
    "Refonte de site web complète : nouveau design, meilleures performances, SEO amélioré. Migration sans perte de positions Google. Résultats garantis.",
  alternates: { canonical: "https://veaseo.fr/services/refonte-site-web" },
};

const warning_signs = [
  "Votre site a plus de 3 ans et accuse son âge visuellement",
  "Google PageSpeed affiche un score inférieur à 70",
  "Votre site n'est pas adapté au mobile",
  "Vos prospects vous disent que votre site ne donne pas confiance",
  "Peu ou pas de demandes via le site malgré du trafic",
  "Vous n'avez aucun outil de suivi des conversions",
];

const steps = [
  { icon: Search, title: "Audit complet", desc: "Analyse de votre site existant : SEO, performances, UX, conversions et opportunités." },
  { icon: RefreshCw, title: "Nouveau design", desc: "Création d'un design moderne sur-mesure qui reflète votre image de marque actuelle." },
  { icon: Zap, title: "Développement optimisé", desc: "Code propre, rapide et optimisé avec migration sans perte de vos positions Google." },
  { icon: TrendingUp, title: "Lancement & suivi", desc: "Mise en ligne, vérification des 301, et accompagnement sur 3 mois." },
];

export default function RefontesSiteWebPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/services" className="text-dark-400 hover:text-orange-400 text-sm transition-colors">Services</Link>
              <span className="text-dark-600">/</span>
              <span className="text-dark-300 text-sm">Refonte de site web</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Zap className="w-7 h-7 text-orange-400" />
              </div>
              <span className="badge">Service #4</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Votre site mérite mieux{" "}
              <span className="text-gradient">qu&apos;un ravalement de façade</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mb-8 leading-relaxed">
              Je ne refais pas votre site pour qu&apos;il soit beau. Je le refais pour qu&apos;il performe : plus rapide, mieux référencé, plus convaincant, et surtout, plus rentable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Audit de mon site gratuit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-dark-800/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <SectionHeader
                badge="Signaux d'alerte"
                title="Il est temps de"
                titleHighlight="refondre si..."
                centered={false}
              />
              <div className="space-y-3">
                {warning_signs.map((sign) => (
                  <div key={sign} className="flex items-start gap-3 bg-dark-800 border border-white/5 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-dark-200 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <SectionHeader
                badge="Mon process"
                title="Comment je"
                titleHighlight="procède"
                centered={false}
              />
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.title} className="flex gap-4 card">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1 text-sm">{step.title}</h3>
                      <p className="text-dark-300 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, label: "100% responsive" },
              { icon: Zap, label: "PageSpeed 90+" },
              { icon: Search, label: "SEO préservé" },
              { icon: Shield, label: "Migration sécurisée" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 100} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Votre site freine votre croissance ?"
        description="Obtenez un audit gratuit de votre site actuel et un plan de refonte sur-mesure."
        primaryLabel="Audit gratuit de mon site"
        secondaryLabel="Voir les réalisations"
        secondaryHref="/realisations"
      />
    </>
  );
}
