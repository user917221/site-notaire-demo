import { TEMOIGNAGES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function Temoignages() {
  return (
    <section
      className="bg-surface py-24 sm:py-32 lg:py-40"
      aria-labelledby="temoignages-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up" className="text-center mb-20 lg:mb-24">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted mb-6">
            Ils nous ont fait confiance
          </p>
          <h2
            id="temoignages-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] text-foreground max-w-3xl mx-auto"
          >
            La règle déontologique nous interdit l'éloge.
            <span className="block italic text-muted/80 mt-2">
              Voici ce qu'ils en disent.
            </span>
          </h2>
        </Reveal>

        <ul className="space-y-20 sm:space-y-24 max-w-4xl mx-auto">
          {TEMOIGNAGES.map((t, i) => (
            <li key={i}>
              <Reveal variant="up" delay={i * 0.1}>
                <figure className="text-center">
                  <span className="font-serif text-7xl text-accent leading-none block mb-6 select-none">
                    "
                  </span>
                  <blockquote
                    className="font-serif text-2xl sm:text-3xl lg:text-[34px] tracking-[-0.01em] leading-[1.35] text-foreground"
                    dangerouslySetInnerHTML={{ __html: t.quote }}
                  />
                  <figcaption className="mt-10 flex items-center justify-center gap-3 text-[12px] uppercase tracking-[0.15em] text-muted">
                    <span className="block w-8 h-px bg-accent" />
                    <span>{t.author}</span>
                    <span className="opacity-50">·</span>
                    <span className="text-muted/80">{t.context}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
