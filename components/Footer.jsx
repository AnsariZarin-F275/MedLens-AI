import { Globe2, MessageCircle, Send, Stethoscope } from "lucide-react";

const links = [["Features", "#features"], ["How it works", "#how-it-works"], ["About", "#about"], ["Get started", "#cta"]];
const channelLinks = [
  [Globe2, "GitHub repository", "https://github.com/AnsariZarin-F275/MedLens-AI", true],
  [MessageCircle, "LinkedIn profile", "https://www.linkedin.com/in/zarin-fatima/", true],
  [Send, "Email Ansari Zarin Fatima", "mailto:ansarizarinfatima@gmail.com", false ],
];

export default function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-5 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><a href="#home" className="flex items-center gap-2 text-slate-950"><span className="grid size-8 place-items-center rounded-lg bg-blue-600 text-white"><Stethoscope size={17} /></span><span className="font-bold">MedLens AI</span></a><p className="mt-3 text-sm text-slate-500">AI-powered emergency triage & first response assistant.</p><p className="mt-2 text-sm font-medium text-blue-600">Idea2Impact Hackathon 2026</p></div><div className="flex flex-col items-start gap-5 sm:items-end"><nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600" aria-label="Footer navigation">{links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-blue-600">{label}</a>)}</nav><div className="flex gap-2" aria-label="MedLens channels">{channelLinks.map(([Icon, label, href, external]) => <a key={label} href={href} aria-label={label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"><Icon size={17} aria-hidden="true" /></a>)}</div></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-slate-100 pt-5 text-sm text-slate-500">© 2026 MedLens AI. All rights reserved.</div></footer>;
}
