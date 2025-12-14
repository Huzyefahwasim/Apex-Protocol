"use client";
import { motion } from "framer-motion";

export function Gamification() {
    return (
        <section className="w-full px-6 md:px-20 py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                        LEVEL UP YOUR <span className="text-apex-cyan">AVATAR</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Earn XP for every workout. Unlock real-world rewards and digital assets as you upgrade your biological hardware.
                    </p>
                </motion.div>
            </div>

            {/* XP Bar Section */}
            <div className="max-w-5xl mx-auto relative mb-20">
                <div className="flex justify-between items-end mb-2 font-mono text-sm text-apex-cyan">
                    <span>LVL 12</span>
                    <span>LVL 13</span>
                </div>

                {/* Bar Background */}
                <div className="h-6 w-full bg-zinc-900 border border-zinc-800 rounded-full relative overflow-hidden">
                    {/* Reflection/Shine */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 z-20 pointer-events-none" />

                    {/* Fill */}
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "72%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-apex-cyan/50 via-apex-cyan to-white relative z-10"
                    >
                        <div className="absolute right-0 top-0 h-full w-2 bg-white blur-[2px] animate-pulse" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#00fff2]" />
                    </motion.div>
                </div>

                <div className="text-right mt-2 font-mono text-xs text-zinc-500">
                    8,450 / 10,000 XP
                </div>

                {/* Milestones */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[
                        { label: "10K LBS Lifted", xp: "+500 XP", active: true },
                        { label: "7 Day Streak", xp: "+1000 XP", active: true },
                        { label: "Marathon Finish", xp: "+5000 XP", active: false },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            viewport={{ once: true }}
                            className={`p-4 rounded-xl border ${item.active ? 'border-apex-cyan/20 bg-apex-cyan/5' : 'border-zinc-800 bg-zinc-900/50 opacity-50'} flex flex-col items-center justify-center text-center gap-2`}
                        >
                            <div className={`text-sm font-bold ${item.active ? 'text-white' : 'text-zinc-500'}`}>{item.label}</div>
                            <div className="text-xs font-mono text-apex-magenta">{item.xp}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
