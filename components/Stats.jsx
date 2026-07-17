"use client";

import { motion } from "framer-motion";

const stats = [["24/7", "AI assistance"], ["<10 sec", "analysis guidance"], ["Clear", "emergency direction"], ["Smart", "triage support"]];

export default function Stats() {
  return <section className="relative z-10 -mt-8 px-5"><div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-950/5 sm:grid-cols-4">{stats.map(([value, label], index) => <motion.div key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-b border-r border-blue-50 px-5 py-6 text-center last:border-r-0 sm:border-b-0 sm:px-6 sm:py-8"><p className="text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl">{value}</p><p className="mt-1 text-sm font-medium text-slate-600">{label}</p></motion.div>)}</div></section>;
}
