"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Arrow } from "./Icons";
import { site } from "@/lib/site";

export default function RFQForm() {
  const params = useSearchParams();
  const [product, setProduct] = useState("");
  useEffect(() => { setProduct(params.get("product") || ""); }, [params]);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [`Name: ${data.get("name")}`, `Company: ${data.get("company")}`, `Email: ${data.get("email")}`, `Product / sequence: ${data.get("product")}`, `Quantity: ${data.get("quantity")}`, `Purity: ${data.get("purity")}`, "", String(data.get("message") || "")].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("RFQ – " + (data.get("product") || "Peptide Inquiry"))}&body=${encodeURIComponent(body)}`;
  }
  return <form onSubmit={submit} className="card !p-6 sm:!p-8">
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-bold text-ink/65">Name *<input name="name" required className="input mt-2" placeholder="Your name"/></label><label className="text-xs font-bold text-ink/65">Company *<input name="company" required className="input mt-2" placeholder="Company or institution"/></label><label className="text-xs font-bold text-ink/65">Business email *<input type="email" name="email" required className="input mt-2" placeholder="name@company.com"/></label><label className="text-xs font-bold text-ink/65">Product / sequence *<input name="product" required value={product} onChange={e => setProduct(e.target.value)} className="input mt-2" placeholder="Product name or amino acid sequence"/></label><label className="text-xs font-bold text-ink/65">Target quantity<input name="quantity" className="input mt-2" placeholder="e.g. 5 g, 100 vials"/></label><label className="text-xs font-bold text-ink/65">Target purity<select name="purity" className="input mt-2"><option>Not sure</option><option>≥95%</option><option>≥98%</option><option>≥99%</option><option>Other / custom</option></select></label></div>
    <label className="mt-5 block text-xs font-bold text-ink/65">Project details<textarea name="message" rows={5} className="input mt-2 resize-none" placeholder="Application, modifications, packaging, testing, timeline, or other requirements"/></label>
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-sm text-[11px] leading-5 text-ink/45">Submitting opens your email client with the inquiry pre-filled. No personal data is stored on this website.</p><button className="btn-primary" type="submit">Prepare RFQ email <Arrow className="h-4 w-4"/></button></div>
  </form>;
}
