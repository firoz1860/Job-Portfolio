import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { MdComputer } from 'react-icons/md';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ArrowUp, Heart } from 'lucide-react';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/firoz1860', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/firoz-ahmad-020166251', label: 'LinkedIn' },
  { icon: FaXTwitter, url: 'https://x.com/FirozAh51793346', label: 'Twitter' },
  { icon: FaInstagram, url: 'https://instagram.com/_firoz_023', label: 'Instagram' },
];

const themes = [
  { key: 'system', icon: MdComputer, label: 'System theme' },
  { key: 'light', icon: FiSun, label: 'Light theme' },
  { key: 'dark', icon: FiMoon, label: 'Dark theme' },
];

const Footer = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShowTop(window.scrollY > 500);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    let resolved = theme;
    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    root.classList.add(resolved);
    root.dataset.theme = resolved;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', resolved === 'dark' ? '#070a12' : '#f6f8fc');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <footer className="ft">
      <div className="ft-top" />
      <div className="ft-inner">
        <div className="ft-grid">
          <div className="ft-brand">
            <h3 className="grad-text font-mono ft-logo">&lt;Firoz Ahmad/&gt;</h3>
            <p className="ft-tagline text-muted">
              Backend &amp; AI-focused Full Stack Developer building secure, scalable, and
              intelligent web applications.
            </p>
            <p className="ft-made text-muted">
              Built with <Heart className="w-3.5 h-3.5" fill="currentColor" /> in Delhi, India
            </p>
          </div>

          <div className="ft-col">
            <h4 className="ft-col-title">Navigate</h4>
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="ft-link">{l}</a>
            ))}
          </div>

          <div className="ft-col">
            <h4 className="ft-col-title">Connect</h4>
            <a href="mailto:firozahmed709p@gmail.com" className="ft-link">firozahmed709p@gmail.com</a>
            <a href="tel:+919315742128" className="ft-link">+91 93157 42128</a>
            <a href="https://github.com/firoz1860?tab=repositories" target="_blank" rel="noopener noreferrer" className="ft-link">All repositories</a>
          </div>
        </div>

        <div className="ft-bar">
          <div className="ft-socials">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label={s.label}>
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <div className="ft-theme" role="group" aria-label="Theme">
            {themes.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTheme(t.key)}
                className={`ft-theme-btn ${theme === t.key ? 'is-active' : ''}`}
                aria-label={t.label}
                aria-pressed={theme === t.key}
              >
                <t.icon size={16} />
              </button>
            ))}
          </div>
        </div>

        <p className="ft-copy text-muted">
          © {new Date().getFullYear()} Firoz Ahmad. All rights reserved.
        </p>
      </div>

      {showTop && (
        <button type="button" onClick={scrollTop} className="ft-toTop" aria-label="Scroll to top">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <style>{`
        .ft { position: relative; background: var(--bg-soft); border-top: 1px solid var(--border); }
        .ft-top { height: 3px; background: var(--grad); }
        .ft-inner { max-width: 1200px; margin: 0 auto; padding: 3.5rem 1.25rem 2rem; }
        .ft-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        .ft-logo { font-size: 1.4rem; font-weight: 700; margin-bottom: 0.9rem; }
        .ft-tagline { font-size: 0.9rem; line-height: 1.6; max-width: 340px; margin-bottom: 1rem; }
        .ft-made { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.82rem; color: #f87171; }
        .ft-col { display: flex; flex-direction: column; gap: 0.6rem; }
        .ft-col-title { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text); margin-bottom: 0.4rem; }
        .ft-link { color: var(--muted); font-size: 0.9rem; text-decoration: none; transition: color 0.2s ease; }
        .ft-link:hover { color: var(--accent); }

        .ft-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
        }
        .ft-socials { display: flex; gap: 0.6rem; }
        .ft-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-soft);
          transition: all 0.2s ease;
        }
        .ft-social:hover { color: var(--text); border-color: var(--accent); transform: translateY(-2px); }
        .ft-theme {
          display: inline-flex;
          gap: 0.25rem;
          padding: 0.25rem;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .ft-theme-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 999px;
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ft-theme-btn:hover { color: var(--text); }
        .ft-theme-btn.is-active { background: var(--surface-strong); color: var(--accent); }

        .ft-copy { text-align: center; font-size: 0.8rem; }

        .ft-toTop {
          position: fixed;
          bottom: 1.75rem;
          right: 1.75rem;
          z-index: 40;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          color: #05070d;
          background: var(--grad);
          box-shadow: 0 12px 30px -12px var(--accent);
          transition: transform 0.2s ease;
        }
        .ft-toTop:hover { transform: translateY(-3px); }

        @media (max-width: 720px) {
          .ft-grid { grid-template-columns: 1fr 1fr; }
          .ft-brand { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
