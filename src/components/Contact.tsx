"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ArrowUp, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const email = "kanishkrawal47@gmail.com";
  const phone = "+91 9109533427";
  const linkedin = "https://www.linkedin.com/in/kanishk-rawal-b301a22b4";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative py-24 px-6 sm:px-12 md:px-20 bg-[#0d0d0d] border-t border-white/5 z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-400 text-xs font-mono mb-4 border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET'S BUILD SOMETHING GREAT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Get in touch <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                with Kanishk.
              </span>
            </h2>

            <p className="text-zinc-400 mt-4 text-base sm:text-lg font-light max-w-md">
              Seeking full-stack developer opportunities, software engineering roles, and innovative project collaborations.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm text-zinc-300 font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Indore, Madhya Pradesh - 452007, India</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col items-start gap-6">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Direct Channels
            </p>

            {/* Email Box */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/90 border border-white/10">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-mono text-white truncate">{email}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-mono text-xs font-semibold transition-all duration-300 shadow-md shadow-sky-500/20"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Box */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/90 border border-white/10">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-mono text-white truncate">{phone}</span>
              </div>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-all duration-300 border border-white/10"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Phone</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-mono transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-xs font-mono text-zinc-300 hover:text-white hover:border-sky-500/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Kanishk Rawal — Full Stack Developer.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/20 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
