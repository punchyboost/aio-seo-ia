import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
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
            <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition">Blog</a>
            <a href="/contact" className="text-sm text-foreground font-semibold">Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discutons de votre projet AIO
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vous êtes une TPE/PME et vous souhaitez améliorer votre SEO grâce à l'IA ? 
              Je suis là pour vous accompagner.
            </p>
          </div>

          {/* Contact direct */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contactez-moi directement
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:contact@punchyboost.com"
                  className="flex items-center justify-center gap-3 text-lg text-primary hover:text-primary/80 transition group"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition" />
                  <span className="font-semibold">contact@punchyboost.com</span>
                </a>

                <div className="text-muted-foreground">ou</div>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/christian-lyon66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-lg text-primary hover:text-primary/80 transition group"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-muted-foreground">
                  Je vous réponds sous 24h pour discuter de vos besoins en SEO et IA.
                </p>
              </div>
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
            <p className="mt-2">Dernière mise à jour : 23 novembre 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
