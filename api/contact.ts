import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Autoriser uniquement POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  try {
    const { name, email, company, message } = req.body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: "Les champs nom, email et message sont obligatoires" 
      });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: "L'adresse email n'est pas valide" 
      });
    }

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: "AIO - Contact <contact@punchyboost.com>",
      to: ["lyon.christian@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande de contact AIO - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouvelle demande de contact</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message :</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Cette demande a été envoyée depuis le formulaire de contact du site AIO.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return res.status(500).json({ 
        error: "Erreur lors de l'envoi de l'email" 
      });
    }

    console.log("Email envoyé avec succès:", data);
    return res.status(200).json({ 
      success: true, 
      message: "Votre message a été envoyé avec succès !" 
    });

  } catch (error) {
    console.error("Erreur serveur:", error);
    return res.status(500).json({ 
      error: "Une erreur est survenue lors de l'envoi du message" 
    });
  }
}
