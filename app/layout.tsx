import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ORYN Studio — We Build What Makes You Stand Out.",
  description: "ORYN Studio builds websites, brands, content and digital experiences that help businesses stand out.",
  openGraph: {
    title: "ORYN Studio — We Build What Makes You Stand Out.",
    description: "Creative digital work for brands that refuse to blend in.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORYN Studio",
    description: "We Build What Makes You Stand Out.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}<CustomCursor /><SmoothScroll /></body>
    </html>
  );
}
