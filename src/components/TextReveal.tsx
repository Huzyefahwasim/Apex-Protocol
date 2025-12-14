"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TextReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const text = textRef.current;
            if (!text) return;

            // Split text logic could go here if using SplitText plugin (paid), 
            // but for now we'll do a simple opacity scrub or manual span wrapping if needed.
            // We'll trust the user wants a simple scrub for now or simulate it.

            gsap.fromTo(text,
                { opacity: 0.2 },
                {
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 50%",
                        scrub: true,
                    }
                }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-20 min-h-[50vh] flex items-center justify-center">
            <p ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-center max-w-5xl text-white">
                Transform your biological infrastructure into a high-performance machine.
                Data-driven training meets immersive gamification.
            </p>
        </section>
    );
}
