import React from 'react';
import { ChevronDown } from 'lucide-react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-cyan-950/40" />

      <div className="relative z-10 max-w-full sm:max-w-4xl">
        <div className="mb-4 sm:mb-6">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full">
            <span className="text-gray-300 text-xs sm:text-sm font-mono">&lt; Start /&gt;</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="block text-gray-200">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-purple-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            Firoz Ahmad
          </span>
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 sm:mb-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-gray-300">I am a</span>
          <span className="text-cyan-300 font-mono">Backend & AI-Focused Full Stack Developer</span>
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-full sm:max-w-2xl leading-relaxed">
          Backend Developer Intern at Zorvyn FinTech, building secure REST APIs, scalable service modules,
          and AI-powered applications with MERN, LangChain, RAG, PostgreSQL, Redis, and AWS.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 sm:mb-12 max-w-3xl">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-xl font-bold text-white">500+</p>
            <p className="text-xs text-gray-400">Users served in full-stack platform</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-xl font-bold text-white">35%</p>
            <p className="text-xs text-gray-400">API response time improvement</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-xl font-bold text-white">99.9%</p>
            <p className="text-xs text-gray-400">AWS deployment uptime</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg text-sm sm:text-base"
          >
            View My Work
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 sm:px-8 sm:py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/15 font-semibold rounded-lg text-sm sm:text-base"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-cyan-300"
      >
        <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-mono">Scroll to explore</span>
        <ChevronDown size={20} className="sm:w-6 sm:h-6" />
      </button>
    </section>
  );
};

export default Hero;
