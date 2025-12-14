"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Activity, Cpu, Trophy, TrendingUp, Heart } from "lucide-react";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, type: "spring", bounce: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "relative overflow-hidden rounded-3xl bg-zinc-900/40 p-6 backdrop-blur-md border border-white/5 hover:border-apex-cyan/40 hover:bg-zinc-900/60 transition-all duration-300 group flex flex-col",
                className
            )}
        >
            {/* Glints */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}
        </motion.div>
    );
}

export function BentoGrid() {
    return (
        <section className="w-full px-6 md:px-20 py-24 relative z-10">
            <div className="flex flex-col gap-4 mb-16">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-apex-cyan font-mono text-sm tracking-widest uppercase"
                >
            // SYSTEM FEATURES
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-display font-bold text-white"
                >
                    PROTOCOL ARCHITECTURE
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-6">

                {/* Card 1: Quantified Gains (Large) */}
                <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-zinc-900/50 to-zinc-900/20" delay={0.1}>
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Quantified Gains</h3>
                            <p className="text-xs text-zinc-400 font-mono">MUSCLE_MASS_INDEX</p>
                        </div>
                        <TrendingUp className="text-apex-cyan w-6 h-6" />
                    </div>
                    <div className="flex-1 w-full bg-black/20 rounded-xl border border-white/5 relative overflow-hidden flex items-end p-4 gap-2">
                        {/* Fake Chart */}
                        {[30, 45, 35, 60, 55, 75, 80, 70, 90, 100].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.05), duration: 0.5 }}
                                className="flex-1 bg-apex-cyan/20 hover:bg-apex-cyan transition-colors rounded-t-sm relative group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-apex-cyan shadow-[0_0_10px_#00fff2] opacity-50 group-hover:opacity-100" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center font-mono text-sm">
                        <span className="text-zinc-500">GROWTH_RATE</span>
                        <span className="text-apex-cyan">+14.2%</span>
                    </div>
                </BentoCard>

                {/* Card 2: AI Coaching (Vertical) */}
                <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2" delay={0.2}>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">AI Coach</h3>
                        <Cpu className="text-apex-magenta w-6 h-6" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-4">
                        <p className="text-sm text-zinc-400 italic">"Increase velocity. Engage core stabilizers."</p>

                        {/* Visual Waveform */}
                        <div className="flex items-center justify-center gap-1 h-12">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: ["20%", "80%", "20%"] }}
                                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.1, ease: "easeInOut" }}
                                    className="w-1 bg-apex-magenta rounded-full shadow-[0_0_10px_#ff00c8]"
                                />
                            ))}
                        </div>
                    </div>
                </BentoCard>

                {/* Card 3: Streak (Small) */}
                <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1" delay={0.3}>
                    <div className="flex items-center gap-4 h-full">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                            {/* Ring */}
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="32" cy="32" r="28" stroke="#333" strokeWidth="4" fill="none" />
                                <motion.circle
                                    cx="32" cy="32" r="28"
                                    stroke="#ff00c8" strokeWidth="4"
                                    strokeDasharray="175"
                                    initial={{ strokeDashoffset: 175 }}
                                    whileInView={{ strokeDashoffset: 40 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    fill="none"
                                />
                            </svg>
                            <Trophy className="w-5 h-5 text-apex-magenta absolute" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold font-mono text-white">24</div>
                            <div className="text-xs text-zinc-400 uppercase">Day Streak</div>
                        </div>
                    </div>
                </BentoCard>

                {/* Card 4: Bio-Metrics (Small) */}
                <BentoCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1" delay={0.4}>
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-zinc-400 uppercase">Heart Rate</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        </div>
                        <div className="text-4xl font-mono font-bold text-white flex items-baseline gap-2">
                            145 <span className="text-sm text-zinc-500 font-sans font-normal">BPM</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-red-500 w-[70%]" />
                        </div>
                    </div>
                </BentoCard>

            </div>
        </section>
    );
}
