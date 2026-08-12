"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  points: string[];
  skills: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  honors?: string;
  period?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Alit Technologies",
    location: "Indore, India",
    type: "On-site",
    period: "April 2026 – Present",
    points: [
      "Developed and maintained production-ready web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built end-to-end full-stack applications for real-world business requirements, ensuring scalability, performance, and maintainability.",
      "Built responsive user interfaces and integrated RESTful APIs to deliver seamless user experiences.",
      "Optimized application performance and resolved bugs to improve reliability.",
      "Managed source code with Git and GitHub and participated in collaborative code reviews.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
  },
  {
    role: "Machine Learning & Data Science Intern",
    company: "Feynn Labs Service",
    location: "Remote",
    type: "Remote",
    period: "March 2025 – May 2025",
    points: [
      "Assisted in developing AI product and service prototypes through market segmentation analysis.",
      "Applied machine learning models and data analysis for customer behavior segmentation.",
      "Conducted AI product/service business and financial analysis for prototype feasibility.",
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "Market Segmentation"],
  },
  {
    role: "Python Programmer Intern",
    company: "CodSoft",
    location: "Remote",
    type: "Remote",
    period: "Feb 2025 – March 2025",
    points: [
      "Assisted in developing a task management to-do list application to enhance task management skills.",
      "Created an arithmetic calculator to support basic mathematical operations.",
      "Designed nostalgic interactive games, including rock-paper-scissors and mind games.",
    ],
    skills: ["Python", "Algorithms", "GUI/CLI", "Game Logic"],
  },
];

const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Technology: Computer Science & Engineering",
    institution: "Institute of Engineering & Science IPS Academy (RGPV) — Indore, India",
    honors: "Recipient of Academic Award (1st & 2nd Year)",
  },
  {
    degree: "Senior Secondary (10th & 10+2)",
    institution: "St. George English Medium School Dhar (CBSE Affiliated, M.P.)",
    honors: "First Division Academic Standing",
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-6 sm:px-12 md:px-20 bg-[#0e0e10] z-30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-400 text-xs font-mono mb-4 border border-sky-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK & BACKGROUND</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-zinc-400 mt-3 text-base sm:text-lg font-light">
            Hands-on full stack web development internships, machine learning analysis, and academic achievements.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-zinc-300 mt-1 mb-6">
                  {exp.company}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {exp.skills.map((s) => (
                  <span key={s} className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Education & Honors</h3>
              <p className="text-xs font-mono text-zinc-400">Academic Awards & Qualifications</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationList.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-sm text-zinc-300 font-light mb-4">{edu.institution}</p>
                </div>
                {edu.honors && (
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full w-fit">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.honors}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
