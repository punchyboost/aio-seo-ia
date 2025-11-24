import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, TrendingUp, Brain, FileText } from "lucide-react";
import { APP_TITLE } from "@/const";


export default function Home() {


  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Structured Data - Article */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "AIO : SEO boosté par l'IA pour les TPE/PME",
          "description": "L'AIO (Artificial Intelligence Optimization), c'est du SEO boosté par l'IA. J'aide les TPE/PME à structurer un SEO + contenu + IA qui génère plus de trafic qualifié et de demandes entrantes.",
          "author": {
            "@type": "Person",
            "name": "Consultant SEO & IA"
          },
          "datePublished": "2024-11-22",
          "dateModified": "2024-11-22"
        })}
      </script>

      {/* Structured Data - HowTo */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Comment mettre en place l'AIO dans votre entreprise",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Diagnostic structuré",
              "text": "Analyse de vos offres, cibles, contenus existants et ressources"
            },
            {
              "@type": "HowToStep",
              "name": "Plan d'action SEO + IA",
              "text": "Définition des priorités, identification des requêtes cibles, architecture de contenus"
            },
            {
              "@type": "HowToStep",
              "name": "Mise en place opérationnelle",
              "text": "Optimisation des pages, création de contenus, conception de prompts IA"
            },
            {
              "@type": "HowToStep",
              "name": "Suivi et autonomie",
              "text": "Suivi des indicateurs, ajustements, transmission des méthodes"
            }
          ]
        })}
      </script>

      {/* Structured Data - FAQPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qu'est-ce que l'AIO (Artificial Intelligence Optimization) ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'AIO est une approche qui combine les fondations du SEO classique avec une utilisation structurée de l'IA générative pour produire, organiser et renforcer vos contenus."
              }
            },
            {
              "@type": "Question",
              "name": "Pourquoi l'AIO est important pour les TPE/PME ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'AIO permet de poser une stratégie réaliste, accélérer la production avec l'IA, améliorer la lisibilité pour Google et les IA, et faire exister votre marque dans un paysage où les réponses sont de plus en plus générées."
              }
            }
          ]
        })}
      </script>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition">AIO</a>
          <div className="flex gap-6">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">Services</a>
            <a href="#methode" className="text-sm text-muted-foreground hover:text-foreground transition">Méthode</a>
            <a href="#guide" className="text-sm text-muted-foreground hover:text-foreground transition">Guide</a>
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">À propos</a>
            <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition">Blog</a>
            <a href="https://prise-de-contact.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              AIO : un SEO boosté par l'IA pour les TPE/PME
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              L'AIO (Artificial Intelligence Optimization) est la continuité naturelle du SEO : des contenus pensés à la fois pour Google et pour les IA génératives comme ChatGPT, Perplexity et Gemini.
            </p>
            <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
              <p className="font-semibold text-foreground mb-3">Vous avez déjà un site, parfois des contenus, mais peu de résultats.</p>
              <p className="text-muted-foreground">J'aide les TPE/PME à transformer leur SEO et leurs contenus grâce à l'IA pour générer plus de trafic qualifié et des demandes entrantes pertinentes.</p>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Prioriser les bons sujets au lieu de publier au hasard</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Produire des contenus plus vite, sans sacrifier la qualité</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Rendre votre site lisible par Google et par les IA génératives</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="https://prise-de-contact.lovable.app/" target="_blank" rel="noopener noreferrer">Parler de votre projet AIO</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#guide">Découvrir comment fonctionne l'AIO</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-muted/50 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ce que je fais pour votre SEO, vos contenus et l'IA</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Consultant en marketing digital spécialisé en SEO et IA générative, j'aide les TPE/PME à améliorer leur visibilité en ligne et accélérer leur production de contenus.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Audits SEO
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Analyse technique, contenu, autorité, structure et intentions de recherche pour identifier les opportunités d'amélioration.
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Optimisation de contenus
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Amélioration d'articles, pages et fiches produits existants pour mieux répondre aux questions des utilisateurs.
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    Conception de prompts IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Création de prompts sur-mesure pour ChatGPT et autres LLMs adaptés à vos cas d'usage spécifiques.
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Processus de contenu
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Mise en place de workflows documentés et reproductibles : briefs, fiches produits, calendriers éditoriaux.
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-foreground font-semibold">
                L'AIO (Artificial Intelligence Optimization), c'est du SEO boosté par l'IA : des contenus pensés pour être compris par Google et recommandés par des IA génératives comme ChatGPT.
              </p>
            </div>
          </div>
        </section>

        {/* For Whom Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-foreground mb-12">Pour quelles TPE/PME l'AIO est vraiment utile ?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Les contextes dans lesquels j'apporte le plus de valeur</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">TPE/PME avec un site déjà en ligne, mais peu ou pas de trafic qualifié</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Structures qui publient déjà des contenus sans voir de retombées claires</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Dirigeants ou responsables marketing qui veulent utiliser l'IA autrement que comme un simple "gadget de rédaction"</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Pourquoi l'AIO est stratégique</h3>
              <p className="text-muted-foreground mb-4">
                Une TPE/PME dispose rarement de plusieurs rédacteurs, d'un SEO à temps plein ou d'un responsable IA en interne.
              </p>
              <p className="text-muted-foreground">
                L'AIO permet de poser une stratégie réaliste, accélérer la production avec l'IA, améliorer la lisibilité pour Google et les IA, et faire exister votre marque dans un paysage où les réponses sont de plus en plus générées.
              </p>
            </div>
          </div>
        </section>

        {/* Method Section */}
        <section id="methode" className="bg-muted/50 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12">Comment je mets en place l'AIO dans votre entreprise</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Diagnostic structuré",
                  items: [
                    "Analyse de vos offres et cibles",
                    "Cartographie de vos contenus",
                    "Évaluation du SEO actuel",
                    "Inventaire de vos ressources"
                  ]
                },
                {
                  step: "2",
                  title: "Plan d'action SEO + IA",
                  items: [
                    "Définition des priorités",
                    "Identification des requêtes cibles",
                    "Architecture de contenus",
                    "Décisions stratégiques"
                  ]
                },
                {
                  step: "3",
                  title: "Mise en place opérationnelle",
                  items: [
                    "Optimisation des pages existantes",
                    "Création de nouveaux contenus",
                    "Conception de prompts IA",
                    "Processus documentés"
                  ]
                },
                {
                  step: "4",
                  title: "Suivi et autonomie",
                  items: [
                    "Suivi des indicateurs clés",
                    "Ajustements basés sur résultats",
                    "Transmission des méthodes",
                    "Autonomie progressive"
                  ]
                }
              ].map((phase) => (
                <Card key={phase.step} className="border-border bg-background relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {phase.step}
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Section - Comprendre l'AIO */}
        <section id="guide" className="container max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-foreground mb-8">Qu'est-ce que l'AIO (Artificial Intelligence Optimization) ?</h2>
          
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              L'AIO est une approche qui combine les fondations du SEO classique (technique, contenu, popularité) avec une utilisation structurée de l'IA générative pour produire, organiser et renforcer vos contenus. L'idée n'est pas de remplacer le SEO par l'IA, mais de rendre vos contenus plus clairs, plus structurés et plus faciles à réutiliser par Google comme par les IA génératives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Pourquoi l'AIO est stratégique pour les TPE/PME ?</h3>
              <p className="text-muted-foreground mb-4">
                Une TPE/PME dispose rarement de plusieurs rédacteurs, d'un SEO à temps plein ou d'un responsable IA en interne. Résultat : le site est là, mais sous-utilisé, les contenus sont publiés de façon opportuniste, l'IA est souvent testée "en vrac", sans cadre ni process.
              </p>
              <p className="text-muted-foreground">
                L'AIO permet de poser une stratégie de contenus réaliste, accélérer la production avec l'IA dans un cadre maîtrisé, améliorer la lisibilité de vos pages pour Google et les IA, et faire exister votre marque dans un paysage où les réponses sont de plus en plus générées.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Prérequis : avoir un socle SEO propre</h3>
              <p className="text-muted-foreground mb-4 font-semibold">Avant de penser IA, votre site doit cocher les cases de base :</p>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span><strong>Indexable :</strong> Vos pages importantes doivent être indexées, pas de noindex sur vos contenus clés</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span><strong>Technique :</strong> HTTPS, temps de chargement raisonnable, responsive, Core Web Vitals acceptables</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span><strong>Contenu :</strong> Pas de contenu généré massivement sans valeur, pas de duplication inutile</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Identifier les requêtes qui déclenchent un AI Overview</h3>
            <p className="text-muted-foreground mb-4">
              On ne peut pas optimiser "pour AI Overview" sans savoir où il apparaît. Vous devez cartographier vos requêtes AIO :
            </p>
            <ol className="space-y-3 text-muted-foreground text-sm list-decimal list-inside">
              <li>Lister vos requêtes importantes (questions fréquentes, comparatifs, "comment choisir…")</li>
              <li>Pour chaque requête, vérifier sur google.com si un AI Overview apparaît</li>
              <li>Noter quelles pages sont déjà citées / bien positionnées</li>
              <li>Structurer dans un tableau : Mot-clé | Intent | AI Overview ? | Page ciblée | Position</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Structurer vos contenus pour les IA (pages LLM-friendly)</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-2">Une réponse courte dès le début</p>
                  <p className="text-sm">Commencez par une définition ou réponse directe en 2-3 phrases.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Des H2/H3 sous forme de questions</p>
                  <p className="text-sm">Les IA scannent les titres. Utilisez des questions pour vos H2/H3.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Un format skimmable</p>
                  <p className="text-sm">Listes à puces, tableaux, paragraphes courts (3-4 lignes max).</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Un langage simple et précis</p>
                  <p className="text-sm">Évitez le jargon. Soyez direct et accessible.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Montrer votre expertise : E-E-A-T pour TPE/PME</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-2">Expertise</p>
                  <p className="text-sm">Bio détaillée, certifications, formations pertinentes.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Expérience</p>
                  <p className="text-sm">Cas clients (même anonymes), résultats concrets.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Autorité</p>
                  <p className="text-sm">Liens vers vos publications externes, mentions de votre marque.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Trustworthiness</p>
                  <p className="text-sm">Contact clair, témoignages, garanties, transparence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section id="contact" className="container max-w-6xl mx-auto px-4 py-20">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Et si votre SEO passait enfin en mode AIO ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Si vous êtes une TPE/PME avec un site déjà en ligne et l'impression de ne pas en tirer tout son potentiel, l'AIO est probablement le bon cadre pour remettre de l'ordre dans vos contenus, votre SEO et vos usages de l'IA.
            </p>
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90" asChild>
              <a href="https://prise-de-contact.lovable.app/" target="_blank" rel="noopener noreferrer">Parler de votre projet AIO</a>
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
                <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
                <li><a href="#methode" className="hover:text-foreground transition">Méthode</a></li>
                <li><a href="#guide" className="hover:text-foreground transition">Guide</a></li>
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
            <p>&copy; {new Date().getFullYear()} Punchyboost - AIO SEO boosté par l'IA. Tous droits réservés.</p>
            <p className="mt-2">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <div className="mt-4 flex gap-4 justify-center">
              <a href="/mentions-legales" className="hover:text-foreground transition">Mentions légales</a>
              <span>•</span>
              <a href="/politique-confidentialite" className="hover:text-foreground transition">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
