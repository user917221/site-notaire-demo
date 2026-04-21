import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Specialites from "@/components/sections/Specialites";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants";
import { SERVICE_ICONS } from "@/components/icons/ServiceIcons";
import { SERVICE_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services notariaux — Immobilier, succession, famille, patrimoine",
  description:
    "Cinq domaines cœur (immobilier, succession, famille, donation, patrimoine) et trois spécialités différenciantes : succession internationale, actifs numériques, familles recomposées.",
};

export default function ServicesPage() {
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
                  Services
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] tracking-[-0.025em] leading-[1.05] text-foreground max-w-5xl">
                Tout le droit civil,
                <span className="block italic text-muted/90 mt-2">
                  porté par la bonne expertise.
                </span>
              </h1>
            </Reveal>
            <Reveal variant="up" delay={0.25} className="mt-12 max-w-2xl">
              <p className="text-lg text-muted leading-relaxed">
                Cinq domaines cœur, trois spécialités différenciantes. Chaque
                dossier est instruit par le notaire dont c'est le terrain —
                avec le soutien d'une équipe pluridisciplinaire de quinze
                collaborateurs.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="bg-background pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ul className="space-y-px">
              {SERVICES.map((service, idx) => {
                const Icon = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS];
                const img = SERVICE_IMAGES[service.id];
                const reversed = idx % 2 === 1;
                return (
                <li
                  key={service.id}
                  id={service.id}
                  className="border-t border-border/60 last:border-b py-16 lg:py-24 scroll-mt-32"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${reversed ? "lg:[direction:rtl]" : ""}`}>
                    {/* Image illustrative */}
                    {img && (
                      <Reveal variant="up" className="lg:col-span-5 lg:[direction:ltr]">
                        <div className="relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[var(--surface-2)]">
                          <Image
                            src={img.url}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                          <div className="absolute top-6 left-6 text-white">
                            <span className="font-serif text-[13px] tracking-[0.18em]">
                              {service.number}
                            </span>
                          </div>
                        </div>
                      </Reveal>
                    )}

                    {/* Texte */}
                    <Reveal variant="up" delay={0.1} className="lg:col-span-7 lg:[direction:ltr]">
                      <div className="flex items-baseline gap-6 mb-6">
                        <span className="font-serif text-[13px] tracking-[0.18em] text-accent-ink">
                          {service.number}
                        </span>
                        {Icon && (
                          <span className="text-foreground/60">
                            <Icon size={36} />
                          </span>
                        )}
                      </div>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.1] text-foreground">
                        {service.title}
                      </h2>
                      <p className="mt-6 text-base text-muted italic leading-relaxed">
                        {service.short}
                      </p>
                      <p className="mt-8 text-lg text-foreground leading-relaxed mb-10">
                        {service.long}
                      </p>
                      <ul className="space-y-3">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 text-[15px] text-foreground/80"
                          >
                            <span
                              className="mt-2.5 block w-3 h-px bg-accent flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>
                </li>
                );
              })}
            </ul>
          </div>
        </section>

        <Specialites />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
