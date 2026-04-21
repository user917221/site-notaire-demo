"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Section pinned scroll — pattern Awwwards (Locomotive / Active Theory).
 *
 * Le titre + counter restent fixes pendant que l'utilisateur scrolle.
 * Les 4 étapes de la méthode notariale cross-fade au défilement.
 * Section haute = STEPS.length × 100vh, contenu inner sticky top-0.
 */

const STEPS = [
  {
    num: "01",
    title: "Premier rendez-vous",
    duration: "30 minutes · offert",
    body:
      "Vous nous exposez votre projet. Nous écoutons, posons quelques questions, identifions les angles juridiques pertinents. Aucune obligation à ce stade — c'est un cadrage, pas un mandat.",
    cue: "Le secrétariat propose plusieurs créneaux sous 24 h ouvrées.",
  },
  {
    num: "02",
    title: "Étude du dossier",
    duration: "1 à 4 semaines selon complexité",
    body:
      "Nous instruisons le dossier — rassemblement des pièces, vérifications cadastrales, contrôles fiscaux, recherches successorales. Un seul interlocuteur, le notaire référent, vous tient informé à chaque étape.",
    cue: "Devis ferme transmis avant lancement des travaux.",
  },
  {
    num: "03",
    title: "Rédaction de l'acte",
    duration: "2 à 6 semaines",
    body:
      "Le projet d'acte est rédigé, relu collégialement, soumis à votre validation. Chaque clause est expliquée — vous comprenez ce que vous signez. Modifications possibles jusqu'à la signature.",
    cue: "Le notaire référent reste joignable directement.",
  },
  {
    num: "04",
    title: "Signature & remise",
    duration: "Le jour J, en l'étude ou à distance",
    body:
      "Lecture de l'acte, signature physique ou électronique qualifiée (eIDAS). Force exécutoire immédiate. Copie authentique remise sous quelques jours, conservation perpétuelle au minutier de l'étude.",
    cue: "Suivi post-signature inclus pendant 12 mois.",
  },
];

export default function PinnedMethode() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalScroll));
      setProgress(p);
      // Distribute over STEPS, with a tiny lead so transitions feel earned
      const idx = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 1.02));
      setActiveIndex(idx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--surface-2)] text-white"
      style={{ height: `${STEPS.length * 100}vh` }}
      aria-label="Notre méthode"
    >
      {/* Inner sticky : tient le viewport pendant que le wrapper scroll */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Col gauche — sticky title + counter */}
          <div className="lg:col-span-5">
            <p className="smallcaps text-[12px] tracking-[0.28em] text-accent-light mb-8">
              Notre méthode
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-white">
              De la première écoute
              <span className="block italic text-white/70 mt-2">
                à l'acte signé.
              </span>
            </h2>
            <p className="mt-10 text-base text-white/70 leading-relaxed max-w-md">
              Quatre étapes. Un seul interlocuteur référent par dossier.
              Aucune surprise — ni sur les délais, ni sur les coûts.
            </p>

            {/* Counter + progress bar */}
            <div className="mt-16 flex items-center gap-6">
              <p className="font-serif text-3xl text-accent-light tabular tracking-[-0.02em]">
                <span className="text-white">{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="text-white/40 mx-2">/</span>
                <span>{String(STEPS.length).padStart(2, "0")}</span>
              </p>
              <div className="flex-1 h-px bg-white/15 relative overflow-hidden max-w-[200px]">
                <span
                  className="absolute inset-y-0 left-0 bg-accent-light"
                  style={{
                    width: `${(activeIndex + 1) * (100 / STEPS.length)}%`,
                    transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Col droite — contenu cross-fade par étape */}
          <div className="lg:col-span-6 lg:col-start-7 relative min-h-[400px] lg:min-h-[500px]">
            {STEPS.map((step, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              return (
                <article
                  key={step.num}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translate3d(0, 0, 0)"
                      : isPast
                        ? "translate3d(0, -32px, 0)"
                        : "translate3d(0, 32px, 0)",
                    transition:
                      "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  aria-hidden={!isActive}
                >
                  <span
                    className="font-serif text-[120px] sm:text-[160px] lg:text-[200px] leading-none text-accent-light/15 tabular tracking-[-0.04em] absolute -top-8 -left-4 select-none"
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <div className="relative">
                    <p className="smallcaps text-[11px] tracking-[0.22em] text-accent-light mb-4">
                      Étape {step.num}
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[-0.015em] leading-[1.1] text-white mb-6">
                      {step.title}
                    </h3>
                    <p className="smallcaps text-[11px] tracking-[0.18em] text-white/50 mb-8">
                      {step.duration}
                    </p>
                    <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-10">
                      {step.body}
                    </p>
                    <p className="text-[13px] italic text-white/60 leading-relaxed border-l-2 border-accent-light/40 pl-4">
                      {step.cue}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Scroll hint en bas */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-white/30 pointer-events-none"
          style={{
            opacity: progress < 0.95 ? 1 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        >
          Continuer le scroll
        </div>
      </div>
    </section>
  );
}
