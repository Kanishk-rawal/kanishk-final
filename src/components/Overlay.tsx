"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Terminal, Cpu, GraduationCap } from "lucide-react";

interface OverlayProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const Overlay: React.FC<OverlayProps> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Front Hero (0% to 22% scroll) - LEFT SIDE (Name & Designation)
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.18, 0.23], [1, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.23], [0, -60]);
  const scale1 = useTransform(scrollYProgress, [0, 0.23], [1, 0.95]);

  // Section 2: 24% to 48% (OPPOSITE SIDE - Right Aligned)
  const opacity2 = useTransform(scrollYProgress, [0.24, 0.30, 0.42, 0.48], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.24, 0.30, 0.42, 0.48], [40, 0, 0, -40]);

  // Section 3: 52% to 76% (OPPOSITE SIDE - Right Aligned)
  const opacity3 = useTransform(scrollYProgress, [0.52, 0.58, 0.70, 0.76], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.52, 0.58, 0.70, 0.76], [40, 0, 0, -40]);

  // Section 4: 80% to 98% (OPPOSITE SIDE - Right Aligned)
  const opacity4 = useTransform(scrollYProgress, [0.80, 0.86, 0.96, 1.0], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.80, 0.86, 0.96, 1.0], [40, 0, 0, -20]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 sm:p-12 md:p-16">
      {/* SECTION 1: Front Hero — LEFT SIDE (Name & Designation) */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex items-center justify-start px-6 sm:px-16 md:px-24 z-30"
      >
        <div className="flex flex-col items-start text-left max-w-2xl bg-transparent border-none p-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-2 uppercase"
            style={{
              textShadow: "0 4px 30px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8)",
            }}
          >
            KANISHK RAWAL
          </h1>

          <p
            className="text-xl sm:text-3xl md:text-4xl font-extrabold text-sky-400 tracking-widest uppercase mb-10"
            style={{
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.9), 0 0 15px rgba(56, 189, 248, 0.6)",
            }}
          >
            FULL STACK DEVELOPER
          </p>

          <div className="flex items-center gap-3 text-white">
            <div className="p-3 rounded-full border border-sky-400/50 bg-black/40 backdrop-blur-md animate-bounce shadow-xl">
              <ArrowDown className="w-5 h-5 text-sky-400" />
            </div>
            <span
              className="text-xs uppercase tracking-widest font-mono text-white font-bold"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.9)" }}
            >
              Scroll Down to explore
            </span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 2 (01 // PROFESSIONAL FOCUS - OPPOSITE SIDE: Right Aligned) */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-16 md:px-24 z-30"
      >
        <div className="bg-black/60 backdrop-blur-md border border-white/20 shadow-2xl p-8 sm:p-10 rounded-3xl max-w-xl text-right flex flex-col items-end">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-sky-500/20 border border-sky-500/40 text-sky-400 text-xs font-mono mb-4 font-semibold">
            <Terminal className="w-4 h-4" />
            <span>01 // PROFESSIONAL FOCUS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4">
            Building Production <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
              Web Applications.
            </span>
          </h2>

          <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-normal mb-6">
            Full Stack Developer Intern at Alit Technologies. Developing end-to-end full-stack applications, RESTful APIs, JWT authentication, and MongoDB backend logic.
          </p>

          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-left">
              <p className="text-xs text-sky-400 font-mono font-semibold">ROLE</p>
              <p className="text-sm font-bold text-white mt-1">Full Stack Intern @ Alit</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-left">
              <p className="text-xs text-sky-400 font-mono font-semibold">LOCATION</p>
              <p className="text-sm font-bold text-white mt-1">Indore, Madhya Pradesh</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3 (02 // TECH STACK & AI - OPPOSITE SIDE: Right Aligned) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-16 md:px-24 z-30"
      >
        <div className="bg-black/60 backdrop-blur-md border border-white/20 shadow-2xl p-8 sm:p-10 rounded-3xl max-w-xl text-right flex flex-col items-end">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono mb-4 font-semibold">
            <Cpu className="w-4 h-4" />
            <span>02 // TECH STACK & AI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4">
            React, Node, Express <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
              & Machine Learning.
            </span>
          </h2>

          <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-normal mb-6">
            Proven experience in full stack web development, machine learning market analysis at Feynn Labs, Python utility engineering at CodSoft, and client-side Face API vision applications.
          </p>

          <div className="flex flex-wrap gap-2 justify-end">
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">React.js & Next.js</span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Node & Express</span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">MongoDB & Nest.js</span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4 (Transition - OPPOSITE SIDE: Right Aligned) */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-16 md:px-24 z-30"
      >
        <div className="bg-black/70 backdrop-blur-md border border-white/20 shadow-2xl p-8 sm:p-10 rounded-3xl max-w-xl text-right flex flex-col items-end">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 text-sky-400 text-xs font-mono mb-6 border border-sky-500/40">
            <GraduationCap className="w-4 h-4 text-sky-400" />
            <span>PORTFOLIO & ABOUT SECTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Explore Background & Projects
          </h2>

          <p className="max-w-lg text-zinc-200 text-sm sm:text-base font-normal mb-8">
            Scroll down to view detailed About section, work experience history, skills matrix, and case studies.
          </p>

          <a
            href="#about"
            className="pointer-events-auto inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300"
          >
            <span>View Professional Profile</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
