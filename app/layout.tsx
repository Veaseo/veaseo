import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veaseo.fr"),
  title: {
    default: "Veaseo – Webdesigner spécialisé SEO pour entreprises locales",
    template: "%s | Veaseo",
  },
  description:
    "Transformez votre visibilité Google en clients grâce à un site web pensé pour convertir. Veaseo : webdesigner spécialisé en référencement naturel pour les entreprises locales.",
  keywords: [
    "webdesigner",
    "SEO",
    "référencement naturel",
    "création site web",
    "entreprises locales",
    "agence web",
    "site vitrine",
    "Google",
  ],
  authors: [{ name: "Veaseo" }],
  creator: "Veaseo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://veaseo.fr",
    siteName: "Veaseo",
    title: "Veaseo – Webdesigner spécialisé SEO pour entreprises locales",
    description:
      "Transformez votre visibilité Google en clients grâce à un site web pensé pour convertir.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veaseo – Sites web qui convertissent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veaseo – Webdesigner spécialisé SEO",
    description: "Sites web qui transforment votre visibilité Google en clients.",
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
  verification: {
    google: "google-site-verification-token",
  },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              name: "Veaseo",
              description:
                "Webdesigner spécialisé dans la création de sites web optimisés SEO pour les entreprises locales.",
              url: "https://veaseo.fr",
              logo: "https://veaseo.fr/logo.svg",
              image: "https://veaseo.fr/og-image.jpg",
              priceRange: "€€",
              telephone: "+33 6 00 00 00 00",
              email: "contact@veaseo.fr",
              address: {
                "@type": "PostalAddress",
                addressCountry: "FR",
              },
              sameAs: [
                "https://www.linkedin.com/company/veaseo",
                "https://www.instagram.com/veaseo",
              ],
              founder: {
                "@type": "Person",
                name: "Veaseo",
                jobTitle: "Webdesigner & Consultant SEO",
              },
              serviceArea: {
                "@type": "Country",
                name: "France",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services Veaseo",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Création de site web",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Référencement naturel (SEO)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Optimisation des conversions (CRO)",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="bg-dark text-dark-50 antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
