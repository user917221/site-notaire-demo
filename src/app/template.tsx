// Next.js 16 template.tsx convention — auto-keyed on segment change.
// Remounts silently on navigation, giving every page a quiet fade-up.
// Aesthetic de galerie : invisible sauf si on la cherche.
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-[pageReveal_0.45s_cubic-bezier(0.22,0.61,0.36,1)_both]">
      {children}
    </div>
  );
}
