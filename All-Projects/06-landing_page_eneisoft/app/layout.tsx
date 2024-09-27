import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// Definir la tipografia que se va usar
const interFont = Inter({
  weight: ["400", "500", "600", "800", "900"],
  subsets: ["latin"],
});

// Definir los metadatos
export const metadata: Metadata = {
  title: "ENEISOFT",
  description: "ENEISOFT Landing page",
  icons: "/assets/icon-azul.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
