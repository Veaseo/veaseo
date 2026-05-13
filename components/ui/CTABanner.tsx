import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Prêt à transformer votre visibilité en clients ?",
  description = "Obtenez un audit SEO gratuit et un plan d'action personnalisé pour votre entreprise.",
  primaryLabel = "Demander mon audit gratuit",
  primaryHref = "/contact",
  secondaryLabel = "Voir les réalisations",
  secondaryHref = "/realisations",
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/20 via-dark-800 to-dark-800 border border-orange-500/30 rounded-3xl p-10 md:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {title}
              </h2>
              <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={primaryHref} className="btn-primary text-base px-8 py-4">
                  {primaryLabel} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href={secondaryHref} className="btn-secondary text-base px-8 py-4">
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
