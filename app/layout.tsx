import type { Metadata } from "next";
import "./globals.css";
import * as React from "react";
import { Header, Providers } from "@/app/components";
export const metadata: Metadata = {
  title: "Portafolio",
  description: "Create Portafoli By JB",
};

// eslint-disable-next-line react/no-children-prop

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
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
