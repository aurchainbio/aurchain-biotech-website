import type { SVGProps } from "react";

const Base = ({ children, ...props }: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
export const Arrow = (p: SVGProps<SVGSVGElement>) => <Base {...p}><path d="M5 12h14M14 7l5 5-5 5" /></Base>;
export const Mail = (p: SVGProps<SVGSVGElement>) => <Base {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Base>;
export const Message = (p: SVGProps<SVGSVGElement>) => <Base {...p}><path d="M20 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.8-1.2L3 20l1.3-4a8.5 8.5 0 1 1 15.7-4.5Z"/><path d="M8.5 9.5c.8 2 2 3.3 4.2 4.1"/></Base>;
export const Search = (p: SVGProps<SVGSVGElement>) => <Base {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></Base>;
export const Menu = (p: SVGProps<SVGSVGElement>) => <Base {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Base>;
export const Close = (p: SVGProps<SVGSVGElement>) => <Base {...p}><path d="m6 6 12 12M18 6 6 18"/></Base>;
export const Check = (p: SVGProps<SVGSVGElement>) => <Base {...p}><path d="m5 12 4 4L19 6"/></Base>;
