import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Redirection automatique vers la landing page Lovable
    window.location.href = "https://prise-de-contact.lovable.app/";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Redirection en cours...
        </h1>
        <p className="text-muted-foreground">
          Vous allez être redirigé vers notre formulaire de contact.
        </p>
      </div>
    </div>
  );
}
