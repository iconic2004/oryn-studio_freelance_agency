import { About } from "@/components/About";
import { ContactFooter } from "@/components/ContactFooter";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { Work } from "@/components/Work";

export default function Home() {
  return <main><Navbar /><Hero /><Services /><Statement /><Work /><About /><ContactFooter /></main>;
}
