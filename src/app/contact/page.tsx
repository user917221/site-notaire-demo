import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import BookingPicker from "@/components/ui/BookingPicker";
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

const SUJETS = [
  "Achat / vente immobilier",
  "Succession (règlement, partage)",
  "Donation / transmission",
  "Famille (mariage, PACS, divorce)",
  "Conseil patrimonial",
  "Succession internationale",
  "Actifs numériques",
  "Autre — précisez",
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
                <form className="space-y-8" aria-label="Formulaire de contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        required
                        className="w-full bg-transparent border-b border-border/60 py-3 text-foreground focus:border-accent focus:outline-none transition-colors text-[15px]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        required
                        className="w-full bg-transparent border-b border-border/60 py-3 text-foreground focus:border-accent focus:outline-none transition-colors text-[15px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-transparent border-b border-border/60 py-3 text-foreground focus:border-accent focus:outline-none transition-colors text-[15px]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-transparent border-b border-border/60 py-3 text-foreground focus:border-accent focus:outline-none transition-colors text-[15px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="sujet"
                      className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
                    >
                      Sujet du rendez-vous
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      required
                      className="w-full bg-transparent border-b border-border/60 py-3 text-foreground focus:border-accent focus:outline-none transition-colors text-[15px]"
                    >
                      <option value="">Choisir un sujet…</option>
                      {SUJETS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
                    >
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Décrivez en quelques lignes votre situation ou votre projet."
                      className="w-full bg-transparent border-b border-border/60 py-3 text-foreground focus:border-accent focus:outline-none transition-colors text-[15px] resize-none placeholder:text-muted/60"
                    />
                  </div>

                  <fieldset>
                    <legend className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-4">
                      Format préféré
                    </legend>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex items-center gap-3 cursor-pointer text-[14px] text-foreground/80">
                        <input
                          type="radio"
                          name="format"
                          value="presentiel"
                          defaultChecked
                          className="accent-[var(--accent)]"
                        />
                        Présentiel à Lyon
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer text-[14px] text-foreground/80">
                        <input
                          type="radio"
                          name="format"
                          value="visio"
                          className="accent-[var(--accent)]"
                        />
                        Visioconférence
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer text-[14px] text-foreground/80">
                        <input
                          type="radio"
                          name="format"
                          value="appel"
                          className="accent-[var(--accent)]"
                        />
                        Appel téléphonique
                      </label>
                    </div>
                  </fieldset>

                  <label className="flex items-start gap-3 cursor-pointer text-[13px] text-muted leading-relaxed">
                    <input
                      type="checkbox"
                      name="rgpd"
                      required
                      className="mt-1 accent-[var(--accent)]"
                    />
                    <span>
                      J'accepte que mes données soient traitées par l'étude
                      pour répondre à ma demande, conformément au RGPD et à
                      notre{" "}
                      <a href="/mentions-legales#rgpd" className="link-editorial">
                        politique de confidentialité
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background text-[12px] uppercase tracking-[0.12em] hover:bg-accent transition-colors w-full sm:w-auto"
                  >
                    Envoyer ma demande
                  </button>

                  <p className="text-[12px] text-muted/80 italic">
                    Le secrétariat vous recontacte sous 24 h ouvrées.
                  </p>
                </form>
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
                      className="font-serif text-2xl text-foreground hover:text-accent transition-colors block"
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
                      className="font-serif text-xl text-foreground hover:text-accent transition-colors block break-all"
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
