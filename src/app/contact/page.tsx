import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import BookingPicker from "@/components/ui/BookingPicker";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Prendre rendez-vous",
  description:
    "Étude Vasseur · Aubry · Roussel — 14 quai des Célestins, 69002 Lyon. Premier rendez-vous d'orientation offert (30 minutes), en présentiel ou visioconférence.",
};

const HORAIRES = [
  { jour: "Lundi", h: "9h–12h30  ·  14h–18h" },
  { jour: "Mardi", h: "9h–12h30  ·  14h–18h" },
  { jour: "Mercredi", h: "9h–12h30  ·  14h–18h" },
  { jour: "Jeudi", h: "9h–12h30  ·  14h–18h" },
  { jour: "Vendredi", h: "9h–12h30  ·  14h–17h" },
  { jour: "Samedi", h: "Sur rendez-vous uniquement" },
  { jour: "Dimanche", h: "Fermé" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="bg-background pt-40 pb-16 sm:pt-48 sm:pb-20 lg:pt-56 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal variant="up">
              <div className="flex items-center gap-4 mb-10">
                <span className="line-accent" aria-hidden="true" />
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  Prendre rendez-vous
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] tracking-[-0.025em] leading-[1.05] text-foreground max-w-4xl">
                Premier rendez-vous offert,
                <span className="block italic text-muted/90 mt-2">
                  trente minutes pour cadrer.
                </span>
              </h1>
            </Reveal>
            <Reveal variant="up" delay={0.25} className="mt-12 max-w-2xl">
              <p className="text-lg text-muted leading-relaxed">
                En présentiel à Lyon presqu'île ou en visioconférence sécurisée.
                Choisissez votre créneau ci-dessous, ou utilisez le formulaire
                plus bas pour décrire votre projet en détail.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Booking picker */}
        <section className="bg-background pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal variant="up">
              <BookingPicker />
            </Reveal>
          </div>
        </section>

        {/* Séparateur — formulaire alternatif */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
            <p className="smallcaps text-[12px] tracking-[0.22em] text-muted mb-3">
              Ou autrement
            </p>
            <p className="font-serif text-2xl text-foreground italic">
              Décrivez votre projet par écrit — on vous recontacte sous 24 h.
            </p>
          </div>
        </section>

        {/* Form + Coordonnées */}
        <section className="bg-background pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Formulaire */}
              <Reveal variant="up" className="lg:col-span-7">
                <ContactForm />
              </Reveal>

              {/* Coordonnées */}
              <aside className="lg:col-span-4 lg:col-start-9 space-y-12">
                <Reveal variant="up" delay={0.1}>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                      Adresse
                    </p>
                    <p className="font-serif text-2xl text-foreground leading-tight">
                      {SITE.contact.address}
                      <br />
                      {SITE.contact.postalCode} {SITE.contact.city}
                    </p>
                    <p className="mt-3 text-[13px] text-muted">
                      Métro Bellecour (lignes A &amp; D) — 4 minutes à pied
                    </p>
                  </div>
                </Reveal>

                <Reveal variant="up" delay={0.15}>
                  <div className="pt-8 border-t border-border/60">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                      Téléphone
                    </p>
                    <a
                      href={`tel:${SITE.contact.phone.replace(/\s+/g, "")}`}
                      className="font-serif text-2xl text-foreground hover:text-accent-ink transition-colors block"
                    >
                      {SITE.contact.phone}
                    </a>
                    <p className="mt-3 text-[13px] text-muted">
                      Standard ouvert du lundi au vendredi
                    </p>
                  </div>
                </Reveal>

                <Reveal variant="up" delay={0.2}>
                  <div className="pt-8 border-t border-border/60">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.contact.email}`}
                      className="font-serif text-xl text-foreground hover:text-accent-ink transition-colors block break-all"
                    >
                      {SITE.contact.email}
                    </a>
                  </div>
                </Reveal>

                <Reveal variant="up" delay={0.25}>
                  <div className="pt-8 border-t border-border/60">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                      Horaires
                    </p>
                    <ul className="space-y-2 text-[14px]">
                      {HORAIRES.map((h) => (
                        <li
                          key={h.jour}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <span className="text-foreground">{h.jour}</span>
                          <span className="text-muted text-right">{h.h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
