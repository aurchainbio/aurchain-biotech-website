import Link from "next/link";
import Logo from "./Logo";
import { Mail, Message } from "./Icons";
import { site, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return <footer className="bg-ink text-white">
    <div className="shell grid gap-12 py-16 md:grid-cols-[1.3fr_.7fr_.7fr]">
      <div><Logo light /><p className="mt-6 max-w-sm text-sm leading-7 text-white/60">Reliable peptide solutions for research, formulation, and product development teams worldwide.</p><p className="mt-5 text-xs font-bold uppercase tracking-[.18em] text-gold">Research precision. Supply confidence.</p></div>
      <div><p className="text-xs font-bold uppercase tracking-[.2em] text-white/40">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/70"><Link href="/products">Products</Link><Link href="/custom-peptide-synthesis">Custom Synthesis</Link><Link href="/quality-control">Quality Control</Link><Link href="/about">About Us</Link></div></div>
      <div><p className="text-xs font-bold uppercase tracking-[.2em] text-white/40">Contact</p><div className="mt-5 flex flex-col gap-4 text-sm"><a href={`mailto:${site.email}`} className="flex items-center gap-2 text-white/75 hover:text-white"><Mail className="h-4 w-4"/>{site.email}</a><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/75 hover:text-white"><Message className="h-4 w-4"/>WhatsApp inquiry</a></div></div>
    </div>
    <div className="border-t border-white/10"><div className="shell flex flex-col gap-2 py-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Aurchain Biotech. All rights reserved.</span><span>Research products are not for human consumption.</span></div></div>
  </footer>;
}
