import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, CheckCircle2, Copy, Check, FileCode, Cpu, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CodeVisual() {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);
  const [executionState, setExecutionState] = useState('idle');

  const { codeSnippet } = portfolioData;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setExecutionState('running');
    setTimeout(() => {
      setExecutionState('completed');
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-xl mx-auto lg:max-w-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-python-blue via-sky-500 to-python-yellow rounded-2xl blur-xl opacity-30 animate-pulse-slow"></div>

      {/* Main Code Window Container */}
      <div className="relative rounded-2xl bg-[#0F1623]/95 border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F17]/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
            </div>
            <div className="h-4 w-[1px] bg-slate-800 mx-1" />
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <FileCode className="w-3.5 h-3.5 text-python-yellow" />
              <span className="text-slate-200 font-medium">{codeSnippet.filename}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-python-blue/20 text-python-blue-light border border-python-blue/30 font-semibold">
                Python 3.12
              </span>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Copy Code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleRunCode}
              disabled={executionState === 'running'}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-python-yellow hover:bg-yellow-400 text-slate-950 font-mono font-bold text-xs shadow-md transition-all active:scale-95 disabled:opacity-50"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{executionState === 'running' ? 'Executing...' : 'Run'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center px-4 bg-[#0B0F17]/50 border-b border-slate-800/80 text-xs font-mono">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors ${
              activeTab === 'code'
                ? 'border-python-blue text-python-blue-light bg-slate-800/30'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Source Code
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-3 py-2 border-b-2 font-medium flex items-center gap-1.5 transition-colors ${
              activeTab === 'terminal'
                ? 'border-python-yellow text-python-yellow bg-slate-800/30'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3 h-3" />
            Terminal Log
          </button>
        </div>

        {/* Window Content */}
        <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px] bg-[#090D16]">
          {activeTab === 'code' ? (
            <div className="space-y-1">
              <div className="text-slate-500 font-semibold mb-2"># FastAPI Backend Server Setup</div>
              
              <div>
                <span className="text-purple-400">from</span> <span className="text-sky-300">fastapi</span>{' '}
                <span className="text-purple-400">import</span> <span className="text-slate-200">FastAPI, Depends, HTTPException</span>
              </div>
              <div>
                <span className="text-purple-400">from</span> <span className="text-sky-300">pydantic</span>{' '}
                <span className="text-purple-400">import</span> <span className="text-slate-200">BaseModel</span>
              </div>
              <div>
                <span className="text-purple-400">from</span> <span className="text-sky-300">typing</span>{' '}
                <span className="text-purple-400">import</span> <span className="text-slate-200">List, Optional</span>
              </div>
              
              <div className="py-1"></div>
              
              <div>
                <span className="text-slate-200">app = </span>
                <span className="text-yellow-300">FastAPI</span>
                <span className="text-slate-200">(title=</span>
                <span className="text-emerald-300">"Nikesh Tarur Portfolio API"</span>
                <span className="text-slate-200">)</span>
              </div>

              <div className="py-1"></div>

              <div>
                <span className="text-purple-400">class</span>{' '}
                <span className="text-yellow-300 font-bold">DeveloperProfile</span>
                <span className="text-slate-200">(BaseModel):</span>
              </div>
              <div className="pl-4">
                <span className="text-sky-300">name</span>
                <span className="text-slate-200">: str = </span>
                <span className="text-emerald-300">"Nikesh Tarur"</span>
              </div>
              <div className="pl-4">
                <span className="text-sky-300">role</span>
                <span className="text-slate-200">: str = </span>
                <span className="text-emerald-300">"Python Developer Fresher"</span>
              </div>
              <div className="pl-4">
                <span className="text-sky-300">stack</span>
                <span className="text-slate-200">: List[str] = [</span>
                <span className="text-emerald-300">"Python"</span>
                <span className="text-slate-200">, </span>
                <span className="text-emerald-300">"Flask"</span>
                <span className="text-slate-200">, </span>
                <span className="text-emerald-300">"FastAPI"</span>
                <span className="text-slate-200">, </span>
                <span className="text-emerald-300">"SQL"</span>
                <span className="text-slate-200">]</span>
              </div>

              <div className="py-1"></div>

              <div>
                <span className="text-sky-400">@app.get</span>
                <span className="text-slate-200">(</span>
                <span className="text-emerald-300">"/api/v1/status"</span>
                <span className="text-slate-200">)</span>
              </div>
              <div>
                <span className="text-purple-400">async def</span>{' '}
                <span className="text-blue-400 font-semibold">get_status</span>
                <span className="text-slate-200">():</span>
              </div>
              <div className="pl-4">
                <span className="text-purple-400">return</span>{' '}
                <span className="text-slate-200 font-bold">&#123;</span>
                <span className="text-emerald-300">"status"</span>
                <span className="text-slate-200">: </span>
                <span className="text-emerald-300">"Open for Internships & Jobs"</span>
                <span className="text-slate-200">&#125;</span>
              </div>

              {/* Blinking Cursor */}
              <div className="pt-2 flex items-center text-python-yellow">
                <span>&gt; </span>
                <span className="w-2 h-4 bg-python-yellow ml-1 animate-pulse" />
              </div>
            </div>
          ) : (
            <div className="space-y-2 text-slate-300">
              <div className="text-slate-500">$ uvicorn app.main:app --reload --port 8000</div>
              <div className="text-sky-400">INFO:     Started server process [PID 14208]</div>
              <div className="text-sky-400">INFO:     Waiting for application startup.</div>
              <div className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>INFO: Application startup complete. Uvicorn running on http://127.0.0.1:8000</span>
              </div>
              <div className="pt-2 text-yellow-400">$ curl -X GET "http://127.0.0.1:8000/api/v1/status"</div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-emerald-300 font-mono">
                {JSON.stringify(
                  {
                    developer: "Nikesh Tarur",
                    role: "Python Developer",
                    readiness: "100%",
                    available_for: ["Internship", "Full-Time"]
                  },
                  null,
                  2
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status Bar */}
        <div className="px-4 py-2 bg-[#0B0F17] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Uvicorn Server Online
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">UTF-8</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-python-blue-light" />
            <span className="text-slate-400">JWT Auth Enabled</span>
          </div>
        </div>

      </div>

      {/* Floating Decorative Badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-python-yellow/40 text-python-yellow text-xs font-mono font-bold shadow-xl backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-python-yellow" />
        Python 3.12 Backend
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-python-blue/40 text-python-blue-light text-xs font-mono font-bold shadow-xl backdrop-blur-md"
      >
        <Cpu className="w-3.5 h-3.5 text-python-blue-light" />
        REST API Engineering
      </motion.div>
    </motion.div>
  );
}
