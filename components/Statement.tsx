"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "./AnimatedText";

export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -90]);
  return <section ref={ref} className="statement-section"><div className="page-wrap statement-inner"><p className="eyebrow">02 / POINT OF VIEW</p><motion.div style={{ x }} className="statement-line muted"><AnimatedText text="WE DON'T MAKE" /></motion.div><div className="statement-line"><AnimatedText text="BRANDS LOOK GOOD." delay={0.08} /></div><div className="statement-line accent"><AnimatedText text="WE MAKE THEM" delay={0.16} /></div><div className="statement-line"><AnimatedText text="IMPOSSIBLE TO IGNORE." delay={0.24} /></div></div></section>;
}
