import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye, Code2, Camera, ShoppingBag, Film, BookOpen, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Python & Computer Vision', 'Backend & REST APIs', 'Fullstack Web App', 'Enterprise Systems'];

  const filteredProjects = filterCategory === 'All'
    ? projects
    : projects.filter(p => p.category === filterCategory);

  // Dynamic Card Visual Graphics Header Component
  const RenderProjectVisual = ({ visualType, title }) => {
    switch (visualType) {
      case 'face-id':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#0B132B] to-[#1C2541] rounded-t-2xl p-4 flex flex-col justify-between overflow-hidden group-hover:brightness-110 transition-all">
            <div className="flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/40 text-[10px] font-mono font-bold">
                OPENCV + FIREBASE
              </span>
              <Camera className="w-5 h-5 text-python-yellow" />
            </div>

            {/* Simulated Face Scan HUD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 rounded-xl border-2 border-dashed border-python-yellow/80 flex items-center justify-center relative animate-pulse">
                <div className="w-20 h-20 border border-python-blue rounded-lg flex items-center justify-center">
                  <span className="text-[9px] font-mono text-emerald-400 bg-slate-900/80 px-1.5 py-0.5 rounded">
                    ID: MATCH 99.4%
                  </span>
                </div>
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-python-yellow" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-python-yellow" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-python-yellow" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-python-yellow" />
              </div>
            </div>

            <div className="z-10 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>FACIAL RECOGNITION</span>
              <span className="text-emerald-400 font-semibold">AUTO LOGGED</span>
            </div>
          </div>
        );

      case 'api-backend':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#0D1F2D] to-[#1D2D44] rounded-t-2xl p-4 flex flex-col justify-between overflow-hidden group-hover:brightness-110 transition-all">
            <div className="flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-400 border border-sky-500/40 text-[10px] font-mono font-bold">
                FASTAPI + JWT AUTH
              </span>
              <ShoppingBag className="w-5 h-5 text-python-blue-light" />
            </div>

            {/* REST API Endpoints Graphic */}
            <div className="z-10 font-mono text-[10px] space-y-1.5 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-emerald-400 font-bold">POST /api/v1/auth/jwt</span>
                <span className="text-slate-400">200 OK</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sky-400 font-bold">GET /api/v1/vendors/products</span>
                <span className="text-slate-400">200 OK</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-bold">PUT /api/v1/admin/roles</span>
                <span className="text-slate-400">200 OK</span>
              </div>
            </div>

            <div className="z-10 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>RBAC MULTI-VENDOR</span>
              <span className="text-python-blue-light font-semibold">ASYNC BACKEND</span>
            </div>
          </div>
        );

      case 'movie-ui':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#1E1035] to-[#2D1B4E] rounded-t-2xl p-4 flex flex-col justify-between overflow-hidden group-hover:brightness-110 transition-all">
            <div className="flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 border border-purple-500/40 text-[10px] font-mono font-bold">
                FLASK + SQL DATABASE
              </span>
              <Film className="w-5 h-5 text-purple-400" />
            </div>

            {/* Interactive Seat Grid Visual */}
            <div className="z-10 flex flex-col items-center gap-1.5 my-auto">
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
              <span className="text-[8px] font-mono text-slate-400">CINEMA SCREEN</span>
              <div className="grid grid-cols-6 gap-1.5">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3.5 h-3.5 rounded-sm ${
                      i === 4 || i === 5 || i === 8
                        ? 'bg-python-yellow shadow-glow-sm'
                        : i % 2 === 0
                        ? 'bg-slate-700'
                        : 'bg-purple-900 border border-purple-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="z-10 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>SEAT BOOKING ENGINE</span>
              <span className="text-python-yellow font-semibold">FLASK APP</span>
            </div>
          </div>
        );

      case 'bookstore':
      default:
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#0F2027] to-[#203A43] rounded-t-2xl p-4 flex flex-col justify-between overflow-hidden group-hover:brightness-110 transition-all">
            <div className="flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded bg-teal-500/20 text-teal-400 border border-teal-500/40 text-[10px] font-mono font-bold">
                .NET + MONGODB
              </span>
              <BookOpen className="w-5 h-5 text-teal-400" />
            </div>

            {/* Mongo Document Schema Preview */}
            <div className="z-10 font-mono text-[9px] text-teal-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
              <div>&#123; "_id": ObjectId("64f1a..."),</div>
              <div className="pl-3 text-slate-300">"book": "Mastering Python Architecture",</div>
              <div className="pl-3 text-yellow-300">"stock": 142, "category": "CS" &#125;</div>
            </div>

            <div className="z-10 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>NOSQL CATALOG</span>
              <span className="text-teal-400 font-semibold">INVENTORY CONTROL</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090D16]/80 border-t border-b border-slate-800/60">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-python-blue/10 rounded-full blur-[150px] pointer-events-none" />

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
            <Code2 className="w-3.5 h-3.5" />
            <span>03. FEATURED PROJECTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
          >
            Hands-on Portfolio Applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl text-sm sm:text-base font-sans"
          >
            Real-world backend, web, and automation projects built using Python, FastAPI, Flask, OpenCV, SQL, and database management solutions.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                filterCategory === cat
                  ? 'bg-python-yellow text-slate-950 shadow-md shadow-python-yellow/20 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl border border-slate-800 hover:border-python-blue/50 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Card Header Graphic Visual */}
              <RenderProjectVisual visualType={project.visualType} title={project.title} />

              {/* Card Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-python-yellow font-semibold tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 group-hover:text-python-yellow transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-python-blue-light font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-python-blue text-slate-200 text-xs font-semibold font-mono transition-all"
                    >
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-python-blue to-sky-600 hover:from-sky-500 hover:to-blue-600 text-white text-xs font-semibold font-mono shadow-md transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-python-yellow hover:text-slate-950 border border-slate-800 text-slate-400 transition-all"
                      title="Inspect Architecture Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup Viewer */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}
