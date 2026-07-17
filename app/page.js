import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";

export default function Home() {
  return <main className="overflow-hidden"><Navbar /><Hero /><Stats /><Features /><HowItWorks /><CTA /><Footer /></main>;
}
