"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Code2, Terminal, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  gradient: string;
}

const resumeSkills: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    skills: [
      "HTML & CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Material UI",
    ],
    gradient: "from-sky-500/20 to-blue-600/10",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "RESTful API Design",
      "JWT Authentication",
      "Server Routing",
    ],
    gradient: "from-emerald-500/20 to-teal-600/10",
  },
  {
    title: "Database & Machine Learning",
    icon: Database,
    skills: [
      "MongoDB",
      "Python",
      "Data Analysis",
      "Client-Side Face API",
      "Market Segmentation ML",
      "CRUD Architectures",
    ],
    gradient: "from-purple-500/20 to-indigo-600/10",
  },
  {
    title: "Tools & Workflow",
    icon: Terminal,
    skills: [
      "Git & GitHub",
      "Performance Optimization",
      "Code Review & Debugging",
      "Component Architecture",
      "Responsive UI Design",
      "Vercel Deployment",
    ],
    gradient: "from-amber-500/20 to-orange-600/10",
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 px-6 sm:px-12 md:px-20 bg-[#121212] z-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-purple-400 text-xs font-mono mb-4 border border-purple-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Core Technical Skills
          </h2>
          <p className="text-zinc-400 mt-3 text-base font-light">
            Proficient in modern frontend, backend, database, and machine learning technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeSkills.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} border border-white/10 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>

                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
