"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  gradient: string;
  metrics: string;
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const resumeProjects: Project[] = [
  {
    id: "taskflow",
    title: "Taskflow — Full-Stack Task Management App",
    subtitle: "Enterprise-grade Task Execution & Analytics Dashboard",
    description:
      "Developed a responsive full-stack task management application with secure JWT authentication, real-time status tracking, interactive dashboard analytics, and MongoDB database integration.",
    highlights: [
      "Implemented secure JWT user authentication & session management",
      "Full CRUD operations with search, category filtering & analytics",
      "RESTful API architecture built with Node.js & Express",
      "Responsive glassmorphism UI styled with Tailwind CSS",
    ],
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    metrics: "Secure JWT Auth • Full CRUD & Search",
    demoUrl: "https://github.com/kanishk-rawal-b301a22b4",
    githubUrl: "https://github.com/kanishk-rawal-b301a22b4",
    featured: true,
  },
  {
    id: "face-recognition",
    title: "Face Recognition System",
    subtitle: "Browser-Based Real-Time Computer Vision Detector",
    description:
      "Engineered a high-performance browser-based face recognition system achieving real-time face detection directly using client-side processing and Face API algorithms.",
    highlights: [
      "Client-side real-time face detection & facial landmark tracking",
      "Zero server latency using optimized browser GPU execution",
      "Clean responsive interface designed with vanilla HTML5, CSS3 & JS",
      "Integrated Face-API.js model for high accuracy detection",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Face API", "Computer Vision"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    metrics: "Real-Time Client Processing • High Accuracy",
    demoUrl: "https://github.com/kanishk-rawal-b301a22b4",
    githubUrl: "https://github.com/kanishk-rawal-b301a22b4",
    featured: true,
  },
  {
    id: "feynn-labs-ai",
    title: "AI Product & Market Segmentation Engine",
    subtitle: "Machine Learning & Financial Analysis Prototype",
    description:
      "Developed AI product and service prototypes through machine learning market segmentation analysis, customer behavior clustering, and financial modeling at Feynn Labs Service.",
    highlights: [
      "Market segmentation analysis using ML clustering algorithms",
      "AI product/service business opportunity & financial viability modeling",
      "Assisted in developing AI product prototype architecture",
    ],
    tags: ["Python", "Machine Learning", "Data Analysis", "Financial Analysis"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    metrics: "ML Segmentation • Financial Modeling",
    demoUrl: "https://github.com/kanishk-rawal-b301a22b4",
    githubUrl: "https://github.com/kanishk-rawal-b301a22b4",
  },
  {
    id: "codsoft-python",
    title: "Python Application & Arcade Suite",
    subtitle: "Algorithmic Task Manager & Interactive Game Engine",
    description:
      "Created a comprehensive suite of Python applications including a task management to-do application, arithmetic calculator, and nostalgic games during CodSoft internship.",
    highlights: [
      "Task management to-do application for enhanced productivity",
      "Arithmetic calculator engine supporting multi-step math operations",
      "Interactive games including Rock-Paper-Scissors and Mind Games",
    ],
    tags: ["Python", "Data Structures", "Algorithms", "GUI/CLI"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    metrics: "Interactive Apps • Math Engine",
    demoUrl: "https://github.com/kanishk-rawal-b301a22b4",
    githubUrl: "https://github.com/kanishk-rawal-b301a22b4",
  },
];

export const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = ["All", "React.js", "Node.js", "MongoDB", "JavaScript", "Python"];

  const filteredProjects =
    selectedTag === "All"
      ? resumeProjects
      : resumeProjects.filter((p) => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-12 md:px-20 bg-[#121212] z-30">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-purple-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-400 text-xs font-mono mb-4 border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-zinc-400 mt-3 text-base sm:text-lg font-light max-w-xl">
              Production web applications, full-stack architectures, and machine learning prototypes built by Kanishk Rawal.
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                    : "glass-card text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10"
            >
              {/* Card Top Banner Glow */}
              <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8 z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sky-400">
                      {project.metrics}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" /> FEATURED
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400/80 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-zinc-400 bg-zinc-900/80 border border-white/5 px-3 py-1 rounded-lg"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 group-hover:translate-x-1 transition-transform"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
