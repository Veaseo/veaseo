"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const services = [
  "Création de site web",
  "Référencement SEO",
  "Optimisation CRO",
  "Refonte de site web",
  "Audit SEO gratuit",
  "Autre",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center py-16">
        <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500/40 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Message envoyé !</h2>
        <p className="text-dark-300">
          Merci pour votre message. Je vous répondrai sous 24h avec votre audit SEO gratuit.
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="text-xl font-bold text-white mb-6">
        Demandez votre audit gratuit
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-dark-300 text-sm mb-2">
              Prénom *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Jean"
              className="input-dark"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-dark-300 text-sm mb-2">
              Nom *
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Dupont"
              className="input-dark"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-dark-300 text-sm mb-2">
            Email professionnel *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jean@monentreprise.fr"
            className="input-dark"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-dark-300 text-sm mb-2">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+33 6 00 00 00 00"
            className="input-dark"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-dark-300 text-sm mb-2">
            URL de votre site actuel
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://monsite.fr"
            className="input-dark"
          />
        </div>

        <div>
          <label className="block text-dark-300 text-sm mb-2">
            Service souhaité *
          </label>
          <div className="grid grid-cols-2 gap-2">
            {services.map((s) => (
              <label key={s} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="service"
                  value={s}
                  required
                  className="accent-orange-500"
                />
                <span className="text-dark-300 text-sm">{s}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-dark-300 text-sm mb-2">
            Décrivez votre projet *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Parlez-moi de votre entreprise, votre secteur d'activité et ce que vous souhaitez accomplir..."
            className="input-dark resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center py-4 text-base"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-dark-500 text-xs text-center">
          En soumettant ce formulaire, vous acceptez d&apos;être contacté par Veaseo concernant votre demande. Aucun spam.
        </p>
      </form>
    </div>
  );
}
