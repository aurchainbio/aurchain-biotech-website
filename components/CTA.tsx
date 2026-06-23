import Link from "next/link";
import { Arrow } from "./Icons";

export default function CTA() {
  return <section className="bg-white py-20"><div className="shell"><div className="relative overflow-hidden rounded-[30px] bg-pine px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-14"><div className="absolute -right-12 -top-28 h-72 w-72 rounded-full border-[50px] border-white/5"/><div className="relative"><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Start a conversation</p><h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">Tell us what your project needs.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Share your target, purity, quantity, and timeline. Our team will respond with a practical next step.</p></div><Link href="/contact#rfq" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink lg:mt-0">Request a Quote <Arrow className="h-4 w-4"/></Link></div></div></section>;
}
