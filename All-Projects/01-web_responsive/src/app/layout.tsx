import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Responsive",
  description: "Create a Website Responsive by NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
