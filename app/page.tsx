import Link from "next/link";
import { Arrow, Check } from "@/components/Icons";
import CTA from "@/components/CTA";

const capabilities = [
  ["01", "Research Peptides", "Consistent, traceable peptide supply for qualified laboratory and R&D applications.", "/products"],
  ["02", "Cosmetic Peptides", "Functional peptide ingredients for formulation development, scale-up, and brand programs.", "/products"],
  ["03", "Custom Synthesis", "Sequence-specific synthesis with flexible purity, modification, and analytical options.", "/custom-peptide-synthesis"],
  ["04", "Bulk & OEM/ODM", "Commercial quantities, tailored packaging, and supply support built around your program.", "/contact#rfq"]
];

const proofPoints = ["Batch-specific COA", "Flexible quantities", "Global B2B support"];

export default function Home() {
  return <>
    <section className="relative min-h-[740px] overflow-hidden bg-fog">
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute -right-40 -top-48 h-[700px] w-[700px] rounded-full border-[120px] border-mint/60" />
      <div className="shell relative grid min-h-[740px] items-center gap-12 py-20 lg:grid-cols-[1.08fr_.92fr]">
        <div className="relative z-10">
          <p className="eyebrow">Peptide solutions for ambitious teams</p>
          <h1 className="display mt-6 max-w-3xl text-[54px] text-ink sm:text-7xl lg:text-[82px]">Precision in every <span className="italic text-teal">sequence.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate sm:text-lg">Research peptides, cosmetic actives, custom synthesis, and scalable B2B supply—supported by responsive service and documented quality.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary">Explore Products <Arrow className="h-4 w-4" /></Link>
            <Link href="/contact#rfq" className="btn-secondary">Start an RFQ</Link>
          </div>
          <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-ink/60">
            {proofPoints.map(point => <span key={point} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-white shadow-sm"><Check className="h-3 w-3 text-teal" /></span>{point}</span>)}
          </div>
        </div>

        <div className="relative mx-auto hidden h-[510px] w-full max-w-[500px] lg:block" aria-hidden="true">
          <div className="absolute inset-0 rounded-[40px] border border-white/80 bg-white/65 shadow-[0_30px_90px_rgba(6,61,54,.12)] backdrop-blur-sm" />
          <div className="absolute inset-8 overflow-hidden rounded-[28px] bg-ink">
            <div className="absolute inset-0 opacity-20 grid-lines" />
            <svg className="molecule-float absolute left-1/2 top-1/2 h-[330px] w-[250px] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 240 360" fill="none">
              <path d="M61 24c105 60 105 252 0 312M179 24C74 84 74 276 179 336" stroke="#EEF7F3" strokeWidth="8" strokeLinecap="round" />
              <path d="m78 52 84 30M55 104l130 47M51 171l138 50M56 241l127 46M79 309l82 29" stroke="#72B47A" strokeWidth="5" strokeLinecap="round" />
              {[24, 82, 151, 221, 287, 336].map((y, index) => <circle key={y} cx={index % 2 ? 179 : 61} cy={y} r="10" fill={index % 2 ? "#9ABF78" : "#2E7D32"} stroke="#fff" strokeWidth="4" />)}
            </svg>
            <span className="absolute left-8 top-10 h-3 w-3 rounded-full bg-gold" />
            <span className="absolute right-10 top-20 h-5 w-5 rounded-full border-[5px] border-white bg-teal" />
            <span className="absolute bottom-20 left-11 h-4 w-4 rounded-full border-4 border-white bg-teal" />
          </div>
          <div className="absolute -bottom-2 -left-5 rounded-2xl border border-ink/10 bg-white px-6 py-5 shadow-soft">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-teal">Quality framework</p>
            <p className="mt-2 font-serif text-xl text-ink">Identity · Purity · Traceability</p>
          </div>
          <div className="absolute -right-4 top-12 rounded-xl border border-white bg-fog px-4 py-3 shadow-soft">
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-ink/50">Sequence-led</span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">Built for B2B</p><h2 className="display mt-4 text-4xl text-ink sm:text-5xl">From early research to dependable supply.</h2><p className="mt-6 max-w-md text-sm leading-7 text-slate">A focused partner for peptide sourcing, development, and scale-up—without unnecessary complexity.</p></div>
          <div className="grid gap-px overflow-hidden rounded-[22px] border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {capabilities.map(([number, title, description, href]) => <Link href={href} key={title} className="group bg-white p-7 transition hover:bg-fog"><span className="text-[11px] font-bold text-teal">{number}</span><h3 className="mt-8 font-serif text-2xl text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-slate">{description}</p><Arrow className="mt-6 h-5 w-5 text-teal transition group-hover:translate-x-1" /></Link>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-fog py-24">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-[24px] bg-pine p-9 text-white grid-lines">
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border-[50px] border-white/5" />
          <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">A clear process</p>
          <div className="relative mt-14 space-y-6">{[["01", "Define", "Sequence, grade, quantity, timeline"], ["02", "Produce", "Synthesis, purification, lyophilization"], ["03", "Verify", "Analytical review and documentation"], ["04", "Deliver", "Protective packing and coordinated shipping"]].map(([number, title, description]) => <div key={number} className="grid grid-cols-[42px_1fr] gap-3 border-b border-white/10 pb-5"><span className="text-xs text-gold">{number}</span><div><p className="font-bold">{title}</p><p className="mt-1 text-xs text-white/50">{description}</p></div></div>)}</div>
        </div>
        <div><p className="eyebrow">Custom peptide synthesis</p><h2 className="display mt-4 text-4xl text-ink sm:text-5xl">Your target. Our disciplined workflow.</h2><p className="mt-6 text-base leading-8 text-slate">Whether you need milligram research material or a larger development batch, we align synthesis strategy and analytics with your intended application.</p><ul className="mt-7 grid gap-3 text-sm font-bold text-ink sm:grid-cols-2">{["Standard & modified peptides", "Multiple purity options", "HPLC & MS documentation", "Flexible packaging", "Scale-up support", "Confidential project handling"].map(item => <li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-mint"><Check className="h-3.5 w-3.5 text-teal" /></span>{item}</li>)}</ul><Link href="/custom-peptide-synthesis" className="btn-primary mt-9">View capabilities <Arrow className="h-4 w-4" /></Link></div>
      </div>
    </section>
    <CTA />
  </>;
}
