"use client";

import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { AnimatedText } from "./AnimatedText";

const serviceOptions = ["Web Development", "Branding & Design", "Video & Content", "Social Media", "Digital Marketing"];
type FormValues = { name: string; company: string; email: string; phone: string; selectedServices: string[]; message: string };
type FormErrors = Partial<Record<keyof FormValues | "services", string>>;

const initialValues: FormValues = { name: "", company: "", email: "", phone: "", selectedServices: [], message: "" };

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const toggleService = (service: string) => {
    const selectedServices = values.selectedServices.includes(service)
      ? values.selectedServices.filter((item) => item !== service)
      : [...values.selectedServices, service];
    setValues((current) => ({ ...current, selectedServices }));
    setErrors((current) => ({ ...current, services: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please add your name.";
    if (!values.company.trim()) nextErrors.company = "Please add your company or brand.";
    if (!values.email.trim()) nextErrors.email = "Please add your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email.";
    if (!values.selectedServices.length) nextErrors.services = "Choose at least one service.";
    if (!values.message.trim()) nextErrors.message = "Tell us a little about the project.";
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (!Object.keys(nextErrors).length) setSubmitted(true);
  };

  if (submitted) {
    return <section id="contact" className="contact-section contact-success"><div className="contact-success-inner page-wrap"><p className="eyebrow contact-eyebrow">06 / YOUR NEXT MOVE</p><div><AnimatedText text="Thanks for reaching out." /><p>We&apos;ll get back to you shortly.</p><button type="button" className="button button-light" onClick={() => { setSubmitted(false); setValues(initialValues); }}>Send another message <RotateCcw size={15} /></button></div></div></section>;
  }

  return <section id="contact" className="contact-section contact-form-section">
    <div className="contact-content page-wrap"><div className="contact-heading"><div><p className="eyebrow contact-eyebrow">06 / YOUR NEXT MOVE</p><h2><AnimatedText text={"Have an idea?\nLet's build it."} /></h2></div><p className="contact-support">Tell us a little about your project and we&apos;ll get back to you.</p></div>
    <motion.form className="project-form" onSubmit={handleSubmit} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}>
      <div className="form-grid">
        <Field label="Name *" id="name" value={values.name} placeholder="Your name" error={errors.name} onChange={(value) => updateField("name", value)} />
        <Field label="Company / Brand *" id="company" value={values.company} placeholder="Your brand name" error={errors.company} onChange={(value) => updateField("company", value)} />
        <Field label="Email *" id="email" type="email" value={values.email} placeholder="you@example.com" error={errors.email} onChange={(value) => updateField("email", value)} />
        <Field label="Phone" id="phone" type="tel" value={values.phone} placeholder="+91 XXXXX XXXXX" onChange={(value) => updateField("phone", value)} />
      </div>
      <motion.fieldset className="service-picker" variants={formReveal}><legend>I&apos;m interested in:</legend><div className="service-chips">{serviceOptions.map((service) => { const selected = values.selectedServices.includes(service); return <label key={service} className={`service-chip ${selected ? "is-selected" : ""}`}><input type="checkbox" checked={selected} onChange={() => toggleService(service)} /><span>{selected && <Check size={13} />}{service}</span></label>; })}</div>{errors.services && <p className="form-error">{errors.services}</p>}</motion.fieldset>
      <motion.div className="form-field" variants={formReveal}><label htmlFor="message">What can we help you with?</label><textarea id="message" value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell us a little about your project..." aria-invalid={Boolean(errors.message)} />{errors.message && <p className="form-error">{errors.message}</p>}</motion.div>
      <motion.div className="form-submit" variants={formReveal}><button type="submit" className="button button-light" data-cursor="start">Start a Project <ArrowUpRight size={17} /></button><p>Prefer a quick conversation? <a href="#" data-cursor="call">Book a Call <ArrowUpRight size={14} /></a></p></motion.div>
    </motion.form></div>
  </section>;
}

const formReveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } } };

function Field({ label, id, type = "text", value, placeholder, error, onChange }: { label: string; id: string; type?: string; value: string; placeholder: string; error?: string; onChange: (value: string) => void }) {
  return <motion.div className="form-field" variants={formReveal}><label htmlFor={id}>{label}</label><input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} aria-invalid={Boolean(error)} />{error && <p className="form-error">{error}</p>}</motion.div>;
}
