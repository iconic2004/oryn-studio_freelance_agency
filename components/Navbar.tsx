"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["Services", "#services"], ["Work", "#work"], ["About", "#about"], ["Contact", "#contact"]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="nav-shell">
        <a href="#top" className="brand-mark" aria-label="ORYN Studio home">ORYN<span>®</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </nav>
        <a href="#contact" className="nav-cta">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </header>
      <AnimatePresence>
        {open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
          <div className="mobile-menu-links">{links.map(([label, href], index) => <motion.a key={href} href={href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}>{label}<ArrowUpRight size={19} /></motion.a>)}</div>
          <a href="#contact" className="button button-dark" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={16} /></a>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
