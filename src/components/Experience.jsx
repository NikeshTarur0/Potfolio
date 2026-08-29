import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0B0F17]">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-python-yellow/5 rounded-full blur-[130px] pointer-events-none" />

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
            <Briefcase className="w-3.5 h-3.5" />
            <span>04. CAREER &amp; EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
          >
            Experience &amp; Education Timeline
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl text-sm sm:text-base font-sans"
          >
            My practical development training, project milestones, and academic background in software engineering.
          </motion.p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12 ml-2 sm:ml-4">
          {experience.map((item, index) => {
            const isEducation = item.type.includes('Education');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#0B0F17] border-2 border-python-blue group-hover:border-python-yellow flex items-center justify-center transition-colors shadow-md">
                  <div className="w-2 h-2 rounded-full bg-python-yellow group-hover:scale-125 transition-transform" />
                </div>

                {/* Card Wrapper */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-python-blue/40 transition-all">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-mono text-python-yellow font-semibold tracking-wider uppercase mb-1 block">
                        {item.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-python-yellow transition-colors">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-python-blue-light">
                        {item.company}
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mt-2 sm:mt-0">
                      <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        <Calendar className="w-3 h-3 text-python-yellow" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        <MapPin className="w-3 h-3 text-python-blue-light" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                    {item.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    {item.keyAchievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-sans text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
