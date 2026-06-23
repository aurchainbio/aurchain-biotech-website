"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { Close, Mail, Menu } from "./Icons";
import { site } from "@/lib/site";

const links = [
  ["Products", "/products"], ["Custom Synthesis", "/custom-peptide-synthesis"],
  ["Quality", "/quality-control"], ["About", "/about"], ["Contact", "/contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
    <div className="shell flex h-[76px] items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href} className={`text-[13px] font-bold transition hover:text-teal ${path === href ? "text-teal" : "text-ink/70"}`}>{label}</Link>)}
      </nav>
      <a href={`mailto:${site.email}`} className="btn-primary hidden !px-5 !py-3 sm:inline-flex"><Mail className="h-4 w-4" /> Request a Quote</a>
      <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 lg:hidden" aria-label="Toggle menu" aria-expanded={open}>{open ? <Close className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}</button>
    </div>
    {open && <nav className="border-t border-ink/10 bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation">
      <div className="mx-auto flex max-w-[1240px] flex-col">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-ink/10 py-3.5 text-sm font-bold">{label}</Link>)}</div>
    </nav>}
  </header>;
}
