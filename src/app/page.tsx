"use client";

import React, { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen bg-[#121212] text-white selection:bg-sky-500/30 selection:text-white">
      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Scrollytelling Section (500vh container) */}
      <ScrollyCanvas containerRef={containerRef} frameCount={50} folderPath="/sequence">
        <Overlay containerRef={containerRef} />
      </ScrollyCanvas>

      {/* Executive Professional About Section */}
      <About />

      {/* Selected Projects Grid */}
      <Projects />

      {/* Work Experience & Education Timeline */}
      <Experience />

      {/* Technical Skills & Capabilities */}
      <Skills />

      {/* Contact & Footer */}
      <Contact />
    </main>
  );
}
