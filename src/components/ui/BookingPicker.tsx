"use client";

import { useState, useMemo, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ArrowRight, Calendar, Clock, Video, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Picker de RDV stylé Cal.com — visuel statique pour démo.
 * En production : remplacer par un vrai Cal.com embed via iframe.
 *
 * Slots calculés mocked à partir d'aujourd'hui (lun-ven, 4 créneaux/jour).
 */

type Format = "presentiel" | "visio" | "appel";

const SLOTS_PER_DAY = ["09h00", "11h00", "14h30", "17h00"];

function getNextWeekdays(count = 12): Date[] {
  const result: Date[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1); // démarre demain
  while (result.length < count) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      result.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  return result;
}

function formatDay(d: Date): string {
  return d.toLocaleDateString("fr-FR", { weekday: "long", day: "2-digit", month: "long" });
}

export default function BookingPicker() {
  const days = useMemo(() => getNextWeekdays(8), []);
  const [selectedDay, setSelectedDay] = useState<Date>(days[0]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [format, setFormat] = useState<Format>("presentiel");
  const [confirmed, setConfirmed] = useState(false);
  const dayButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const slotButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  function handleDayKeyDown(e: ReactKeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % days.length;
      dayButtonsRef.current[next]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + days.length) % days.length;
      dayButtonsRef.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      dayButtonsRef.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      dayButtonsRef.current[days.length - 1]?.focus();
    }
  }

  function handleSlotKeyDown(e: ReactKeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % SLOTS_PER_DAY.length;
      slotButtonsRef.current[next]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + SLOTS_PER_DAY.length) % SLOTS_PER_DAY.length;
      slotButtonsRef.current[prev]?.focus();
    }
  }

  if (confirmed) {
    return (
      <div className="bg-foreground text-background p-12 lg:p-16 text-center">
        <div className="mx-auto max-w-md">
          <div className="w-16 h-16 mx-auto mb-8 border border-accent-light rounded-full flex items-center justify-center text-accent-light">
            <Calendar size={28} />
          </div>
          <p className="smallcaps text-[12px] tracking-[0.22em] text-accent-light mb-4">
            Rendez-vous confirmé
          </p>
          <h3 className="font-serif text-3xl text-background leading-tight mb-6">
            {formatDay(selectedDay)} à {selectedSlot}
          </h3>
          <p className="text-[14px] text-white/70 leading-relaxed mb-8">
            Vous allez recevoir un email de confirmation avec invitation
            calendrier (.ics) et lien de visioconférence le cas échéant.
            Le secrétariat vous recontacte si besoin de précisions.
          </p>
          <button
            type="button"
            onClick={() => {
              setConfirmed(false);
              setSelectedSlot(null);
            }}
            className="text-[12px] uppercase tracking-[0.18em] text-accent-light hover:text-background transition-colors link-editorial"
          >
            Réserver un autre créneau
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border bg-background">
      {/* Header */}
      <div className="p-6 lg:p-8 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="smallcaps text-[12px] tracking-[0.18em] text-accent-ink mb-2">
            Premier rendez-vous — 30 minutes
          </p>
          <p className="font-serif text-xl text-foreground">
            Choisissez un créneau dans les deux prochaines semaines
          </p>
        </div>
        <div className="flex items-center gap-3 text-[12px] text-muted">
          <Clock size={14} />
          <span>30 min · Offert · Sans engagement</span>
        </div>
      </div>

      {/* Format */}
      <div className="p-6 lg:p-8 border-b border-border">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
          Format préféré
        </p>
        <div className="flex flex-wrap gap-2">
          {([
            { v: "presentiel" as Format, icon: MapPin, label: "Présentiel à Lyon" },
            { v: "visio" as Format, icon: Video, label: "Visioconférence" },
            { v: "appel" as Format, icon: Clock, label: "Appel téléphonique" },
          ]).map(({ v, icon: Icon, label }) => (
            <button
              key={v}
              type="button"
              onClick={() => setFormat(v)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-[13px] border transition-colors ${
                format === v
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Days picker */}
      <div className="p-6 lg:p-8 border-b border-border">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
          Date
        </p>
        <div role="radiogroup" aria-label="Jour du rendez-vous" className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {days.map((d, i) => {
            const isSelected = d.toDateString() === selectedDay.toDateString();
            return (
              <button
                key={d.toISOString()}
                ref={(el) => { dayButtonsRef.current[i] = el; }}
                type="button"
                role="radio"
                aria-checked={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onKeyDown={(e) => handleDayKeyDown(e, i)}
                onClick={() => {
                  setSelectedDay(d);
                  setSelectedSlot(null);
                }}
                className={`p-3 text-center border transition-colors ${
                  isSelected
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground hover:border-foreground"
                }`}
              >
                <span className="block text-[10px] uppercase tracking-[0.15em] opacity-70">
                  {d.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "")}
                </span>
                <span className="block font-serif text-2xl tabular mt-1">
                  {d.getDate()}
                </span>
                <span className="block text-[10px] uppercase mt-1 opacity-70">
                  {d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Slots */}
      <div className="p-6 lg:p-8 border-b border-border">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
          Créneaux disponibles · {formatDay(selectedDay)}
        </p>
        <div role="radiogroup" aria-label="Heure du rendez-vous" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SLOTS_PER_DAY.map((slot, i) => {
            const isSelected = slot === selectedSlot;
            return (
              <button
                key={slot}
                ref={(el) => { slotButtonsRef.current[i] = el; }}
                type="button"
                role="radio"
                aria-checked={isSelected}
                tabIndex={isSelected || (selectedSlot === null && i === 0) ? 0 : -1}
                onKeyDown={(e) => handleSlotKeyDown(e, i)}
                onClick={() => setSelectedSlot(slot)}
                className={`py-4 font-serif text-lg tabular border transition-all ${
                  isSelected
                    ? "border-accent bg-accent text-background"
                    : "border-border text-foreground hover:border-foreground"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>
      </div>

      {/* Confirm */}
      <div className="p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-[13px] text-muted">
          {selectedSlot ? (
            <p>
              Sélectionné :{" "}
              <span className="text-foreground font-medium">
                {formatDay(selectedDay)}
              </span>{" "}
              à <span className="text-foreground font-medium">{selectedSlot}</span>
            </p>
          ) : (
            <p className="italic opacity-70">
              Sélectionnez un créneau pour continuer
            </p>
          )}
        </div>
        <MagneticButton
          href="#"
          className={`px-7 py-3.5 text-[12px] uppercase tracking-[0.12em] transition-all ${
            selectedSlot
              ? "bg-foreground text-background hover:bg-accent"
              : "bg-border text-muted pointer-events-none"
          }`}
        >
          {/* Use button for confirm */}
          <span
            onClick={(e) => {
              if (selectedSlot) {
                e.preventDefault();
                setConfirmed(true);
              }
            }}
            className="inline-flex items-center gap-3"
          >
            Confirmer le rendez-vous
            <ArrowRight size={14} />
          </span>
        </MagneticButton>
      </div>
    </div>
  );
}
