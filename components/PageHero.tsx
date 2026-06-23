export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="relative overflow-hidden bg-fog py-20 sm:py-28">
    <div className="absolute inset-0 grid-lines opacity-60"/><div className="absolute -right-28 -top-40 h-96 w-96 rounded-full border-[70px] border-mint/60"/>
    <div className="shell relative"><p className="eyebrow">{eyebrow}</p><h1 className="display mt-5 max-w-4xl text-5xl text-ink sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-ink/65 sm:text-lg">{intro}</p></div>
  </section>;
}
