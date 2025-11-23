import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Briefcase, Award, Users } from "lucide-react";

export default function About() {
  const recommendations = [
    {
      author: "Jean-Luc RATIER",
      role: "Marketing Manager",
      text: "J'ai eu beaucoup de plaisir à travailler pendant plus d'un an avec Christian que je recommande chaudement. Il a développé une agilité toute particulière pour prompter en utilisant des IA très différentes. Cette compétence lui permet d'optimiser ses campagnes de prospection ou la mise en place de stratégies marketing originales et sur mesure. J'ai aussi fortement apprécié son état d'esprit pragmatique et sa convivialité. Vous pouvez compter sur Christian pour mener à bien vos projets, de manière efficace, rapide et fiable."
    },
    {
      author: "Jean Pierre Guyon",
      role: "Manager - WESAK PARIS",
      text: "Ce que j'ai apprécié chez Christian, c'est qu'il ne vend pas du rêve. Il commence par vraiment comprendre notre situation. Il prend le temps de la réflexion pour analyser en profondeur la structure et ses besoins, sans précipitation. Mais quand il passe à l'action, c'est immédiat et ça marche. Il a réussi pour Wesak à nous faire gagner en visibilité sur Google et à rendre notre production de contenu beaucoup plus efficace grâce à ses méthodes."
    },
    {
      author: "Theo Chapel",
      role: "Responsable Marketing & Croissance - FRYVY",
      text: "Christian est un aligneur : direction, vente, marketing—tout le monde regarde les mêmes chiffres et la même trajectoire. Sa force tranquille et son expérience transforment des briefs flous en résultats mesurables. Un senior qui sécurise les choix et délivre sereinement."
    },
    {
      author: "Victorien Vieux",
      role: "Consultant SEO & Automatisation",
      text: "Tout au long de notre challenge de prospection, tu as su mettre à profits ton expérience en marketing. Ta curiosité pour le digital et ton appétence pour les nouvelles technologies ont permis de te révéler sur des tâches où je ne m'attendais pas te voir exceller : scraping, création de base mail, maîtrise d'outils CRM et Automatisation."
    },
    {
      author: "Blandine Stintzy",
      role: "Formatrice & Scénariste",
      text: "Je recommande vivement Christian avec qui j'ai entamé ma stratégie webmarketing. Il s'attache à comprendre profondément mes besoins et ma spécificité, et à me proposer des solutions créatives. Il est toujours plein d'énergie, d'initiative et de créativité pour créer des contenus qui interpellent, tout en étant soucieux de l'efficacité de chaque action entreprise."
    },
    {
      author: "Emmanuel GUERIN",
      role: "Consultant Webmarketing & Google Ads",
      text: "Je recommande vivement Christian pour ses compétences exceptionnelles en growth hacking, copywriting, scraping et webmarketing. Sa compréhension approfondie des stratégies de croissance d'entreprises et sa capacité à les appliquer de manière innovante et efficace est impressionnante. Christian est un excellent communicant et collaborateur fiable, toujours prêt à partager ses connaissances."
    }
  ];

  const experiences = [
    {
      title: "Consultant SEO & IA générative",
      type: "Indépendant",
      period: "Janvier 2022 - Aujourd'hui (3 ans 11 mois)",
      location: "Paris, France - À distance",
      description: "Accompagnement de TPE/PME sur leurs projets de SEO et IA générative",
      highlights: [
        "Audits SEO (technique, contenu, cocon sémantique)",
        "Optimisation de pages & blogs (WordPress, CMS divers)",
        "Génération de contenus via IA (ChatGPT & Divers LLMs)",
        "Structuration de briefs, fiches produit, résumés automatisés",
        "Accompagnement client sur l'usage de l'IA au quotidien",
        "Création contenu SEO"
      ]
    },
    {
      title: "Responsable Marketing",
      type: "Alternance - CDD",
      period: "Octobre 2024 - Octobre 2025",
      location: "Croissy-Beaubourg, France",
      description: "Growth marketing dans le cadre de formation @rocketschoolparis",
      highlights: [
        "Prospection & Génération de leads (Outbound/Inbound)",
        "Analyse SEO & Création de contenus",
        "Stratégies marketing digital",
        "Prompt engineering"
      ]
    },
    {
      title: "Stratégies de Contenus",
      type: "Indépendant",
      period: "Juin 2023 - Octobre 2025",
      location: "À distance",
      description: "Gestion de projets marketing et création de contenus",
      highlights: [
        "Prospection leads & Gestion de campagne",
        "Scraping & Automatisations",
        "Gestion des réseaux sociaux et création de contenus",
        "Gestion de site internet WordPress",
        "Création de contenus vidéo et images",
        "Prompt engineering et utilisation d'IA"
      ]
    },
    {
      title: "Responsable Logistique, Administratif & Back Office",
      type: "Indépendant",
      period: "Janvier 2020 - Décembre 2023",
      location: "Hybride",
      description: "Gestion administrative et création de contenus beauté",
      highlights: [
        "Gestion site internet",
        "Gestion administrative (contrats, pitch deck, plaquettes)",
        "Créations de contenus beauté (QRCodes, Short Ads, Reels Instagram & TikTok)",
        "Gestion du stock"
      ]
    }
  ];

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
            <a href="/about" className="text-sm text-foreground font-semibold">À propos</a>
            <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition">Blog</a>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Mascotte */}
            <div className="flex-shrink-0">
              <img 
                src="/images/CaricatureChL.png" 
                alt="Christian Lyon - Consultant SEO & IA" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
            
            {/* Texte */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Christian Lyon
              </h1>
              <p className="text-2xl text-primary font-semibold mb-6">
                Consultant en marketing digital, spécialisé en SEO et IA générative
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                J'aide les TPE/PME à améliorer leur visibilité en ligne, accélérer leur production de contenus et structurer leurs livrables SEO & IA.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bg-muted/50 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-8">Mon approche</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Ce que je fais</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Audits SEO</strong> (technique, contenu, autorité, structure, intentions de recherche)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Optimisation de contenus</strong> existants (articles, pages, fiches produits…)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Conception de prompts</strong> sur-mesure (ChatGPT & divers LLMs)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Mise en place de processus</strong> de contenu : briefs, fiches produit, résumés automatisables, calendrier éditorial</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Rédaction assistée par IA</strong> : articles, pages clés, briefs… pour générer des brouillons pertinents tout en gardant votre ton et votre expertise</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Accompagnement aux outils IA</strong> & structuration marketing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Ma méthode</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">1. Un diagnostic structuré</h4>
                    <p className="text-muted-foreground text-sm">Pour comprendre vos offres, vos cibles, vos contenus existants et vos ressources.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2. Un plan d'action adapté</h4>
                    <p className="text-muted-foreground text-sm">SEO + contenu + IA, pensé pour votre contexte (pas un modèle générique).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">3. Des livrables clairs</h4>
                    <p className="text-muted-foreground text-sm">Exploitables, livrés vite. Pas de jargon inutile.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">4. Une approche orientée résultats</h4>
                    <p className="text-muted-foreground text-sm">Autonomie client & suivi à la demande.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-foreground mb-12">Expérience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border bg-background hover:border-primary/50 transition">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <p className="text-muted-foreground flex gap-2 flex-wrap">
                        <span className="font-semibold">{exp.type}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </p>
                    </div>
                    <Briefcase className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="bg-muted/50 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-4">Recommandations</h2>
            <p className="text-lg text-muted-foreground mb-12">Ce que mes clients et collègues disent de moi</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-4">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-lg">{rec.author}</CardTitle>
                        <p className="text-sm text-muted-foreground">{rec.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{rec.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-foreground mb-12">Outils & Compétences</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Outils utilisés</h3>
              <div className="flex flex-wrap gap-3">
                {["ChatGPT", "Semrush", "Google Search Console", "Google Sheets", "WordPress", "Notion", "Make", "Airtable", "Lemlist", "Walaxy", "Hubspot"].map((tool) => (
                  <span key={tool} className="bg-primary/10 border border-primary/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Domaines de compétence</h3>
              <ul className="space-y-3">
                {[
                  "SEO technique & contenu",
                  "IA générative & Prompt Engineering",
                  "Growth Marketing & Prospection",
                  "Création de contenus",
                  "Automatisation marketing",
                  "Stratégie digitale",
                  "Copywriting",
                  "Scraping & Data"
                ].map((skill) => (
                  <li key={skill} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Prêt à collaborer ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Je suis actuellement disponible en freelance pour accompagner les TPE/PME sur leurs projets de SEO et IA générative. Parlons de votre projet.
            </p>
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90" asChild>
              <a href="/contact">Parler de votre projet</a>
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
                <li><a href="/" className="hover:text-foreground transition">Accueil</a></li>
                <li><a href="/#services" className="hover:text-foreground transition">Services</a></li>
                <li><a href="/about" className="hover:text-foreground transition">À propos</a></li>
                <li><a href="/#contact" className="hover:text-foreground transition">Contact</a></li>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
"Fix menu and CTA button"
