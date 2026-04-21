"use server";

/**
 * Server Action pour le formulaire de contact.
 *
 * ⚠️ DÉMO : log console uniquement.
 * Pour brancher en production, remplacer par :
 *   - Resend : https://resend.com/docs/send-with-nextjs
 *   - Ou n'importe quel service d'envoi d'email (SendGrid, Postmark, Mailgun)
 *   - Ou une webhook interne (Slack, Discord, CRM)
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<string, string>>;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const firstname = String(formData.get("firstname") ?? "").trim();
  const lastname = String(formData.get("lastname") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const sujet = String(formData.get("sujet") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const format = String(formData.get("format") ?? "presentiel");
  const rgpd = formData.get("rgpd");

  // Validation serveur
  const errors: Record<string, string> = {};
  if (!firstname) errors.firstname = "Prénom requis";
  if (!lastname) errors.lastname = "Nom requis";
  if (!email) errors.email = "Email requis";
  else if (!isEmail(email)) errors.email = "Format email invalide";
  if (!sujet) errors.sujet = "Sélectionnez un sujet";
  if (!rgpd) errors.rgpd = "Consentement RGPD requis";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Merci de corriger les champs indiqués.",
      errors,
    };
  }

  // TODO (production) : envoi du mail via Resend
  // Exemple :
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "contact@var-notaires.fr",
  //     to: "contact@var-notaires.fr",
  //     replyTo: email,
  //     subject: `[Contact] ${sujet} — ${firstname} ${lastname}`,
  //     text: `${firstname} ${lastname}\n${email} · ${phone}\nFormat : ${format}\n\n${message}`,
  //   });

  // Pour la démo — log serveur
  // eslint-disable-next-line no-console
  console.log("[ContactForm]", {
    firstname,
    lastname,
    email,
    phone,
    sujet,
    message,
    format,
  });

  // Simuler un petit délai réseau
  await new Promise((r) => setTimeout(r, 500));

  return {
    status: "success",
    message: `Merci ${firstname}. Votre demande a bien été reçue — le secrétariat vous recontacte sous 24 h ouvrées.`,
  };
}
