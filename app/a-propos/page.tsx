import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Award, Users, TrendingUp, Heart,
  Rocket, Target, Lightbulb, CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import AstronautIllustration from "@/components/ui/AstronautIllustration";

export const metadata: Metadata = {
  title: "À propos – Votre webdesigner expert SEO pour entreprises locales",
  description:
    "Découvrez la mission de Veaseo : aider les entreprises locales à transformer leur visibilité Google en clients grâce à des sites web performants et un SEO efficace.",
  alternates: { canonical: "https://veaseo.fr/a-propos" },
};

const values = [
  {
    icon: Target,
    title: "Orienté résultats",
    desc: "Je ne travaille pas pour des métriques vanity. Positions Google, leads générés, chiffre d'affaires — voilà ce qui compte.",
  },
  {
    icon: Heart,
    title: "Passion du local",
    desc: "Je crois profondément que les entreprises locales méritent les mêmes outils que les grandes marques. Mon expertise, à votre portée.",
  },
  {
    icon: Lightbulb,
    title: "Pédagogie",
    desc: "Je vous explique chaque décision, chaque action. Pas de jargon, pas de boîte noire. Vous comprenez ce qui se passe.",
  },
  {
    icon: Rocket,
    title: "Innovation continue",
    desc: "Le SEO évolue vite. Je me forme constamment pour vous garantir les meilleures pratiques actuelles, pas celles d'il y a 5 ans.",
  },
];

const expertise = [
  "Next.js & React",
  "Tailwind CSS",
  "SEO Technique avancé",
  "Google Search Console",
  "Google Analytics 4",
  "SEO Local & GMB",
  "Core Web Vitals",
  "Schema.org / JSON-LD",
  "Netlinking",
  "CRO & A/B Testing",
  "UX/UI Design",
  "TypeScript",
];

const timeline = [
  {
    year: "2019",
    title: "Premiers pas en webdesign",
    desc: "Premiers projets freelance, spécialisation dans les sites vitrine pour TPE et PME locales.",
  },
  {
    year: "2020",
    title: "Découverte du SEO",
    desc: "Réalisation que le plus beau site sans SEO ne vaut rien. Plongée profonde dans le référencement naturel.",
  },
  {
    year: "2021",
    title: "Naissance de Veaseo",
    desc: "Création de l'activité Veaseo, 100% dédiée aux entreprises locales souhaitant dominer Google.",
  },
  {
    year: "2022–2024",
    title: "50+ projets, expertise confirmée",
    desc: "Plus de 50 entreprises locales accompagnées, des résultats mesurables et une méthode éprouvée.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="badge mb-6">À propos de Veaseo</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Un webdesigner qui pense{" "}
                <span className="text-gradient">à vos clients</span>
              </h1>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                Je suis passionné par un objectif simple : aider les entreprises locales à être trouvées sur Google et à transformer ces visiteurs en clients réels. Pas en théorie — en pratique, avec des résultats mesurables.
              </p>
              <p className="text-dark-300 leading-relaxed mb-8">
                Après des années à constater que les PME et TPE locales perdaient des milliers d&apos;euros de revenus potentiels à cause d&apos;une mauvaise visibilité digitale, j&apos;ai créé Veaseo : une approche hybride qui combine design de qualité, SEO avancé et stratégie de conversion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary px-8">
                  Travaillons ensemble <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/realisations" className="btn-secondary px-8">
                  Voir les réalisations
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="flex justify-center">
              <div className="relative">
                <AstronautIllustration className="w-72 md:w-96 animate-float" />
                <div className="absolute bottom-4 -left-6 bg-dark-800 border border-white/10 rounded-2xl px-5 py-4 shadow-card">
                  <div className="text-3xl font-bold text-orange-400">50+</div>
                  <div className="text-dark-300 text-sm">clients accompagnés</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projets réalisés", icon: Award },
              { value: "97%", label: "Satisfaction client", icon: Heart },
              { value: "5 ans", label: "D'expertise SEO", icon: TrendingUp },
              { value: "4.9/5", label: "Note Google", icon: Users },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100} className="text-center">
                <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-dark-300">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Mes valeurs"
            title="Ce qui guide"
            titleHighlight="ma façon de travailler"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="card text-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{v.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-custom">
          <SectionHeader
            badge="Mon parcours"
            title="De la passion au"
            titleHighlight="résultat"
          />
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 150} direction="left">
                  <div className="flex gap-6 pl-16 relative">
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-orange-500/10 border-2 border-orange-500/40 flex items-center justify-center">
                      <span className="text-orange-400 text-xs font-bold">{item.year}</span>
                    </div>
                    <div className="card flex-1">
                      <h3 className="text-white font-bold mb-2">{item.title}</h3>
                      <p className="text-dark-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Expertise technique"
            title="Les outils que je"
            titleHighlight="maîtrise"
          />
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {expertise.map((skill) => (
                <span key={skill} className="badge text-sm px-4 py-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Veaseo",
            jobTitle: "Webdesigner & Expert SEO",
            description:
              "Spécialiste en création de sites web et référencement SEO pour les entreprises locales.",
            url: "https://veaseo.fr/a-propos",
            sameAs: ["https://www.linkedin.com/company/veaseo"],
            knowsAbout: expertise,
          }),
        }}
      />

      <CTABanner
        title="Vous aussi, faites partie des success stories"
        description="Chaque mois, de nouvelles entreprises locales franchissent le cap avec Veaseo."
        primaryLabel="Démarrer mon projet"
        secondaryLabel="Voir les réalisations"
        secondaryHref="/realisations"
      />
    </>
  );
}
