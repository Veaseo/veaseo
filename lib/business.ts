/**
 * Centralized business data for Veaseo.
 * All NAP (Name, Address, Phone) information, services, and intervention zones live here.
 * This file is the single source of truth — modify here to update everywhere.
 */

export const business = {
  name: "Veaseo",
  legalName: "Veaseo",
  owner: "Bastien Bondu",
  jobTitle: "Webdesigner & Consultant SEO local",
  tagline: "Architecture SEO · Conversion locale · Performance technique",
  description:
    "Webdesigner spécialisé SEO local pour les entreprises du Morbihan. Sites ultra-rapides, architecturés pour Google, livraison en 30 jours.",
  url: "https://veaseo.fr",
  email: "contact@veaseo.fr",
  // Format affichage humain
  phone: "06 92 08 36 84",
  // Format E.164 pour tel: links et Schema.org
  phoneE164: "+33692083684",
  siret: "99299838500015",
  address: {
    locality: "Ploërmel",
    region: "Bretagne",
    department: "Morbihan",
    postalCode: "56800",
    country: "FR",
  },
  // Schema.org openingHours format
  openingHoursSpec: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  openingHoursHuman: "Ouvert 24h/24 · 7j/7",
  social: {
    linkedin: "https://www.linkedin.com/company/veaseo",
    instagram: "https://www.instagram.com/veaseo",
  },
} as const;

/**
 * Intervention zones (cities) — used for local SEO long-tail keywords.
 * Each city gets a generated page at /zones-intervention/[slug]
 */
export const cities = [
  { slug: "ploermel", name: "Ploërmel", department: "Morbihan", priority: 1 },
  { slug: "vannes", name: "Vannes", department: "Morbihan", priority: 1 },
  { slug: "lorient", name: "Lorient", department: "Morbihan", priority: 1 },
  { slug: "auray", name: "Auray", department: "Morbihan", priority: 1 },
  { slug: "pontivy", name: "Pontivy", department: "Morbihan", priority: 1 },
  { slug: "josselin", name: "Josselin", department: "Morbihan", priority: 2 },
  { slug: "malestroit", name: "Malestroit", department: "Morbihan", priority: 2 },
  { slug: "guer", name: "Guer", department: "Morbihan", priority: 2 },
  { slug: "la-trinite-porhoet", name: "La Trinité-Porhoët", department: "Morbihan", priority: 2 },
  { slug: "mauron", name: "Mauron", department: "Morbihan", priority: 2 },
  { slug: "mohon", name: "Mohon", department: "Morbihan", priority: 2 },
  { slug: "locmine", name: "Locminé", department: "Morbihan", priority: 2 },
  { slug: "loudeac", name: "Loudéac", department: "Côtes-d'Armor", priority: 2 },
  { slug: "redon", name: "Redon", department: "Ille-et-Vilaine", priority: 2 },
  { slug: "questembert", name: "Questembert", department: "Morbihan", priority: 2 },
  { slug: "plouvien", name: "Plouvien", department: "Finistère", priority: 3 },
  { slug: "elven", name: "Elven", department: "Morbihan", priority: 2 },
  { slug: "bruz", name: "Bruz", department: "Ille-et-Vilaine", priority: 3 },
  { slug: "bain-de-bretagne", name: "Bain-de-Bretagne", department: "Ille-et-Vilaine", priority: 3 },
  { slug: "montfort-sur-meu", name: "Montfort-sur-Meu", department: "Ille-et-Vilaine", priority: 3 },
  { slug: "rennes", name: "Rennes", department: "Ille-et-Vilaine", priority: 1 },
  { slug: "saint-brieuc", name: "Saint-Brieuc", department: "Côtes-d'Armor", priority: 2 },
  { slug: "muzillac", name: "Muzillac", department: "Morbihan", priority: 2 },
  { slug: "allaire", name: "Allaire", department: "Morbihan", priority: 3 },
] as const;

export type City = (typeof cities)[number];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/**
 * Services offered — each gets a page at /services/[slug]
 */
export const services = [
  {
    slug: "creation-site-web",
    name: "Création de site internet",
    shortName: "Création de site",
    icon: "Globe",
    description:
      "Sites web sur-mesure ultra-rapides pour entreprises locales. Architecture SEO, livraison 30 jours.",
    h1: "Création de site internet dans le Morbihan",
    metaTitle: "Création de site internet dans le Morbihan – Veaseo (Vannes, Lorient)",
    metaDescription:
      "Création de site internet dans le Morbihan : sites ultra-rapides, SEO local et livraison en 30 jours. Pour artisans, commerçants et PME à Vannes, Lorient et toute la Bretagne sud.",
    priority: 1,
  },
  {
    slug: "seo-local",
    name: "SEO local",
    shortName: "SEO local",
    icon: "MapPin",
    description:
      "Attirez des clients dans votre zone géographique grâce à une stratégie SEO locale ciblée.",
    h1: "SEO local dans le Morbihan",
    metaTitle: "SEO local dans le Morbihan – Visibilité Google locale – Veaseo",
    metaDescription:
      "SEO local pour entreprises du Morbihan : remontez sur Google pour les recherches géolocalisées et attirez plus de clients dans votre zone d'intervention.",
    priority: 1,
  },
  {
    slug: "referencement-google-maps",
    name: "Référencement Google Maps",
    shortName: "Google Maps",
    icon: "Map",
    description:
      "Optimisation de votre fiche Google Business Profile pour apparaître dans le pack local Google Maps.",
    h1: "Référencement Google Maps dans le Morbihan",
    metaTitle: "Référencement Google Maps dans le Morbihan – Veaseo",
    metaDescription:
      "Optimisation de votre fiche Google Business pour apparaître en tête sur Google Maps. Plus d'appels, plus d'itinéraires, plus de clients.",
    priority: 2,
  },
  {
    slug: "creation-fiche-google-business",
    name: "Création de fiche Google Business",
    shortName: "Fiche Google",
    icon: "Building2",
    description:
      "Création complète de votre fiche Google Business Profile pour une visibilité locale immédiate.",
    h1: "Création de fiche Google Business dans le Morbihan",
    metaTitle: "Création fiche Google Business Morbihan – Veaseo",
    metaDescription:
      "Création de votre fiche Google Business Profile par un expert SEO local. Soyez visible localement sous 48h sur Google Maps.",
    priority: 2,
  },
  {
    slug: "refonte-site-web",
    name: "Refonte de site web",
    shortName: "Refonte de site",
    icon: "RefreshCw",
    description:
      "Modernisez votre site web existant : design premium, vitesse, SEO et conversion.",
    h1: "Refonte de site web dans le Morbihan",
    metaTitle: "Refonte de site web dans le Morbihan – Veaseo",
    metaDescription:
      "Refonte de site web professionnel dans le Morbihan : modernisez votre présence en ligne avec un site rapide, mobile-first et optimisé SEO.",
    priority: 2,
  },
  {
    slug: "optimisation-seo-on-page",
    name: "Optimisation SEO on-page",
    shortName: "SEO on-page",
    icon: "Search",
    description:
      "Audit et optimisation technique de chaque page : balises, structure, vitesse, schema, contenu.",
    h1: "Optimisation SEO on-page dans le Morbihan",
    metaTitle: "Optimisation SEO on-page Morbihan – Audit & optimisation – Veaseo",
    metaDescription:
      "Optimisation SEO on-page complète : balises, structure HTML, Schema.org, vitesse, contenu. Remontez sur Google grâce à un site techniquement parfait.",
    priority: 3,
  },
  {
    slug: "redaction-contenu-web-seo",
    name: "Rédaction de contenu web SEO",
    shortName: "Rédaction SEO",
    icon: "PenTool",
    description:
      "Rédaction d'articles de blog et de pages services optimisés pour Google et conçus pour convertir.",
    h1: "Rédaction de contenu web SEO dans le Morbihan",
    metaTitle: "Rédaction contenu web SEO Morbihan – Articles optimisés Google – Veaseo",
    metaDescription:
      "Rédaction de contenu web SEO dans le Morbihan : articles de blog, pages services, textes optimisés pour Google et conçus pour générer des conversions.",
    priority: 3,
  },
] as const;

export type Service = (typeof services)[number];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Helper: build a tel: link from the E.164 phone number
 */
export const telLink = `tel:${business.phoneE164}`;
export const mailtoLink = `mailto:${business.email}`;
