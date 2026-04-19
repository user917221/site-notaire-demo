import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/ui/Reveal";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Calculateur frais de notaire — Estimation gratuite immédiate",
  description:
    "Estimez les frais de notaire pour votre projet immobilier (ancien ou neuf/VEFA) en 30 secondes. Barème officiel 2026, détaillé ligne par ligne — émoluments, droits, débours.",
};

const FAQS = [
  {
    q: "Pourquoi parle-t-on de « frais de notaire » alors que le notaire n'en perçoit qu'une petite partie ?",
    a: "Sur 100 € de frais, environ 80 € reviennent à l'État (droits de mutation, taxes, contributions) et 20 € au notaire (émoluments tarifés + débours pour les formalités). Le terme courant prête à confusion : il s'agit en réalité de frais d'acquisition, dont le notaire n'est qu'un intermédiaire.",
  },
  {
    q: "Pourquoi les frais sont-ils si bas dans le neuf ?",
    a: "Pour un bien acheté en VEFA (vente en l'état futur d'achèvement), la TVA s'applique sur le prix de vente (et a déjà été collectée par le promoteur). Les droits de mutation sont donc réduits à environ 0,715 % — au lieu de 5,80 % dans l'ancien.",
  },
  {
    q: "Puis-je négocier les frais ?",
    a: "Les émoluments tarifés (90 % de ce qui revient au notaire) sont fixés par décret et identiques chez tous les notaires de France. En revanche, les honoraires de conseil libres et certains débours peuvent faire l'objet d'une négociation, notamment sur les transactions importantes (au-delà d'environ 800 000 €).",
  },
  {
    q: "Mon projet n'est pas immobilier — pouvez-vous m'estimer une succession ou une donation ?",
    a: "Oui, mais ces calculs dépendent de nombreux paramètres (lien de parenté, abattements antérieurs, démembrement éventuel, configuration familiale). Plutôt qu'un calculateur générique, prenez rendez-vous : nous établirons une estimation chiffrée précise lors du premier échange.",
  },
];

export default function CalculateurPage() {
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
                  Outils — Frais de notaire
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] tracking-[-0.025em] leading-[1.05] text-foreground max-w-5xl">
                Combien vraiment ?
                <span className="block italic text-muted/90 mt-2">
                  Estimation transparente en 30 secondes.
                </span>
              </h1>
            </Reveal>
            <Reveal variant="up" delay={0.25} className="mt-12 max-w-2xl">
              <p className="text-lg text-muted leading-relaxed">
                Renseignez le prix d'acquisition et le type de bien — vous
                obtenez immédiatement le détail ligne par ligne des frais :
                émoluments du notaire, droits d'enregistrement, contribution
                de sécurité immobilière, débours. Sans email, sans inscription.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Calculator */}
        <section className="bg-background pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Calculator />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal variant="up" className="mb-16">
              <p className="smallcaps text-[12px] tracking-[0.22em] text-muted mb-6">
                Questions fréquentes
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-[-0.02em] leading-[1.1] text-foreground">
                Ce qu'il faut savoir
                <span className="italic text-muted/80"> avant de calculer.</span>
              </h2>
            </Reveal>

            <ul className="space-y-px border-t border-border">
              {FAQS.map((faq, i) => (
                <li key={i} className="border-b border-border py-10">
                  <Reveal variant="up" delay={i * 0.05}>
                    <h3 className="font-serif text-xl sm:text-2xl tracking-[-0.005em] leading-[1.3] text-foreground mb-4">
                      <span className="text-accent mr-3 tabular">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </h3>
                    <p className="editorial-body text-[15px] leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
