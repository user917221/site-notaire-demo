import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/ui/Reveal";
import { DECODAGES } from "@/lib/constants";
import { CATEGORY_ART } from "@/components/ui/CategoryArt";

export const metadata: Metadata = {
  title: "Décodages — Le droit civil sans le jargon",
  description:
    "Crypto-actifs en succession, achat à deux sans mariage, expatriation et succession internationale : nos analyses pour comprendre avant de signer.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function DecodagesPage() {
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
                  Décodages
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] tracking-[-0.025em] leading-[1.05] text-foreground max-w-5xl">
                Le droit civil
                <span className="block italic text-muted/90 mt-2">
                  sans le jargon.
                </span>
              </h1>
            </Reveal>
            <Reveal variant="up" delay={0.25} className="mt-12 max-w-2xl">
              <p className="text-lg text-muted leading-relaxed">
                Trois fois par mois, l'un des associés décortique un sujet :
                patrimoine numérique, configurations familiales contemporaines,
                expatriation. Pour comprendre avant de signer.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-background pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ul className="space-y-px">
              {DECODAGES.map((article, i) => {
                const Art = CATEGORY_ART[article.slug as keyof typeof CATEGORY_ART];
                return (
                  <li
                    key={article.slug}
                    className="border-t border-border/60 last:border-b"
                  >
                    <Reveal variant="up" delay={i * 0.05}>
                      <Link
                        href={`/decodages/${article.slug}`}
                        className="group block py-10 lg:py-14 transition-colors duration-500 hover:bg-surface/40"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                          <div className="lg:col-span-2 flex lg:flex-col items-start gap-6 lg:gap-4">
                            {Art && (
                              <div className="text-foreground/50 group-hover:text-accent-ink transition-colors duration-500 shrink-0">
                                <Art className="w-16 h-12 lg:w-20 lg:h-14" />
                              </div>
                            )}
                            <div>
                              <p className="text-[11px] uppercase tracking-[0.18em] text-accent-ink">
                                {article.category}
                              </p>
                              <p className="mt-2 text-[12px] text-muted">
                                {formatDate(article.date)}
                              </p>
                            </div>
                          </div>
                          <h2 className="lg:col-span-7 font-serif text-2xl sm:text-3xl lg:text-[34px] tracking-[-0.01em] text-foreground leading-[1.2] group-hover:text-accent-ink transition-colors">
                            {article.title}
                          </h2>
                          <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-2">
                            <p className="text-[12px] uppercase tracking-[0.15em] text-muted">
                              {article.readTime} · {article.pilote}
                            </p>
                            <ArrowUpRight
                              size={20}
                              className="text-muted/40 group-hover:text-accent-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                            />
                          </div>
                        </div>
                        <p className="mt-6 text-[15px] text-muted leading-relaxed max-w-3xl lg:ml-[16.66%]">
                          {article.excerpt}
                        </p>
                      </Link>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
