"use client";

import { ArrowRight, BrainCircuit, MessageSquareText, Siren } from "lucide-react";
import { motion } from "framer-motion";

const steps = [["01", MessageSquareText, "Enter symptoms", "Share what you’re feeling in your own words, along with helpful context."], ["02", BrainCircuit, "AI analysis", "MedLens organizes your information and identifies relevant urgency signals."], ["03", Siren, "Receive guidance", "Get practical next steps, including when to seek urgent professional care."]];

export default function HowItWorks() {
  return <section id="how-it-works" className="bg-slate-950 px-5 py-20 text-white sm:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Simple by design</p><h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">From uncertainty to a clearer next step.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{steps.map(([number, Icon, title, description], index) => <motion.article key={number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative rounded-2xl border border-white/10 bg-white/5 p-7"><span className="text-sm font-bold text-blue-300">{number}</span><span className="mt-8 grid size-12 place-items-center rounded-xl bg-blue-500/15 text-blue-300"><Icon size={24} /></span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{description}</p>{index < 2 && <ArrowRight className="absolute -right-8 top-1/2 hidden text-blue-300 lg:block" />}</motion.article>)}</div><p className="mt-8 text-sm text-slate-400">MedLens offers informational support and is not a replacement for emergency services or professional medical care.</p></div></section>;
}
