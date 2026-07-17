"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, BrainCircuit, Check, ChevronLeft, ClipboardList, HeartPulse, ShieldCheck, UserRound } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { saveAnalysisResult } from "@/lib/analysis-result";

const steps = [["Personal", UserRound], ["History", ClipboardList], ["Symptoms", HeartPulse], ["Review", ShieldCheck]];
const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

function Field({ label, hint, children }) {
  return <label className="block text-sm font-semibold text-slate-700"><span>{label}</span>{hint && <span className="ml-1 font-normal text-slate-400">{hint}</span>}{children}</label>;
}

function Input({ label, hint, ...props }) {
  return <Field label={label} hint={hint}><input className={inputClass} {...props} /></Field>;
}

function Choice({ label, value, selected, onChange }) {
  return <button type="button" onClick={() => onChange(value)} className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${selected === value ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50"}`} aria-pressed={selected === value}>{label}</button>;
}

export default function AnalyzeForm() {
  const router = useRouter();
  const formRef = useRef(null);
  const [step, setCurrentStep] = useState(0);
  const [choices, setChoices] = useState({ gender: "", breathing: "", chestPain: "", pain: 5 });
  const [draft, setDraft] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const setChoice = (name, value) => setChoices((current) => ({ ...current, [name]: value }));

  function saveCurrentStep() {
    if (!formRef.current) return;
    const values = Object.fromEntries([...new FormData(formRef.current).entries()].filter(([, value]) => !(value instanceof File)));
    setDraft((current) => ({ ...current, ...values, painLevel: Number(choices.pain), breathingDifficulty: choices.breathing, chestPain: choices.chestPain }));
  }

  const setStep = (updater) => {
    saveCurrentStep();
    setCurrentStep(updater);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmissionError("");
    setIsSubmitting(true);
    const formData = new FormData(formRef.current);
    const intake = { ...draft, ...Object.fromEntries([...formData.entries()].filter(([, value]) => !(value instanceof File))) };
    intake.painLevel = Number(choices.pain);
    intake.breathingDifficulty = choices.breathing;
    intake.chestPain = choices.chestPain;
    try {
      const response = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(intake) });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || "We could not analyze your symptoms. Please try again.");
      saveAnalysisResult(result);
      router.push("/results");
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "We could not analyze your symptoms. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const screens = [
    <div key="personal" className="grid gap-5 sm:grid-cols-2"><Input label="Name" hint="(optional)" name="name" placeholder="Your name" /><Input label="Age" name="age" type="number" min="0" placeholder="Years" /><Field label="Gender"><select name="gender" className={inputClass} value={choices.gender} onChange={(event) => setChoice("gender", event.target.value)}><option value="">Select gender</option><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option></select></Field><div className="grid grid-cols-2 gap-3"><Input label="Height" name="height" type="number" min="0" placeholder="cm" /><Input label="Weight" name="weight" type="number" min="0" placeholder="kg" /></div></div>,
    <div key="history" className="space-y-5"><Field label="Existing conditions"><textarea name="existingConditions" className={inputClass} rows="3" placeholder="For example: diabetes, asthma, high blood pressure" /></Field><Field label="Current medications"><textarea name="currentMedications" className={inputClass} rows="3" placeholder="List medicines, supplements, or treatments you take" /></Field><Field label="Allergies"><textarea name="allergies" className={inputClass} rows="3" placeholder="List known allergies, including medicines or foods" /></Field></div>,
    <div key="symptoms" className="space-y-5"><Field label="Main symptoms"><textarea name="mainSymptoms" className={inputClass} rows="4" placeholder="Describe what you are experiencing, where it hurts, and anything that makes it better or worse" /></Field><div className="grid gap-5 sm:grid-cols-2"><Input label="Duration" name="duration" placeholder="For example: 2 days" /><Input label="Body temperature" name="bodyTemperature" type="number" step="0.1" placeholder="°C" /></div><Field label="Pain level"><div className="mt-3 flex items-center gap-4"><input name="painLevel" className="h-2 w-full cursor-pointer appearance-none rounded-full bg-blue-100 accent-blue-600" type="range" min="1" max="10" value={choices.pain} onChange={(event) => setChoice("pain", event.target.value)} /><output className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-sm font-bold text-white">{choices.pain}</output></div></Field><div className="grid gap-5 sm:grid-cols-2"><fieldset><legend className="text-sm font-semibold text-slate-700">Breathing difficulty</legend><div className="mt-2 flex gap-2"><Choice label="No" value="no" selected={choices.breathing} onChange={(value) => setChoice("breathing", value)} /><Choice label="Yes" value="yes" selected={choices.breathing} onChange={(value) => setChoice("breathing", value)} /></div></fieldset><fieldset><legend className="text-sm font-semibold text-slate-700">Chest pain</legend><div className="mt-2 flex gap-2"><Choice label="No" value="no" selected={choices.chestPain} onChange={(value) => setChoice("chestPain", value)} /><Choice label="Yes" value="yes" selected={choices.chestPain} onChange={(value) => setChoice("chestPain", value)} /></div></fieldset></div></div>,
    <div key="review" className="space-y-5"><div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><strong>Important:</strong> MedLens provides informational support only. If you have severe chest pain, serious breathing difficulty, or a life-threatening emergency, contact local emergency services immediately.</div></div>,
  ];

  return <main className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-5 sm:px-6 sm:py-8"><div className="mx-auto max-w-4xl"><header className="flex items-center justify-between"><Link href="/" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-blue-600"><ArrowLeft size={17} /> Back to home</Link><div className="flex items-center gap-2 text-slate-950"><span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white"><BrainCircuit size={19} /></span><span className="font-bold tracking-tight">MedLens AI</span></div></header><motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-3xl border border-white/80 bg-white/80 p-5 shadow-2xl shadow-blue-950/10 backdrop-blur sm:mt-12 sm:p-8"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">Symptom assessment</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Help us understand what&apos;s going on.</h1><p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">Share a few details so MedLens can organize your concerns into clear, practical next steps.</p></div><ol className="mt-8 grid grid-cols-4 gap-2" aria-label="Form progress">{steps.map(([label, Icon], index) => <li key={label} className="min-w-0"><div className="flex items-center gap-2"><span className={`grid size-8 shrink-0 place-items-center rounded-full ${index <= step ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}>{index < step ? <Check size={15} /> : <Icon size={15} />}</span><span className="hidden truncate text-sm font-semibold text-slate-700 sm:block">{label}</span></div></li>)}</ol><form ref={formRef} onSubmit={handleSubmit} className="mt-8"><AnimatePresence mode="wait"><motion.div key={step} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>{screens[step]}</motion.div></AnimatePresence>{submissionError && <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{submissionError}</p>}<div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-between"><button type="button" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0 || isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 disabled:opacity-40"><ChevronLeft size={17} /> Previous</button>{step < steps.length - 1 ? <button type="button" disabled={isSubmitting} onClick={() => setStep((current) => current + 1)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 disabled:opacity-60">Continue <ArrowRight size={17} /></button> : <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 disabled:cursor-wait disabled:opacity-60">{isSubmitting ? "Analyzing symptoms..." : "Analyze with AI"} <BrainCircuit size={17} /></button>}</div></form></motion.section><p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-5 text-slate-500">Your details are used only to structure this assessment. This page does not replace professional medical care.</p></div></main>;
}
