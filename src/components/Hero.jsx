import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, ChevronDown, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CodeVisual from './CodeVisual';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-python-blue/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-python-yellow/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Intro */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-6 shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300 font-medium">
                  {personalInfo.availability}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-python-yellow ml-1" />
              </motion.div>

              {/* Greeting */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl font-medium text-python-yellow mb-2 font-mono"
              >
                {personalInfo.greeting}
              </motion.h3>

              {/* Main Role Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-6 leading-none"
              >
                <span className="block">{personalInfo.title}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-python-blue via-sky-400 to-python-yellow">
                  &amp; .NET Engineer
                </span>
              </motion.h1>

              {/* Short Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-sans"
              >
                {personalInfo.shortBio}
              </motion.p>

              {/* Action CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
              >
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-python-blue to-sky-600 hover:from-sky-500 hover:to-blue-600 text-white font-semibold text-sm shadow-lg shadow-python-blue/25 hover:shadow-python-blue/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-python-yellow border border-python-yellow/40 hover:border-python-yellow font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Resumes (Python &amp; .NET)</span>
                </button>
              </motion.div>

              {/* Social Links & Quick Connect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full"
              >
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Connect With Me:
                </span>
                
                <div className="flex items-center gap-2.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-python-blue hover:bg-slate-800 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-python-blue hover:bg-slate-800 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-python-blue hover:bg-slate-800 transition-all duration-300"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Code Window Visual */}
            <div className="lg:col-span-5 w-full">
              <CodeVisual />
            </div>

          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-python-yellow transition-colors group"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase font-semibold">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-python-yellow" />
          </a>
        </div>

      </section>

      {/* Resume Selection Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
