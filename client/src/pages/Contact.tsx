import ContactForm from "@/components/ContactForm";
import { CheckCircle2 } from "lucide-react";

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

          {/* Pourquoi me contacter */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Diagnostic gratuit</h3>
              <p className="text-sm text-muted-foreground">
                Premier échange pour comprendre votre situation et vos besoins
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Réponse rapide</h3>
              <p className="text-sm text-muted-foreground">
                Je vous recontacte sous 24h pour planifier un premier échange
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sans engagement</h3>
              <p className="text-sm text-muted-foreground">
                Aucune obligation, juste une discussion pour voir si je peux vous aider
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <ContactForm />

          {/* Autres moyens de contact */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Vous préférez un autre moyen de contact ?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:contact@punchyboost.com" 
                className="text-primary hover:underline"
              >
                contact@punchyboost.com
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="https://www.linkedin.com/in/christian-lyon66/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
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
            <p className="mt-2">Dernière mise à jour : 22 novembre 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
