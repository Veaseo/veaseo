import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, CheckCircle2, MapPin, Globe, Search, Map,
  Building2, RefreshCw, PenTool, Phone, Mail, Clock,
  Smartphone, Shield, BarChart3, Code2, Layout, Rocket,
  ClipboardList, Users, Gauge,
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
import { getServiceContent } from "@/lib/services-content";

const iconMap = {
  Globe, Search, Map, Building2, RefreshCw, PenTool, MapPin,
  Smartphone, Shield, BarChart3, Code2, Layout, Rocket,
  ClipboardList, Users, Gauge, CheckCircle2, Phone, Mail, Clock,
} as const;

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
    alternates: { canonical: `${business.url}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${business.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

const topCities = cities.filter((c) => c.priority === 1);

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  const content = getServiceContent(params.slug);

  if (!service || service.slug === "creation-site-web" || !content) {
    notFound();
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Render bold markdown (**) in problem stats text
  const renderInlineBold = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* SCHEMA: Service */}
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

      {/* SCHEMA: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* SCHEMA: Breadcrumb */}
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
            <p className="text-dark-200 text-xl max-w-3xl mb-4 leading-relaxed font-medium">
              {content.heroSubtitle}
            </p>
            <p className="text-dark-300 text-lg max-w-3xl mb-8 leading-relaxed">
              {content.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Démarrer mon projet <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={telLink} className="btn-secondary px-8 py-4 text-base">
                <Phone className="w-5 h-5" /> {business.phone}
              </a>
            </div>

            {/* Stats hero */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              {content.stats.map((s) => (
                <div key={s.label} className="border-l-2 border-orange-500 pl-4">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-dark-400">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Le constat"
            title={content.problemTitle}
            titleHighlight={content.problemHighlight}
            description={content.problemDescription}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {content.problemStats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="card h-full">
                  <div className="text-4xl font-bold text-orange-400 mb-3">{stat.value}</div>
                  <p className="text-dark-200">{renderInlineBold(stat.text)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-dark-300 text-lg leading-relaxed">
              {content.problemConclusion}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Ce qui fait la différence"
            title="Tout ce qui fait un service"
            titleHighlight="vraiment performant"
            description={content.featuresIntro}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((f, i) => {
              const FIcon = iconMap[f.icon as keyof typeof iconMap] ?? CheckCircle2;
              return (
                <AnimatedSection key={f.title} delay={i * 80}>
                  <div className="card h-full">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <FIcon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                    <p className="text-dark-300 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Ma méthode"
            title="Un process humain,"
            titleHighlight="sans approximation"
            description="Avant la moindre action, je veux tout savoir de votre activité. C'est cette rigueur qui fait la différence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.process.map((p, i) => {
              const PIcon = iconMap[p.icon as keyof typeof iconMap] ?? CheckCircle2;
              return (
                <AnimatedSection key={p.step} delay={i * 100}>
                  <div className="card h-full relative">
                    <div className="absolute top-6 right-6 text-5xl font-bold text-orange-500/15">
                      {p.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <PIcon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-dark-300 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <span className="badge mb-4">À qui ça s&apos;adresse</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {content.targetTitle}{" "}
                <span className="text-gradient">entreprises locales</span>{" "}
                du Morbihan
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed">
                {content.targetIntro}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="card">
                <h3 className="text-white font-bold text-lg mb-4">Clients types :</h3>
                <ul className="space-y-3">
                  {content.targets.map((t) => (
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

      {/* WHAT'S INCLUDED */}
      <section className="section-padding bg-dark-800/30 border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Ce qui est inclus"
            title="Une prestation complète,"
            titleHighlight="sans options cachées"
            description="Pas de menu à la carte ni de surprises au moment de la facture. Tout est intégré dès la prestation initiale."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {content.included.map((block, i) => (
              <AnimatedSection key={block.title} delay={i * 100}>
                <div className="card h-full">
                  <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {block.title}
                  </h3>
                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-dark-200">
                        <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 max-w-3xl mx-auto">
            <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent border border-orange-500/20 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Chaque projet est unique
              </h3>
              <p className="text-dark-200 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                Votre métier, votre zone, votre concurrence : tout est différent. Je préfère prendre 30 minutes pour comprendre votre projet et vous proposer un <strong className="text-white">devis sur-mesure adapté à vos objectifs</strong>, plutôt qu&apos;un tarif générique.
              </p>
              <Link href="/contact" className="btn-primary px-8 py-4 text-base inline-flex">
                Obtenir mon devis personnalisé <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-dark-500 text-xs mt-4">
                Brief offert · Réponse sous 48h · Aucun engagement
              </p>
            </div>
          </AnimatedSection>
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
                  key={city.slug}
                  href={`/zones-intervention/${city.slug}`}
                  className="bg-dark-700 border border-white/10 text-dark-200 hover:text-orange-400 hover:border-orange-500/30 text-sm px-4 py-2 rounded-full transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-orange-400" />
                  {city.name}
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
            titleHighlight="avant de vous lancer"
          />
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
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

      {/* CONTACT QUICK */}
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
        title={content.finalCtaTitle}
        description="Brief offert de 30 min en visio pour comprendre votre projet, vos objectifs et vous proposer un devis précis sous 48h. Aucun engagement."
        primaryLabel="Démarrer mon projet"
        secondaryLabel="Voir les autres services"
        secondaryHref="/services"
      />
    </>
  );
}
