import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Punchyboost - AIO SEO</title>
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

          <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                CHRISTIAN LYON EI - Punchyboost (ci-après "nous", "notre" ou "Punchyboost") s'engage à protéger la vie privée des utilisateurs de son site web www.punchyboost.com (ci-après "le Site").
              </p>
              <p>
                Cette Politique de Confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française "Informatique et Libertés".
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles est :
              </p>
              <ul className="list-none space-y-1 ml-0 mt-4">
                <li><strong>Raison sociale :</strong> CHRISTIAN LYON EI - Punchyboost</li>
                <li><strong>SIRET :</strong> 808 089 478 00024</li>
                <li><strong>Adresse :</strong> 7 Allée des Vergers, 75012 Paris, France</li>
                <li><strong>Email :</strong> <a href="mailto:contact@punchyboost.com">contact@punchyboost.com</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Données collectées</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">3.1. Données collectées via le formulaire de contact</h3>
              <p className="mb-4">
                Lorsque vous nous contactez via le formulaire de contact, nous collectons :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Votre nom et prénom</li>
                <li>Votre adresse email</li>
                <li>Le contenu de votre message</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2. Données de navigation (cookies)</h3>
              <p className="mb-4">
                Nous utilisons Google Analytics pour analyser l'utilisation du Site. Les données collectées incluent :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Adresse IP (anonymisée)</li>
                <li>Type de navigateur et système d'exploitation</li>
                <li>Pages visitées et durée de visite</li>
                <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Finalités du traitement</h2>
              <p className="mb-4">
                Nous utilisons vos données personnelles pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Gestion des demandes de contact :</strong> Répondre à vos questions et demandes d'information</li>
                <li><strong>Amélioration du Site :</strong> Analyser l'utilisation du Site pour améliorer l'expérience utilisateur</li>
                <li><strong>Statistiques :</strong> Mesurer l'audience et les performances du Site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Base légale du traitement</h2>
              <p className="mb-4">
                Le traitement de vos données personnelles repose sur les bases légales suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Consentement :</strong> Vous consentez au traitement de vos données en utilisant le formulaire de contact</li>
                <li><strong>Intérêt légitime :</strong> Nous avons un intérêt légitime à analyser l'utilisation du Site pour l'améliorer</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Destinataires des données</h2>
              <p className="mb-4">
                Vos données personnelles sont destinées à :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>CHRISTIAN LYON EI :</strong> Pour la gestion des demandes de contact</li>
                <li><strong>Google Analytics :</strong> Pour l'analyse statistique du Site (données anonymisées)</li>
                <li><strong>Vercel Inc. :</strong> Hébergeur du Site (données techniques uniquement)</li>
              </ul>
              <p>
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins commerciales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Durée de conservation</h2>
              <p className="mb-4">
                Nous conservons vos données personnelles pendant les durées suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Données de navigation (Google Analytics) :</strong> 26 mois maximum</li>
              </ul>
              <p>
                À l'issue de ces durées, vos données sont supprimées ou anonymisées.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Vos droits</h2>
              <p className="mb-4">
                Conformément au RGPD et à la loi "Informatique et Libertés", vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données dans certains cas</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                <li><strong>Droit de retirer votre consentement :</strong> À tout moment, sans affecter la licéité du traitement antérieur</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@punchyboost.com">contact@punchyboost.com</a>
              </p>
              <p className="mt-4">
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Cookies</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">9.1. Qu'est-ce qu'un cookie ?</h3>
              <p className="mb-4">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">9.2. Cookies utilisés sur le Site</h3>
              <p className="mb-4">
                Nous utilisons les cookies suivants :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Google Analytics :</strong> Cookies analytiques pour mesurer l'audience du Site</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">9.3. Gestion des cookies</h3>
              <p className="mb-4">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li><strong>Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies</li>
                <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies</li>
                <li><strong>Edge :</strong> Paramètres &gt; Confidentialité &gt; Cookies</li>
              </ul>
              <p>
                Attention : La désactivation des cookies peut affecter certaines fonctionnalités du Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>L'accès non autorisé</li>
                <li>La divulgation accidentelle</li>
                <li>La modification ou la destruction</li>
              </ul>
              <p>
                Le Site utilise le protocole HTTPS pour sécuriser les échanges de données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Transfert de données hors UE</h2>
              <p className="mb-4">
                Certains de nos prestataires (Google Analytics, Vercel) peuvent transférer vos données en dehors de l'Union Européenne.
              </p>
              <p>
                Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types approuvées par la Commission Européenne) pour assurer un niveau de protection adéquat de vos données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Modifications de la Politique de Confidentialité</h2>
              <p>
                Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
              <p>
                Pour toute question concernant cette Politique de Confidentialité ou l'exercice de vos droits, vous pouvez nous contacter :
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
