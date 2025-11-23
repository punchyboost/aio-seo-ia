import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useRoute } from "wouter";

// Template d'article - à remplacer par un vrai système de contenu
export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";

  // Données d'exemple - à remplacer par une vraie source de données
  const post = {
    title: "Qu'est-ce que l'AIO et pourquoi c'est important en 2024 ?",
    excerpt: "L'AIO (Artificial Intelligence Optimization) représente l'évolution naturelle du SEO.",
    category: "AIO",
    date: "22 novembre 2024",
    readTime: "5 min",
    author: "Christian Lyon",
    content: `
## Introduction

L'AIO (Artificial Intelligence Optimization) est devenu un terme incontournable dans le monde du SEO en 2024. Mais qu'est-ce que cela signifie vraiment pour votre entreprise ?

## Qu'est-ce que l'AIO ?

L'AIO est une approche qui combine :
- Les fondations du SEO classique (technique, contenu, popularité)
- Une utilisation structurée de l'IA générative pour produire, organiser et renforcer vos contenus
- La réalité que les IA résument et relaient désormais l'information (AI Overviews, assistants IA…)

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

**Besoin d'aide pour mettre en place l'AIO dans votre entreprise ?** [Contactez-moi](/contact) pour un diagnostic gratuit.
    `
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition">AIO</a>
          <div className="flex gap-6">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Accueil</a>
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition">Services</a>
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">À propos</a>
            <a href="/blog" className="text-sm text-foreground font-semibold">Blog</a>
            <a href="https://prise-de-contact.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <Button variant="ghost" size="sm" asChild>
            <a href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </a>
          </Button>
        </div>

        {/* Article */}
        <article className="container max-w-4xl mx-auto px-4 pb-20">
          {/* Header */}
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lecture</span>
              </div>
              <span>•</span>
              <span>Par {post.author}</span>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Partager
            </Button>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
                if (line.startsWith('## ')) {
                  return `<h2 class="text-3xl font-bold text-foreground mt-12 mb-6">${line.replace('## ', '')}</h2>`;
                }
                if (line.startsWith('### ')) {
                  return `<h3 class="text-2xl font-semibold text-foreground mt-8 mb-4">${line.replace('### ', '')}</h3>`;
                }
                if (line.startsWith('- ')) {
                  return `<li class="ml-6">${line.replace('- ', '')}</li>`;
                }
                if (line.match(/^\d+\. /)) {
                  return `<li class="ml-6">${line.replace(/^\d+\. /, '')}</li>`;
                }
                if (line.includes('[') && line.includes('](')) {
                  const match = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
                  if (match) {
                    return line.replace(match[0], `<a href="${match[2]}" class="text-primary hover:underline">${match[1]}</a>`);
                  }
                }
                if (line.includes('**')) {
                  return line.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>');
                }
                if (line.trim() === '') {
                  return '<br />';
                }
                return `<p class="mb-4">${line}</p>`;
              }).join('') }}
            />
          </div>

          {/* CTA */}
          <div className="mt-16 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Besoin d'aide pour mettre en place l'AIO ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Je vous accompagne dans votre stratégie SEO et IA générative.
            </p>
            <Button size="lg" asChild>
              <a href="https://prise-de-contact.lovable.app/" target="_blank" rel="noopener noreferrer">Parler de votre projet</a>
            </Button>
          </div>
        </article>

        {/* Articles similaires */}
        <section className="bg-muted/50 py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Articles similaires</h2>
            <div className="text-muted-foreground">
              <p>D'autres articles sur l'AIO et le SEO arrivent bientôt...</p>
              <Button variant="outline" className="mt-4" asChild>
                <a href="/blog">Voir tous les articles</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">AIO</h3>
              <p className="text-sm text-muted-foreground">SEO boosté par l'IA pour les TPE/PME</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#services" className="hover:text-foreground transition">Services</a></li>
                <li><a href="/#methode" className="hover:text-foreground transition">Méthode</a></li>
                <li><a href="/#guide" className="hover:text-foreground transition">Guide</a></li>
                <li><a href="/about" className="hover:text-foreground transition">À propos</a></li>
                <li><a href="/blog" className="hover:text-foreground transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">Consultant SEO & IA</p>
              <p className="text-sm text-muted-foreground">Pour les TPE/PME</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AIO - SEO boosté par l'IA. Tous droits réservés.</p>
            <p className="mt-2">Dernière mise à jour : 22 novembre 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
