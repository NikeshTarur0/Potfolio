import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Wrench, Terminal, Cpu, Zap, ShieldCheck, 
  FlaskConical, Network, HardDrive, Boxes, FileSpreadsheet, GitBranch, 
  Github, Send, Layers, FileCode2, Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Icon Map for dynamic icon rendering
const iconMap = {
  Snake: Code2,
  FileCode2: FileCode2,
  Cpu: Cpu,
  Database: Database,
  FlaskConical: FlaskConical,
  Layers: Layers,
  Zap: Zap,
  Network: Network,
  ShieldCheck: ShieldCheck,
  HardDrive: HardDrive,
  Boxes: Boxes,
  FileSpreadsheet: FileSpreadsheet,
  GitBranch: GitBranch,
  Github: Github,
  Terminal: Terminal,
  Send: Send,
  Code2: Code2,
  Server: Server,
  Wrench: Wrench
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B0F17]">
      
      {/* Background Radial Overlay */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-python-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-python-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-python-yellow/10 border border-python-yellow/30 text-python-yellow text-xs font-mono mb-3"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
          >
            Technologies &amp; Developer Tooling
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl text-sm sm:text-base font-sans"
          >
            A curated breakdown of programming languages, web frameworks, backend tools, databases, and version control workflows I specialize in.
          </motion.p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {skillCategories.map((cat, idx) => {
            const CategoryIcon = iconMap[cat.icon] || Code2;
            const isActive = activeCategoryIndex === idx;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-python-blue to-sky-600 text-white shadow-lg shadow-python-blue/30 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <CategoryIcon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories[activeCategoryIndex].skills.map((skill, index) => {
            const SkillIcon = iconMap[skill.icon] || Code2;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group glass-card p-6 rounded-2xl border border-slate-800 hover:border-python-yellow/50 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle top glow highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-python-yellow/0 group-hover:via-python-yellow/60 to-transparent transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-python-blue/10 group-hover:border-python-blue/40 transition-colors">
                      <SkillIcon className="w-6 h-6 text-python-yellow group-hover:text-python-blue-light group-hover:scale-110 transition-transform" />
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 font-semibold group-hover:border-python-yellow/40 group-hover:text-python-yellow transition-colors">
                      {skill.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-1 group-hover:text-python-yellow transition-colors">
                    {skill.name}
                  </h3>
                  
                  <span className="text-xs font-mono text-slate-400">
                    Proficiency: <span className="text-python-blue-light font-semibold">{skill.level}</span>
                  </span>
                </div>

                {/* Bottom Visual Bar */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        skill.level === 'Advanced'
                          ? 'w-full bg-gradient-to-r from-python-blue to-sky-400'
                          : 'w-3/4 bg-gradient-to-r from-python-yellow to-amber-400'
                      }`}
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* All Skills Matrix Summary */}
        <div className="mt-16 glass-panel p-8 rounded-2xl border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-python-blue/10 border border-python-blue/30 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-python-blue-light" />
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-white">Full Stack &amp; Backend Engineering Stack</h4>
                <p className="text-xs text-slate-400 font-sans">Every technology listed has been utilized in production or hands-on projects.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Python 3.x', 'Flask', 'FastAPI', 'Django', 'REST APIs', 'OpenCV', 'JWT', 'MySQL', 'MongoDB', 'SQLite', 'C#', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 font-medium hover:border-python-blue hover:text-python-yellow transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
