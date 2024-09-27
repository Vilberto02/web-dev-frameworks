import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const interFont = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MiStock",
  description: "Aplicación para la gestión de deudas e inventario",
  icons: "/assets/Logo-MiStock.png",
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
