import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import ReadingProgress from "@/components/ui/ReadingProgress";
import TableOfContents from "@/components/ui/TableOfContents";
import { PullQuote, Sidenote } from "@/components/ui/EditorialAnnotations";
import { renderParagraph } from "@/components/ui/ParagraphRenderer";
import { DECODAGES } from "@/lib/constants";
import { CATEGORY_ART } from "@/components/ui/CategoryArt";
import { DECODAGE_IMAGES } from "@/lib/images";
import { ARTICLE_BODIES } from "@/lib/decodages-content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return DECODAGES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = DECODAGES.find((d) => d.slug === slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function DecodageArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = DECODAGES.find((d) => d.slug === slug);
  if (!article) notFound();

  const body = ARTICLE_BODIES[slug];
  if (!body) notFound();

  const Art = CATEGORY_ART[slug as keyof typeof CATEGORY_ART];
  const heroImg = DECODAGE_IMAGES[slug];

  // TOC items
  const tocItems = body.sections.map((s) => ({
    id: s.id,
    label: s.heading,
    num: s.num,
  }));

  return (
    <>
      <Header />
      <ReadingProgress targetSelector="#article-body" />
      <main id="main">
        {/* Hero photo plein large */}
        {heroImg && (
          <div className="relative w-full h-[55vh] min-h-[420px] bg-foreground mt-[68px] overflow-hidden">
            <ImageReveal className="absolute inset-0">
              <Image
                src={heroImg.url}
                alt={heroImg.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-70"
              />
            </ImageReveal>
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-background pointer-events-none" />
            {Art && (
              <div className="absolute bottom-10 right-10 text-white/70 hidden md:block z-10">
                <Art className="w-32 h-24" />
              </div>
            )}
          </div>
        )}

        {/* Hero article */}
        <article id="article-body" className="bg-background pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* Layout 12 cols : 8 article + 4 TOC sticky */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">
              {/* Colonne TOC sticky — desktop uniquement */}
              <aside className="hidden lg:block lg:col-span-3 lg:order-2">
                <TableOfContents items={tocItems} />
              </aside>

              {/* Colonne article */}
              <div className="lg:col-span-8 lg:order-1">
                <Reveal variant="up">
                  <Link
                    href="/decodages"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted hover:text-foreground transition-colors mb-12"
                  >
                    <ArrowLeft size={12} />
                    Tous les décodages
                  </Link>
                </Reveal>

                <Reveal variant="up" delay={0.1}>
                  <p className="smallcaps text-[12px] tracking-[0.18em] text-accent-ink mb-6">
                    {article.category}
                  </p>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] tracking-[-0.02em] leading-[1.1] text-foreground">
                    {article.title}
                  </h1>
                </Reveal>

                <Reveal variant="up" delay={0.2}>
                  <div className="mt-10 pb-10 border-b border-border/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.15em] text-muted tabular">
                    <span>{formatDate(article.date)}</span>
                    <span className="opacity-50">·</span>
                    <span>{article.readTime} de lecture</span>
                    <span className="opacity-50">·</span>
                    <span className="text-accent-ink">{article.pilote}</span>
                  </div>
                </Reveal>

                {/* Intro avec drop cap */}
                <Reveal variant="up" delay={0.3}>
                  <p className="editorial-body drop-cap mt-12 font-serif text-2xl sm:text-[26px] tracking-[-0.005em] leading-[1.45] text-foreground italic">
                    {body.intro}
                  </p>
                </Reveal>

                {/* Sections */}
                <div className="mt-16 space-y-16">
                  {body.sections.map((section, i) => (
                    <Reveal key={section.id} variant="up" delay={i * 0.05}>
                      <section id={section.id} className="scroll-mt-32">
                        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.01em] leading-[1.25] text-foreground mb-8">
                          <span className="text-accent-ink mr-3 font-normal tabular">
                            {section.num} —
                          </span>
                          {section.heading}
                        </h2>
                        <div className="editorial-body space-y-6">
                          {section.paragraphs.map((p, j) => (
                            <div key={j} className="relative">
                              <p className="text-lg leading-[1.7] text-foreground/85">
                                {renderParagraph(p.text, body.glossaryTerms)}
                                {p.sidenote && (
                                  <span className="sidenote-marker">
                                    {p.sidenote.marker}
                                  </span>
                                )}
                              </p>
                              {p.sidenote && (
                                <Sidenote
                                  marker={p.sidenote.marker}
                                  variant="marge"
                                >
                                  {p.sidenote.text}
                                </Sidenote>
                              )}
                              {p.pullQuote && (
                                <PullQuote
                                  variant="marge"
                                  attribution={p.pullQuoteAttribution}
                                >
                                  {p.pullQuote}
                                </PullQuote>
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    </Reveal>
                  ))}
                </div>

                {/* Conclusion */}
                <Reveal variant="up" className="mt-16 pt-12 border-t border-accent">
                  <p className="smallcaps text-[12px] tracking-[0.22em] text-accent-ink mb-6">
                    En conclusion
                  </p>
                  <p className="editorial-body font-serif text-xl sm:text-2xl leading-[1.5] text-foreground">
                    {body.conclusion}
                  </p>
                </Reveal>

                {/* Auteur + disclaimer */}
                <Reveal variant="up" className="mt-16 p-8 bg-surface border-l-2 border-accent">
                  <p className="smallcaps text-[12px] tracking-[0.18em] text-muted mb-3">
                    Article rédigé par
                  </p>
                  <p className="font-serif text-2xl text-foreground">{article.pilote}</p>
                  <p className="mt-4 text-[14px] text-muted leading-relaxed">
                    Cet article a une visée informative générale. Il ne constitue
                    pas un conseil juridique personnalisé. Pour toute question sur
                    votre situation, prenez rendez-vous avec l'étude — le premier
                    échange (30 min) est offert.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </article>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
