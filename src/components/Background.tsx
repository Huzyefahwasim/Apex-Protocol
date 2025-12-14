"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Background() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

    return (
        <div className="fixed inset-0 z-[-10] h-full w-full bg-apex-bg overflow-hidden pointer-events-none">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Floating Elements (Parallax) */}
            <motion.div
                style={{ y: y1, rotate: 15 }}
                className="absolute top-20 left-10 w-96 h-96 border border-apex-cyan/5 rounded-full blur-3xl"
            />
            <motion.div
                style={{ y: y2, rotate: -15 }}
                className="absolute bottom-20 right-10 w-[30rem] h-[30rem] border border-apex-magenta/5 rounded-full blur-3xl"
            />

            {/* Subtle Hex Mesh approximation using radial gradients or similar - simplified for now */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00fff2_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
        </div>
    );
}
