import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Star, TrendingUp,
  Globe, Search, Zap, Shield, Users, Award,
  ChevronDown, BarChart3, MousePointerClick,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import AstronautIllustration from "@/components/ui/AstronautIllustration";

export const metadata: Metadata = {
  title: "Veaseo – Sites web qui transforment votre visibilité Google en clients",
  description:
    "Webdesigner spécialisé SEO pour entreprises locales. Créez un site web pensé pour convertir et dominez Google. Audit SEO gratuit.",
  alternates: { canonical: "https://veaseo.fr" },
};

const services = [
  {
    icon: Globe,
    title: "Création de site web",
    description:
      "Des sites rapides, modernes et optimisés qui impressionnent vos visiteurs et les convertissent en clients.",
    href: "/services/creation-site-web",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description:
      "Apparaissez en 1ère page Google pour les recherches de vos clients locaux et captez ce trafic qualifié.",
    href: "/services/referencement-seo",
  },
  {
    icon: MousePointerClick,
    title: "Optimisation CRO",
    description:
      "Transformez davantage de visiteurs en clients grâce à une stratégie de conversion éprouvée.",
    href: "/services/optimisation-conversion",
  },
  {
    icon: Zap,
    title: "Refonte de site web",
    description:
      "Donnez un nouveau souffle à votre site existant : performance, design et SEO au rendez-vous.",
    href: "/services/refonte-site-web",
  },
];

const stats = [
  { value: "+180%", label: "Trafic organique moyen", icon: TrendingUp },
  { value: "3.2×", label: "Taux de conversion", icon: MousePointerClick },
  { value: "100", label: "Score PageSpeed", icon: Zap },
  { value: "50+", label: "Clients satisfaits", icon: Users },
];

const testimonials = [
  {
    name: "Marie Lefebvre",
    role: "Gérante, Salon de coiffure L'Atelier",
    content:
      "Depuis la refonte de mon site avec Veaseo, mes réservations en ligne ont doublé en 3 mois. J'apparais maintenant en 1ère position sur Google pour 'coiffeur Paris 11'.",
    rating: 5,
    result: "+210% de réservations",
  },
  {
    name: "Thomas Renard",
    role: "Directeur, Garage Auto Renard",
    content:
      "Investissement rentabilisé dès le premier mois. Mon site génère maintenant 15 à 20 appels qualifiés par semaine grâce au référencement local.",
    rating: 5,
    result: "+15 appels/semaine",
  },
  {
    name: "Sophie Martin",
    role: "Fondatrice, Cabinet Psy Paris",
    content:
      "Veaseo a compris mes besoins spécifiques. Mon agenda est plein depuis 2 mois et je dois refuser des patients. Un ROI exceptionnel.",
    rating: 5,
    result: "Agenda complet en 2 mois",
  },
];

const faqs = [
  {
    question: "Combien de temps faut-il pour voir des résultats SEO ?",
    answer:
      "Les premiers résultats apparaissent généralement entre 3 et 6 mois selon la concurrence dans votre secteur. Pour le SEO local, les résultats peuvent être visibles dès 4 à 8 semaines. Je fournis des rapports mensuels détaillés pour suivre chaque progression.",
  },
  {
    question: "Quelle est la différence entre un site vitrine et un site SEO ?",
    answer:
      "Un site vitrine classique présente votre entreprise. Un site SEO est optimisé techniquement et éditorialement pour apparaître sur Google. Chez Veaseo, chaque site créé intègre nativement l'optimisation SEO : structure des pages, vitesse, balises, contenu optimisé.",
  },
  {
    question: "Proposez-vous des engagements de résultats ?",
    answer:
      "Je m'engage sur des objectifs clairs définis ensemble : positions Google visées, volume de trafic, taux de conversion. Je travaille sur 6 à 12 mois avec des points mensuels pour ajuster la stratégie.",
  },
  {
    question: "Quel budget prévoir pour un site + SEO ?",
    answer:
      "Un site professionnel avec optimisation SEO de base démarre à partir de 1 500€. Les forfaits SEO mensuels commencent à 400€/mois. L'investissement se rentabilise généralement en 3 à 6 mois selon votre secteur.",
  },
  {
    question: "Gérez-vous aussi la maintenance du site ?",
    answer:
      "Oui, je propose des forfaits maintenance incluant les mises à jour, la sécurité, les sauvegardes et le support technique. Vous vous concentrez sur votre métier, je m'occupe du reste.",
  },
  {
    question: "Mon secteur est-il adapté au SEO local ?",
    answer:
      "Si vos clients vous cherchent sur Google — et c'est le cas de 97% des secteurs locaux — le SEO local est essentiel. Plombiers, avocats, médecins, restaurants, artisans... tous bénéficient massivement du référencement local.",
  },
];

const process = [
  { step: "01", title: "Audit gratuit", desc: "Analyse complète de votre site, vos concurrents et votre potentiel SEO." },
  { step: "02", title: "Stratégie sur-mesure", desc: "Plan d'action personnalisé avec objectifs, délais et ROI estimé." },
  { step: "03", title: "Création & optimisation", desc: "Développement du site et déploiement de la stratégie SEO." },
  { step: "04", title: "Croissance continue", desc: "Suivi mensuel, rapports détaillés et optimisations permanentes." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection delay={0}>
                <span className="badge mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  Webdesigner & Expert SEO Local
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Transformez votre{" "}
                  <span className="text-gradient">visibilité Google</span>{" "}
                  en clients
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-dark-300 leading-relaxed mb-8 max-w-xl">
                  Je crée des sites web qui propulsent les entreprises locales en 1ère page Google et transforment chaque visiteur en client. Pas de promesses vides — uniquement des résultats mesurables.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/contact" className="btn-primary text-base px-8 py-4">
                    Audit SEO gratuit <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/realisations" className="btn-secondary text-base px-8 py-4">
                    Voir les réalisations
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="flex flex-wrap gap-4">
                  {["100/100 PageSpeed", "1ère page Google", "ROI garanti"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-dark-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={200} direction="right" className="flex justify-center lg:justify-end">
              <div className="relative w-72 md:w-96 lg:w-[420px]">
                <AstronautIllustration className="w-full h-auto animate-float" />
                <div
                  className="absolute top-8 -left-4 bg-dark-800 border border-white/10 rounded-2xl px-4 py-3 shadow-card animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    <div>
                      <div className="text-xs text-dark-400">Trafic organique</div>
                      <div className="text-sm font-bold text-white">+180%</div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-12 -right-4 bg-dark-800 border border-white/10 rounded-2xl px-4 py-3 shadow-card animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-orange-400" />
                    <div>
                      <div className="text-xs text-dark-400">Position Google</div>
                      <div className="text-sm font-bold text-white">#1</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-400 text-xs">
            <span>Découvrir</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100} className="text-center">
                <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-dark-300">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Ce que je fais"
            title="Des services pensés pour"
            titleHighlight="votre croissance"
            description="Chaque service est conçu pour un objectif précis : vous rendre visible sur Google et transformer cette visibilité en revenus réels."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <Link href={service.href} className="card-glow group block h-full">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-orange-400 text-sm font-medium flex items-center gap-1 transition-all group-hover:gap-2">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link href="/services" className="btn-secondary px-8">
              Tous les services <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-custom">
          <SectionHeader
            badge="Ma méthode"
            title="Un processus clair pour des"
            titleHighlight="résultats prévisibles"
            description="Pas de surprise, pas de jargon. Une méthode structurée en 4 étapes pour transformer votre présence digitale."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 150}>
                <div className="card text-center">
                  <div className="w-12 h-12 rounded-full bg-dark border-2 border-orange-500/40 flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-400 font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-dark-300 text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Témoignages"
            title="Ce que disent mes"
            titleHighlight="clients"
            description="Des résultats concrets pour des entreprises locales comme la vôtre."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 150}>
                <div className="card-glow h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-dark-200 text-sm leading-relaxed mb-6 flex-1">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4 w-fit">
                    <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-orange-400 text-xs font-semibold">{t.result}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-dark-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link href="/realisations" className="btn-secondary px-8">
              Voir toutes les réalisations <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHY VEASEO ─── */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="badge mb-4">Pourquoi Veaseo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Un expert SEO qui pense{" "}
                <span className="text-gradient">business</span>, pas juste technique
              </h2>
              <p className="text-dark-300 mb-8 leading-relaxed">
                La plupart des agences font du SEO pour faire du SEO. Moi, je me concentre sur ce qui vous intéresse vraiment : les leads, les appels et les ventes. Chaque décision technique est prise en fonction de son impact sur votre chiffre d&apos;affaires.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Award, text: "Spécialiste exclusif des entreprises locales" },
                  { icon: BarChart3, text: "Reporting transparent et résultats mesurables" },
                  { icon: Shield, text: "Techniques white-hat 100% conformes Google" },
                  { icon: Users, text: "Accompagnement personnalisé, pas de template" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-dark-200 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/a-propos" className="btn-primary px-8">
                  En savoir plus sur moi <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3–6", label: "mois pour la 1ère page", sub: "selon la concurrence" },
                  { value: "97%", label: "de satisfaction client", sub: "sur 50+ projets" },
                  { value: "4.9/5", label: "note moyenne Google", sub: "sur les avis clients" },
                  { value: "∞", label: "support inclus", sub: "pendant le projet" },
                ].map((item, i) => (
                  <AnimatedSection key={item.label} delay={i * 100}>
                    <div className="card text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-1">{item.value}</div>
                      <div className="text-white text-sm font-semibold mb-1">{item.label}</div>
                      <div className="text-dark-400 text-xs">{item.sub}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="FAQ"
            title="Questions"
            titleHighlight="fréquentes"
            description="Tout ce que vous devez savoir avant de commencer votre projet."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 80}>
                <details className="card group">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-white font-semibold text-sm md:text-base gap-4">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-orange-400 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-dark-300 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <p className="text-dark-300 text-sm mb-4">Vous avez d&apos;autres questions ?</p>
            <Link href="/contact" className="btn-primary px-8">
              Me contacter directement <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <CTABanner />
    </>
  );
}
