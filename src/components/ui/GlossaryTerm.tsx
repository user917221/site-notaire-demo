"use client";

import { useState, type ReactNode } from "react";
import { findTerm, type GlossaryEntry } from "@/lib/glossary";

/**
 * Mot juridique souligné pointillé qui révèle un tooltip avec définition au hover/focus.
 *
 * Usage :
 *   <GlossaryTerm term="acte authentique">acte authentique</GlossaryTerm>
 *   <GlossaryTerm term="VEFA" /> (utilise term comme contenu si pas de children)
 */

interface GlossaryTermProps {
  term: string;
  children?: ReactNode;
  className?: string;
}

export default function GlossaryTerm({
  term,
  children,
  className = "",
}: GlossaryTermProps) {
  const [open, setOpen] = useState(false);
  const entry: GlossaryEntry | null = findTerm(term);

  if (!entry) {
    // Si terme introuvable, on rend juste le contenu sans tooltip
    return <>{children ?? term}</>;
  }

  return (
    <span
      className={`glossary-term ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      role="button"
      aria-label={`Définition : ${entry.term}`}
    >
      {children ?? entry.term}
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 -translate-y-full mt-[-12px] z-50 w-72 p-4 bg-foreground text-background text-[13px] leading-relaxed not-italic font-sans shadow-2xl pointer-events-none animate-[fadeIn_0.2s_ease-out_both]"
          style={{ top: 0 }}
        >
          <span className="block font-serif text-accent-light text-[11px] uppercase tracking-[0.18em] mb-2">
            {entry.term}
          </span>
          <span className="block">{entry.short}</span>
          {/* Petite flèche */}
          <span
            aria-hidden="true"
            className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"
          />
        </span>
      )}
    </span>
  );
}
