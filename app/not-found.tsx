import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AstronautIllustration from "@/components/ui/AstronautIllustration";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="container-custom text-center relative z-10">
        <AstronautIllustration className="w-64 mx-auto mb-8 animate-float" />
        <div className="text-8xl font-bold text-orange-400/20 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Vous avez décollé trop loin
        </h1>
        <p className="text-dark-300 text-lg mb-8 max-w-md mx-auto">
          Cette page n&apos;existe pas ou a été déplacée. Revenez sur Terre et explorez le reste du site.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8">
            Retour à l&apos;accueil <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="btn-secondary px-8">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
