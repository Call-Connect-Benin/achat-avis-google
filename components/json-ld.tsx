import { site } from "@/lib/site";

export default function JsonLd() {
  const { company } = site;
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    logo: site.logo,
    image: site.ogImage,
    email: company.email,
    telephone: company.phone,
    priceRange: "€€",
    areaServed: "FR",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    sameAs: [site.social.facebook, site.social.linkedin, site.social.instagram],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2000",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
