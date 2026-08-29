import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090D16]/90 border-t border-slate-800/60">
      
      {/* Radial Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-python-blue/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-python-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-python-yellow/10 border border-python-yellow/30 text-python-yellow text-xs font-mono mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>05. GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 max-w-xl text-sm sm:text-base font-sans"
          >
            I'm currently looking for entry-level Software, Python, and .NET Developer opportunities. Reach out to me directly via Email, Phone, LinkedIn, or GitHub.
          </motion.p>
        </div>

        {/* Direct Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          
          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-python-blue/60 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-python-blue/10 border border-python-blue/30 flex items-center justify-center text-python-blue-light group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase font-semibold">Direct Email</span>
                <span className="text-xs sm:text-base font-bold font-display text-white group-hover:text-python-yellow transition-colors truncate">
                  {personalInfo.email}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 mt-0.5">Click to Send Email</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 group-hover:text-python-yellow group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
          </a>

          {/* Phone & WhatsApp Card */}
          <a
            href={`tel:${personalInfo.phone}`}
            className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/60 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase font-semibold">Phone / WhatsApp</span>
                <span className="text-xs sm:text-base font-bold font-display text-white group-hover:text-emerald-400 transition-colors truncate">
                  {personalInfo.phone}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 mt-0.5">Click to Call / WhatsApp</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-sky-500/60 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform flex-shrink-0">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase font-semibold">LinkedIn Profile</span>
                <span className="text-xs sm:text-base font-bold font-display text-white group-hover:text-sky-400 transition-colors truncate">
                  linkedin.com/in/nikeshtarur
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-sky-400 mt-0.5">Connect on LinkedIn</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
          </a>

          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-python-yellow/60 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-python-yellow/10 border border-python-yellow/30 flex items-center justify-center text-python-yellow group-hover:scale-110 transition-transform flex-shrink-0">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase font-semibold">GitHub Repositories</span>
                <span className="text-xs sm:text-base font-bold font-display text-white group-hover:text-python-yellow transition-colors truncate">
                  github.com/NikeshTarur0
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-python-yellow mt-0.5">Explore Code Repos</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 group-hover:text-python-yellow group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
          </a>

        </motion.div>

        {/* Location Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between flex-col sm:flex-row gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-python-yellow/10 border border-python-yellow/30 flex items-center justify-center text-python-yellow flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">Based In</span>
              <span className="text-sm font-bold font-display text-white">{personalInfo.location}</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open for Immediate Joining (Onsite &amp; Remote)</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
