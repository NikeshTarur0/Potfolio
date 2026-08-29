import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Sparkles, Code2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personalInfo } = portfolioData;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#0F1623] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-python-yellow/10 border border-python-yellow/30 flex items-center justify-center">
                <FileText className="w-5 h-5 text-python-yellow" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  Select Resume Version
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Download Nikesh Tarur's customized resume
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Options Grid */}
          <div className="space-y-4">
            {personalInfo.resumes.map((resume) => (
              <div
                key={resume.title}
                className="group glass-card p-5 rounded-xl border border-slate-800 hover:border-python-blue/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold font-display text-white group-hover:text-python-yellow transition-colors">
                      {resume.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-python-blue-light border border-slate-800 font-semibold">
                      PDF
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans">
                    {resume.role}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    Tech Focus: <span className="text-emerald-400">{resume.badge}</span>
                  </p>
                </div>

                <a
                  href={resume.url}
                  download={resume.filename}
                  onClick={onClose}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${resume.accent} text-white text-xs font-semibold font-mono shadow-md hover:scale-105 transition-all flex-shrink-0`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
            <span className="text-[11px] font-mono text-slate-500">
              Both resumes include contact details &amp; verified project links.
            </span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
