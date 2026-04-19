import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import { PORTRAIT_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "L'équipe — Trois notaires associés, quinze collaborateurs",
  description:
    "Sophie Vasseur (succession internationale), Julien Aubry (immobilier & patrimoine), Camille Roussel (famille). Officiers publics nommés par arrêté du Garde des Sceaux.",
};

const COLLABORATEURS = [
  {
    pole: "Pôle immobilier",
    count: 5,
    description:
      "Trois clercs immobilier, deux assistants. Suivi de A à Z des transactions, VEFA, copropriétés, baux commerciaux.",
    referent: "Me Julien Aubry",
  },
  {
    pole: "Pôle succession & famille",
    count: 4,
    description:
      "Deux clercs succession, une médiatrice familiale agréée, une assistante. Pour les dossiers du règlement amiable au partage judiciaire.",
    referent: "Me Camille Roussel",
  },
  {
    pole: "Pôle patrimoine & international",
    count: 3,
    description:
      "Une fiscaliste, une juriste internationale, un clerc patrimonial. Stratégies civiles et fiscales sur dix à vingt ans.",
    referent: "Me Sophie Vasseur",
  },
  {
    pole: "Pôle administratif",
    count: 3,
    description:
      "Comptabilité d'étude, formalités, archivage et conformité. La machinerie qui fait tourner l'horloge.",
    referent: "Direction collégiale",
  },
];

export default function EquipePage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="bg-background pt-40 pb-20 sm:pt-48 sm:pb-28 lg:pt-56 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal variant="up">
              <div className="flex items-center gap-4 mb-10">
                <span className="line-accent" aria-hidden="true" />
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  L'équipe
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] tracking-[-0.025em] leading-[1.05] text-foreground max-w-4xl">
                Trois notaires associés,
                <span className="block italic text-muted/90 mt-2">
                  quinze collaborateurs spécialisés.
                </span>
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Notaires associés — portraits longs */}
        <section className="bg-background pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ul className="space-y-px">
              {SITE.notaires.map((notaire, i) => {
                const portrait = PORTRAIT_IMAGES[notaire.slug];
                return (
                <li
                  key={notaire.slug}
                  className="border-t border-border/60 last:border-b py-16 lg:py-20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Portrait — vraie photo Unsplash */}
                    <Reveal variant="up" className="lg:col-span-4">
                      <div className="relative aspect-[4/5] bg-[var(--surface-2)] overflow-hidden">
                        {portrait && (
                          <Image
                            src={portrait.url}
                            alt={portrait.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            priority={i === 0}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-6 left-6 right-6 z-10">
                          <span className="inline-block w-8 h-px bg-accent-light mb-3" />
                          <p className="font-serif text-[12px] tracking-[0.18em] text-white/90 uppercase">
                            {String(i + 1).padStart(2, "0")} · Portrait
                          </p>
                        </div>
                      </div>
                    </Reveal>

                    {/* Bio */}
                    <Reveal variant="up" delay={0.1} className="lg:col-span-7 lg:col-start-6">
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.1] text-foreground">
                        {notaire.name}
                      </h2>
                      <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-muted">
                        {notaire.role}
                      </p>
                      <p className="mt-2 text-base text-accent">{notaire.specialty}</p>

                      <p className="mt-10 text-lg text-foreground/85 leading-relaxed">
                        {notaire.bio}
                      </p>

                      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-border/60">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3">
                            Le petit plus
                          </p>
                          <p className="text-[14px] text-foreground/80 italic leading-relaxed">
                            « {notaire.petitPlus} »
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3">
                            Langues de travail
                          </p>
                          <p className="text-[14px] text-foreground/80">
                            {notaire.languages.join(" · ")}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Collaborateurs — par pôle */}
        <section className="bg-surface py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal variant="up" className="mb-16 lg:mb-20">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted mb-6">
                Collaborateurs
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-foreground max-w-3xl">
                Quinze personnes,
                <span className="italic text-muted/80"> quatre pôles.</span>
              </h2>
            </Reveal>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 border border-border/60">
              {COLLABORATEURS.map((c, i) => (
                <li key={c.pole} className="bg-surface">
                  <Reveal variant="up" delay={i * 0.08}>
                    <div className="p-10 lg:p-12 h-full">
                      <div className="flex items-baseline justify-between mb-6">
                        <h3 className="font-serif text-2xl tracking-[-0.01em] text-foreground">
                          {c.pole}
                        </h3>
                        <span className="font-serif text-3xl text-accent tabular-nums">
                          {String(c.count).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-[15px] text-muted leading-relaxed mb-6">
                        {c.description}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                        Référent · {c.referent}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
