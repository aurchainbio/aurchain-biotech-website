import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className="group flex items-center gap-3" aria-label="Aurchain Biotech home">
    <span className={`relative grid h-10 w-10 place-items-center rounded-full border ${light ? "border-white/30" : "border-pine/20"}`}>
      <span className={`absolute h-5 w-5 rotate-45 rounded-[5px] border ${light ? "border-mint" : "border-teal"}`} />
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-gold" : "bg-pine"}`} />
    </span>
    <span className="leading-none"><span className={`block font-serif text-[19px] tracking-[-.02em] ${light ? "text-white" : "text-ink"}`}>Aurchain</span><span className={`mt-1 block text-[9px] font-bold uppercase tracking-[.28em] ${light ? "text-white/60" : "text-teal"}`}>Biotech</span></span>
  </Link>;
}
