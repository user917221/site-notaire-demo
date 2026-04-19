import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import { SERVICE_ICONS } from "@/components/icons/ServiceIcons";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-background py-24 sm:py-32 lg:py-40"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24">
          <Reveal variant="up" className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted mb-6">
              Nos domaines
            </p>
            <h2
              id="services-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-foreground"
            >
              Cinq portes d'entrée vers&nbsp;l'étude.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.1} className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Un cabinet pluridisciplinaire qui couvre l'ensemble du droit
              civil et patrimonial. Chaque dossier est porté par le notaire
              dont c'est le terrain — sans confusion ni cloisonnement.
            </p>
          </Reveal>
        </div>

        {/* Services grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS];
            return (
              <li key={service.id} className="bg-background">
                <Reveal variant="up" delay={i * 0.08}>
                  <Link
                    href={`/services#${service.id}`}
                    className="group block p-8 sm:p-10 lg:p-12 h-full transition-colors duration-500 hover:bg-surface/40 focus-visible:bg-surface/40 focus-visible:outline-none"
                  >
                    <div className="flex items-start justify-between mb-8">
                      <span className="font-serif text-[13px] tracking-[0.18em] text-accent">
                        {service.number}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-muted/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                      />
                    </div>
                    {Icon && (
                      <div className="mb-8 text-foreground/60 group-hover:text-accent transition-colors duration-500">
                        <Icon size={48} />
                      </div>
                    )}
                    <h3 className="font-serif text-2xl sm:text-3xl tracking-[-0.01em] text-foreground mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-muted leading-relaxed">
                      {service.short}
                    </p>
                  </Link>
                </Reveal>
              </li>
            );
          })}
          {/* CTA card — fills 6th cell */}
          <li className="bg-foreground text-background">
            <Reveal variant="up" delay={SERVICES.length * 0.08}>
              <div className="p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-between min-h-[280px]">
                <div>
                  <span className="font-serif text-[13px] tracking-[0.18em] text-accent-light mb-8 block">
                    +
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl tracking-[-0.01em] text-background leading-tight">
                    Et trois spécialités qui sortent du rayon notarial
                    traditionnel.
                  </p>
                </div>
                <Link
                  href="/services#specialites"
                  className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-accent-light hover:text-background transition-colors group"
                >
                  Voir les spécialités
                  <ArrowUpRight
                    size={14}
                    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
