"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";

export function Work() {
  return <section id="work" className="section work-section page-wrap"><div className="section-intro work-intro"><Reveal><p className="eyebrow">03 / SELECTED WORK</p><h2><AnimatedText lines={[<span key="work-heading">Made to be<br /><em>remembered.</em></span>]} /></h2></Reveal><Reveal delay={0.1}><p className="intro-note">A few things we&apos;ve built, shaped and brought to life. Placeholders are marked for easy replacement.</p></Reveal></div><div className="project-grid">{projects.map((project, i) => <Reveal key={project.title} delay={i * 0.08}><motion.a href="#contact" className={`project-card project-${i + 1}`} whileHover="hover"><div className={`project-visual visual-${project.tone}`}><span className="visual-mark">{i === 0 ? "KS" : i === 1 ? "N" : "A"}</span><span className="visual-caption">{project.number} / ORYN STUDIO</span></div><div className="project-meta"><div><p>{project.categories}</p><h3>{project.title}</h3><span>{project.description}</span></div><span className="project-arrow"><ArrowUpRight size={20} /></span></div></motion.a></Reveal>)}</div></section>;
}
