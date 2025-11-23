import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, User, MessageSquare, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez entrer une adresse email valide");
      return;
    }

    setIsSubmitting(true);

    try {
      // Envoi via l'API backend avec Resend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      toast.success("✅ Message envoyé ! Nous vous recontactons sous 24h.");
      
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast.error("❌ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-border bg-background max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Mail className="w-6 h-6 text-primary" />
          Parlons de votre projet AIO
        </CardTitle>
        <CardDescription>
          Remplissez ce formulaire et je vous recontacterai dans les 24h pour discuter de vos besoins en SEO et IA.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Nom complet <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Jean Dupont"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email professionnel <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jean.dupont@entreprise.fr"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">
              Entreprise (optionnel)
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Nom de votre entreprise"
              value={formData.company}
              onChange={handleChange}
              className="border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Votre message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décrivez brièvement votre situation actuelle et vos objectifs en matière de SEO et IA..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="border-border resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Envoi en cours...</>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Envoyer ma demande
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            En soumettant ce formulaire, vous acceptez d'être recontacté concernant votre demande.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
