"use client";

import { ArrowRight, CheckCircle2, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import HealthcareIllustration from "./HealthcareIllustration";

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 px-5 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="absolute left-[-8%] top-12 size-80 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="absolute bottom-0 right-[-4%] size-72 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.12 }} className="max-w-2xl">
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="text-base">🚑</span> AI emergency healthcare
          </motion.div>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 text-5xl font-bold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Emergency triage <span className="text-blue-600">powered by AI.</span>
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Describe what you’re experiencing and get calm, clear guidance on urgency, next steps, and first-aid support when every moment matters.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/analyze" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700">Analyze symptoms <ArrowRight size={18} /></Link>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50">Learn more</a>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
            {["Private by design", "Clear next steps", "Always available"].map((item) => <span key={item} className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-600" />{item}</span>)}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.2 }} className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-[2.5rem] bg-blue-300/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/70 p-3 shadow-2xl shadow-blue-950/10 backdrop-blur-xl sm:p-5"><HealthcareIllustration /></div>
          <div className="hidden relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/70 p-4 shadow-2xl shadow-blue-950/10 backdrop-blur-xl sm:p-5">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white sm:p-8">
              <div className="flex items-center justify-between"><span className="text-sm font-medium text-blue-100">MedLens assessment</span><span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold">Live AI</span></div>
              <div className="mt-9 flex items-center justify-center"><div className="grid size-36 place-items-center rounded-full border-[12px] border-white/15 bg-white/10"><HeartPulse size={57} strokeWidth={1.5} /></div></div>
              <div className="mt-8 rounded-2xl bg-white/10 p-4"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-white text-blue-600"><Sparkles size={18} /></span><div><p className="text-sm font-semibold">Ready to help</p><p className="mt-0.5 text-xs text-blue-100">Tell us what’s concerning you.</p></div></div></div>
            </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute -bottom-5 -left-3 rounded-2xl border border-white/80 bg-white/90 p-3.5 shadow-xl backdrop-blur sm:-left-10"><div className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><ShieldCheck size={19} /></span><div><p className="text-xs font-bold text-slate-900">Guidance you can trust</p><p className="text-[11px] text-slate-500">Built for clarity</p></div></div></motion.div>
        </motion.div>
      </div>
    </section>

);
}
