import LandingPage from "@/components/LandingPage";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Morramidy",
  legalName: "Morramidy Desenvolvimento de Software LTDA",
  url: "https://morramidy.com.br",
  email: "morramidy.development@gmail.com",
  telephone: "+55 41 9888-0068",
  sameAs: ["https://www.instagram.com/morramidy_/"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Paulista, 1106",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function Page() {
  return (
    <>
      <LandingPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
