"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AnimatedText } from "./AnimatedText";
import { WaterRevealText } from "./WaterRevealText";

export function Hero() {
    return <section id="top" className="hero-section page-wrap">
        <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>ORYN STUDIO <span>/</span> CREATIVE DIGITAL AGENCY</motion.p>
            <h1>
                <AnimatedText
                    lines={[
                        "Your brand deserves",
                        <span key="accent">
                            to <WaterRevealText>stand out.</WaterRevealText>
                        </span>
                    ]}
                    delay={0.1}
                />
            </h1>
            <motion.div className="hero-bottom" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <p>We build websites, identities, content and digital experiences that turn attention into impact.</p>
                <div className="hero-actions"><a href="#contact" className="button button-dark">Start a project <ArrowUpRight size={16} /></a><a href="#work" className="text-link">Explore our work <ArrowDown size={15} /></a></div>
            </motion.div>
        </div>
        <motion.div className="studio-interface" initial={{ opacity: 0, y: 30, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1, delay: 0.8 }}>
            <div className="interface-top"><span>ORYN / SELECTED OUTPUT</span><span>2026</span></div>
            <div className="interface-list">{["WEB / APP DEV", "BRAND", "CONTENT", "SOCIAL", "MARKETING"].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><span className="interface-dot" /></div>)}</div>
            <div className="interface-foot"><span>BUILD WHAT MATTERS</span><span className="interface-arrow">↗</span></div>
        </motion.div>
    </section>;
}
