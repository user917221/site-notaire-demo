import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SPECIALITES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import { SERVICE_ICONS } from "@/components/icons/ServiceIcons";
import { GridPattern } from "@/components/ui/Ornament";
import { SPECIALITE_IMAGES } from "@/lib/images";

export default function Specialites() {
  return (
    <section
      id="specialites"
      className="relative bg-[var(--surface-2)] text-white py-24 sm:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="specialites-heading"
    >
      {/* Pattern grid en arrière-plan */}
      <GridPattern className="text-white" opacity={0.025} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-28">
          <Reveal variant="up" className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent-light mb-6">
              Spécialités différenciantes
            </p>
            <h2
              id="specialites-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-white max-w-3xl"
            >
              Trois terrains où peu d'études françaises&nbsp;s'aventurent.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.1} className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-white/70 leading-relaxed">
              Le notariat évolue. Nous avons fait le choix de nous former et
              de nous équiper sur trois domaines où la demande explose et
              l'offre reste rare.
            </p>
          </Reveal>
        </div>

        {/* Grid 3 spécialités */}
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border-y border-white/10">
          {SPECIALITES.map((spec, i) => {
            const Icon = SERVICE_ICONS[spec.id as keyof typeof SERVICE_ICONS];
            const img = SPECIALITE_IMAGES[spec.id];
            return (
              <li key={spec.id} className="bg-[var(--surface-2)]">
                <Reveal variant="up" delay={i * 0.12}>
                  <article className="h-full flex flex-col">
                    {/* Image header */}
                    {img && (
                      <div className="relative aspect-[16/10] overflow-hidden bg-foreground">
                        <Image
                          src={img.url}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-2)] via-[var(--surface-2)]/70 to-transparent" />
                        {Icon && (
                          <div className="absolute bottom-6 left-10 lg:left-12 text-accent-light z-10">
                            <Icon size={48} />
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-10 lg:p-12 flex-1 flex flex-col">
                      <div className="w-10 h-px bg-accent mb-6" aria-hidden="true" />
                      <h3 className="font-serif text-3xl tracking-[-0.01em] text-white leading-tight mb-6">
                        {spec.title}
                      </h3>
                      <p className="text-[15px] text-white/70 leading-relaxed mb-10 flex-1">
                        {spec.description}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-accent-light">
                        Référent · {spec.pilote}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* CTA bas */}
        <Reveal variant="up" delay={0.4} className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-white/30 text-white text-[12px] uppercase tracking-[0.12em] hover:bg-white hover:text-[var(--surface-2)] transition-all duration-300"
          >
            Tous nos services
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
