import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Mentions légales – Veaseo",
  description: "Mentions légales du site Veaseo : éditeur, hébergement, propriété intellectuelle, RGPD et cookies.",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Mentions légales</h1>
        <p className="text-dark-400 text-sm mb-10">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}</p>

        <div className="space-y-8 text-dark-300 leading-relaxed">
          {/* Éditeur */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">1. Éditeur du site</h2>
            <ul className="space-y-1">
              <li><strong className="text-white">Raison sociale :</strong> {business.legalName}</li>
              <li><strong className="text-white">Dirigeant / Responsable de publication :</strong> {business.owner}</li>
              <li><strong className="text-white">Statut :</strong> Entrepreneur individuel (micro-entreprise)</li>
              <li><strong className="text-white">SIRET :</strong> {business.siret}</li>
              <li><strong className="text-white">Adresse :</strong> {business.address.locality}, {business.address.department}, France</li>
              <li><strong className="text-white">Email :</strong> <a href={`mailto:${business.email}`} className="text-orange-400 hover:text-orange-300">{business.email}</a></li>
              <li><strong className="text-white">Téléphone :</strong> <a href={`tel:${business.phoneE164}`} className="text-orange-400 hover:text-orange-300">{business.phone}</a></li>
            </ul>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">2. Hébergement</h2>
            <p>
              Ce site est hébergé par <strong className="text-white">Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              <br />
              Site : <a href="https://vercel.com" className="text-orange-400 hover:text-orange-300" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, illustrations, images, vidéos, logos, code source, design) est la propriété exclusive de {business.legalName} ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle, du site ou de son contenu, sans autorisation écrite préalable, est strictement interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">4. Protection des données personnelles (RGPD)</h2>
            <p className="mb-3">
              Conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, les données personnelles collectées via ce site (nom, email, téléphone, message) sont utilisées uniquement pour répondre à vos demandes de contact et de devis. Elles ne sont jamais cédées, louées ou vendues à des tiers.
            </p>
            <p className="mb-3">
              <strong className="text-white">Durée de conservation :</strong> 3 ans à compter du dernier contact.
            </p>
            <p className="mb-3">
              <strong className="text-white">Responsable du traitement :</strong> {business.owner} – {business.email}
            </p>
            <p>
              <strong className="text-white">Vos droits :</strong> conformément à la réglementation, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, d&apos;opposition, de limitation du traitement et de portabilité de vos données. Pour exercer ces droits, écrivez à <a href={`mailto:${business.email}`} className="text-orange-400 hover:text-orange-300">{business.email}</a>. Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr" className="text-orange-400 hover:text-orange-300" target="_blank" rel="noopener noreferrer">CNIL</a>.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">5. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies de mesure d&apos;audience (Google Analytics) afin d&apos;améliorer l&apos;expérience utilisateur et la qualité des contenus proposés. Aucun cookie publicitaire n&apos;est utilisé. Vous pouvez à tout moment refuser l&apos;utilisation de ces cookies via les paramètres de votre navigateur.
            </p>
          </div>

          {/* Responsabilité */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">6. Limitation de responsabilité</h2>
            <p>
              Les informations diffusées sur le site sont fournies à titre indicatif. {business.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations, mais ne peut garantir l&apos;absence d&apos;erreur ou d&apos;omission. {business.legalName} ne pourra être tenue responsable des dommages directs ou indirects résultant de l&apos;utilisation du site.
            </p>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
