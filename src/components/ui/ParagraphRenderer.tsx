import { type ReactNode, Fragment } from "react";
import GlossaryTerm from "@/components/ui/GlossaryTerm";

/**
 * Rendu d'un paragraphe avec termes du glossaire automatiquement soulignés.
 * Recherche case-insensitive, conserve la casse d'origine dans l'affichage.
 *
 * Pas de re-wrap si le terme apparaît dans une chaîne déjà wrappée.
 */

export function renderParagraph(
  text: string,
  glossaryTerms: string[]
): ReactNode {
  if (glossaryTerms.length === 0) return text;

  // Trier par longueur décroissante pour matcher les plus longs d'abord
  const sortedTerms = [...glossaryTerms].sort((a, b) => b.length - a.length);

  // Construire un regex group pour tous les termes
  const escaped = sortedTerms.map((t) =>
    t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`\\b(${escaped.join("|")})\\b`, "gi");

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  // Track first occurrence per term (only wrap first instance)
  const wrapped = new Set<string>();

  while ((match = pattern.exec(text)) !== null) {
    const matched = match[0];
    const matchedLower = matched.toLowerCase();
    const start = match.index;
    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }
    if (!wrapped.has(matchedLower)) {
      // Trouver le terme original (préserver case définition)
      const originalTerm = sortedTerms.find(
        (t) => t.toLowerCase() === matchedLower
      ) ?? matched;
      parts.push(
        <GlossaryTerm key={`g-${key++}`} term={originalTerm}>
          {matched}
        </GlossaryTerm>
      );
      wrapped.add(matchedLower);
    } else {
      parts.push(matched);
    }
    lastIndex = start + matched.length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  );
}
