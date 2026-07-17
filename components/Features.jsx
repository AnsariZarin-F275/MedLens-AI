"use client";

import { Activity, ClipboardPlus, FileText, HeartHandshake, LockKeyhole, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  [Activity, "AI symptom analysis", "Turn your concerns into structured signals that help make sense of what may need attention."],
  [ClipboardPlus, "Emergency risk assessment", "Understand the level of urgency with easy-to-follow indicators designed for decisive action."],
  [HeartHandshake, "First-aid guidance", "Receive calm, step-by-step support for immediate care while you seek professional help."],
  [Stethoscope, "Doctor recommendation", "Get direction on the right type of care, from a clinic visit to emergency services."],
  [FileText, "Medical report generation", "Create a clear summary of symptoms and context to make your next conversation more productive."],
  [LockKeyhole, "Privacy focused", "Your health concerns deserve discretion. MedLens is built with a privacy-first mindset."],
];

export default function Features() {
  return <section id="features" className="bg-white px-5 py-20 sm:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">Purpose-built support</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">More clarity when health feels uncertain.</h2><p className="mt-5 text-lg leading-8 text-slate-600">MedLens combines practical emergency guidance with an experience that stays simple in stressful moments.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(([Icon, title, description], index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} whileHover={{ y: -5 }} className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5"><span className="grid size-11 place-items-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white"><Icon size={21} /></span><h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></motion.article>)}</div></div></section>;
}
