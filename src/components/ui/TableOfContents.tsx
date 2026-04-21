"use client";

import { useEffect, useState } from "react";

/**
 * Table of contents sticky pour articles longs.
 * Surligne la section active au scroll, scroll smooth au clic.
 */

export type TocItem = {
  id: string;
  label: string;
  num?: string; // "01", "02"...
};

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export default function TableOfContents({
  items,
  className = "",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;

    // Tracking active section avec IO
    const observers: IntersectionObserver[] = [];
    const visible = new Set<string>();

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.add(item.id);
          } else {
            visible.delete(item.id);
          }
          // Le 1er ID dans l'ordre des items qui est visible
          for (const it of items) {
            if (visible.has(it.id)) {
              setActiveId(it.id);
              return;
            }
          }
        },
        { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Progress total — entre le 1er et dernier heading
    const onScroll = () => {
      const first = document.getElementById(items[0].id);
      const last = document.getElementById(items[items.length - 1].id);
      if (!first || !last) return;
      const start = first.getBoundingClientRect().top + window.scrollY - 100;
      const end = last.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
      const total = end - start;
      if (total <= 0) {
        setProgress(window.scrollY > start ? 1 : 0);
        return;
      }
      const p = (window.scrollY - start) / total;
      setProgress(Math.max(0, Math.min(1, p)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <nav
      aria-label="Table des matières"
      className={`sticky top-32 ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-6 font-normal">
        Sommaire
      </p>
      <ol className="relative space-y-4 border-l border-border/50 pl-5">
        {/* Progress bar dans le rail */}
        <span
          className="absolute top-0 left-[-1px] w-px bg-accent transition-all duration-300"
          style={{ height: `${progress * 100}%` }}
          aria-hidden="true"
        />
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className="relative">
              {/* Dot indicator */}
              <span
                className={`absolute left-[-22px] top-1.5 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? "bg-accent scale-125" : "bg-border"
                }`}
                aria-hidden="true"
              />
              <a
                href={`#${item.id}`}
                className={`block text-[13px] leading-snug transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {item.num && (
                  <span className="font-serif text-accent-ink mr-2 text-[12px]">
                    {item.num}
                  </span>
                )}
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
