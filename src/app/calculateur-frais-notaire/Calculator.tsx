"use client";

import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Calculateur frais de notaire — barème officiel décret 2016 actualisé.
 * Distingue ancien (~7-8 %) et neuf/VEFA (~2-3 %).
 *
 * Estimation indicative — disclaimer en bas de calcul.
 */

type Type = "ancien" | "neuf";

const TVA_RATE = 0.2;

// Barème émoluments proportionnels notaire (décret 2016 modifié)
// Tranches : 0-6500 → 3.870 %, 6500-17000 → 1.596 %, 17000-60000 → 1.064 %, > 60000 → 0.799 %
const EMOLUMENTS_TRANCHES = [
  { from: 0, to: 6500, rate: 0.0387 },
  { from: 6500, to: 17000, rate: 0.01596 },
  { from: 17000, to: 60000, rate: 0.01064 },
  { from: 60000, to: Infinity, rate: 0.00799 },
];

function computeEmoluments(prix: number): number {
  let total = 0;
  for (const t of EMOLUMENTS_TRANCHES) {
    if (prix <= t.from) break;
    const tranchePart = Math.min(prix, t.to) - t.from;
    total += tranchePart * t.rate;
  }
  return total;
}

function formatEUR(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function Calculator() {
  const [prix, setPrix] = useState<number>(450000);
  const [type, setType] = useState<Type>("ancien");
  const [departement, setDepartement] = useState<string>("69"); // Rhône

  const result = useMemo(() => {
    if (prix <= 0) return null;

    const emoluments = computeEmoluments(prix);
    const emolumentsTVA = emoluments * TVA_RATE;
    const emolumentsTTC = emoluments + emolumentsTVA;

    // Droits d'enregistrement
    // Ancien : ~5,80% (5,09 % département + 1,20 % commune + frais d'assiette 0,107 %)
    // Neuf VEFA : 0,715 % (taxe de publicité foncière + frais)
    const droitsRate = type === "ancien" ? 0.058 : 0.00715;
    const droits = prix * droitsRate;

    // Contribution de sécurité immobilière : 0,10 %
    const csi = prix * 0.001;

    // Débours / formalités : forfaitaire ~1200 € en moyenne
    const debours = 1200;

    // Total
    const totalFrais = emolumentsTTC + droits + csi + debours;
    const totalAcheteur = prix + totalFrais;
    const tauxFrais = (totalFrais / prix) * 100;

    return {
      emoluments,
      emolumentsTVA,
      emolumentsTTC,
      droits,
      csi,
      debours,
      totalFrais,
      totalAcheteur,
      tauxFrais,
    };
  }, [prix, type]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Inputs */}
      <div className="lg:col-span-5 space-y-10">
        {/* Type d'acquisition */}
        <fieldset>
          <legend className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-4">
            Type d'acquisition
          </legend>
          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            <button
              type="button"
              onClick={() => setType("ancien")}
              className={`p-5 text-left transition-colors ${
                type === "ancien"
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-surface"
              }`}
            >
              <span className="block font-serif text-lg mb-1">Ancien</span>
              <span className="block text-[12px] opacity-70">
                Bien d'occasion (~ 7-8 %)
              </span>
            </button>
            <button
              type="button"
              onClick={() => setType("neuf")}
              className={`p-5 text-left transition-colors ${
                type === "neuf"
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-surface"
              }`}
            >
              <span className="block font-serif text-lg mb-1">Neuf / VEFA</span>
              <span className="block text-[12px] opacity-70">
                Construction (~ 2-3 %)
              </span>
            </button>
          </div>
        </fieldset>

        {/* Prix */}
        <div>
          <label
            htmlFor="prix"
            className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-4"
          >
            Prix d'acquisition (frais d'agence non inclus)
          </label>
          <div className="relative">
            <input
              type="number"
              id="prix"
              min="10000"
              max="50000000"
              step="10000"
              value={prix}
              onChange={(e) => setPrix(Number(e.target.value) || 0)}
              className="w-full bg-transparent border-b-2 border-border focus:border-accent py-4 pr-12 font-serif text-3xl text-foreground tabular outline-none transition-colors"
            />
            <span className="absolute right-2 bottom-5 text-2xl text-muted">
              €
            </span>
          </div>
          {/* Slider visuel */}
          <input
            type="range"
            min="50000"
            max="2000000"
            step="10000"
            value={prix}
            onChange={(e) => setPrix(Number(e.target.value))}
            className="w-full mt-6 accent-[var(--accent)] cursor-pointer"
            aria-label="Curseur prix"
          />
          <div className="flex justify-between text-[11px] text-muted/70 mt-2 tabular">
            <span>50 k€</span>
            <span>500 k€</span>
            <span>1 M€</span>
            <span>2 M€</span>
          </div>
        </div>

        {/* Département */}
        <div>
          <label
            htmlFor="departement"
            className="block text-[11px] uppercase tracking-[0.18em] text-muted mb-4"
          >
            Département du bien
          </label>
          <select
            id="departement"
            value={departement}
            onChange={(e) => setDepartement(e.target.value)}
            className="w-full bg-transparent border-b border-border py-3 text-[15px] text-foreground focus:border-accent outline-none"
          >
            <option value="69">69 — Rhône (Lyon)</option>
            <option value="01">01 — Ain</option>
            <option value="38">38 — Isère</option>
            <option value="42">42 — Loire</option>
            <option value="71">71 — Saône-et-Loire</option>
            <option value="73">73 — Savoie</option>
            <option value="74">74 — Haute-Savoie</option>
            <option value="13">13 — Bouches-du-Rhône</option>
            <option value="75">75 — Paris</option>
            <option value="92">92 — Hauts-de-Seine</option>
            <option value="other">Autre département</option>
          </select>
          <p className="mt-3 text-[12px] text-muted/80 italic">
            Les taux des droits d'enregistrement varient légèrement selon le
            département. Estimation basée sur le taux moyen national.
          </p>
        </div>
      </div>

      {/* Résultats */}
      <div className="lg:col-span-7">
        {result && (
          <div className="bg-foreground text-background p-10 lg:p-12">
            <p className="smallcaps text-[12px] tracking-[0.18em] text-accent-light mb-8">
              Estimation des frais
            </p>

            {/* Total prominent */}
            <div className="pb-8 border-b border-white/15">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mb-3">
                Frais de notaire (tout compris)
              </p>
              <p className="font-serif text-5xl lg:text-6xl text-background tabular tracking-[-0.02em] leading-none">
                {formatEUR(result.totalFrais)}
              </p>
              <p className="mt-3 text-[14px] text-white/70 tabular">
                soit {result.tauxFrais.toFixed(2).replace(".", ",")} % du prix
                d'acquisition
              </p>
            </div>

            {/* Détail */}
            <dl className="mt-8 space-y-4 text-[14px]">
              <div className="flex items-baseline justify-between">
                <dt className="text-white/70">
                  Émoluments du notaire (HT)
                </dt>
                <dd className="font-serif text-lg tabular">
                  {formatEUR(result.emoluments)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-white/70">TVA sur émoluments (20 %)</dt>
                <dd className="font-serif text-lg tabular">
                  {formatEUR(result.emolumentsTVA)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-white/70">
                  Droits d'enregistrement{" "}
                  {type === "ancien" ? "(5,80 %)" : "(0,715 %)"}
                </dt>
                <dd className="font-serif text-lg tabular">
                  {formatEUR(result.droits)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-white/70">
                  Contribution de sécurité immobilière (0,10 %)
                </dt>
                <dd className="font-serif text-lg tabular">
                  {formatEUR(result.csi)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-white/70">Débours et formalités</dt>
                <dd className="font-serif text-lg tabular">
                  {formatEUR(result.debours)}
                </dd>
              </div>
            </dl>

            <div className="mt-8 pt-6 border-t border-white/15 flex items-baseline justify-between">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Coût total acquéreur
              </p>
              <p className="font-serif text-3xl text-accent-light tabular tracking-[-0.01em]">
                {formatEUR(result.totalAcheteur)}
              </p>
            </div>

            <p className="mt-8 text-[11px] text-white/50 leading-relaxed italic">
              Estimation indicative basée sur les barèmes en vigueur en 2026.
              Le détail exact des frais dépend de la situation précise du bien
              (existence d'une hypothèque à purger, frais de copropriété en
              instance, négociation des honoraires de conseil non
              tarifés). Cette estimation ne constitue pas un devis ferme.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <MagneticButton
                href="/contact"
                className="px-7 py-3.5 bg-background text-foreground text-[12px] uppercase tracking-[0.12em] hover:bg-accent-light transition-colors"
              >
                Devis personnalisé
                <ArrowRight size={14} />
              </MagneticButton>
              <MagneticButton
                href="/services#immobilier"
                className="px-7 py-3.5 border border-white/30 text-background text-[12px] uppercase tracking-[0.12em] hover:bg-white hover:text-foreground transition-all"
              >
                Notre service immobilier
              </MagneticButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
