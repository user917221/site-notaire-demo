import Reveal from "@/components/ui/Reveal";

/**
 * Bande Credentials — pattern "Trust & Authority" pour sites légaux premium.
 * Affiche les rattachements institutionnels et garanties.
 */

const CREDENTIALS = [
  {
    title: "Garde des Sceaux",
    label: "Officiers publics",
    sub: "Nommés par arrêté ministériel",
  },
  {
    title: "Chambre du Rhône",
    label: "Rattachement",
    sub: "Notaires de Lyon et département",
  },
  {
    title: "Conseil Supérieur",
    label: "Tutelle professionnelle",
    sub: "CSN · Paris",
  },
  {
    title: "RCP collective",
    label: "Garantie",
    sub: "Assurance souscrite via le CSN",
  },
  {
    title: "Arrêté du 29/01/2024",
    label: "Règles professionnelles",
    sub: "Conformité déontologique",
  },
];

export default function Credentials() {
  return (
    <section
      className="bg-background border-y border-border/60 py-16 sm:py-20"
      aria-labelledby="credentials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p
            id="credentials-heading"
            className="smallcaps text-[12px] tracking-[0.28em] text-muted text-center mb-12"
          >
            Cadre institutionnel &amp; garanties
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {CREDENTIALS.map((c, i) => (
            <Reveal
              key={c.title}
              variant="up"
              delay={i * 0.06}
              as="div"
              className="text-center px-2"
            >
              <dt className="sr-only">{c.label}</dt>
              <dd>
                <p className="smallcaps text-[10px] tracking-[0.22em] text-accent-ink mb-3">
                  {c.label}
                </p>
                <p className="font-serif text-lg sm:text-xl text-foreground leading-tight">
                  {c.title}
                </p>
                <p className="mt-2 text-[12px] text-muted leading-relaxed">
                  {c.sub}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
