"use client";

import { Menu, Stethoscope, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = links.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(`#${visible.target.id}`);
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href, mobile = false) => `${mobile ? "block rounded-xl px-4 py-3" : ""} text-sm font-medium transition ${activeSection === href ? "text-blue-600" : mobile ? "text-slate-700 hover:bg-blue-50 hover:text-blue-600" : "text-slate-600 hover:text-blue-600"}`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-blue-100/80 bg-white/75 px-4 py-3 shadow-[0_10px_30px_rgba(37,99,235,0.08)] backdrop-blur-xl sm:px-5" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2.5 text-slate-950" aria-label="MedLens AI home">
          <span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
            <Stethoscope size={20} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-bold tracking-tight">MedLens AI</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <Link href="/analyze" className="hidden rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:block">
          Get Started
        </Link>
        <button type="button" className="grid size-10 place-items-center rounded-xl text-slate-700 transition hover:bg-blue-50 md:hidden" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isOpen}>
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl border border-blue-100 bg-white p-3 shadow-xl md:hidden">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={linkClass(link.href, true)}>
                  {link.label}
                </a>
              ))}
              <Link href="/analyze" onClick={() => setIsOpen(false)} className="mt-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white">Get Started</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
