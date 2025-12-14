"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Initial hide
        gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0 });
        gsap.set(follower, { xPercent: -50, yPercent: -50, scale: 0 });

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                scale: 1,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                scale: isHovering ? 2 : 1, // Larger when hovering
                ease: "power3.out"
            });
        };

        const onHoverStart = () => setIsHovering(true);
        const onHoverEnd = () => setIsHovering(false);

        window.addEventListener("mousemove", onMouseMove);

        // Add event listeners to interactive elements
        const interactiveElements = document.querySelectorAll("a, button, .interactive");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", onHoverStart);
            el.addEventListener("mouseleave", onHoverEnd);
        });

        // Observer for dynamic elements
        const observer = new MutationObserver((mutations) => {
            const newElements = document.querySelectorAll("a, button, .interactive");
            newElements.forEach((el) => {
                el.removeEventListener("mouseenter", onHoverStart);
                el.removeEventListener("mouseleave", onHoverEnd);
                el.addEventListener("mouseenter", onHoverStart);
                el.addEventListener("mouseleave", onHoverEnd);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            observer.disconnect();
        };
    }, [isHovering]);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-apex-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference"
            />
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-8 h-8 border border-apex-cyan/50 rounded-full pointer-events-none z-[9998] transition-colors duration-300 ${isHovering ? 'bg-apex-cyan/10 border-apex-cyan' : ''}`}
            />
        </>
    );
}
