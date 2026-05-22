import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, CheckCircle2, MapPin, Globe, Search, Map,
  Building2, RefreshCw, PenTool, Phone, Mail, Clock,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import {
  services,
  cities,
  business,
  getServiceBySlug,
  telLink,
  mailtoLink,
} from "@/lib/business";

// Icon mapping (Lucide icons are dynamic so we map them manually)
const iconMap = {
  Globe, Search, Map, Building2, RefreshCw, PenTool, MapPin,
} as const;

/**
 * Static generation of all service pages — except creation-site-web which has its own static file.
 */
export async function generateStaticParams() {
  return services
    .filter((s) => s.slug !== "creation-site-web")
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${business.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${business.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

const topCities = cities.filter((c) => c.priority === 1).map((c) => c.name);

const defaultBenefits = [
  "Optimisation SEO local ciblée (mots-clés métier + ville)",
  "Schema.org LocalBusiness avancé",
  "Score PageSpeed mobile supérieur à 95%",
  "Conformité RGPD complète",
  "Suivi Google Analytics + Search Console",
  "Site 100% à vous à la livraison",
];

const defaultProcess = [
  { step: "01", title: "5 questionnaires détaillés", desc: "Comprendre votre activité, vos zones, vos concurrents et vos clients idéaux." },
  { step: "02", title: "Atelier stratégique", desc: "Visio de 1h pour valider l'arborescence, les mots-clés locaux et les CTA prioritaires." },
  { step: "03", title: "Mise en œuvre", desc: "Réalisation sur-mesure par un expert. Aucun template générique, pas d'outsourcing." },
  { step: "04", title: "Livraison & transfert", desc: "Vous récupérez 100% de votre site. Indexation Google, formation et passage de témoin." },
];

const defaultFaqs = [
  {
    q: "Pour quelles entreprises ce service est-il adapté ?",
    a: "Ce service s'adresse aux entreprises locales du Morbihan et de Bretagne sud : artisans, commerçants, restaurateurs, professions libérales, PME de services. Si vous avez besoin d'être trouvé sur Google par des clients de votre zone géographique, ce service est fait pour vous.",
  },
  {
    q: "En combien de temps puis-je voir des résultats ?",
    a: "Les délais varient selon le service : certaines prestations donnent des résultats sous 48h (fiche Google Business), d'autres demandent 2 à 3 mois pour observer des changements significatifs sur Google (SEO local). Je vous donne un calendrier précis dans le devis.",
  },
  {
    q: "Travaillez-vous uniquement dans le Morbihan ?",
    a: `Basé à ${business.address.locality}, j'interviens en priorité dans le Morbihan (Vannes, Lorient, Auray, Pontivy, Ploërmel...) et en Bretagne sud. Mais je peux travailler à distance partout en France — tout le process se fait en visio et par mail.`,
  },
  {
    q: "Garantissez-vous un résultat sur Google ?",
    a: "Personne ne peut honnêtement garantir une position sur Google : c'est l'algorithme qui décide. Ce que je garantis, c'est un travail technique irréprochable qui maximise vos chances de bien ranker. La transparence avant tout.",
  },
  {
    q: "Combien coûte ce service ?",
    a: "Chaque projet est unique : votre métier, vos zones, votre concurrence. Je préfère vous proposer un devis sur-mesure plutôt qu'un tarif générique. Comptez 30 minutes d'échange offert pour comprendre vos besoins, puis vous recevez un devis détaillé sous 48h.",
  },
];

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service || service.slug === "creation-site-web") {
    notFound();
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;

  // Related services (everything except current)
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.name,
            name: service.h1,
            description: service.metaDescription,
            url: `${business.url}/services/${service.slug}`,
            provider: { "@id": `${business.url}/#localbusiness` },
            areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: defaultFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: business.url },
              { "@type": "ListItem", position: 2, name: "Services", item: `${business.url}/services` },
              { "@type": "ListItem", position: 3, name: service.name, item: `${business.url}/services/${service.slug}` },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Link href="/services" className="text-dark-400 hover:text-orange-400 transition-colors">
                Services
              </Link>
              <span className="text-dark-600">/</span>
              <span className="text-dark-300">{service.name}</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-orange-400" />
              </div>
              <span className="badge">
                <MapPin className="w-3.5 h-3.5" />
                Morbihan & Bretagne sud
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {service.h1.split(" dans le ")[0]}{" "}
              <span className="text-gradient">
                {service.h1.includes(" dans le ") ? `dans le ${service.h1.split(" dans le ")[1]}` : ""}
              </span>
            </h1>
            <p className="text-dark-200 text-xl max-w-3xl mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Démarrer mon projet <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={telLink} className="btn-secondary px-8 py-4 text-base">
                <Phone className="w-5 h-5" /> {business.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Ce qui est inclus"
            title="Une prestation complète,"
            titleHighlight="sans options cachées"
            description="Tout ce dont une entreprise locale a besoin pour être visible et convertir, intégré dès la livraison."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {defaultBenefits.map((b, i) => (
              <AnimatedSection key={b} delay={i * 60}>
                <div className="card h-full">
                  <CheckCircle2 className="w-7 h-7 text-orange-400 mb-3" />
                  <p className="text-dark-200 leading-relaxed">{b}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Ma méthode"
            title="Un process humain,"
            titleHighlight="sans approximation"
            description="Avant de démarrer, je veux tout comprendre de votre activité. C'est cette rigueur qui fait la différence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultProcess.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 100}>
                <div className="card h-full relative">
                  <div className="absolute top-6 right-6 text-5xl font-bold text-orange-500/15">
                    {p.step}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 pr-12">{p.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL ZONES */}
      <section className="py-16 border-y border-white/5 bg-dark-800/50">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <p className="text-dark-400 text-sm mb-6">
              {service.name} dans les principales villes :
            </p>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto mb-6">
              {topCities.map((city) => (
                <Link
                  key={city}
                  href={`/zones-intervention/${city.toLowerCase().replace(/[ëé]/g, "e").replace(/\s+/g, "-")}`}
                  className="bg-dark-700 border border-white/10 text-dark-200 hover:text-orange-400 hover:border-orange-500/30 text-sm px-4 py-2 rounded-full transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-orange-400" />
                  {city}
                </Link>
              ))}
            </div>
            <Link
              href="/zones-intervention"
              className="text-orange-400 text-sm hover:text-orange-300 transition-colors"
            >
              Voir toutes les zones d&apos;intervention →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Services associés"
            title="Découvrez aussi"
            titleHighlight="nos autres expertises"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {related.map((s, i) => {
              const RelIcon = iconMap[s.icon as keyof typeof iconMap] ?? Globe;
              return (
                <AnimatedSection key={s.slug} delay={i * 100}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="card h-full block group hover:border-orange-500/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <RelIcon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{s.name}</h3>
                    <p className="text-dark-300 text-sm leading-relaxed mb-4">
                      {s.description}
                    </p>
                    <span className="text-orange-400 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            badge="Questions fréquentes"
            title="Tout ce que vous voulez savoir"
            titleHighlight="sur ce service"
          />
          <div className="space-y-4">
            {defaultFaqs.map((faq, i) => (
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

      {/* Contact quick block */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="card grid md:grid-cols-3 gap-6 text-center">
              <a href={telLink} className="group">
                <Phone className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">{business.phone}</div>
                <div className="text-dark-400 text-xs mt-1">Appel direct</div>
              </a>
              <a href={mailtoLink} className="group">
                <Mail className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">{business.email}</div>
                <div className="text-dark-400 text-xs mt-1">Réponse sous 24h</div>
              </a>
              <div>
                <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-white font-semibold">{business.openingHoursHuman}</div>
                <div className="text-dark-400 text-xs mt-1">Devis sous 48h</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title={`Prêt à passer à ${service.shortName.toLowerCase()} ?`}
        description="Brief offert de 30 min en visio pour comprendre votre projet et vous proposer un devis précis sous 48h. Aucun engagement."
        primaryLabel="Démarrer mon projet"
        secondaryLabel="Voir les autres services"
        secondaryHref="/services"
      />
    </>
  );
}
