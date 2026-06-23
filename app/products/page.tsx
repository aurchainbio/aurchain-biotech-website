import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";
import CTA from "@/components/CTA";

export const metadata: Metadata = { title: "Peptide Products", description: "Browse research peptides, cosmetic peptides, and peptide raw materials for B2B supply." };
export default function ProductsPage() { return <><PageHero eyebrow="Product catalog" title="Peptide products for research and development." intro="Browse selected catalog items below. Specifications, batch availability, packaging, and commercial quantities are confirmed by quotation."/><section className="py-20"><div className="shell"><ProductCatalog/><p className="mt-10 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-xs leading-6 text-amber-900">Research products are supplied for laboratory research use only and are not intended for human consumption. Availability and specifications are subject to confirmation.</p></div></section><CTA/></> }
