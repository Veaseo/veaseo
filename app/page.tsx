import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Star, Globe, Search,
  ChevronDown, Phone, Mail, MapPin, Map, Building2, RefreshCw,
  PenTool, Code2, Rocket, ClipboardList, Gauge, Heart, Sparkles,
  Users, Eye,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import AstronautIllustration from "@/components/ui/AstronautIllustration";
import { business, services as allServices, cities, telLink, mailtoLink } from "@/lib/business";

const iconMap = {
  Globe, Search, Map, Building2, RefreshCw, PenTool, MapPin,
} as const;

export const metadata: Metadata = {
  title: "Veaseo — Création site web Morbihan & SEO local | Ploërmel",
  description:
    "Webdesigner spécialisé SEO local à Ploërmel. Je crée des sites Next.js sur mesure pour les PME du Morbihan. Livré en 30 jours, pensé pour Google.",
  alternates: { canonical: business.url },
};

const heroStats = [
  { value: "30 j", label: "livraison garantie" },
  { value: "> 95%", label: "score PageSpeed" },
  { value: "100%", label: "sur mesure" },
];

// SECTION 2 — Problèmes qui parlent au dirigeant
const problems = [
  {
    icon: Eye,
    title: "Votre site a plus de 3 ans",
    desc: "Et il ne génère aucun appel entrant. Vos prospects vont voir ailleurs.",
  },
  {
    icon: Users,
    title: "Vous dépendez du bouche-à-oreille",
    desc: "C'est fragile. Le jour où il s'arrête, vos rendez-vous aussi.",
  },
  {
    icon: Search,
    title: "Vos concurrents arrivent avant vous",
    desc: "Sur Google. Chaque jour. Et ça coûte des clients que vous ne voyez même pas passer.",
  },
];

// SECTION 3 — Différenciation : pourquoi Veaseo
const differentiators = [
  {
    icon: Code2,
    title: "Structure pensée pour Google",
    desc: "Dès le premier pixel. Next.js, Schema.org, mots-clés locaux, vitesse. Pas du SEO ajouté après coup — du SEO intégré dans l'ADN du site.",
  },
  {
    icon: Sparkles,
    title: "Next.js sur mesure, pas de template à 59€",
    desc: "Pas de WordPress lent. Pas de page builder qui rame. Du code propre, écrit pour votre activité. La même techno que Netflix ou Notion.",
  },
  {
    icon: Heart,
    title: "Un seul interlocuteur, de A à Z",
    desc: "Pas de chef de projet, pas d'agence en sous-traitance. Vous parlez à la personne qui code, qui pense le SEO et qui livre votre site.",
  },
  {
    icon: Rocket,
    title: "Livré en 30 jours, garanti",
    desc: "Engagement contractuel, pas une estimation marketing. Process structuré, méthode rodée, pas de réunion inutile. Vous voyez votre site en ligne en 30 jours.",
  },
];

// SECTION 4 — Process en 5 étapes
const process = [
  {
    step: "01",
    icon: ClipboardList,
    title: "5 modules de questions",
    desc: "Vous répondez chez vous, à votre rythme. Aucune jargon. Je capte tout ce qu'il faut pour construire un site qui vous ressemble.",
  },
  {
    step: "02",
    icon: Users,
    title: "Visio stratégique",
    desc: "On valide ensemble l'angle, l'arborescence, les mots-clés cibles et les CTAs. 1h ciblée, pas de blabla.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Développement sur mesure",
    desc: "Je code votre site en Next.js. Sans template, sans raccourci. Architecture SEO et performance intégrées dès le départ.",
  },
  {
    step: "04",
    icon: Search,
    title: "Optimisation SEO complète",
    desc: "Schema.org, sitemap, Google Search Console, GA4, Google Business optimisée. Tout est prêt pour Google avant la mise en ligne.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Livraison en 30 jours",
    desc: "Site indexé, formation incluse, transfert complet à votre nom. Vous êtes propriétaire à 100%. Et je reste joignable.",
  },
];

// SECTION 7 — Témoignages réels (Réunion)
const testimonials = [
  {
    name: "Cliente — Professionnelle libérale",
    role: "Île de la Réunion",
    content:
      "Si vous cherchez quelqu'un qui sait viser juste — et viser haut — vous êtes au bon endroit. Une écoute rare, une implication totale.",
    rating: 5,
    result: "Site sur mesure",
  },
  {
    name: "Gérant — Salle de sport",
    role: "Île de la Réunion",
    content:
      "Ma salle de sport est passée devant Keep Cool sur Google. Une PME locale devant une franchise nationale — je n'aurais pas cru ça possible avant de travailler avec Bastien.",
    rating: 5,
    result: "#1 Google local",
  },
  {
    name: "Cliente — Thérapeute énergéticienne",
    role: "Île de la Réunion",
    content:
      "Bastien a su capter l'essence de mon univers dès nos premiers échanges. Créatif, efficace, toujours force de proposition — sa persévérance fait la différence.",
    rating: 5,
    result: "Site à son image",
  },
];

// SECTION 8 — FAQ stratégique
const faqs = [
  {
    question: "Combien coûte un site web avec Veaseo ?",
    answer:
      "Je n'affiche pas mes tarifs publiquement. Chaque projet a ses spécificités (nombre de pages, zones cibles, fonctionnalités) et je veux vous proposer un prix juste, pas un tarif générique. 30 minutes d'échange offert, puis devis détaillé sous 48h. Sans engagement.",
  },
  {
    question: "En quoi mon site sera-t-il mieux référencé ?",
    answer:
      "Architecture Next.js + Schema.org LocalBusiness + sitemap + Google Analytics intégrés dès la conception. Pas du SEO ajouté après coup, mais du SEO pensé en amont. Score PageSpeed > 95% garanti. C'est ce qui change tout sur Google.",
  },
  {
    question: "30 jours c'est réaliste ?",
    answer:
      "Oui, grâce à un process structuré : questionnaire en amont (5 modules), visio stratégique d'1h, développement intensif, optimisation SEO. Pas de réunions inutiles, pas d'allers-retours sans fin. C'est un engagement contractuel, pas une estimation.",
  },
  {
    question: "Dois-je gérer le site après livraison ?",
    answer:
      "Non. Site livré clé en main, indexé, formé. Vous pouvez tout laisser tourner sans rien faire. Un accompagnement SEO mensuel est disponible si vous voulez aller plus loin (rédaction d'articles, suivi positions, optimisations continues).",
  },
  {
    question: "Freelance vs agence ?",
    answer:
      "Un seul interlocuteur du devis à la livraison. Vous parlez à la personne qui code, qui pense le SEO et qui livre votre site. Réactivité, implication directe, sans marges agence. Et un travail sur-mesure, pas un produit standardisé.",
  },
  {
    question: "Mon vieux site est-il vraiment un problème ?",
    answer:
      "Site vieux ne veut pas dire site qui ne fonctionne pas. Mais les critères Google 2025 (vitesse, mobile, données structurées) ont radicalement changé. Vos concurrents avec un site moderne en profitent. Un site obsolète vous coûte des clients chaque mois, silencieusement.",
  },
  {
    question: "Garantissez-vous des résultats Google ?",
    answer:
      "Pas de position garantie — personne ne peut le faire honnêtement, c'est Google qui décide. Ce que je garantis : une base technique optimale, une stratégie ciblée, et une méthode éprouvée qui maximise vos chances. La transparence d'abord.",
  },
  {
    question: "Travaillez-vous uniquement dans le Morbihan ?",
    answer:
      "Je suis basé à Ploërmel et je travaille en priorité avec les entreprises de Vannes, Lorient, Auray, Pontivy et toute la Bretagne sud. Mais je peux intervenir partout en France à distance — tout le process se fait en visio.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD FAQ */}
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

      {/* ─── SECTION 1 — HERO ─── */}
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
                  <MapPin className="w-3.5 h-3.5" />
                  Webdesigner SEO Local — Morbihan
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Votre site web, c&apos;est beau.{" "}
                  <span className="text-gradient">Mais est-ce que Google le voit&nbsp;?</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-dark-200 leading-relaxed mb-8 max-w-xl">
                  Je crée des sites sur mesure pour les PME du Morbihan — pensés pour Google, livrés en 30 jours.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Link href="/contact" className="btn-primary text-base px-7 py-4">
                    Parlons de votre visibilité <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href={telLink} className="btn-secondary text-base px-7 py-4">
                    <Phone className="w-5 h-5" /> {business.phone}
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 text-dark-300 hover:text-orange-400 text-sm transition-colors mb-10"
                >
                  <Mail className="w-4 h-4" /> {business.email}
                </a>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="grid grid-cols-3 gap-4 max-w-lg">
                  {heroStats.map((s) => (
                    <div key={s.label} className="border-l-2 border-orange-500 pl-3">
                      <div className="text-xl md:text-2xl font-bold text-white">{s.value}</div>
                      <div className="text-xs text-dark-400">{s.label}</div>
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
                    <Gauge className="w-4 h-4 text-orange-400" />
                    <div>
                      <div className="text-xs text-dark-400">PageSpeed</div>
                      <div className="text-sm font-bold text-white">&gt; 95%</div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-12 -right-4 bg-dark-800 border border-white/10 rounded-2xl px-4 py-3 shadow-card animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <div>
                      <div className="text-xs text-dark-400">SEO local</div>
                      <div className="text-sm font-bold text-white">Morbihan</div>
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

      {/* ─── SECTION 2 — PROBLÈME ─── */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Le constat"
            title="Votre concurrent est devant vous sur Google."
            titleHighlight="Chaque jour, ça coûte."
            description="Trois situations que je rencontre 9 fois sur 10 chez les PME locales du Morbihan."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-dark-200 text-lg leading-relaxed">
              Il existe une solution. Elle s&apos;appelle{" "}
              <strong className="text-orange-400">l&apos;architecture SEO-first</strong>. Et c&apos;est exactement ce que je construis.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 3 — DIFFÉRENCIATION ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Pourquoi Veaseo"
            title="Je ne vends pas du beau."
            titleHighlight="Je vends de la visibilité."
            description="La différence, vos concurrents la voient déjà. Voici ce qui change concrètement."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 80}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <d.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{d.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 — PROCESS ─── */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Comment ça se passe"
            title="Un processus en 5 étapes"
            titleHighlight="pour un site qui travaille pour vous"
            description="Vous n'avez rien à apprendre. Je prends la complexité, vous gardez le contrôle."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100}>
                <div className="card h-full relative">
                  <div className="absolute top-4 right-4 text-4xl font-bold text-orange-500/15">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2 pr-10">{step.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link href="/contact" className="btn-primary px-8 py-4">
              Démarrer ma méthode <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 5 — SERVICES ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Ce que je crée"
            title="Tout ce qu&apos;il faut pour"
            titleHighlight="dominer Google localement"
            description="Du site web à la rédaction d&apos;articles, en passant par Google Maps. Une gamme complète pensée pour les PME locales."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
              return (
                <AnimatedSection key={service.slug} delay={i * 60}>
                  <Link href={`/services/${service.slug}`} className="card-glow group block h-full flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-dark-300 text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                    <span className="text-orange-400 text-sm font-medium flex items-center gap-1 transition-all group-hover:gap-2">
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link href="/services" className="btn-secondary px-8">
              Voir tous les services <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 6 — TÉMOIGNAGES ─── */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Premiers retours"
            title="Des PME locales qui rankent"
            titleHighlight="devant les géants"
            description="Témoignages de clients accompagnés à l&apos;Île de la Réunion avant mon installation dans le Morbihan."
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
                    <Sparkles className="w-3.5 h-3.5 text-orange-400" />
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

      {/* ─── SECTION 7 — ZONES D'INTERVENTION ─── */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <SectionHeader
            badge="Zones d&apos;intervention"
            title="J&apos;interviens dans"
            titleHighlight="tout le Morbihan"
            description="Basé à Ploërmel, j&apos;accompagne les PME locales partout en Bretagne sud."
          />
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/zones-intervention/${city.slug}`}
                  className="bg-dark-800 border border-white/10 hover:border-orange-500/30 text-dark-200 hover:text-orange-400 text-sm px-4 py-2 rounded-full transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-orange-400" />
                  {city.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/zones-intervention" className="text-orange-400 text-sm hover:text-orange-300 transition-colors font-semibold">
                Voir toutes les zones d&apos;intervention →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 8 — FAQ ─── */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Questions fréquentes"
            title="Tout ce que vous voulez savoir"
            titleHighlight="avant de vous lancer"
            description="Les vraies questions que les patrons me posent. Et les réponses honnêtes que je leur donne."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 60}>
                <details className="card group">
                  <summary className="flex items-start justify-between cursor-pointer list-none gap-4">
                    <h3 className="text-white font-semibold text-base md:text-lg">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center transition-transform group-open:rotate-45">
                      <span className="text-orange-400 text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-dark-300 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <p className="text-dark-300 text-sm mb-4">Une autre question ?</p>
            <Link href="/contact" className="btn-primary px-8">
              Écrivez-moi directement <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 9 — CTA FINAL ─── */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <AnimatedSection>
            <div className="rounded-3xl p-10 md:p-16 bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-transparent border border-orange-500/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <span className="badge mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  C&apos;est parti
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Votre prochain client{" "}
                  <span className="text-gradient">vous cherche sur Google.</span>
                </h2>
                <p className="text-dark-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  Ne le laissez pas trouver votre concurrent à la place.
                  <br />
                  30 minutes en visio, devis sous 48h, aucun engagement.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                  <Link href="/contact" className="btn-primary px-10 py-4 text-base">
                    Parlons de votre projet <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href={telLink} className="btn-secondary px-10 py-4 text-base">
                    <Phone className="w-5 h-5" /> Appeler
                  </a>
                  <a href={mailtoLink} className="btn-secondary px-10 py-4 text-base">
                    <Mail className="w-5 h-5" /> Écrire
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> 30 minutes offertes
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> Devis sous 48h
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> Un seul interlocuteur
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
