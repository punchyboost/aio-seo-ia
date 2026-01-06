import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
        <Button asChild>
          <Link href="/blog">Retour au blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        {post.keywords && <meta name="keywords" content={post.keywords} />}
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Punchyboost" />
        <meta property="article:section" content={post.category} />
      </Helmet>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition">AIO</Link>
          <div className="flex gap-6">
            <Link href="/blog" className="text-sm font-medium flex items-center gap-2 hover:text-primary transition">
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <article className="container max-w-3xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Par Punchyboost</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-border
              prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-primary/90
              prose-p:leading-loose prose-p:mb-8 prose-p:text-lg prose-p:text-muted-foreground
              prose-ul:my-8 prose-li:mb-4 prose-li:text-lg prose-li:text-muted-foreground
              prose-ol:my-8 prose-ol:mb-4 prose-ol:text-lg prose-ol:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-bold
              prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-primary/80 transition-colors
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-muted-foreground prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: post.content || "<p>Contenu en cours de rédaction...</p>" }}
          />

          {/* Share / CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="bg-muted/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Vous avez aimé cet article ?</h3>
              <p className="text-muted-foreground mb-6">
                Abonnez-vous pour recevoir nos prochains guides sur l'AIO et le SEO.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Partager
                </Button>
                <Button asChild>
                  <a href="https://prise-de-contact.lovable.app/" target="_blank" rel="noopener noreferrer">
                    Me contacter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Punchyboost - AIO SEO boosté par l'IA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
