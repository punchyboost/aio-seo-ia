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
  content: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  "quest-ce-que-aio-2024": {
    title: "Qu'est-ce que l'AIO et pourquoi c'est important en 2025 ?",
    excerpt: "L'AIO (Artificial Intelligence Optimization) représente l'évolution naturelle du SEO.",
    category: "AIO",
    date: "22 novembre 2025",
    readTime: "5 min",
    author: "Christian Lyon",
    content: `## Introduction

L'AIO (Artificial Intelligence Optimization) est devenu un terme incontournable dans le monde du SEO en 2025. Mais qu'est-ce que cela signifie vraiment pour votre entreprise ?

## Qu'est-ce que l'AIO ?

L'AIO est une approche qui combine :
- Les fondations du SEO classique (technique, contenu, popularité)
- Une utilisation structurée de l'IA générative pour produire, organiser et renforcer vos contenus
- La réalité que les IA résument et relaient désormais l'information (AI Overviews, assistants IA)

## Pourquoi l'AIO est stratégique pour les TPE/PME

Une TPE/PME dispose rarement de plusieurs rédacteurs, d'un SEO à temps plein ou d'un responsable IA en interne. Résultat : le site est là, mais sous-utilisé.

L'AIO permet de :
1. **Poser une stratégie réaliste** adaptée à vos ressources
2. **Accélérer la production** avec l'IA dans un cadre maîtrisé
3. **Améliorer la lisibilité** de vos pages pour Google et les IA
4. **Faire exister votre marque** dans un paysage où les réponses sont générées

## Les 3 piliers de l'AIO

### 1. Optimisation technique

Votre site doit être indexable, rapide et accessible. Les fondamentaux du SEO restent essentiels.

### 2. Contenu structuré

Les contenus doivent être pensés pour être compris par les IA :
- Réponses courtes et directes
- Structure hiérarchique claire (H1, H2, H3)
- Données structurées (Schema.org)
- Format scannable (listes, tableaux)

### 3. Crédibilité (E-E-A-T)

Les IA citent en priorité les sources avec une forte Expertise, Expérience, Autorité et Trustworthiness.

## Comment commencer avec l'AIO ?

1. **Audit de votre site actuel** : Identifiez les opportunités et les blocages
2. **Cartographie des requêtes AIO** : Quelles recherches déclenchent des AI Overviews ?
3. **Optimisation progressive** : Commencez par vos pages les plus importantes
4. **Mesure des résultats** : Suivez votre visibilité dans les AI Overviews

## Conclusion

L'AIO n'est pas une révolution, mais une évolution naturelle du SEO. Les entreprises qui s'y adaptent dès maintenant prendront une longueur d'avance sur leurs concurrents.

**Besoin d'aide pour mettre en place l'AIO dans votre entreprise ?** [Contactez-moi](/contact) pour un diagnostic gratuit.`
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
    content: "L'article demandé n'a pas été trouvé."
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

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/##/g, '<h2>').replace(/<h2>/g, '</p><h2 class="text-2xl font-bold mt-8 mb-4">').replace(/\n/g, '</h2><p>') }} />

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
