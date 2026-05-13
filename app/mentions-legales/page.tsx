import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales – Veaseo",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8">Mentions légales</h1>
        <div className="prose prose-invert prose-dark max-w-none space-y-6 text-dark-300">
          <h2 className="text-white text-xl font-bold">Éditeur du site</h2>
          <p>Veaseo – Auto-entrepreneur<br />
          SIRET : À compléter<br />
          Email : contact@veaseo.fr<br />
          Téléphone : +33 6 00 00 00 00</p>

          <h2 className="text-white text-xl font-bold">Hébergement</h2>
          <p>Vercel Inc.<br />340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>

          <h2 className="text-white text-xl font-bold">Propriété intellectuelle</h2>
          <p>L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d&apos;auteur. Toute reproduction sans autorisation est interdite.</p>

          <h2 className="text-white text-xl font-bold">Données personnelles</h2>
          <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont jamais cédées à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression.</p>

          <h2 className="text-white text-xl font-bold">Cookies</h2>
          <p>Ce site utilise Google Analytics pour mesurer l&apos;audience. Vous pouvez refuser ces cookies via les paramètres de votre navigateur.</p>
        </div>
      </div>
    </section>
  );
}
