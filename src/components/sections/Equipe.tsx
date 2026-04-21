import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { PORTRAIT_IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

export default function Equipe() {
  return (
    <section
      id="equipe"
      className="bg-background py-24 sm:py-32 lg:py-40"
      aria-labelledby="equipe-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24">
          <Reveal variant="up" className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted mb-6">
              Notaires associés
            </p>
            <h2
              id="equipe-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-foreground max-w-3xl"
            >
              Trois associés, trois&nbsp;regards.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.1} className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-muted leading-relaxed">
              Officiers publics nommés par arrêté du Garde des Sceaux. Notre
              étude regroupe trois sensibilités complémentaires — pour que
              votre dossier soit toujours porté par la bonne expertise.
            </p>
          </Reveal>
        </div>

        {/* Grid portraits */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {SITE.notaires.map((notaire, i) => {
            const portrait = PORTRAIT_IMAGES[notaire.slug];
            return (
              <li key={notaire.slug}>
                <Reveal variant="up" delay={i * 0.1}>
                  <article className="group">
                    {/* Portrait — vraie photo Unsplash en N&B */}
                    <div data-cursor="agrandir" className="relative aspect-[4/5] mb-8 overflow-hidden bg-[var(--surface-2)]">
                      {portrait && (
                        <Image
                          src={portrait.url}
                          alt={portrait.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                          priority={i === 0}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <span className="inline-block w-8 h-px bg-accent-light mb-3" />
                        <p className="font-serif text-[12px] tracking-[0.18em] text-white/90 uppercase">
                          {String(i + 1).padStart(2, "0")} · Associé{notaire.role.includes("e") ? "e" : ""}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif text-2xl tracking-[-0.01em] text-foreground leading-tight">
                          {notaire.name}
                        </h3>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">
                          {notaire.role}
                        </p>
                      </div>
                      <p className="text-[14px] text-foreground/80 leading-relaxed border-t border-border/60 pt-4">
                        <span className="text-accent-ink">→</span> {notaire.specialty}
                      </p>
                      <p className="text-[13px] text-muted leading-relaxed italic border-l-2 border-accent/40 pl-4">
                        « {notaire.petitPlus} »
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-muted/80 pt-2">
                        {notaire.languages.join(" · ")}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Lien équipe complète */}
        <Reveal variant="up" delay={0.4} className="mt-20 text-center">
          <Link
            href="/equipe"
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.14em] text-foreground hover:text-accent-ink transition-colors group"
          >
            <span className="link-editorial">Toute l'équipe — 3 notaires + 15 collaborateurs</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
