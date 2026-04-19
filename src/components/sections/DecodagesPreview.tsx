import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { DECODAGES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import { CATEGORY_ART } from "@/components/ui/CategoryArt";
import { DECODAGE_IMAGES } from "@/lib/images";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function DecodagesPreview() {
  return (
    <section
      className="bg-background py-24 sm:py-32 lg:py-40"
      aria-labelledby="decodages-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24">
          <Reveal variant="up" className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted mb-6">
              Décodages
            </p>
            <h2
              id="decodages-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-foreground max-w-3xl"
            >
              Le droit civil sans le&nbsp;jargon.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.1} className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-muted leading-relaxed">
              Trois fois par mois, nous décortiquons un sujet — patrimoine
              numérique, expatriation, configurations familiales — pour le
              rendre lisible avant l'acte.
            </p>
          </Reveal>
        </div>

        {/* Articles */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {DECODAGES.map((article, i) => {
            const Art = CATEGORY_ART[article.slug as keyof typeof CATEGORY_ART];
            const img = DECODAGE_IMAGES[article.slug];
            return (
              <li key={article.slug}>
                <Reveal variant="up" delay={i * 0.1}>
                  <Link
                    href={`/decodages/${article.slug}`}
                    className="group block h-full border border-border/60 hover:border-foreground transition-all duration-500 bg-background hover:bg-surface/40"
                  >
                    {/* Photo + SVG art en overlay */}
                    {img && (
                      <div className="relative aspect-[10/7] bg-foreground border-b border-border/60 overflow-hidden">
                        <Image
                          src={img.url}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/40 via-transparent to-foreground/30" />
                        {Art && (
                          <div className="absolute bottom-5 right-5 text-white/80 group-hover:text-accent-light transition-colors duration-500">
                            <Art className="w-20 h-14" />
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                          {article.category}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-muted/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                        />
                      </div>
                      <h3 className="font-serif text-xl sm:text-[22px] tracking-[-0.005em] text-foreground leading-[1.25] mb-5">
                        {article.title}
                      </h3>
                      <p className="text-[14px] text-muted leading-relaxed mb-8 line-clamp-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-muted/80 pt-6 border-t border-border/60">
                        <span>{formatDate(article.date)}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal variant="up" delay={0.4} className="mt-16 text-center">
          <Link
            href="/decodages"
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.14em] text-foreground hover:text-accent transition-colors group"
          >
            <span className="link-editorial">Tous les décodages</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
