import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`inline-flex shrink-0 items-center ${light ? "rounded-xl bg-white px-3 py-1.5" : ""}`} aria-label="Aurchain Biotech home">
    <img src="/logo.svg" alt="AURCHAIN BIOTECH" className="h-[45px] w-auto sm:h-[50px]" width="219" height="50" />
  </Link>;
}
