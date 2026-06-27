import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://morramidy.com.br"),
  title: "Morramidy | Software sob medida, design e estratégia",
  description:
    "Software house especializada em desenvolvimento sob medida, consultoria em tecnologia, web design, dados, integrações e produtos digitais escaláveis.",
  icons: {
    icon: "/assets/logo-icon-white.png",
  },
  openGraph: {
    title: "Morramidy | Software sob medida, design e estratégia",
    description:
      "Unimos engenharia, design e estratégia para desenvolver soluções digitais inteligentes, escaláveis e orientadas a resultado.",
    images: ["/assets/brand-wallpaper.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" as="image" href="/assets/illusion.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
