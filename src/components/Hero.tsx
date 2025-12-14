"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { ModelView } from "./ModelView";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleLinesRef = useRef<(HTMLHeadingElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Staggered Title Reveal
            tl.from(titleLinesRef.current, {
                yPercent: 100,
                opacity: 0,
                rotateX: -20,
                stagger: 0.15,
                duration: 1.2,
                ease: "power4.out",
            });

            // Button Reveal
            tl.from(buttonRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.6");

            // Optional: Parallax for Hero Elements on Scroll
            gsap.to(".hero-parallax", {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLHeadingElement | null) => {
        if (el && !titleLinesRef.current.includes(el)) {
            titleLinesRef.current.push(el);
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-20 overflow-hidden">

            {/* Left Text */}
            <div className="flex flex-col items-start gap-8 z-20 max-w-4xl relative">
                <div className="overflow-hidden">
                    <h1 ref={addToRefs} className="text-7xl md:text-9xl font-bold font-display tracking-tighter text-white leading-[0.85] uppercase">
                        Upgrade
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <h1 ref={addToRefs} className="text-7xl md:text-9xl font-bold font-display tracking-tighter text-white leading-[0.85] uppercase">
                        Your
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <h1 ref={addToRefs} className="text-7xl md:text-9xl font-bold font-display tracking-tighter text-apex-cyan leading-[0.85] uppercase relative">
                        Hardware.
                    </h1>
                </div>

                <p className="hero-parallax text-lg md:text-2xl text-zinc-400 max-w-lg font-light leading-relaxed font-sans mt-8">
                    The first bio-hacking fitness protocol that gamifies human performance.
                </p>

                <button
                    ref={buttonRef}
                    className="group relative px-8 py-5 bg-zinc-900 border border-apex-cyan/30 text-apex-cyan font-mono font-bold uppercase tracking-widest overflow-hidden interactive"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Initialize <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-apex-cyan/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
            </div>

            {/* Right Visual */}
            <div className="hero-parallax w-full lg:w-1/2 h-[60vh] lg:h-[80vh] absolute top-10 right-0 lg:relative lg:top-auto lg:right-auto z-10 opacity-60 lg:opacity-100 pointer-events-none">
                <ModelView />
            </div>
        </section>
    );
}
