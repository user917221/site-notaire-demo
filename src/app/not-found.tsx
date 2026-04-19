import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Page introuvable",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-32 sm:py-48 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-10">
            Erreur 404
          </p>
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.015em] mb-10">
            Cette page n&apos;existe pas.
          </h1>
          <p className="text-muted text-lg max-w-md mx-auto leading-[1.8] mb-16">
            Le lien que vous avez suivi est peut-être obsolète, ou la page a été déplacée.
          </p>
          <Link
            href="/"
            className="link-editorial text-foreground text-[12px] uppercase tracking-[0.15em] font-semibold"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
