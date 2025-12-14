import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { TextReveal } from "@/components/TextReveal";
import { StickyScroll } from "@/components/StickyScroll";
import { BentoGrid } from "@/components/BentoGrid";
import { Gamification } from "@/components/Gamification";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative selection:bg-apex-cyan selection:text-black">
      <Background />
      <div className="flex flex-col">
        <Hero />
        <TextReveal />
        <StickyScroll />
        <BentoGrid />
        <Gamification />
      </div>

      {/* Simple Footer */}
      <footer className="py-20 text-center border-t border-white/5 bg-black/50 backdrop-blur-md relative z-10">
        <div className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">
          Apex Protocol // System Version 2.0
        </div>
        <div className="text-zinc-700 text-sm">
          &copy; 2025 Apex Inc. All systems functional.
        </div>
      </footer>
    </main>
  );
}
