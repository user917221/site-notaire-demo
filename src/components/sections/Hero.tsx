"use client";

import { ArrowRight } from "lucide-react";
import HeroVisual from "@/components/ui/HeroVisual";
import Sceau from "@/components/ui/Sceau";
import MagneticButton from "@/components/ui/MagneticButton";
import NotarialSignature from "@/components/ui/NotarialSignature";
import GravityWell from "@/components/ui/GravityWell";

export default function Hero() {
  // Mots avec délais individuels pour stagger
  const words = [
    { text: "Une", delay: 0.4 },
    { text: "étude", delay: 0.45 },
    { text: "qui", delay: 0.5 },
    { text: "parle", delay: 0.55 },
    { text: "votre", delay: 0.6, newLine: true },
    { text: "langue,", delay: 0.65 },
    { text: "pas", delay: 0.85, italic: true, newLine: true },
    { text: "seulement", delay: 0.9, italic: true },
    { text: "celle", delay: 0.95, italic: true, newLine: true },
    { text: "du", delay: 1.0, italic: true },
    { text: "Code", delay: 1.05, italic: true },
    { text: "civil.", delay: 1.1, italic: true },
  ];

  return (
    <section
      className="relative min-h-[100svh] bg-background text-foreground flex flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Filet décoratif top */}
      <div className="absolute top-[68px] left-0 right-0 h-px bg-border/60" aria-hidden="true" />

      {/* Sceau top-right — gravity well subtil */}
      <div
        className="absolute top-[100px] right-6 lg:right-10 hidden md:block opacity-0 animate-[fadeIn_1s_1s_ease-out_forwards] z-20"
        aria-hidden="true"
      >
        <GravityWell strength={0.3} radius={200}>
          <Sceau size={72} className="text-accent-ink/40" />
        </GravityWell>
      </div>

      <div className="relative flex-1 flex flex-col mx-auto max-w-7xl w-full px-6 lg:px-10 pt-32 pb-20 sm:pb-28 lg:pb-32 z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16 opacity-0 animate-[fadeIn_0.8s_0.2s_ease-out_forwards]">
          <span className="line-accent" aria-hidden="true" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
            SCP Vasseur · Aubry · Roussel — Lyon presqu'île
          </p>
        </div>

        {/* Grid 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 flex-1 items-end">
          {/* Texte */}
          <div className="lg:col-span-8">
            <h1
              id="hero-heading"
              className="font-serif text-[40px] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[80px] leading-[1.12] tracking-[-0.025em] text-foreground"
            >
              {words.map((w, i) => (
                <span key={i}>
                  {w.newLine && i > 0 && <br />}
                  <span
                    className={`inline-block opacity-0 mr-[0.22em] ${w.italic ? "italic text-muted/85" : ""}`}
                    style={{
                      animation: `fadeInUpHero 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${w.delay}s forwards`,
                    }}
                  >
                    {w.text}
                  </span>
                </span>
              ))}
            </h1>

            {/* Signature notariale — paraphe qui se dessine après le headline */}
            <NotarialSignature
              delay={1.6}
              duration={2200}
              className="mt-8 sm:mt-10 text-foreground/85 w-[280px] sm:w-[360px] lg:w-[420px] h-auto"
            />

            {/* Sous-texte + CTAs */}
            <div className="mt-12 sm:mt-16 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-10 xl:gap-12">
              <p className="max-w-xl text-base sm:text-lg text-muted leading-relaxed opacity-0 animate-[fadeInUp_0.9s_1.5s_ease-out_forwards]">
                Étude pluridisciplinaire à Lyon presqu'île. Trois notaires
                associés, quinze collaborateurs spécialisés. Pour vos projets
                immobiliers, familiaux et patrimoniaux — y compris à
                dimension internationale.
              </p>
              <div className="flex flex-wrap items-center gap-4 opacity-0 animate-[fadeInUp_0.9s_1.7s_ease-out_forwards]">
                <MagneticButton
                  href="/contact"
                  className="px-7 py-3.5 bg-foreground text-background text-[12px] uppercase tracking-[0.12em] hover:bg-accent transition-colors duration-300"
                >
                  Premier rendez-vous
                  <ArrowRight size={14} />
                </MagneticButton>
                <MagneticButton
                  href="/services"
                  className="px-7 py-3.5 border border-foreground/20 text-foreground text-[12px] uppercase tracking-[0.12em] hover:border-foreground transition-colors duration-300"
                >
                  Découvrir nos services
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-end opacity-0 animate-[fadeIn_1.2s_0.8s_ease-out_forwards]">
            <HeroVisual className="text-foreground/[0.10] w-full max-w-[280px] h-auto" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hidden lg:flex items-center gap-3 mt-16 opacity-0 animate-[fadeIn_1s_2s_ease-out_forwards]"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted/60">
            Faire défiler
          </span>
          <span className="block w-10 h-px bg-muted/40" />
        </div>
      </div>
    </section>
  );
}
