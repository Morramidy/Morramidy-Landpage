import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://morramidy.com.br"),
  title: "Morramidy | Software sob medida para processos e produtos digitais",
  description:
    "Software house estratégica para criar sistemas web, plataformas, integrações, automações e produtos digitais sob medida.",
  icons: {
    icon: "/assets/logo-icon-white.png",
  },
  openGraph: {
    title: "Morramidy | Software sob medida para processos e produtos digitais",
    description:
      "Estruturamos, desenhamos e desenvolvemos soluções digitais sob medida com arquitetura, UX e visão de negócio.",
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
