import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Punchyboost - AIO SEO</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </a>
          </Link>

          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
              <p className="mb-2">
                Le site <strong>www.punchyboost.com</strong> est édité par :
              </p>
              <ul className="list-none space-y-1 ml-0">
                <li><strong>Raison sociale :</strong> CHRISTIAN LYON EI</li>
                <li><strong>Nom commercial :</strong> Punchyboost</li>
                <li><strong>Forme juridique :</strong> Entreprise Individuelle</li>
                <li><strong>SIRET :</strong> 808 089 478 00024</li>
                <li><strong>Adresse :</strong> 7 Allée des Vergers, 75012 Paris, France</li>
                <li><strong>Email :</strong> <a href="mailto:contact@punchyboost.com">contact@punchyboost.com</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Directeur de publication</h2>
              <p>
                Le directeur de la publication du site est <strong>Christian Lyon</strong>, en sa qualité de représentant légal de l'entreprise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Hébergement</h2>
              <p className="mb-2">
                Le site est hébergé par :
              </p>
              <ul className="list-none space-y-1 ml-0">
                <li><strong>Nom :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Propriété intellectuelle</h2>
              <p className="mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de CHRISTIAN LYON EI - Punchyboost, sauf mention contraire.
              </p>
              <p className="mb-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de CHRISTIAN LYON EI.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Données personnelles</h2>
              <p className="mb-4">
                Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par CHRISTIAN LYON EI pour la gestion des demandes de contact et l'envoi d'informations sur nos services.
              </p>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
              </p>
              <p>
                Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@punchyboost.com">contact@punchyboost.com</a>
              </p>
              <p className="mt-4">
                Pour plus d'informations, consultez notre <Link href="/politique-confidentialite"><a className="text-primary hover:underline">Politique de Confidentialité</a></Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="mb-4">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic via Google Analytics.
              </p>
              <p>
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cependant, cela peut affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitation de responsabilité</h2>
              <p className="mb-4">
                CHRISTIAN LYON EI s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>
              <p className="mb-4">
                En conséquence, CHRISTIAN LYON EI décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
              </p>
              <p>
                L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Liens hypertextes</h2>
              <p className="mb-4">
                Le site peut contenir des liens hypertextes vers d'autres sites. CHRISTIAN LYON EI n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
              <p>
                La création de liens hypertextes vers le site www.punchyboost.com nécessite une autorisation préalable écrite de CHRISTIAN LYON EI.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, le tribunal compétent sera celui du ressort du siège social de CHRISTIAN LYON EI.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p>
                Pour toute question concernant les mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="list-none space-y-1 ml-0 mt-4">
                <li><strong>Par email :</strong> <a href="mailto:contact@punchyboost.com">contact@punchyboost.com</a></li>
                <li><strong>Par courrier :</strong> CHRISTIAN LYON EI - Punchyboost, 7 Allée des Vergers, 75012 Paris, France</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
