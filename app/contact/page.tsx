import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin, MessageSquare, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – Obtenez votre audit SEO gratuit",
  description:
    "Contactez Veaseo pour un audit SEO gratuit et un devis personnalisé. Réponse sous 24h. Discutons de votre projet.",
  alternates: { canonical: "https://veaseo.fr/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <AnimatedSection direction="left">
              <span className="badge mb-6">Contactez-moi</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Démarrons votre{" "}
                <span className="text-gradient">projet ensemble</span>
              </h1>
              <p className="text-dark-300 text-lg leading-relaxed mb-8">
                Remplissez le formulaire et obtenez votre audit SEO gratuit sous 24h. Je prends le temps d&apos;analyser votre situation pour vous donner des conseils vraiment adaptés à votre activité.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: Clock, title: "Réponse sous 24h", desc: "Je réponds à chaque demande personnellement" },
                  { icon: MessageSquare, title: "Audit SEO offert", desc: "Analyse complète de votre site et de vos concurrents" },
                  { icon: Rocket, title: "Sans engagement", desc: "Un devis clair sans pression ni relance intempestive" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{title}</div>
                      <div className="text-dark-400 text-sm">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-8 border-t border-white/5">
                <a
                  href="mailto:contact@veaseo.fr"
                  className="flex items-center gap-3 text-dark-300 hover:text-orange-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  contact@veaseo.fr
                </a>
                <a
                  href="tel:+33600000000"
                  className="flex items-center gap-3 text-dark-300 hover:text-orange-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  +33 6 00 00 00 00
                </a>
                <div className="flex items-center gap-3 text-dark-300 text-sm">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  France (disponible partout)
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
