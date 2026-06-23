import { Mail, Message } from "./Icons";
import { site, whatsappUrl } from "@/lib/site";

export default function FloatingContact() {
  return <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2 sm:right-6">
    <a href={`mailto:${site.email}`} aria-label="Email Aurchain Biotech" className="grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-soft transition hover:-translate-y-1"><Mail className="h-5 w-5"/></a>
    <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1"><Message className="h-6 w-6"/></a>
  </div>;
}
