import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useRoute } from "wouter";

interface BlogPostData {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: JSX.Element;
}

const blogPostsData: Record<string, BlogPostData> = {
  "quest-ce-que-aio-2024": {
    title: "Qu'est-ce que l'AIO et pourquoi c'est important en 2025 ?",
    excerpt: "L'AIO (Artificial Intelligence Optimization) représente l'évolution naturelle du SEO.",
    category: "AIO",
    date: "22 novembre 2025",
    readTime: "5 min",
    author: "Christian Lyon",
    content: (
      <>
        <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="mb-4">
          L'AIO (Artificial Intelligence Optimization) est devenu un terme incontournable dans le monde du SEO en 2025. Mais qu'est-ce que cela signifie vraiment pour votre entreprise ?
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que l'AIO ?</h2>
        <p className="mb-4">L'AIO est une approche qui combine :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Les fondations du SEO classique (technique, contenu, popularité)</li>
          <li>Une utilisation structurée de l'IA générative pour produire, organiser et renforcer vos contenus</li>
          <li>La réalité que les IA résument et relaient désormais l'information (AI Overviews, assistants IA)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi l'AIO est stratégique pour les TPE/PME</h2>
        <p className="mb-4">
          Une TPE/PME dispose rarement de plusieurs rédacteurs, d'un SEO à temps plein ou d'un responsable IA en interne. Résultat : le site est là, mais sous-utilisé.
        </p>
        <p className="mb-4">L'AIO permet de :</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>Poser une stratégie réaliste</strong> adaptée à vos ressources</li>
          <li><strong>Accélérer la production</strong> avec l'IA dans un cadre maîtrisé</li>
          <li><strong>Améliorer la lisibilité</strong> de vos pages pour Google et les IA</li>
          <li><strong>Faire exister votre marque</strong> dans un paysage où les réponses sont générées</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Les 3 piliers de l'AIO</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Optimisation technique</h3>
        <p className="mb-4">
          Votre site doit être indexable, rapide et accessible. Les fondamentaux du SEO restent essentiels.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Contenu structuré</h3>
        <p className="mb-4">Les contenus doivent être pensés pour être compris par les IA :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Réponses courtes et directes</li>
          <li>Structure hiérarchique claire (H1, H2, H3)</li>
          <li>Données structurées (Schema.org)</li>
          <li>Format scannable (listes, tableaux)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Crédibilité (E-E-A-T)</h3>
        <p className="mb-4">
          Les IA citent en priorité les sources avec une forte Expertise, Expérience, Autorité et Trustworthiness.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comment commencer avec l'AIO ?</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>Audit de votre site actuel</strong> : Identifiez les opportunités et les blocages</li>
          <li><strong>Cartographie des requêtes AIO</strong> : Quelles recherches déclenchent des AI Overviews ?</li>
          <li><strong>Optimisation progressive</strong> : Commencez par vos pages les plus importantes</li>
          <li><strong>Mesure des résultats</strong> : Suivez votre visibilité dans les AI Overviews</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          L'AIO n'est pas une révolution, mais une évolution naturelle du SEO. Les entreprises qui s'y adaptent dès maintenant prendront une longueur d'avance sur leurs concurrents.
        </p>
        <p className="mb-4">
          <strong>Besoin d'aide pour mettre en place l'AIO dans votre entreprise ?</strong>{" "}
          <a href="/contact" className="text-primary hover:underline">Contactez-moi</a> pour un diagnostic gratuit.
        </p>
      </>
    )
  },
  "structurer-contenus-ai-overviews": {
    title: "Comment structurer vos contenus pour les AI Overviews de Google",
    excerpt: "Les AI Overviews changent la donne en SEO. Apprenez à structurer vos pages pour être cité par Google.",
    category: "SEO",
    date: "20 novembre 2025",
    readTime: "7 min",
    author: "Christian Lyon",
    content: (
      <>
        <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="mb-4">
          Les AI Overviews de Google transforment la façon dont les utilisateurs trouvent l'information. Pour rester visible, il faut adapter sa stratégie de contenu.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce qu'un AI Overview ?</h2>
        <p className="mb-4">
          Un AI Overview est une réponse générée par l'IA de Google qui apparaît en haut des résultats de recherche. Elle synthétise plusieurs sources pour répondre directement à la question de l'utilisateur.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi c'est important pour votre SEO</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Les AI Overviews captent l'attention avant les résultats organiques</li>
          <li>Être cité dans un AI Overview augmente votre crédibilité</li>
          <li>C'est une opportunité de visibilité même sans être en position 1</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comment structurer vos contenus</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. Répondez directement aux questions</h3>
        <p className="mb-4">
          Commencez vos articles par une réponse claire et concise. L'IA de Google privilégie les contenus qui vont droit au but.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Utilisez une structure hiérarchique</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Un seul H1 par page (le titre principal)</li>
          <li>Des H2 pour les sections principales</li>
          <li>Des H3 pour les sous-sections</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Privilégiez les formats scannables</h3>
        <p className="mb-4">Les IA comprennent mieux les contenus structurés :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Listes à puces</li>
          <li>Tableaux comparatifs</li>
          <li>Étapes numérotées</li>
          <li>Définitions claires</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Les erreurs à éviter</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>Contenu trop long avant la réponse</strong> : Allez à l'essentiel</li>
          <li><strong>Jargon technique</strong> : Privilégiez un langage clair</li>
          <li><strong>Absence de structure</strong> : Les pavés de texte sont ignorés</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          Structurer vos contenus pour les AI Overviews n'est pas compliqué. Il suffit d'être clair, direct et bien organisé. Les entreprises qui adoptent ces bonnes pratiques gagnent en visibilité.
        </p>
      </>
    )
  },
  "eeat-credibilite-ia": {
    title: "E-E-A-T : Comment renforcer votre crédibilité pour les IA",
    excerpt: "Expertise, Expérience, Autorité, Trustworthiness : les 4 piliers pour être cité par les IA génératives.",
    category: "E-E-A-T",
    date: "18 novembre 2025",
    readTime: "6 min",
    author: "Christian Lyon",
    content: (
      <>
        <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="mb-4">
          Les IA génératives citent en priorité les sources crédibles. Le concept E-E-A-T de Google est devenu encore plus important avec l'arrivée de l'AIO.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que l'E-E-A-T ?</h2>
        <p className="mb-4">E-E-A-T est un acronyme qui représente :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Experience</strong> (Expérience) : Avez-vous une expérience pratique du sujet ?</li>
          <li><strong>Expertise</strong> : Êtes-vous un expert reconnu dans votre domaine ?</li>
          <li><strong>Authoritativeness</strong> (Autorité) : Votre site est-il une référence ?</li>
          <li><strong>Trustworthiness</strong> (Fiabilité) : Peut-on vous faire confiance ?</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi l'E-E-A-T est crucial pour l'AIO</h2>
        <p className="mb-4">
          Les IA génératives ne citent pas n'importe quelle source. Elles privilégient les contenus qui démontrent une forte crédibilité. Sans E-E-A-T, vous êtes invisible pour les IA.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comment renforcer votre E-E-A-T</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. Montrez votre expérience</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Partagez des études de cas réels</li>
          <li>Incluez des exemples concrets de votre travail</li>
          <li>Mentionnez vos années d'expérience</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Démontrez votre expertise</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Créez une page auteur détaillée</li>
          <li>Mentionnez vos certifications et formations</li>
          <li>Publiez régulièrement du contenu de qualité</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Construisez votre autorité</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Obtenez des backlinks de sites reconnus</li>
          <li>Soyez mentionné dans des médias</li>
          <li>Participez à des événements de votre secteur</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">4. Renforcez la confiance</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Affichez vos mentions légales clairement</li>
          <li>Utilisez le HTTPS</li>
          <li>Incluez des avis clients vérifiés</li>
          <li>Soyez transparent sur vos sources</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          L'E-E-A-T n'est pas une option, c'est une nécessité. Les TPE/PME qui investissent dans leur crédibilité en ligne verront leurs contenus cités par les IA et gagneront en visibilité.
        </p>
      </>
    )
  },
  "donnees-structurees-schema-org": {
    title: "Données structurées Schema.org : Le guide complet pour l'AIO",
    excerpt: "Les données structurées sont essentielles pour que les IA comprennent votre contenu.",
    category: "Technique",
    date: "15 novembre 2025",
    readTime: "10 min",
    author: "Christian Lyon",
    content: (
      <>
        <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="mb-4">
          Les données structurées sont le langage que les IA utilisent pour comprendre votre contenu. Sans elles, votre site est invisible pour les AI Overviews.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que Schema.org ?</h2>
        <p className="mb-4">
          Schema.org est un vocabulaire standardisé qui permet de baliser vos contenus pour que les moteurs de recherche et les IA les comprennent parfaitement.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi c'est crucial pour l'AIO</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Les IA s'appuient sur les données structurées pour extraire l'information</li>
          <li>Elles permettent d'apparaître dans les rich snippets</li>
          <li>Elles augmentent vos chances d'être cité dans les AI Overviews</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Les schémas essentiels pour une TPE/PME</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. Organization (Entreprise)</h3>
        <p className="mb-4">
          Décrit votre entreprise : nom, logo, coordonnées, réseaux sociaux.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. LocalBusiness (Entreprise locale)</h3>
        <p className="mb-4">
          Indispensable si vous avez un point de vente physique : adresse, horaires, zone de service.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Article (Article de blog)</h3>
        <p className="mb-4">
          Pour vos articles de blog : titre, auteur, date de publication, image.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">4. FAQPage (Page FAQ)</h3>
        <p className="mb-4">
          Pour vos questions fréquentes : question et réponse structurées.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">5. Product (Produit)</h3>
        <p className="mb-4">
          Si vous vendez des produits : nom, prix, disponibilité, avis.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comment implémenter Schema.org</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>Choisissez le bon schéma</strong> sur schema.org</li>
          <li><strong>Générez le code JSON-LD</strong> (format recommandé)</li>
          <li><strong>Intégrez-le dans votre page</strong> (dans le head ou le body)</li>
          <li><strong>Testez avec l'outil de Google</strong> (Rich Results Test)</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Les erreurs à éviter</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Utiliser des données incorrectes ou trompeuses</li>
          <li>Oublier de mettre à jour les schémas</li>
          <li>Surcharger avec trop de schémas inutiles</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          Les données structurées sont un investissement qui rapporte. Elles améliorent votre visibilité dans Google et augmentent vos chances d'être cité par les IA.
        </p>
      </>
    )
  },
  "chatgpt-strategie-contenu-seo": {
    title: "ChatGPT et SEO : Comment utiliser l'IA pour votre stratégie de contenu",
    excerpt: "L'IA générative peut accélérer votre production de contenu sans sacrifier la qualité.",
    category: "IA Générative",
    date: "12 novembre 2025",
    readTime: "8 min",
    author: "Christian Lyon",
    content: (
      <>
        <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="mb-4">
          ChatGPT et les autres IA génératives sont des outils puissants pour le SEO. Mais attention : mal utilisés, ils peuvent nuire à votre référencement.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Les avantages de l'IA pour le SEO</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Accélération de la production de contenu</li>
          <li>Génération d'idées et de titres</li>
          <li>Optimisation des méta-descriptions</li>
          <li>Recherche de mots-clés</li>
          <li>Structuration des articles</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comment utiliser ChatGPT efficacement</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. Pour la recherche de sujets</h3>
        <p className="mb-4">
          Demandez à ChatGPT de générer des idées d'articles basées sur votre secteur et vos mots-clés cibles.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Pour structurer vos contenus</h3>
        <p className="mb-4">
          Utilisez l'IA pour créer un plan détaillé avant de rédiger. Cela vous fait gagner du temps et assure une bonne structure.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Pour optimiser vos textes</h3>
        <p className="mb-4">
          Demandez à l'IA de réécrire certains passages pour les rendre plus clairs ou plus engageants.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">4. Pour les méta-données</h3>
        <p className="mb-4">
          Générez rapidement des méta-titres et méta-descriptions optimisés pour le SEO.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Les pièges à éviter</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>Publier du contenu IA brut</strong> : Toujours relire et personnaliser</li>
          <li><strong>Négliger l'expérience utilisateur</strong> : Le contenu doit rester naturel</li>
          <li><strong>Oublier l'E-E-A-T</strong> : Ajoutez votre expertise et votre expérience</li>
          <li><strong>Dupliquer du contenu</strong> : L'IA génère parfois des textes similaires</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">La bonne approche : IA + Humain</h2>
        <p className="mb-4">Le meilleur résultat vient de la combinaison :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>L'IA</strong> : Structure, rapidité, optimisation</li>
          <li><strong>L'humain</strong> : Expertise, expérience, personnalisation</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          ChatGPT est un assistant formidable pour le SEO, mais il ne remplace pas l'expertise humaine. Utilisez-le comme un outil, pas comme un rédacteur autonome.
        </p>
      </>
    )
  },
  "identifier-requetes-ai-overview": {
    title: "Identifier les requêtes qui déclenchent un AI Overview",
    excerpt: "Toutes les requêtes ne génèrent pas d'AI Overview. Apprenez à cartographier vos opportunités.",
    category: "AIO",
    date: "10 novembre 2025",
    readTime: "5 min",
    author: "Christian Lyon",
    content: (
      <>
        <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="mb-4">
          Tous les mots-clés ne déclenchent pas un AI Overview. Pour optimiser votre stratégie AIO, vous devez identifier les requêtes qui en génèrent.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Quelles requêtes déclenchent des AI Overviews ?</h2>
        <p className="mb-4">Google affiche des AI Overviews principalement pour :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Les questions complexes nécessitant une synthèse</li>
          <li>Les requêtes informationnelles (comment, pourquoi, qu'est-ce que)</li>
          <li>Les comparaisons et choix (meilleur, vs, différence)</li>
          <li>Les guides et tutoriels</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comment identifier vos opportunités</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. Testez manuellement vos mots-clés</h3>
        <p className="mb-4">
          Faites des recherches Google pour chacun de vos mots-clés cibles et notez ceux qui affichent un AI Overview.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Analysez vos concurrents</h3>
        <p className="mb-4">
          Regardez quels contenus de vos concurrents sont cités dans les AI Overviews. Cela vous donne des idées de sujets à traiter.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Utilisez Google Search Console</h3>
        <p className="mb-4">
          Identifiez les requêtes qui vous apportent déjà du trafic et vérifiez si elles génèrent des AI Overviews.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Prioriser vos efforts</h2>
        <p className="mb-4">Concentrez-vous sur :</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>Les requêtes à fort volume</strong> avec AI Overview</li>
          <li><strong>Les questions de votre secteur</strong> où vous avez une expertise</li>
          <li><strong>Les requêtes où vous êtes déjà bien positionné</strong> (positions 1-10)</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Créer du contenu optimisé</h2>
        <p className="mb-4">Une fois vos requêtes identifiées :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Répondez directement à la question</li>
          <li>Structurez votre contenu clairement</li>
          <li>Ajoutez des données structurées</li>
          <li>Démontrez votre E-E-A-T</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          Identifier les bonnes requêtes est la première étape d'une stratégie AIO réussie. Ne perdez pas de temps sur des mots-clés qui ne génèrent pas d'AI Overview.
        </p>
      </>
    )
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";

  const post = blogPostsData[slug] || {
    title: "Article non trouvé",
    excerpt: "Cet article n'existe pas",
    category: "Erreur",
    date: "",
    readTime: "",
    author: "",
    content: <p>L'article demandé n'a pas été trouvé.</p>
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition">AIO</a>
          <div className="flex gap-6">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Accueil</a>
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition">Services</a>
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">A propos</a>
            <a href="/blog" className="text-sm text-foreground font-semibold">Blog</a>
            <a href="https://prise-de-contact.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <Button variant="ghost" size="sm" asChild>
            <a href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </a>
          </Button>
        </div>

        <article className="container max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lecture</span>
              </div>
              <div>
                Par {post.author}
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            {post.content}
          </div>

          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Button variant="outline" asChild>
                <a href="/blog">Voir tous les articles</a>
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </footer>
        </article>
      </main>

      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">AIO</h3>
              <p className="text-sm text-muted-foreground">
                SEO booste par l'IA pour les TPE/PME
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-foreground transition">Accueil</a></li>
                <li><a href="/#services" className="text-muted-foreground hover:text-foreground transition">Services</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-foreground transition">A propos</a></li>
                <li><a href="/blog" className="text-muted-foreground hover:text-foreground transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Besoin d'aide pour votre SEO?
              </p>
              <Button asChild>
                <a href="https://prise-de-contact.lovable.app/" target="_blank" rel="noopener noreferrer">
                  Prendre contact
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>2025 AIO. Tous droits reserves.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
