import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Star, TrendingUp,
  Globe, Search, Shield, Users,
  ChevronDown, Phone, Mail,
  MapPin, Map, Building2, RefreshCw, PenTool,
  Code2, Rocket, ClipboardList, Gauge, Heart, Sparkles,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import AstronautIllustration from "@/components/ui/AstronautIllustration";
import { business, services as allServices, cities, telLink, mailtoLink } from "@/lib/business";

const iconMap = {
  Globe, Search, Map, Building2, RefreshCw, PenTool, MapPin,
} as const;

export const metadata: Metadata = {
  title: "Veaseo – Création de site internet & SEO local dans le Morbihan",
  description:
    "Webdesigner SEO local dans le Morbihan : sites ultra-rapides, livraison en 30 jours, 100% à vous. Pour artisans, commerçants et PME à Vannes, Lorient, Ploërmel.",
  alternates: { canonical: business.url },
};

const heroStats = [
  { value: "30 j", label: "de livraison" },
  { value: "> 95%", label: "PageSpeed mobile" },
  { value: "100%", label: "à vous, à vie" },
];

const why = [
  {
    icon: Code2,
    title: "Next.js, pas WordPress",
    desc: "Stack moderne (Next.js, React, TypeScript) utilisée par Netflix, Notion ou TikTok. Pas de page builder, pas de templates recyclés. Du code propre qui se charge en moins d'une seconde.",
  },
  {
    icon: Gauge,
    title: "PageSpeed mobile > 95%",
    desc: "Score Lighthouse Google supérieur à 95% garanti à la livraison. Le seuil que la plupart des agences ne franchissent jamais. Et pourtant : 53% des visiteurs quittent un site trop lent.",
  },
  {
    icon: MapPin,
    title: "Spécialiste SEO local",
    desc: "Pas un généraliste qui fait de tout. Je travaille exclusivement le référencement local pour les entreprises du Morbihan. C'est ma spécialité, pas une option dans mon catalogue.",
  },
  {
    icon: Heart,
    title: "100% à vous, à vie",
    desc: "À la livraison, le code, l'hébergement et le nom de domaine sont à votre nom. Aucune dépendance, aucun abonnement piégé. Vous pouvez changer de prestataire quand vous voulez.",
  },
  {
    icon: Shield,
    title: "Pas de fausses promesses",
    desc: "Personne ne peut garantir une position Google. Je garantis un travail technique irréprochable qui maximise vos chances. La transparence d'abord, les résultats ensuite.",
  },
  {
    icon: ClipboardList,
    title: "Process humain rigoureux",
    desc: "5 questionnaires détaillés + atelier visio avant la moindre ligne de code. Aucune approximation. C'est cette rigueur qui fait la différence avec un site joli mais inefficace.",
  },
];

const process = [
  { step: "01", icon: ClipboardList, title: "5 questionnaires détaillés", desc: "Comprendre votre activité, vos services, vos zones, vos concurrents et vos clients idéaux." },
  { step: "02", icon: Users, title: "Atelier stratégique en visio", desc: "Validation de l'arborescence, des mots-clés locaux à cibler et des CTA prioritaires. 1h de stratégie." },
  { step: "03", icon: Code2, title: "Conception & développement", desc: "Maquettes validées, puis développement sur-mesure en Next.js. Aucun template, aucun outsourcing." },
  { step: "04", icon: Search, title: "Optimisation SEO complète", desc: "Schema.org LocalBusiness, sitemap, Google Search Console. Tout est prêt pour Google avant la mise en ligne." },
  { step: "05", icon: Rocket, title: "Livraison en 30 jours", desc: "Site indexé, formation incluse, transfert complet à votre nom. Vous êtes propriétaire à 100%." },
];

const testimonials = [
  {
    name: "Marie L.",
    role: "Cabinet d'ostéopathie, Saint-Denis",
    content:
      "Bastien a refait mon site et travaillé mon référencement local. Aujourd'hui mon agenda est plein 3 semaines à l'avance. Le process avec les questionnaires détaillés en amont a fait toute la différence.",
    rating: 5,
    result: "Agenda plein 3 sem.",
  },
  {
    name: "Thomas R.",
    role: "Garage indépendant, Saint-Pierre",
    content:
      "Je suis passé de la 3e page Google à la 1ère sur 'garage [ville]' en 4 mois. Les appels qualifiés ont explosé. Et le site est ultra rapide, mes clients me le disent.",
    rating: 5,
    result: "1ère page Google",
  },
  {
    name: "Sophie M.",
    role: "Salon de coiffure, Saint-Paul",
    content:
      "Bastien a pris le temps de comprendre mon métier. Le site est magnifique, les clientes prennent rendez-vous directement en ligne. Surtout : il m'a tout expliqué, je gère mon site moi-même maintenant.",
    rating: 5,
    result: "Réservations en ligne",
  },
];

const faqs = [
  {
    question: "En combien de temps mon site sera-t-il en ligne ?",
    answer:
      "Tous mes sites sont livrés en 30 jours maximum, à partir de la signature du devis et du retour de vos 5 questionnaires d'onboarding. C'est un engagement contractuel, pas une estimation.",
  },
  {
    question: "Pouvez-vous garantir que je serai premier sur Google ?",
    answer:
      "Non, et personne ne peut le faire honnêtement : c'est Google qui décide. Ce que je garantis, c'est un site avec des fondations SEO techniques irréprochables (vitesse, structure, contenu local). Pour des résultats durables, je propose ensuite un accompagnement SEO mensuel.",
  },
  {
    question: "Le site m'appartient-il vraiment à la fin ?",
    answer:
      "Oui, 100%. À la livraison, je transfère à votre nom : le code source (GitHub), l'hébergement (Vercel) et le nom de domaine. Vous pouvez continuer avec moi pour le SEO ou partir avec un autre prestataire, le site reste entièrement le vôtre. C'est mon engagement éthique.",
  },
  {
    question: "Pourquoi pas un site WordPress comme tout le monde ?",
    answer:
      "WordPress, c'est 60% des sites du web, mais c'est techniquement lourd et lent. J'utilise Next.js : la techno utilisée par Netflix, Notion ou TikTok. Résultat : un site 5 à 10 fois plus rapide, mieux référencé sur Google, et beaucoup plus sécurisé. Pas de plugins à mettre à jour tous les mois.",
  },
  {
    question: "Travaillez-vous uniquement dans le Morbihan ?",
    answer:
      "Je suis basé à Ploërmel et je travaille en priorité avec les entreprises de Vannes, Lorient, Auray, Pontivy et toute la Bretagne sud. Mais je peux intervenir partout en France à distance — tout le process se fait en visio et par mail.",
  },
  {
    question: "Combien coûte un site Veaseo ?",
    answer:
      "Chaque projet est unique : votre métier, vos zones, votre concurrence. Je préfère vous proposer un devis sur-mesure plutôt qu'un tarif générique. Comptez 30 minutes d'échange offert, puis vous recevez un devis détaillé sous 48h, sans engagement.",
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
                  <MapPin className="w-3.5 h-3.5" />
                  Morbihan & Bretagne sud
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Création de site internet{" "}
                  <span className="text-gradient">dans le Morbihan</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <p className="text-orange-400 font-semibold text-base md:text-lg mb-6 tracking-wide uppercase">
                  Création de site · SEO local · Google Maps · Performance
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg md:text-xl text-dark-200 leading-relaxed mb-2 max-w-xl font-medium">
                  Un site web qui travaille pour vous 24h/24, 7j/7.
                </p>
                <p className="text-base text-dark-300 leading-relaxed mb-8 max-w-xl">
                  Je crée des sites sur-mesure pour les entreprises locales du Morbihan : artisans, commerçants, PME. Sites ultra-rapides, optimisés SEO local, livrés en 30 jours — et 100% à vous.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Link href="/contact" className="btn-primary text-base px-7 py-4">
                    Devis gratuit <ArrowRight className="w-5 h-5" />
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
                      <div className="text-sm font-bold text-white">Top 3</div>
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

      {/* ─── TRUST BAR (Google reviews + horaires) ─── */}
      <section className="py-10 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">5,0 / 5</div>
                <div className="text-dark-400 text-xs">Avis Google</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2 text-sm text-dark-300">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span><strong className="text-white">Devis</strong> sous 48h</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2 text-sm text-dark-300">
              <Shield className="w-4 h-4 text-orange-400" />
              <span><strong className="text-white">Aucun</strong> engagement</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2 text-sm text-dark-300">
              <Heart className="w-4 h-4 text-orange-400" />
              <span><strong className="text-white">Site 100%</strong> à vous</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── "PAS QUE DU BEAU" — DIFFÉRENCIATION TECH ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Différenciation"
            title="Pas que du beau,"
            titleHighlight="du SEO local qui ranke"
            description="La plupart des agences vous vendent un site qui « rend bien ». Moi, je vous livre un site qui apporte des clients. Voici comment."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Mes 7 services"
            title="Tout ce qu'il faut pour"
            titleHighlight="dominer Google localement"
            description="Du site web à la rédaction d'articles, en passant par Google Maps : une gamme complète pensée pour les entreprises locales."
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

      {/* ─── PROCESS — 5 ÉTAPES ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Ma méthode"
            title="5 étapes vers"
            titleHighlight="votre nouveau site"
            description="Pas de surprise, pas de jargon, pas d'à-peu-près. Une méthode structurée, transparente, livrée en 30 jours chrono."
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

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Premiers retours"
            title="Ce que disent"
            titleHighlight="mes clients"
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

      {/* ─── ZONES D'INTERVENTION ─── */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <SectionHeader
            badge="Zones d&apos;intervention"
            title="J&apos;interviens dans"
            titleHighlight="tout le Morbihan"
            description="Basé à Ploërmel, j'accompagne les entreprises locales partout en Bretagne sud."
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

      {/* ─── FAQ ─── */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="FAQ"
            title="Questions"
            titleHighlight="fréquentes"
            description="Tout ce que vous devez savoir avant de commencer votre projet."
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
            <p className="text-dark-300 text-sm mb-4">Vous avez d&apos;autres questions ?</p>
            <Link href="/contact" className="btn-primary px-8">
              Me contacter directement <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FINAL CTA (style ondev: contact direct multi-canal) ─── */}
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
                  Prêt à <span className="text-gradient">dominer Google</span><br className="hidden md:block" /> localement ?
                </h2>
                <p className="text-dark-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  30 minutes de brief offert en visio pour comprendre votre projet, vos objectifs et vous proposer un devis précis sous 48h. Aucun engagement.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                  <Link href="/contact" className="btn-primary px-10 py-4 text-base">
                    Démarrer mon projet <ArrowRight className="w-5 h-5" />
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
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> Brief offert
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> Réponse sous 48h
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> Aucun engagement
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
