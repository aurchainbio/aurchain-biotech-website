import Link from "next/link";
export default function NotFound(){return <section className="shell py-32 text-center"><p className="eyebrow">404</p><h1 className="display mt-4 text-5xl">This sequence could not be found.</h1><p className="mt-5 text-ink/55">The page may have moved or no longer exists.</p><Link href="/" className="btn-primary mt-8">Return home</Link></section>}
