import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import StatsBand from "@/components/sections/StatsBand";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "L'étude — Notre histoire et nos engagements",
  description:
    "Étude notariale fondée en 1987 sur la presqu'île de Lyon. Trois notaires associés, quinze collaborateurs, quatre langues de travail. Découvrez notre approche.",
};

const VALEURS = [
  {
    title: "Clarté avant signature",
    body:
      "Chaque acte est expliqué ligne par ligne, chaque honoraire annoncé avant ouverture du dossier. Pas de surprise, pas de jargon. La déontologie n'interdit pas la pédagogie — elle l'impose.",
  },
  {
    title: "Spécialisation par associé",
    body:
      "Trois notaires, trois sensibilités juridiques. Votre dossier est confié à celui dont c'est le terrain — succession internationale, immobilier, famille — pas au premier disponible.",
  },
  {
    title: "Modernité instrumentale",
    body:
      "Signature électronique qualifiée, visioconférence sécurisée, espace client. La technologie au service de la rigueur — pas l'inverse. Un acte authentique reste un acte authentique.",
  },
  {
    title: "Confidentialité absolue",
    body:
      "Le secret professionnel notarial protège tout ce qui se dit dans nos murs. Y compris ce que vous explorez sans vouloir engager — un audit, une question, un scénario.",
  },
];

const HISTOIRE = [
  {
    year: "1987",
    title: "Fondation",
    body:
      "L'étude est créée par Maître Henri Vasseur sur la presqu'île de Lyon, dans un immeuble haussmannien du quai des Célestins. Spécialisation immédiate sur l'immobilier lyonnais.",
  },
  {
    year: "2008",
    title: "Sophie Vasseur intègre l'étude",
    body:
      "Diplômée du CFPN de Lyon, elle rejoint son père comme clerc avant de devenir notaire associée en 2014. Ouvre l'étude au droit international après six ans à Genève.",
  },
  {
    year: "2017",
    title: "Camille Roussel rejoint l'association",
    body:
      "Ancienne avocate au barreau de Lyon devenue notaire après une thèse en droit patrimonial, elle structure le pôle famille et nouvelles configurations conjugales.",
  },
  {
    year: "2019",
    title: "Julien Aubry — troisième associé",
    body:
      "Clerc devenu notaire après quinze ans dans l'étude, il prend la tête du pôle immobilier et VEFA. L'étude passe à trois associés et quinze collaborateurs.",
  },
  {
    year: "2024",
    title: "Pôle actifs numériques",
    body:
      "Premier notariat lyonnais à formaliser une procédure de séquestre des clés privées crypto et d'intégration des actifs numériques à la masse successorale.",
  },
  {
    year: "2026",
    title: "Aujourd'hui",
    body:
      "1 850 actes par an, quatre langues de travail (français, anglais, allemand, italien), une clientèle particulière et entreprise sur le grand Sud-Est et l'international.",
  },
];

export default function EtudePage() {
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
                  L'étude
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] tracking-[-0.025em] leading-[1.05] text-foreground max-w-4xl">
                Quatre siècles d'archives,
                <span className="block italic text-muted/90 mt-2">
                  trente-neuf ans d'étude.
                </span>
              </h1>
            </Reveal>
            <Reveal variant="up" delay={0.25} className="mt-12 max-w-2xl">
              <p className="text-lg text-muted leading-relaxed">
                L'étude Vasseur · Aubry · Roussel a été fondée en 1987 sur la
                presqu'île de Lyon. Aujourd'hui dirigée par trois notaires
                associés et accompagnée par une équipe de quinze
                collaborateurs spécialisés, elle reçoit chaque année près de
                deux mille actes pour une clientèle particulière et entreprise.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <StatsBand />

        {/* Valeurs */}
        <section className="bg-background py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal variant="up" className="mb-20">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted mb-6">
                Engagements
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-foreground max-w-3xl">
                Quatre principes,
                <span className="italic text-muted/80"> tenus dossier par dossier.</span>
              </h2>
            </Reveal>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 border border-border/60">
              {VALEURS.map((v, i) => (
                <li key={v.title} className="bg-background">
                  <Reveal variant="up" delay={i * 0.08}>
                    <div className="p-10 lg:p-12 h-full">
                      <span className="font-serif text-[13px] tracking-[0.18em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-2xl tracking-[-0.01em] text-foreground mt-6 mb-5">
                        {v.title}
                      </h3>
                      <p className="text-[15px] text-muted leading-relaxed">
                        {v.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Histoire — timeline */}
        <section className="bg-surface py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal variant="up" className="mb-20 lg:mb-28">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted mb-6">
                Trajectoire
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-foreground max-w-3xl">
                Trente-neuf ans, six étapes.
              </h2>
            </Reveal>

            <ol className="max-w-4xl mx-auto">
              {HISTOIRE.map((event, i) => (
                <li
                  key={event.year}
                  className="grid grid-cols-12 gap-6 py-10 border-t border-border/60 last:border-b"
                >
                  <Reveal variant="up" delay={i * 0.05} className="col-span-3 lg:col-span-2">
                    <span className="font-serif text-3xl lg:text-4xl text-accent tracking-[-0.01em]">
                      {event.year}
                    </span>
                  </Reveal>
                  <Reveal variant="up" delay={i * 0.05 + 0.05} className="col-span-9 lg:col-span-10">
                    <h3 className="font-serif text-xl lg:text-2xl tracking-[-0.005em] text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-[15px] text-muted leading-relaxed max-w-2xl">
                      {event.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal variant="up" delay={0.4} className="mt-16 text-center">
              <Link
                href="/equipe"
                className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.14em] text-foreground hover:text-accent transition-colors group"
              >
                <span className="link-editorial">Rencontrer les notaires associés</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
