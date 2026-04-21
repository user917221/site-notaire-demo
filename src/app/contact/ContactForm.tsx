"use client";

import { useActionState, useRef, useEffect } from "react";
import { Check, AlertCircle, Loader2 } from "lucide-react";
import { submitContact, type ContactState } from "./actions";

const SUJETS = [
  "Achat / vente immobilier",
  "Succession (règlement, partage)",
  "Donation / transmission",
  "Famille (mariage, PACS, divorce)",
  "Conseil patrimonial",
  "Succession internationale",
  "Actifs numériques",
  "Autre — précisez",
];

const initialState: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  // Reset le form et focus sur message de succès
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      successRef.current?.focus();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="bg-foreground text-background p-10 lg:p-12 outline-none"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 mb-8 border border-accent-light rounded-full text-accent-light">
          <Check size={24} aria-hidden="true" />
        </div>
        <p className="smallcaps text-[12px] tracking-[0.22em] text-accent-light mb-4">
          Message envoyé
        </p>
        <p className="font-serif text-2xl sm:text-3xl leading-tight text-background">
          {state.message}
        </p>
        <p className="mt-6 text-[14px] text-white/70 leading-relaxed max-w-md">
          Un email de confirmation vient de partir. Si vous ne le voyez pas
          apparaître d'ici quelques minutes, pensez à vérifier les spam ou
          appelez directement le secrétariat.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-8" aria-label="Formulaire de contact" noValidate>
      {/* Erreur globale */}
      {state.status === "error" && state.message && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 p-4 border-l-2 border-destructive bg-destructive/5 text-foreground text-[14px]"
          style={{ borderColor: "#B93626" }}
        >
          <AlertCircle size={18} style={{ color: "#B93626" }} className="shrink-0 mt-0.5" />
          <p>{state.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field
          label="Prénom"
          id="firstname"
          type="text"
          required
          error={state.errors?.firstname}
          autoComplete="given-name"
        />
        <Field
          label="Nom"
          id="lastname"
          type="text"
          required
          error={state.errors?.lastname}
          autoComplete="family-name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field
          label="Email"
          id="email"
          type="email"
          required
          error={state.errors?.email}
          autoComplete="email"
          inputMode="email"
        />
        <Field
          label="Téléphone"
          id="phone"
          type="tel"
          error={state.errors?.phone}
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      <div>
        <label
          htmlFor="sujet"
          className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
        >
          Sujet du rendez-vous <span aria-hidden="true">*</span>
        </label>
        <select
          id="sujet"
          name="sujet"
          required
          aria-invalid={Boolean(state.errors?.sujet)}
          aria-describedby={state.errors?.sujet ? "sujet-error" : undefined}
          className="w-full bg-transparent border-b border-border/60 py-3 text-foreground focus:border-accent focus:outline-none transition-colors text-[15px]"
        >
          <option value="">Choisir un sujet…</option>
          {SUJETS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {state.errors?.sujet && (
          <p id="sujet-error" role="alert" className="mt-2 text-[13px]" style={{ color: "#B93626" }}>
            {state.errors.sujet}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
        >
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Décrivez en quelques lignes votre situation ou votre projet."
          className="w-full bg-transparent border-b border-border/60 py-3 text-foreground focus:border-accent focus:outline-none transition-colors text-[15px] resize-none placeholder:text-muted/60"
        />
      </div>

      <fieldset>
        <legend className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-4">
          Format préféré
        </legend>
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex items-center gap-3 cursor-pointer text-[14px] text-foreground/80">
            <input
              type="radio"
              name="format"
              value="presentiel"
              defaultChecked
              className="accent-[var(--accent-text)]"
            />
            Présentiel à Lyon
          </label>
          <label className="flex items-center gap-3 cursor-pointer text-[14px] text-foreground/80">
            <input
              type="radio"
              name="format"
              value="visio"
              className="accent-[var(--accent-text)]"
            />
            Visioconférence
          </label>
          <label className="flex items-center gap-3 cursor-pointer text-[14px] text-foreground/80">
            <input
              type="radio"
              name="format"
              value="appel"
              className="accent-[var(--accent-text)]"
            />
            Appel téléphonique
          </label>
        </div>
      </fieldset>

      <div>
        <label className="flex items-start gap-3 cursor-pointer text-[13px] text-muted leading-relaxed">
          <input
            type="checkbox"
            name="rgpd"
            required
            aria-invalid={Boolean(state.errors?.rgpd)}
            aria-describedby={state.errors?.rgpd ? "rgpd-error" : undefined}
            className="mt-1 accent-[var(--accent-text)]"
          />
          <span>
            J'accepte que mes données soient traitées par l'étude pour répondre
            à ma demande, conformément au RGPD et à notre{" "}
            <a href="/mentions-legales#rgpd" className="link-editorial">
              politique de confidentialité
            </a>
            . <span aria-hidden="true">*</span>
          </span>
        </label>
        {state.errors?.rgpd && (
          <p id="rgpd-error" role="alert" className="mt-2 text-[13px]" style={{ color: "#B93626" }}>
            {state.errors.rgpd}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background text-[12px] uppercase tracking-[0.12em] hover:bg-accent-ink disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full sm:w-auto min-h-[52px]"
      >
        {pending ? (
          <>
            <Loader2 size={14} className="animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          <>Envoyer ma demande</>
        )}
      </button>

      <p className="text-[12px] text-muted/80 italic">
        Le secrétariat vous recontacte sous 24 h ouvrées.
      </p>
    </form>
  );
}

/**
 * Sous-composant pour un champ texte simple avec gestion d'erreur + ARIA.
 */
type FieldProps = {
  label: string;
  id: string;
  type: "text" | "email" | "tel";
  required?: boolean;
  error?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text";
};

function Field({
  label,
  id,
  type,
  required,
  error,
  autoComplete,
  inputMode,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={`w-full bg-transparent border-b py-3 text-foreground focus:outline-none transition-colors text-[15px] ${
          error ? "border-[#B93626]" : "border-border/60 focus:border-accent"
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[13px]" style={{ color: "#B93626" }}>
          {error}
        </p>
      )}
    </div>
  );
}
