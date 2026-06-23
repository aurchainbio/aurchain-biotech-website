"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, products } from "@/data/products";
import { Arrow, Search } from "./Icons";

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Products");
  const visible = useMemo(() => products.filter(p => (category === "All Products" || p.category === category) && `${p.name} ${p.catalog} ${p.cas}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <div>
    <div className="flex flex-col gap-5 rounded-[22px] border border-ink/10 bg-white p-5 shadow-soft lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md"><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40"/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search name, CAS or catalog number" className="input !pl-12" aria-label="Search products"/></div>
      <div className="flex gap-2 overflow-x-auto pb-1">{categories.map(c => <button key={c} onClick={() => setCategory(c)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition ${category === c ? "bg-ink text-white" : "bg-fog text-ink/60 hover:text-teal"}`}>{c}</button>)}</div>
    </div>
    <p className="mb-5 mt-8 text-xs font-bold uppercase tracking-[.18em] text-ink/45">{visible.length} products shown</p>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{visible.map(p => <article key={p.catalog} className="group rounded-[20px] border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"><div className="flex items-start justify-between gap-4"><span className="rounded-full bg-mint/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-pine">{p.category}</span><span className="text-[11px] font-bold text-ink/35">{p.catalog}</span></div><h2 className="mt-6 font-serif text-2xl text-ink">{p.name}</h2><dl className="mt-5 grid grid-cols-[72px_1fr] gap-y-2 border-t border-ink/10 pt-4 text-xs"><dt className="text-ink/45">CAS No.</dt><dd className="font-bold">{p.cas}</dd><dt className="text-ink/45">Purity</dt><dd className="font-bold">{p.purity}</dd><dt className="text-ink/45">Format</dt><dd className="font-bold">{p.format}</dd></dl><Link href={`/contact?product=${encodeURIComponent(p.name)}#rfq`} className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-teal">Request specification <Arrow className="h-4 w-4 transition group-hover:translate-x-1"/></Link></article>)}</div>
    {visible.length === 0 && <div className="rounded-[20px] bg-fog px-6 py-16 text-center"><p className="font-serif text-2xl">No matching products found.</p><p className="mt-2 text-sm text-ink/55">Try another keyword or send us a custom synthesis request.</p></div>}
  </div>;
}
