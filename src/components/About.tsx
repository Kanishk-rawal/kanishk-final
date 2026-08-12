"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, Code, Terminal, MapPin } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 md:px-20 bg-[#0d0d0f] z-30 border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-sky-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-400 text-xs font-mono mb-4 border border-sky-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>ABOUT KANISHK RAWAL</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Clean Un-obscured Developer Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/20 shadow-2xl p-3 group bg-zinc-900/90">
              {/* Photo Frame — Zero overlays on top of the face */}
              <div className="relative w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                <Image
                  src="/profile-developer.jpg"
                  alt="Kanishk Rawal — Full Stack Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Status & Info Bar Below the Photo */}
              <div className="mt-3 p-4 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-base font-bold text-white">Kanishk Rawal</p>
                  <p className="text-xs font-mono text-sky-400">Full Stack Developer Intern @ Alit</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>Indore, MP</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Biography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full w-fit mb-4">
              <Award className="w-4 h-4" />
              <span>ACADEMIC AWARD RECIPIENT (1ST & 2ND YEAR)</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Engineering Scalable Web Solutions with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                Modern Frontend & Backend Tech.
              </span>
            </h2>

            <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-light mb-6">
              I am a motivated Computer Science & Engineering student at <strong className="text-white font-semibold">Institute of Engineering & Science IPS Academy (RGPV), Indore</strong> with a strong passion for Full Stack Web Development and AI applications.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              Currently serving as a <strong className="text-sky-400 font-semibold">Full Stack Developer Intern at Alit Technologies</strong>, I design, develop, and maintain production-ready web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. My background also spans Machine Learning analysis at Feynn Labs Service and Python application engineering at CodSoft.
            </p>

            {/* Metric Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl glass-card border border-white/10 text-center">
                <p className="text-2xl sm:text-3xl font-black text-sky-400">3+</p>
                <p className="text-xs font-mono text-zinc-400 mt-1">Tech Roles</p>
              </div>
              <div className="p-4 rounded-2xl glass-card border border-white/10 text-center">
                <p className="text-2xl sm:text-3xl font-black text-indigo-400">100%</p>
                <p className="text-xs font-mono text-zinc-400 mt-1">Clean Code</p>
              </div>
              <div className="p-4 rounded-2xl glass-card border border-white/10 text-center">
                <p className="text-2xl sm:text-3xl font-black text-amber-400">Top 1%</p>
                <p className="text-xs font-mono text-zinc-400 mt-1">Academic Rank</p>
              </div>
              <div className="p-4 rounded-2xl glass-card border border-white/10 text-center">
                <p className="text-2xl sm:text-3xl font-black text-purple-400">MERN</p>
                <p className="text-xs font-mono text-zinc-400 mt-1">Stack Proficient</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Expertise Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-sky-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Frontend Architecture</h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Crafting fluid, high-performance user interfaces with React.js, Next.js 14, Tailwind CSS, Material UI, and responsive client-side state handling.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-sky-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Backend & REST APIs</h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Designing scalable RESTful APIs, JWT user authentication flows, Node.js & Express servers, Nest.js backend architecture, and MongoDB data modeling.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-sky-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI & Problem Solving</h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Applying machine learning analysis for market segmentation, building browser-based Face API vision models, and developing Python software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
