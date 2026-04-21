"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

/**
 * Stats band avec counter animation au scroll.
 * Les valeurs numériques sont extraites et animées 0 → target.
 * Les valeurs non-numériques (ex: "4") sont rendues directement.
 */

function parseValue(str: string): { prefix: string; number: number; suffix: string } | null {
  // Ex: "1 850+" → {prefix: "", number: 1850, suffix: "+"}
  // Ex: "3" → {prefix: "", number: 3, suffix: ""}
  // Ex: "15" → {prefix: "", number: 15, suffix: ""}
  const cleaned = str.replace(/\s/g, "");
  const match = cleaned.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    number: parseInt(match[2], 10),
    suffix: match[3],
  };
}

function formatNumber(n: number): string {
  // Format avec espaces comme milliers (FR)
  return n.toLocaleString("fr-FR").replace(/,/g, " ");
}

function useCounter(target: number, duration = 1400, start = false): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    // Respecter reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function StatItem({ value, label, delay, visible, emphasis }: { value: string; label: string; delay: number; visible: boolean; emphasis?: boolean }) {
  const parsed = parseValue(value);
  const counter = useCounter(parsed?.number ?? 0, 1400, visible);

  return (
    <div
      className="text-center border-l border-border/60 first:border-l-0 lg:px-4 opacity-0"
      style={{
        animation: visible
          ? `fadeInUpHero 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s forwards`
          : undefined,
      }}
    >
      <span className="sr-only">{label}</span>
      <p
        className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-[-0.02em] leading-none tabular ${
          emphasis ? "stat-pulse" : ""
        }`}
        aria-hidden="true"
      >
        {parsed ? (
          <>
            {parsed.prefix}
            {formatNumber(counter)}
            {parsed.suffix}
          </>
        ) : (
          value
        )}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
    </div>
  );
}

export default function StatsBand() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-background border-y border-border/60 py-16 sm:py-20"
      aria-label="L'étude en chiffres"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p
          className="smallcaps text-[12px] tracking-[0.28em] text-muted text-center mb-12 opacity-0"
          style={{
            animation: visible
              ? "fadeInUpHero 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              : undefined,
          }}
        >
          L'étude en quelques repères
        </p>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={0.15 + i * 0.08}
              visible={visible}
              emphasis={i === 0}
            />
          ))}
        </dl>
      </div>
    </section>
  );
}
