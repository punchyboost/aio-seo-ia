import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Types pour les articles
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

// Articles de démonstration - à remplacer par une vraie source de données
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Qu'est-ce que l'AIO et pourquoi c'est important en 2024 ?",
    excerpt: "L'AIO (Artificial Intelligence Optimization) représente l'évolution naturelle du SEO. Découvrez comment optimiser vos contenus pour Google et les IA génératives.",
    category: "AIO",
    date: "22 novembre 2024",
    readTime: "5 min",
    slug: "quest-ce-que-aio-2024"
  },
  {
    id: "2",
    title: "Comment structurer vos contenus pour les AI Overviews de Google",
    excerpt: "Les AI Overviews changent la donne en SEO. Apprenez à structurer vos pages pour être cité par Google dans ses réponses générées par IA.",
    category: "SEO",
    date: "20 novembre 2024",
    readTime: "7 min",
    slug: "structurer-contenus-ai-overviews"
  },
  {
    id: "3",
    title: "E-E-A-T : Comment renforcer votre crédibilité pour les IA",
    excerpt: "Expertise, Expérience, Autorité, Trustworthiness : les 4 piliers pour être cité par les IA génératives. Guide pratique pour les TPE/PME.",
    category: "E-E-A-T",
    date: "18 novembre 2024",
    readTime: "6 min",
    slug: "eeat-credibilite-ia"
  },
  {
    id: "4",
    title: "Données structurées Schema.org : Le guide complet pour l'AIO",
    excerpt: "Les données structurées sont essentielles pour que les IA comprennent votre contenu. Découvrez quels schémas utiliser et comment les implémenter.",
    category: "Technique",
    date: "15 novembre 2024",
    readTime: "10 min",
    slug: "donnees-structurees-schema-org"
  },
  {
    id: "5",
    title: "ChatGPT et SEO : Comment utiliser l'IA pour votre stratégie de contenu",
    excerpt: "L'IA générative peut accélérer votre production de contenu sans sacrifier la qualité. Méthodes et prompts pour une utilisation efficace.",
    category: "IA Générative",
    date: "12 novembre 2024",
    readTime: "8 min",
    slug: "chatgpt-strategie-contenu-seo"
  },
  {
    id: "6",
    title: "Identifier les requêtes qui déclenchent un AI Overview",
    excerpt: "Toutes les requêtes ne génèrent pas d'AI Overview. Apprenez à cartographier vos opportunités et à prioriser vos efforts SEO.",
    category: "AIO",
    date: "10 novembre 2024",
    readTime: "5 min",
    slug: "identifier-requetes-ai-overview"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition">AIO</a>
          <div className="flex gap-6">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Accueil</a>
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition">Services</a>
            <a href="/#methode" className="text-sm text-muted-foreground hover:text-foreground transition">Méthode</a>
            <a href="/#guide" className="text-sm text-muted-foreground hover:text-foreground transition">Guide</a>
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">À propos</a>
            <a href="/blog" className="text-sm text-foreground font-semibold">Blog</a>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Blog AIO & SEO
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Guides pratiques, analyses et conseils pour optimiser votre SEO avec l'IA générative
            </p>
          </div>

          {/* Filtres (optionnel pour plus tard) */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition">
              Tous les articles
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition">
              AIO
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition">
              SEO
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition">
              IA Générative
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition">
              Technique
            </Badge>
          </div>

          {/* Liste des articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-border bg-background hover:border-primary/50 transition group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition">
                    <a href={`/blog/${post.slug}`}>
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition" asChild>
                    <a href={`/blog/${post.slug}`}>
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Message pour les futurs articles */}
          <div className="mt-16 text-center bg-muted/50 rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Plus d'articles à venir
            </h3>
            <p className="text-muted-foreground mb-6">
              Je publie régulièrement de nouveaux guides sur l'AIO, le SEO et l'IA générative. 
              Inscrivez-vous pour être notifié des nouveaux articles.
            </p>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Me contacter pour en savoir plus</a>
            </Button>
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
"Fix menu on Blog page"
