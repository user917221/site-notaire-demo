"use client";

import { useEffect, useState } from "react";

/**
 * Easter egg Konami — déclenchement séquence ↑↑↓↓←→←→BA
 * OU mot-clé "code civil" tapé n'importe où.
 *
 * Affiche un message éditorial pleine page de l'étude,
 * stylé comme un cachet rouge "ENTRE NOUS" 5 secondes puis disparaît.
 */

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const KEYWORD = "code civil";

const QUOTES = [
  {
    body:
      "« Le notariat n'est pas conservateur par nature — il est conservatoire. C'est très différent. »",
    author: "Maître Sophie Vasseur, séminaire CSN, novembre 2025",
  },
  {
    body:
      "« Un acte authentique ne se mérite pas par la prudence — il se mérite par la clarté. »",
    author: "Manifeste de l'étude, article premier",
  },
  {
    body:
      "« Les vraies questions arrivent toujours après le café. Restez. »",
    author: "Tradition de l'étude, depuis 1987",
  },
];

export default function KonamiEasterEgg() {
  const [active, setActive] = useState(false);
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    let konamiIndex = 0;
    let typed = "";

    const trigger = () => {
      const random = QUOTES[Math.floor(Math.random() * QUOTES.length)];
      setQuote(random);
      setActive(true);
      setTimeout(() => setActive(false), 6500);
    };

    const onKey = (e: KeyboardEvent) => {
      // Konami sequence
      const key = e.key;
      if (key === KONAMI[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI.length) {
          trigger();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
        if (key === KONAMI[0]) konamiIndex = 1;
      }

      // Keyword "code civil"
      if (key.length === 1 && /[a-zA-Z ]/.test(key)) {
        typed = (typed + key.toLowerCase()).slice(-KEYWORD.length);
        if (typed === KEYWORD) {
          trigger();
          typed = "";
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!active) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[180] flex items-center justify-center bg-foreground/95 backdrop-blur-md animate-[fadeIn_0.5s_ease-out_both] cursor-pointer"
      onClick={() => setActive(false)}
    >
      {/* Cachet décoratif */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 w-[420px] h-[420px] border-2 border-accent-light/40 rounded-full"
        style={{
          transform: "translate(-50%, -50%) rotate(-8deg)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 w-[380px] h-[380px] border border-accent-light/20 rounded-full"
        style={{
          transform: "translate(-50%, -50%) rotate(4deg)",
          borderStyle: "dashed",
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-2xl px-8 text-center text-background">
        <p className="smallcaps text-[11px] tracking-[0.32em] text-accent-light mb-8">
          ✦ Entre nous ✦
        </p>
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[34px] tracking-[-0.005em] leading-[1.4] text-background italic">
          {quote.body}
        </blockquote>
        <p className="mt-10 text-[12px] uppercase tracking-[0.18em] text-background/60">
          — {quote.author}
        </p>
        <p className="mt-12 text-[10px] uppercase tracking-[0.32em] text-background/30">
          Cliquer pour fermer · auto-dismiss dans 6 s
        </p>
      </div>
    </div>
  );
}
