import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Globe, Zap, Smartphone,
  Search, Shield, MapPin, ClipboardList, Rocket,
  Phone, MessageCircle, Calendar, Gauge, Users, Code2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Création de site internet dans le Morbihan – Veaseo (Vannes, Lorient)",
  description:
    "Création de site internet dans le Morbihan : sites ultra-rapides, SEO local et livraison en 30 jours. Pour artisans, commerçants et PME à Vannes, Lorient et toute la Bretagne sud.",
  alternates: { canonical: "https://veaseo.fr/services/creation-site-web" },
  openGraph: {
    title: "Création de site internet dans le Morbihan – Veaseo",
    description:
      "Sites web professionnels, ultra-rapides et optimisés SEO local pour entreprises du Morbihan. Livraison en 30 jours.",
    url: "https://veaseo.fr/services/creation-site-web",
    type: "website",
  },
};

const features = [
  {
    icon: MapPin,
    title: "Pensé pour le SEO local",
    desc: "Chaque page est structurée pour remonter sur les recherches locales type « plombier Vannes » ou « coiffeur Lorient ». Schema.org LocalBusiness, balises géo, contenu hyper-localisé.",
  },
  {
    icon: Gauge,
    title: "Score PageSpeed > 95%",
    desc: "Un site lent perd 53% de ses visiteurs en moins de 3 secondes. Vos pages se chargent en moins d'une seconde sur mobile comme sur ordinateur.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first par défaut",
    desc: "Plus de 70% de vos prospects cherchent un artisan ou commerçant local depuis leur smartphone. Votre site est conçu d'abord pour eux.",
  },
  {
    icon: Phone,
    title: "Contact en 1 clic",
    desc: "Appel, itinéraire, formulaire, WhatsApp : chaque visiteur peut vous joindre instantanément depuis n'importe quelle page, sans friction.",
  },
  {
    icon: Shield,
    title: "Sécurité & conformité RGPD",
    desc: "Certificat SSL, sauvegardes automatiques, conformité RGPD, mentions légales et politique de confidentialité incluses dès le lancement.",
  },
  {
    icon: Search,
    title: "Fondations SEO solides",
    desc: "Balises meta, structure H1/H2/H3, sitemap.xml, robots.txt, URLs propres, données structurées. Tout est en place pour ranker sans tricher.",
  },
];

const process = [
  {
    step: "01",
    icon: ClipboardList,
    title: "5 questionnaires détaillés",
    desc: "Je vous envoie 5 questionnaires ultra-précis pour comprendre votre activité, vos services, vos zones d'intervention, vos concurrents et vos clients idéaux. Aucune approximation : c'est la base d'un site qui convertit.",
  },
  {
    step: "02",
    icon: Users,
    title: "Atelier stratégique",
    desc: "On échange en visio (1h) pour valider l'arborescence, les mots-clés locaux à cibler, l'identité visuelle et les CTA prioritaires. Vous repartez avec une feuille de route claire.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Conception & développement",
    desc: "Je code votre site sur-mesure en Next.js (la même techno que Netflix, Notion ou TikTok). Aucun template générique, aucun CMS lent. Du sur-mesure performant.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Livraison en 30 jours",
    desc: "Site en ligne, indexé sur Google, formulaires testés, accès transférés. Vous êtes propriétaire à 100% du code, du domaine et de l'hébergement. Pas de dépendance.",
  },
];

const targets = [
  "Artisans (plombiers, électriciens, menuisiers, peintres…)",
  "Commerçants & restaurateurs",
  "Professions libérales (avocats, kinés, ostéos, notaires…)",
  "PME de services locaux",
  "Agences immobilières & courtiers",
  "Bâtiment, paysagistes, couvreurs",
];

const packages = [
  {
    name: "Vitrine",
    price: "2 500€",
    desc: "Pour les artisans et indépendants du Morbihan",
    features: [
      "5 pages sur-mesure",
      "SEO local optimisé (1 ville cible)",
      "Formulaire + bouton d'appel direct",
      "Score PageSpeed > 95%",
      "Fiche Google Business optimisée",
      "Livraison en 30 jours",
      "Site 100% à vous (code + hébergement)",
    ],
    cta: "Démarrer mon projet",
    highlight: false,
  },
  {
    name: "Business",
    price: "4 500€",
    desc: "Pour les PME locales qui veulent dominer leur secteur",
    features: [
      "10 pages sur-mesure",
      "SEO local multi-villes (jusqu'à 5)",
      "Pages services dédiées (1 par activité)",
      "Blog SEO prêt à publier",
      "Google Analytics + Search Console",
      "Schema.org LocalBusiness avancé",
      "Livraison en 30 jours",
      "Formation pour gérer votre site",
    ],
    cta: "Choisir Business",
    highlight: true,
  },
  {
    name: "Sur-mesure",
    price: "Sur devis",
    desc: "Multi-établissements, projets ambitieux",
    features: [
      "Pages illimitées",
      "SEO local multi-zones",
      "Système de réservation",
      "Espace client / intranet léger",
      "Intégrations spécifiques (CRM, agenda…)",
      "Reporting SEO mensuel",
      "Accompagnement premium",
    ],
    cta: "Demander un devis",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Combien coûte la création d'un site internet dans le Morbihan ?",
    a: "Mes forfaits démarrent à 2 500€ pour un site vitrine professionnel optimisé SEO local, livré en 30 jours. Le prix dépend du nombre de pages, du nombre de villes ciblées et des fonctionnalités spécifiques. Aucun frais caché, devis détaillé sous 48h.",
  },
  {
    q: "En combien de temps mon site sera-t-il en ligne ?",
    a: "Tous mes sites sont livrés en 30 jours maximum, à partir de la signature du devis et du retour de vos 5 questionnaires. C'est un engagement contractuel, pas une estimation.",
  },
  {
    q: "Pouvez-vous garantir que je serai premier sur Google ?",
    a: "Non, et personne ne peut le faire honnêtement : c'est Google qui décide. Ce que je garantis, c'est un site avec des fondations SEO techniques irréprochables (vitesse, structure, contenu local), ce qui maximise vos chances de bien ranker. Pour des résultats durables, je propose ensuite un accompagnement SEO mensuel.",
  },
  {
    q: "Le site m'appartient-il vraiment à la fin ?",
    a: "Oui, 100%. À la livraison, je transfère à votre nom : le code source (GitHub), l'hébergement (Vercel) et le nom de domaine. Vous pouvez continuer avec moi pour le SEO ou partir avec un autre prestataire, le site reste entièrement le vôtre. C'est mon engagement éthique.",
  },
  {
    q: "Travaillez-vous uniquement dans le Morbihan ?",
    a: "Je suis basé dans le Morbihan et je travaille en priorité avec les entreprises de Vannes, Lorient, Auray, Pontivy, Ploërmel et toute la Bretagne sud. Mais je peux intervenir partout en France à distance — tout le process se fait en visio et par mail.",
  },
  {
    q: "Et si je n'ai pas encore de logo ou d'identité visuelle ?",
    a: "Pas de souci, on en discute pendant l'atelier stratégique. Je peux soit travailler avec ce que vous avez, soit vous proposer une création d'identité visuelle légère (logo + palette + typographies) en complément du site.",
  },
];

const localKeywords = [
  "Vannes", "Lorient", "Auray", "Pontivy", "Ploërmel",
  "Quiberon", "Hennebont", "Lanester", "Sarzeau", "Questembert",
];

export default function CreationSiteWebPage() {
  return (
    <>
      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Création de site internet",
            provider: {
              "@type": "LocalBusiness",
              name: "Veaseo",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Morbihan",
              },
              address: {
                "@type": "PostalAddress",
                addressRegion: "Bretagne",
                addressCountry: "FR",
              },
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Morbihan",
            },
            description:
              "Création de sites internet professionnels pour entreprises locales dans le Morbihan : artisans, commerçants, PME. Sites ultra-rapides, SEO local, livraison en 30 jours.",
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "2500",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                price: "2500",
                description: "À partir de 2 500€",
              },
            },
          }),
        }}
      />

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />

      {/* HERO */}
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
              <span className="text-dark-300 text-sm">Création de site internet</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Globe className="w-7 h-7 text-orange-400" />
              </div>
              <span className="badge">
                <MapPin className="w-3.5 h-3.5" />
                Morbihan & Bretagne sud
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Création de site internet{" "}
              <span className="text-gradient">dans le Morbihan</span>
            </h1>
            <p className="text-dark-200 text-xl max-w-3xl mb-4 leading-relaxed font-medium">
              Un site web qui travaille pour vous 24h/24, 7j/7.
            </p>
            <p className="text-dark-300 text-lg max-w-3xl mb-8 leading-relaxed">
              Pendant que vous bossez sur vos chantiers, recevez vos clients ou fermez votre boutique, votre site capte les recherches Google locales et transforme les visiteurs en appels, devis et rendez-vous. Sites ultra-rapides, SEO local, livraison en 30 jours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Démarrer mon projet <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/realisations" className="btn-secondary px-8 py-4 text-base">
                Voir mes réalisations
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              <div className="border-l-2 border-orange-500 pl-4">
                <div className="text-2xl md:text-3xl font-bold text-white">30 j</div>
                <div className="text-xs text-dark-400">de livraison</div>
              </div>
              <div className="border-l-2 border-orange-500 pl-4">
                <div className="text-2xl md:text-3xl font-bold text-white">&gt; 95%</div>
                <div className="text-xs text-dark-400">PageSpeed</div>
              </div>
              <div className="border-l-2 border-orange-500 pl-4">
                <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                <div className="text-xs text-dark-400">à vous</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Le constat"
            title="La plupart des sites d'entreprises locales"
            titleHighlight="ne servent à rien"
            description="Trop lents, mal référencés, impossibles à contacter rapidement : ils coûtent de l'argent sans en rapporter."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <div className="card h-full">
                <div className="text-4xl font-bold text-orange-400 mb-3">53%</div>
                <p className="text-dark-200">des visiteurs <strong>quittent un site</strong> qui met plus de 3 secondes à charger.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="card h-full">
                <div className="text-4xl font-bold text-orange-400 mb-3">75%</div>
                <p className="text-dark-200">des internautes <strong>ne cliquent jamais</strong> au-delà de la première page Google.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="card h-full">
                <div className="text-4xl font-bold text-orange-400 mb-3">88%</div>
                <p className="text-dark-200">des recherches locales <strong>aboutissent à un appel ou une visite</strong> dans les 24h.</p>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-dark-300 text-lg leading-relaxed">
              Vos prospects cherchent <strong className="text-white">votre métier + votre ville</strong> sur Google. S'ils ne vous trouvent pas, ils trouvent votre concurrent. Un site bien fait change littéralement votre chiffre d'affaires.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Ce qui fait la différence"
            title="Tout ce qui fait un site"
            titleHighlight="qui rapporte des clients"
            description="Chaque site Veaseo intègre ces fondamentaux. Pas d'options gadgets, juste ce qui sert vraiment votre business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 80}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — 5 QUESTIONNAIRES (différenciateur) */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Ma méthode"
            title="Un process humain,"
            titleHighlight="sans approximation"
            description="Avant la moindre ligne de code, je veux tout savoir de votre activité. C'est cette rigueur qui fait la différence entre un site joli et un site qui convertit."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 100}>
                <div className="card h-full relative">
                  <div className="absolute top-6 right-6 text-5xl font-bold text-orange-500/15">
                    {p.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <span className="badge mb-4">À qui ça s'adresse</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Conçu pour les{" "}
                <span className="text-gradient">entreprises locales</span>{" "}
                du Morbihan
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                Je ne fais pas de e-commerce, pas de marketplaces, pas de SaaS. Je fais <strong className="text-white">une seule chose, mais je la fais très bien</strong> : des sites vitrines pour les entreprises qui ont besoin d'être trouvées par leurs clients sur Google.
              </p>
              <p className="text-dark-300 text-base leading-relaxed">
                Que vous soyez à Vannes, Lorient, Auray, Pontivy ou ailleurs en Bretagne sud, votre site doit ressembler à votre savoir-faire : <strong className="text-white">propre, rapide, fiable</strong>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="card">
                <h3 className="text-white font-bold text-lg mb-4">Clients types :</h3>
                <ul className="space-y-3">
                  {targets.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-dark-200">
                      <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LOCAL ZONES (SEO long-tail) */}
      <section className="py-16 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <p className="text-dark-400 text-sm mb-6">
              Création de site internet à
            </p>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {localKeywords.map((city) => (
                <span
                  key={city}
                  className="bg-dark-700 border border-white/10 text-dark-200 text-sm px-4 py-2 rounded-full"
                >
                  <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-orange-400" />
                  {city}
                </span>
              ))}
            </div>
            <p className="text-dark-500 text-xs mt-6">
              … et partout dans le Morbihan & la Bretagne sud
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Tarifs"
            title="Des forfaits clairs,"
            titleHighlight="sans surprise"
            description="Aucun frais caché, aucune mensualité piégée. Vous payez une fois, le site est à vous à vie."
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
                      Le plus choisi
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl mb-1">{pkg.name}</h3>
                    <p className="text-dark-400 text-sm mb-4">{pkg.desc}</p>
                    <div className="text-3xl font-bold text-orange-400">{pkg.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-dark-200">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
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
          <AnimatedSection className="text-center mt-10">
            <p className="text-dark-400 text-sm">
              💡 Possibilité de paiement en 2 ou 3 fois sans frais — on en parle au devis.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            badge="Questions fréquentes"
            title="Tout ce que vous voulez savoir"
            titleHighlight="avant de vous lancer"
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 60}>
                <details className="group card cursor-pointer">
                  <summary className="flex items-start justify-between gap-4 list-none">
                    <h3 className="text-white font-semibold text-base md:text-lg">
                      {faq.q}
                    </h3>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center transition-transform group-open:rotate-45">
                      <span className="text-orange-400 text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="text-dark-300 leading-relaxed mt-4 text-sm md:text-base">
                    {faq.a}
                  </p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        title="Prêt à avoir un site qui travaille pour vous ?"
        description="Brief offert de 30 min en visio pour comprendre votre projet, vos objectifs et vous proposer un devis précis sous 48h. Aucun engagement."
        primaryLabel="Démarrer mon projet"
        secondaryLabel="Voir les autres services"
        secondaryHref="/services"
      />
    </>
  );
}
