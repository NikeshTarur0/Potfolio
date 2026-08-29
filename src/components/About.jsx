import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, CheckCircle2, Award, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo, stats } = portfolioData;

  const coreFocusAreas = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Building fast, reliable web backends using Python frameworks like Flask, FastAPI, and Django.",
      color: "text-python-blue-light",
      borderColor: "group-hover:border-python-blue/50"
    },
    {
      icon: Code,
      title: "RESTful API Design",
      description: "Engineering secure REST APIs with JWT authentication, role-based authorization, and Swagger docs.",
      color: "text-python-yellow",
      borderColor: "group-hover:border-python-yellow/50"
    },
    {
      icon: Database,
      title: "Database Engineering",
      description: "Designing relational (MySQL, SQLite) and document (MongoDB) schemas for optimal performance.",
      color: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/50"
    },
    {
      icon: Cpu,
      title: "Automation & Tools",
      description: "Creating OpenCV computer vision scripts, web scrapers, and task automation CLI utilities.",
      color: "text-purple-400",
      borderColor: "group-hover:border-purple-500/50"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090D16]/60 border-t border-b border-slate-800/60">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-python-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-python-blue/10 border border-python-blue/30 text-python-blue-light text-xs font-mono mb-3"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            Passionate About Software Engineering &amp; Python
          </motion.h2>
        </div>

        {/* Top Grid: Bio Text & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Bio Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl border border-slate-800/80 shadow-xl relative">
              <div className="w-12 h-12 rounded-xl bg-python-yellow/10 border border-python-yellow/30 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-python-yellow" />
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-4">
                Hello! I'm <span className="text-python-yellow">Nikesh Tarur</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-base mb-6 font-sans">
                {personalInfo.aboutBio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Clean Code &amp; OOP Principles</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>REST API &amp; Microservices</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Database Schema Design</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Agile &amp; Git Version Control</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Stats Counters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-card p-6 rounded-2xl flex flex-col items-start justify-center border border-slate-800 hover:border-python-blue/40"
              >
                <span className={`text-4xl sm:text-5xl font-extrabold font-display bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Bottom Grid: Core Competency Cards */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-lg font-mono text-python-yellow font-semibold uppercase tracking-wider">
              Core Technical Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFocusAreas.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group glass-card p-6 rounded-2xl border border-slate-800 transition-all duration-300 ${item.borderColor}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${item.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-white mb-2 group-hover:text-python-yellow transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
