"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Zap, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Bio-Metrics Analysis",
        description: "Real-time parsing of heart rate variability and metabolic output.",
        icon: <Activity className="w-8 h-8 text-apex-cyan" />,
        color: "from-apex-cyan/20 to-apex-cyan/5",
    },
    {
        title: "Neural Optimization",
        description: "AI-driven coaching to maximize neuromuscular recruitment.",
        icon: <Zap className="w-8 h-8 text-apex-magenta" />,
        color: "from-apex-magenta/20 to-apex-magenta/5",
    },
    {
        title: "System Hardening",
        description: "Progressive overload protocols to increase structural integrity.",
        icon: <Shield className="w-8 h-8 text-violet-500" />,
        color: "from-violet-500/20 to-violet-500/5",
    },
];

export function StickyScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the left column while scrolling the right column
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftColRef.current,
                // markers: true, // debug
            });

            // Animate cards in the right column
            const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
            cards.forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 60%",
                        scrub: true,
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[200vh] w-full flex flex-col lg:flex-row px-6 md:px-20 py-20 gap-10">

            {/* Left Sticky Column */}
            <div ref={leftColRef} className="lg:w-1/2 h-screen flex flex-col justify-center px-4">
                <div className="mb-8">
                    <h2 className="text-apex-cyan font-mono text-sm tracking-widest uppercase mb-4">// MODULES</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                        CORE_SYSTEM <br /> FEATURES
                    </h3>
                    <p className="text-zinc-400 text-lg max-w-md">
                        Advanced tools designed to upgrade your daily operations. Scroll to explore the dataset.
                    </p>
                </div>
            </div>

            {/* Right Scrollable Column */}
            <div ref={rightColRef} className="lg:w-1/2 flex flex-col gap-32 py-20 pb-64">
                {features.map((feature, i) => (
                    <div key={i} className="feature-card min-h-[400px] w-full rounded-3xl bg-zinc-900 border border-white/10 p-10 flex flex-col justify-between hover:border-apex-cyan/30 transition-colors duration-500 group relative overflow-hidden">
                        {/* Gradient bg */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                        <div className="relative z-10 p-4 bg-black/50 w-fit rounded-full border border-white/10 backdrop-blur-md mb-8">
                            {feature.icon}
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-3xl font-display font-bold text-white mb-2">{feature.title}</h4>
                            <p className="text-zinc-400 font-mono text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
