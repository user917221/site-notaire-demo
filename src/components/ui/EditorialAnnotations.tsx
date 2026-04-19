"use client";

import { type ReactNode } from "react";

/**
 * Pull quote — citation typographique en marge ou en bloc.
 * Variante `float` flotte à gauche dans la marge sur desktop, sinon bloc centré.
 */

interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
  variant?: "block" | "marge";
  className?: string;
}

export function PullQuote({
  children,
  attribution,
  variant = "marge",
  className = "",
}: PullQuoteProps) {
  return (
    <aside
      className={`pull-quote ${variant === "marge" ? "float-marge" : ""} ${className}`}
    >
      <span className="block">{children}</span>
      {attribution && (
        <span className="block mt-3 text-[11px] uppercase tracking-[0.18em] text-muted not-italic">
          — {attribution}
        </span>
      )}
    </aside>
  );
}

/**
 * Sidenote Tufte — annotation en marge droite.
 * Numéroté avec marker romain ou simple, lié visuellement au paragraphe.
 *
 * Sur mobile : se replie en disclosure inline cliquable.
 */

interface SidenoteProps {
  marker?: string; // "i", "ii", "iii"... ou "1", "2", "3"
  children: ReactNode;
  variant?: "inline" | "marge";
  className?: string;
}

export function Sidenote({
  marker,
  children,
  variant = "marge",
  className = "",
}: SidenoteProps) {
  return (
    <>
      {/* Marker en flux normal */}
      {marker && (
        <span className="sidenote-marker" aria-hidden="true">
          {marker}
        </span>
      )}
      {/* Sidenote en marge desktop, sous le paragraphe mobile */}
      <aside
        className={`sidenote ${variant === "marge" ? "float-right" : ""} ${className}`}
      >
        {marker && (
          <span className="text-accent font-serif italic mr-1.5">{marker}</span>
        )}
        {children}
      </aside>
    </>
  );
}
