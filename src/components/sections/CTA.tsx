import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section
      className="bg-foreground text-background py-24 sm:py-32 lg:py-40"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <Reveal variant="up" className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent-light mb-8">
              Premier rendez-vous offert
            </p>
            <h2
              id="cta-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-[-0.025em] leading-[1.05] text-background"
            >
              Trente minutes pour cadrer votre projet,
              <span className="block italic text-background/70 mt-2">
                sans engagement.
              </span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] text-background/70 leading-relaxed mb-10">
              En présentiel à Lyon presqu'île ou en visioconférence. Choisissez
              votre créneau, ou appelez-nous directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-background text-foreground text-[12px] uppercase tracking-[0.12em] hover:bg-accent-light transition-colors"
              >
                Prendre rendez-vous
                <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${SITE.contact.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-background/30 text-background text-[12px] uppercase tracking-[0.12em] hover:bg-background hover:text-foreground transition-all"
              >
                {SITE.contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
