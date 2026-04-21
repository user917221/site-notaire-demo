import Link from "next/link";
import { SITE, NAV_ITEMS } from "@/lib/constants";
import Sceau from "@/components/ui/Sceau";
import GravityWell from "@/components/ui/GravityWell";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light focus-visible:outline-offset-2";

  return (
    <footer
      className="bg-[var(--surface-2)] text-white/80 mt-auto"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 sm:py-24">
        {/* Bandeau supérieur — adresse en grand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 mb-16 border-b border-white/10">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-6">
              Étude
            </p>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] tracking-[-0.01em] max-w-xl">
              {SITE.contact.address}
              <br />
              {SITE.contact.postalCode} {SITE.contact.city}
            </p>
            <p className="mt-6 text-[13px] text-white/60 max-w-md leading-relaxed">
              {SITE.contact.hours}
              <br />
              {SITE.contact.rdvHours}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            {/* Sceau notarial — gravity well */}
            <div className="hidden lg:block self-start mb-10 text-accent-light/50">
              <GravityWell strength={0.35} radius={260}>
                <Sceau size={120} />
              </GravityWell>
            </div>
            <a
              href={`tel:${SITE.contact.phone.replace(/\s+/g, "")}`}
              className={`block font-serif text-2xl sm:text-3xl text-white hover:text-accent-light transition-colors ${focusRing}`}
            >
              {SITE.contact.phone}
            </a>
            <a
              href={`mailto:${SITE.contact.email}`}
              className={`block mt-2 text-base text-white/70 hover:text-white transition-colors ${focusRing}`}
            >
              {SITE.contact.email}
            </a>
            <Link
              href="/contact"
              className={`mt-8 inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-[12px] uppercase tracking-[0.12em] text-white hover:bg-white hover:text-foreground transition-all duration-300 self-start ${focusRing}`}
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>

        {/* Sitemap — 4 colonnes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <nav aria-label="L'étude">
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/50 mb-6 font-normal">
              L'étude
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="/etude" className={`hover:text-white transition-colors ${focusRing}`}>
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="/equipe" className={`hover:text-white transition-colors ${focusRing}`}>
                  Notaires associés
                </Link>
              </li>
              <li>
                <Link href="/decodages" className={`hover:text-white transition-colors ${focusRing}`}>
                  Décodages
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`hover:text-white transition-colors ${focusRing}`}>
                  Nous trouver
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/50 mb-6 font-normal">
              Services
            </h3>
            <ul className="space-y-3 text-[14px]">
              {NAV_ITEMS.find((i) => i.label === "Services")?.children?.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className={`hover:text-white transition-colors ${focusRing}`}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Cadre">
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/50 mb-6 font-normal">
              Cadre
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link
                  href="/mentions-legales"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales#deontologie"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  Déontologie
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales#mediation"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  Médiation conso.
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales#rgpd"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  RGPD
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Liens institutionnels">
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/50 mb-6 font-normal">
              Institutions
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href="https://www.notaires.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  notaires.fr
                </a>
              </li>
              <li>
                <a
                  href="https://www.cr-lyon.notaires.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  Conseil régional Lyon
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bas */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/"
            className={`inline-flex items-center gap-3 group ${focusRing}`}
            aria-label={`${SITE.shortName} — Accueil`}
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-7 h-7 border border-white/40 text-white/80"
            >
              <span className="font-serif text-[11px] tracking-[0.05em] leading-none">
                VAR
              </span>
            </span>
            <span className="font-serif text-[14px] tracking-[0.04em] text-white">
              Vasseur · Aubry · Roussel
            </span>
          </Link>
          <p className="text-[11px] text-white/50 tracking-[0.08em]">
            © {currentYear} SCP Vasseur · Aubry · Roussel
            <span aria-hidden="true" className="opacity-50 mx-2">·</span>
            Notaires associés à Lyon
          </p>
          <p className="text-[10px] text-white/40 tracking-[0.06em] max-w-xs sm:text-right">
            Officiers publics nommés par arrêté du Garde des Sceaux
          </p>
        </div>
      </div>
    </footer>
  );
}
