import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { business, services, cities } from "@/lib/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} – Création de site internet & SEO local dans le Morbihan`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    "création site internet Morbihan",
    "webdesigner Ploërmel",
    "SEO local Morbihan",
    "création site web Vannes",
    "création site web Lorient",
    "référencement Google local",
    "agence web Morbihan",
    "site vitrine entreprise locale",
    "Bretagne sud",
  ],
  authors: [{ name: business.owner }],
  creator: business.name,
  publisher: business.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: business.url,
    siteName: business.name,
    title: `${business.name} – Création de site internet & SEO local dans le Morbihan`,
    description: business.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} – Sites web qui convertissent`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – Création de site internet & SEO local`,
    description: business.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${business.url}/#localbusiness`,
  name: business.name,
  legalName: business.legalName,
  description: business.description,
  url: business.url,
  logo: `${business.url}/icon.svg`,
  image: `${business.url}/og-image.jpg`,
  priceRange: "€€€",
  telephone: business.phoneE164,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.address.locality,
    postalCode: business.address.postalCode,
    addressRegion: business.address.region,
    addressCountry: business.address.country,
  },
  openingHoursSpecification: business.openingHoursSpec,
  areaServed: cities.map((c) => ({
    "@type": "City",
    name: c.name,
  })),
  serviceArea: {
    "@type": "AdministrativeArea",
    name: business.address.department,
  },
  sameAs: [business.social.linkedin, business.social.instagram],
  founder: {
    "@type": "Person",
    name: business.owner,
    jobTitle: business.jobTitle,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Services ${business.name}`,
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${business.url}/services/${s.slug}`,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${business.url}/#website`,
  url: business.url,
  name: business.name,
  description: business.description,
  publisher: {
    "@id": `${business.url}/#localbusiness`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${business.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "fr-FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-dark text-dark-50 antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
