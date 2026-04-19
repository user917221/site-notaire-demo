import { SITE } from "@/lib/constants";

export default function JsonLd() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.contact.address,
      addressLocality: SITE.contact.city,
      postalCode: SITE.contact.postalCode,
      addressRegion: SITE.contact.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.7591,
      longitude: 4.8312,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
      { "@type": "AdministrativeArea", name: "France" },
      { "@type": "Place", name: "International — successions transfrontalières" },
    ],
    priceRange: "€€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    serviceType: [
      "Droit immobilier",
      "Succession",
      "Droit de la famille",
      "Donation et transmission",
      "Conseil patrimonial",
      "Succession internationale",
    ],
    sameAs: [SITE.social.linkedin],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: `SCP ${SITE.name}, Notaires associés`,
    url: SITE.url,
    description: SITE.description,
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    foundingDate: "1987",
    employee: SITE.notaires.map((n) => ({
      "@type": "Person",
      name: n.name,
      jobTitle: n.role,
      knowsAbout: n.specialty,
    })),
    sameAs: [SITE.social.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}
