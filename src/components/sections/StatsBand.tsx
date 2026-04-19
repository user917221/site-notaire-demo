import { STATS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function StatsBand() {
  return (
    <section
      className="bg-background border-y border-border/60 py-16 sm:py-20"
      aria-label="L'étude en chiffres"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted text-center mb-12">
            L'étude en quelques repères
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              variant="up"
              delay={i * 0.08}
              as="div"
              className="text-center border-l border-border/60 first:border-l-0 lg:px-4"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-[-0.02em] leading-none">
                {stat.value}
              </dd>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
