// Next.js 16 template.tsx — auto-keyed on segment change.
// Remounts à chaque navigation, déclenche une transition "rideau" éditoriale.
//
// Pattern Awwwards : clip-path reveal du contenu + ligne d'or qui balaie
// horizontalement, mimant l'ouverture d'une page.
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Curtain — barre or qui balaie en horizontal */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[150] h-px bg-accent origin-left animate-[curtainSweep_0.7s_cubic-bezier(0.76,0,0.24,1)_both] pointer-events-none"
      />
      {/* Contenu — clip-path reveal du haut + fade up subtil */}
      <div className="animate-[pageEnter_0.8s_cubic-bezier(0.22,0.61,0.36,1)_both]">
        {children}
      </div>
    </>
  );
}
