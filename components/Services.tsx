"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";
import { WaterRevealText } from "./WaterRevealText";

export function Services() {
  return <section id="services" className="section page-wrap"><div className="section-intro"><Reveal><p className="eyebrow">01 / CAPABILITIES</p><h2><AnimatedText lines={[<span key="services-heading">What we <em><WaterRevealText>build.</WaterRevealText></em></span>]} /></h2></Reveal><Reveal delay={0.1}><p className="intro-note">The right mix of strategy, craft and momentum to make your next move matter.</p></Reveal></div><div className="service-list">{services.map((service, i) => <Reveal key={service.number} delay={i * 0.04}><motion.a href={`/services/${service.slug}`} className={`service-row tone-${service.tone}`} whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 240, damping: 22 }}><span className="service-number">{service.number}</span><span className="service-label">{service.label}</span><strong>{service.title}</strong><span className="round-arrow"><ArrowUpRight size={18} /></span></motion.a></Reveal>)}</div></section>;
}
