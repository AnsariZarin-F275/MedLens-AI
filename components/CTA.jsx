"use client";

import { ArrowRight, Check, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  [Sparkles, "Clear, human guidance", "Helpful direction in moments, not hours."],
  [ShieldCheck, "Built around trust", "Simple pathways for practical decisions."],
  [HeartPulse, "Care within reach", "Support that fits everyday life."],
];

export default function CTA() {
  return (
    <>
      <section id="about" className="relative overflow-hidden bg-white px-5 py-20 sm:py-28">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-50/70" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">Why MedLens AI</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Care guidance should be easier to reach.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">MedLens is designed to help people pause, understand what matters, and take a confident next step—without adding noise in a stressful moment.</p></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map(([Icon, title, text], index) => <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }} className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-xl shadow-blue-950/5 backdrop-blur"><span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-white"><Icon size={19} /></span><h3 className="mt-5 font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></motion.article>)}
          </div>
        </div>
      </section>
      <section id="cta" className="px-5 pb-20 sm:pb-28"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-6 py-14 text-center text-white shadow-2xl shadow-blue-600/20 sm:px-12 sm:py-20"><div className="absolute -left-10 top-0 size-48 rounded-full bg-white/10 blur-2xl" /><div className="absolute -bottom-16 right-10 size-56 rounded-full bg-cyan-300/20 blur-2xl" /><div className="relative"><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">Ready when you are</p><h2 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Ready to check your symptoms?</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-blue-50">Start with a clearer understanding of what you&apos;re experiencing and what to do next.</p><a href="#home" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50">Start free analysis <ArrowRight size={18} /></a><p className="mt-5 flex items-center justify-center gap-1.5 text-sm text-blue-100"><Check size={15} /> Informational support, always encouraging professional care when needed.</p></div></div></section>
    </>
  );
}
