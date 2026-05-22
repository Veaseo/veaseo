"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { services } from "@/lib/business";

const serviceOptions = [
  ...services.map((s) => s.name),
  "Audit gratuit / Conseil",
  "Autre",
];

// Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_KEY in your .env.local and Vercel env vars.
// Get a free unlimited key at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // If access key is missing, show a clear error instead of failing silently
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(
        "Le formulaire n'est pas encore configuré. Merci de me contacter directement par téléphone ou email en attendant."
      );
      return;
    }

    // Web3Forms required fields
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Site Veaseo");
    formData.append(
      "subject",
      `Nouveau message du site Veaseo — ${formData.get("service") || "Contact"}`
    );
    // Honeypot anti-spam
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Une erreur est survenue. Merci de réessayer.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Erreur réseau. Merci de réessayer ou de me contacter directement."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center py-16">
        <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500/40 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Message envoyé !</h2>
        <p className="text-dark-300 max-w-md mx-auto leading-relaxed">
          Merci pour votre message. Je reviens vers vous sous 24h avec un premier retour
          et, si pertinent, un créneau pour notre brief offert.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-orange-400 text-sm hover:text-orange-300 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="text-xl font-bold text-white mb-2">
        Parlez-moi de votre projet
      </h2>
      <p className="text-dark-400 text-sm mb-6">
        Brief offert · Réponse sous 24h · Aucun engagement.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot field (hidden) */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
          style={{ display: "none" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              autoComplete="given-name"
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
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-dark-300 text-sm mb-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jean@mon-entreprise.fr"
              className="input-dark"
              autoComplete="email"
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
              placeholder="06 12 34 56 78"
              className="input-dark"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-dark-300 text-sm mb-2">
              Entreprise
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Nom de votre entreprise"
              className="input-dark"
              autoComplete="organization"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-dark-300 text-sm mb-2">
              Ville
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Vannes, Lorient..."
              className="input-dark"
              autoComplete="address-level2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="website" className="block text-dark-300 text-sm mb-2">
            Site actuel (si vous en avez un)
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://mon-site.fr"
            className="input-dark"
            autoComplete="url"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-dark-300 text-sm mb-2">
            Service souhaité *
          </label>
          <select
            id="service"
            name="service"
            required
            className="input-dark"
            defaultValue=""
          >
            <option value="" disabled>
              Choisir un service…
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="bg-dark-800">
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-dark-300 text-sm mb-2">
            Décrivez votre projet *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Parlez-moi de votre activité, vos objectifs, votre timing souhaité, votre budget approximatif..."
            className="input-dark resize-none"
          />
        </div>

        {status === "error" && errorMessage && (
          <div className="flex items-start gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours…
            </>
          ) : (
            <>
              Envoyer ma demande <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-dark-500 text-xs text-center leading-relaxed">
          En soumettant ce formulaire, vous acceptez d&apos;être contacté par Veaseo concernant
          votre demande. Vos données ne sont jamais cédées à des tiers. Conformément au RGPD,
          vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression à tout moment.
        </p>
      </form>
    </div>
  );
}
