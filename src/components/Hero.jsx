import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const stats = [
  { value: '60+', label: 'Projects shipped' },
  { value: '35%', label: 'Faster API responses' },
  { value: '99.9%', label: 'Deployment uptime' },
];

const stack = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'LangChain', 'AWS', 'Docker'];

const Hero = () => {
  return (
    <section id="home" className="hero aurora">
      <div className="grid-texture hero-grid" aria-hidden="true" />

      <div className="hero-inner">
        <span className="hero-badge font-mono">
          <span className="hero-dot" />
          Available for full-time & freelance
        </span>

        <h1 className="hero-title font-display">
          <span className="hero-title-line">Hi, I’m Firoz Ahmad</span>
          <span className="grad-text animate-gradient">Backend &amp; AI-focused Full Stack Developer</span>
        </h1>

        <p className="hero-lead text-soft">
          Backend Developer Intern at Zorvyn FinTech — I build secure REST APIs, scalable
          service modules, and AI-powered applications with the MERN stack, LangChain, RAG,
          PostgreSQL, Redis, and AWS.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View my work
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => scrollTo('contact')}>
            Get in touch
          </button>
          <div className="hero-socials">
            <a href="https://github.com/firoz1860" target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/firoz-ahmad-020166251" target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:firozahmed709p@gmail.com" className="hero-social" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat surface">
              <p className="hero-stat-value grad-text font-display">{s.value}</p>
              <p className="hero-stat-label text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="hero-stack">
          <span className="text-muted font-mono hero-stack-label">stack:</span>
          {stack.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>

      <button type="button" className="hero-scroll text-muted" onClick={() => scrollTo('about')} aria-label="Scroll to about">
        <span className="font-mono">scroll</span>
        <ArrowDown className="w-4 h-4 animate-float" />
      </button>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 7rem 1.25rem 5rem;
          background: var(--bg);
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-soft);
          font-size: 0.75rem;
        }
        .hero-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 999px;
          background: var(--accent-3);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-3) 30%, transparent);
        }
        .hero-title {
          margin: 1.4rem 0 1.2rem;
          font-size: clamp(2.4rem, 7vw, 4.6rem);
          line-height: 1.04;
          font-weight: 800;
        }
        .hero-title-line { display: block; color: var(--text); }
        .hero-title .grad-text { display: block; }
        .hero-lead {
          max-width: 620px;
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }
        .hero-socials { display: flex; gap: 0.5rem; margin-left: 0.25rem; }
        .hero-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-soft);
          transition: all 0.2s ease;
        }
        .hero-social:hover { color: var(--text); border-color: var(--accent); transform: translateY(-2px); }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.9rem;
          max-width: 620px;
          margin-bottom: 2rem;
        }
        .hero-stat { border-radius: 16px; padding: 1.1rem 1.2rem; }
        .hero-stat-value { font-size: 1.7rem; font-weight: 800; line-height: 1; }
        .hero-stat-label { font-size: 0.78rem; margin-top: 0.4rem; }

        .hero-stack {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
        }
        .hero-stack-label { font-size: 0.8rem; margin-right: 0.25rem; }

        .hero-scroll {
          position: absolute;
          bottom: 1.75rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.72rem;
        }

        @media (max-width: 560px) {
          .hero-stats { grid-template-columns: 1fr; }
          .hero-stat { display: flex; align-items: baseline; gap: 0.6rem; }
          .hero-stat-value { font-size: 1.4rem; }
          .hero-stat-label { margin-top: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
