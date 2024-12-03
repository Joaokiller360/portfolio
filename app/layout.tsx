import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/components/";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Create Portafoli By JB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/media/joaoDev.webp" />
      </head>
      <body>
        <Header />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
