import Reveal from "@/components/ui/Reveal";
import { Frise } from "@/components/ui/Ornament";
import { DiagonalPattern } from "@/components/ui/Ornament";

export default function Manifest() {
  return (
    <section
      className="relative bg-surface py-24 sm:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="manifest-heading"
    >
      <DiagonalPattern className="text-foreground" opacity={0.025} />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 z-10">
        <Reveal variant="up">
          <Frise variant="diamond" className="text-accent mb-10" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent mb-10 text-center">
            Manifeste
          </p>
        </Reveal>
        <Reveal variant="up" delay={0.1}>
          <p
            id="manifest-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.35] tracking-[-0.015em] text-foreground text-center"
          >
            Le notariat français a quatre siècles d'archives, et une réputation
            d'opacité qu'il n'a pas tout à fait volée. Nous croyons l'inverse :
            <span className="italic text-muted/90"> qu'un acte authentique se mérite par la clarté</span> —
            sur les frais, sur les délais, sur ce qui est encore négociable et
            ce qui ne l'est pas. C'est l'engagement que nous prenons, dossier
            par dossier.
          </p>
        </Reveal>
        <Reveal variant="up" delay={0.3} className="mt-16 flex items-center justify-center gap-4">
          <span className="block w-10 h-px bg-accent" />
          <p className="text-[12px] uppercase tracking-[0.18em] text-muted">
            SCP Vasseur · Aubry · Roussel — depuis 1987
          </p>
          <span className="block w-10 h-px bg-accent" />
        </Reveal>
      </div>
    </section>
  );
}
