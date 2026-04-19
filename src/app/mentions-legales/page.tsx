import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales obligatoires de la SCP Vasseur · Aubry · Roussel : statut, ressort, autorité de tutelle, déontologie, médiation, hébergement, RGPD.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-background pt-40 pb-32 sm:pt-48 lg:pt-56">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal variant="up">
              <div className="flex items-center gap-4 mb-10">
                <span className="line-accent" aria-hidden="true" />
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  Cadre légal
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.05] text-foreground">
                Mentions légales
              </h1>
            </Reveal>

            <div className="mt-20 space-y-16 text-[15px] leading-relaxed text-foreground/85">
              <Reveal variant="up" delay={0.15}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Identité de l'éditeur
                  </h2>
                  <dl className="space-y-3 text-[14px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Raison sociale</dt>
                      <dd className="sm:col-span-2 text-foreground">
                        SCP {SITE.name}, Notaires associés
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Forme juridique</dt>
                      <dd className="sm:col-span-2 text-foreground">
                        Société civile professionnelle (SCP) titulaire d'un office notarial
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Siège social</dt>
                      <dd className="sm:col-span-2 text-foreground">
                        {SITE.contact.address}, {SITE.contact.postalCode}{" "}
                        {SITE.contact.city}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">SIRET</dt>
                      <dd className="sm:col-span-2 text-foreground">{SITE.siret}</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">TVA intracommunautaire</dt>
                      <dd className="sm:col-span-2 text-foreground">{SITE.tva}</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Téléphone</dt>
                      <dd className="sm:col-span-2 text-foreground">{SITE.contact.phone}</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Email</dt>
                      <dd className="sm:col-span-2 text-foreground">{SITE.contact.email}</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Directeur de la publication</dt>
                      <dd className="sm:col-span-2 text-foreground">
                        Maître Sophie Vasseur, notaire associée gérante
                      </dd>
                    </div>
                  </dl>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.2}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Notaires associés
                  </h2>
                  <ul className="space-y-3 text-[14px]">
                    {SITE.notaires.map((n) => (
                      <li
                        key={n.slug}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-2"
                      >
                        <span className="text-muted">{n.role}</span>
                        <span className="sm:col-span-2 text-foreground">
                          {n.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.25}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Statut professionnel
                  </h2>
                  <p>
                    Les notaires associés de l'étude sont officiers publics et
                    ministériels nommés par arrêté du Garde des Sceaux,
                    Ministère de la Justice, en application des articles 1
                    et suivants de l'ordonnance n°45-2590 du 2 novembre 1945
                    relative au statut du notariat.
                  </p>
                  <p className="mt-4">
                    À ce titre, ils sont investis du pouvoir d'authentifier
                    les actes qu'ils reçoivent et d'en assurer la force
                    exécutoire.
                  </p>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.3}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Ressort territorial &amp; rattachement
                  </h2>
                  <dl className="space-y-3 text-[14px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Ressort</dt>
                      <dd className="sm:col-span-2 text-foreground">{SITE.ressort}</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Chambre de rattachement</dt>
                      <dd className="sm:col-span-2 text-foreground">
                        {SITE.legalRefs.chambreAdresse}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <dt className="text-muted">Autorité de tutelle</dt>
                      <dd className="sm:col-span-2 text-foreground">
                        {SITE.legalRefs.csn}
                      </dd>
                    </div>
                  </dl>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.35}>
                <section id="deontologie">
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Déontologie
                  </h2>
                  <p>
                    L'activité de la SCP est régie par les règles
                    professionnelles du notariat fixées par l'arrêté du
                    29 janvier 2024 relatif au règlement national du notariat.
                  </p>
                  <p className="mt-4">
                    Ces règles imposent notamment : le secret professionnel
                    absolu, l'impartialité, le devoir de conseil, la
                    transparence tarifaire et l'interdiction de toute
                    publicité comparative ou démarchage commercial.
                  </p>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.4}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Tarifs &amp; émoluments
                  </h2>
                  <p>
                    Les émoluments perçus pour les actes notariés sont fixés
                    par décret (décret n°2016-230 du 26 février 2016 modifié)
                    et identiques chez tous les notaires de France. Ils sont
                    consultables sur le site officiel{" "}
                    <a
                      href="https://www.notaires.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-editorial"
                    >
                      notaires.fr
                    </a>
                    .
                  </p>
                  <p className="mt-4">
                    Les honoraires de conseil et les prestations non tarifées
                    sont fixés librement et toujours communiqués au client
                    avant ouverture du dossier.
                  </p>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.45}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Assurance professionnelle
                  </h2>
                  <p>
                    {SITE.legalRefs.rcp}, garantissant la responsabilité civile
                    professionnelle des notaires associés et la représentation
                    des fonds détenus pour le compte des clients.
                  </p>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.5}>
                <section id="mediation">
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Médiation de la consommation
                  </h2>
                  <p>
                    En cas de litige de consommation non résolu directement
                    avec l'étude, le client consommateur peut saisir
                    gratuitement le médiateur de la consommation du notariat :
                  </p>
                  <p className="mt-4">
                    {SITE.legalRefs.mediateur}
                    <br />
                    60 boulevard de la Tour-Maubourg, 75007 Paris
                  </p>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.55}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Hébergement du site
                  </h2>
                  <p>
                    Le site internet de l'étude est hébergé par Vercel Inc.,
                    340 S Lemon Ave #4133, Walnut, CA 91789, USA —{" "}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-editorial"
                    >
                      vercel.com
                    </a>
                    .
                  </p>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.6}>
                <section id="rgpd">
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Données personnelles &amp; RGPD
                  </h2>
                  <p>
                    Les données collectées via le formulaire de contact sont
                    traitées par la SCP {SITE.name} pour répondre aux demandes
                    et organiser les rendez-vous. Elles sont conservées
                    pendant la durée nécessaire à ces finalités, puis
                    archivées conformément aux obligations légales du
                    notariat.
                  </p>
                  <p className="mt-4">
                    Conformément au Règlement Général sur la Protection des
                    Données (RGPD) et à la loi Informatique et Libertés, vous
                    disposez d'un droit d'accès, de rectification,
                    d'effacement, de limitation, de portabilité et
                    d'opposition. Vous pouvez exercer ces droits par email à :
                    dpo@var-notaires.fr ou par courrier à l'adresse de
                    l'étude.
                  </p>
                  <p className="mt-4">
                    En cas de difficulté, vous pouvez introduire une
                    réclamation auprès de la CNIL —{" "}
                    <a
                      href="https://www.cnil.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-editorial"
                    >
                      cnil.fr
                    </a>
                    .
                  </p>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.65}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Cookies
                  </h2>
                  <p>
                    Le site n'utilise que des cookies strictement nécessaires
                    à son fonctionnement. Aucun cookie de mesure d'audience,
                    de publicité ou de réseaux sociaux n'est déposé sans
                    consentement préalable.
                  </p>
                </section>
              </Reveal>

              <Reveal variant="up" delay={0.7}>
                <section>
                  <h2 className="font-serif text-2xl tracking-[-0.005em] text-foreground mb-6">
                    Crédits
                  </h2>
                  <p>
                    Conception et développement : Agence 42 —{" "}
                    <a
                      href="https://agence-42.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-editorial"
                    >
                      agence-42.com
                    </a>
                    .
                  </p>
                  <p className="mt-4 text-[12px] text-muted italic">
                    Site informatif respectant les règles professionnelles du
                    notariat (arrêté du 29 janvier 2024). Les exemples et
                    statistiques cités sont à visée pédagogique. Pour toute
                    question relative à votre situation personnelle, prenez
                    rendez-vous avec l'étude.
                  </p>
                </section>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
