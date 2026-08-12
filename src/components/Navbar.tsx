"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 px-6 sm:px-12 py-4 flex items-center justify-between ${
        scrolled ? "glass-nav shadow-2xl py-3.5" : "bg-transparent"
      }`}
    >
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
          KR
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
            Kanishk Rawal
          </span>
          <span className="text-[10px] font-mono text-zinc-400">Creative Developer</span>
        </div>
      </a>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-400">
        <a href="#about" className="hover:text-white transition-colors">
          // ABOUT
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          // WORK
        </a>
        <a href="#skills" className="hover:text-white transition-colors">
          // STACK
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          // CONTACT
        </a>
      </nav>

      {/* Availability Status & CTA */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>AVAILABLE FOR WORK</span>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-sky-500 text-white text-xs font-mono border border-white/10 hover:border-sky-400 transition-all duration-300 shadow-md"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Get in touch</span>
        </a>
      </div>
    </motion.header>
  );
};
