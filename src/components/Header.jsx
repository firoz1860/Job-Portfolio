import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const navItems = ['home', 'about', 'projects', 'contact'];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`hdr ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="hdr-inner">
        <button type="button" className="hdr-logo font-mono" onClick={() => go('home')}>
          <span className="grad-text">&lt;Firoz/&gt;</span>
        </button>

        <nav className="hdr-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button key={item} type="button" className="hdr-link" onClick={() => go(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        <div className="hdr-actions">
          <a href="https://github.com/firoz1860" target="_blank" rel="noopener noreferrer" className="hdr-icon" aria-label="GitHub">
            <Github className="w-4.5 h-4.5" />
          </a>
          <a href="https://www.linkedin.com/in/firoz-ahmad-020166251" target="_blank" rel="noopener noreferrer" className="hdr-icon" aria-label="LinkedIn">
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <button type="button" className="btn btn-primary hdr-cta" onClick={() => go('contact')}>
            Let’s talk
          </button>
          <button
            type="button"
            className="hdr-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`hdr-mobile ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <button key={item} type="button" className="hdr-mobile-link" onClick={() => go(item)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <style>{`
        .hdr {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .hdr.is-scrolled {
          background: color-mix(in srgb, var(--bg) 72%, transparent);
          backdrop-filter: blur(14px);
          border-bottom-color: var(--border);
        }
        .hdr-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.9rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .hdr-logo {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: 700;
          padding: 0;
        }
        .hdr-nav {
          display: none;
          gap: 0.35rem;
        }
        .hdr-link {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-soft);
          font-size: 0.92rem;
          font-weight: 500;
          padding: 0.45rem 0.85rem;
          border-radius: 999px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .hdr-link:hover { color: var(--text); background: var(--surface); }
        .hdr-actions { display: flex; align-items: center; gap: 0.5rem; }
        .hdr-icon {
          display: none;
          width: 2.3rem;
          height: 2.3rem;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: var(--text-soft);
          border: 1px solid var(--border);
          background: var(--surface);
          transition: all 0.2s ease;
        }
        .hdr-icon:hover { color: var(--text); border-color: var(--accent); }
        .hdr-cta { display: none; padding: 0.55rem 1.1rem; font-size: 0.9rem; }
        .hdr-burger {
          display: inline-flex;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text);
          width: 2.5rem;
          height: 2.5rem;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          cursor: pointer;
        }
        .hdr-mobile {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.25s ease;
          background: color-mix(in srgb, var(--bg) 92%, transparent);
          backdrop-filter: blur(14px);
        }
        .hdr-mobile.is-open {
          max-height: 320px;
          opacity: 1;
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 1.25rem 1rem;
        }
        .hdr-mobile-link {
          text-align: left;
          background: none;
          border: none;
          color: var(--text-soft);
          font-size: 1rem;
          font-weight: 500;
          padding: 0.7rem 0.75rem;
          border-radius: 10px;
          cursor: pointer;
        }
        .hdr-mobile-link:hover { background: var(--surface); color: var(--text); }

        @media (min-width: 860px) {
          .hdr-nav { display: flex; }
          .hdr-icon { display: inline-flex; }
          .hdr-cta { display: inline-flex; }
          .hdr-burger { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
