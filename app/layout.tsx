import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Aurchain Biotech | Peptide Research & Custom Synthesis", template: "%s | Aurchain Biotech" },
  description: "B2B research peptides, cosmetic peptides, custom peptide synthesis, bulk supply, and OEM/ODM support with documented quality control.",
  keywords: ["research peptides", "custom peptide synthesis", "cosmetic peptides", "bulk peptides", "peptide manufacturer", "OEM peptide supply"],
  openGraph: { title: "Aurchain Biotech", description: "Research precision. Supply confidence.", url: site.url, siteName: site.name, type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/><FloatingContact/></body></html>;
}
