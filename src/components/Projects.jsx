import React, { memo, useCallback, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Github,
  Info,
  Layers,
  RotateCw,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import projects from "../data/projects";
import ProjectCover from "./ProjectCover.jsx";

const GITHUB_URL = "https://github.com/firoz1860?tab=repositories";

const filters = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full Stack" },
  { key: "ai", label: "AI / ML" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "mobile", label: "Mobile" },
];

const categoryLabel = {
  fullstack: "Full Stack",
  ai: "AI / ML",
  backend: "Backend",
  frontend: "Frontend",
  mobile: "Mobile",
};

// Build at least 5 lines of "about" info for a project's back face.
// Prefers an author-written `highlights` array (>= 5 items) when present,
// otherwise derives honest, specific lines from the project's real fields —
// no invented features that could mislead a reviewer.
const getAboutLines = (p) => {
  if (Array.isArray(p.highlights) && p.highlights.length >= 5) {
    return p.highlights;
  }
  return [
    p.desc,
    `Type: ${categoryLabel[p.category]} project, built primarily in ${p.language}.`,
    `Tech stack: ${p.tech.join(", ")}.`,
    p.demo
      ? "Deployed with a live demo you can open and try in the browser."
      : "Source-available on GitHub — clone it and run locally to explore.",
    `Shipped in ${p.year}${
      p.featured ? " and featured as one of my strongest projects." : "."
    }`,
  ];
};

// Stop the card from flipping when an actual link inside it is clicked.
const stopFlip = (e) => e.stopPropagation();

const ProjectCard = memo(({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const aboutLines = useMemo(() => getAboutLines(project), [project]);

  const toggle = useCallback(() => setFlipped((v) => !v), []);
  const onKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((v) => !v);
    }
  }, []);

  const links = (
    <div className="pj-links">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="pj-link"
        onClick={stopFlip}
        aria-label={`${project.title} source code on GitHub`}
      >
        <Github className="w-4 h-4" />
        Code
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="pj-link pj-link--demo"
          onClick={stopFlip}
          aria-label={`${project.title} live demo`}
        >
          Live
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );

  return (
    <article className={`pj-flip ${flipped ? "is-flipped" : ""}`}>
      <div
        className="pj-inner"
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={
          flipped
            ? `Hide details for ${project.title}`
            : `Show details for ${project.title}`
        }
        onClick={toggle}
        onKeyDown={onKeyDown}
      >
        {/* FRONT */}
        <div className="pj-face pj-front card">
          <div className="pj-cover">
            <ProjectCover project={project} />
            {project.featured && (
              <span className="pj-featured">
                <Star className="w-3 h-3" fill="currentColor" />
                Featured
              </span>
            )}
            <span className="pj-flip-hint">
              <Info className="w-3.5 h-3.5" />
              Tap for details
            </span>
          </div>

          <div className="pj-body">
            <div className="pj-top">
              <h3 className="pj-title">{project.title}</h3>
              <span className="pj-meta">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>

            <p className="pj-desc">{project.desc}</p>

            <div className="pj-tech">
              {project.tech.slice(0, 4).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
              {project.tech.length > 4 && (
                <span className="chip">+{project.tech.length - 4}</span>
              )}
            </div>

            <div className="pj-foot">
              <span className={`pj-cat pj-cat--${project.category}`}>
                {categoryLabel[project.category]}
              </span>
              {links}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="pj-face pj-back card">
          <div className="pj-back-head">
            <span className="pj-back-eyebrow">
              <Layers className="w-3.5 h-3.5" />
              About this project
            </span>
            <h3 className="pj-title">{project.title}</h3>
          </div>

          <ul className="pj-about">
            {aboutLines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          <div className="pj-foot">
            <button
              type="button"
              className="pj-back-btn"
              onClick={(e) => {
                stopFlip(e);
                setFlipped(false);
              }}
              aria-label={`Back to ${project.title} card`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
            {links}
          </div>

          <RotateCw className="pj-back-watermark" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
});

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () =>
      projects.reduce(
        (acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }),
        { all: projects.length }
      ),
    []
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchCat = filter === "all" || p.category === filter;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  const liveCount = useMemo(() => projects.filter((p) => p.demo).length, []);

  return (
    <section id="projects" className="pj-section aurora">
      <div className="pj-container">
        <header className="pj-header">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">
            Projects <span className="grad-text">/ {projects.length}</span>
          </h2>
          <p className="pj-sub text-muted">
            {projects.length} repositories spanning full-stack apps, AI/ML systems,
            backend services, and mobile — {liveCount} with live demos. Every card links
            straight to the source and, where available, a deployed build.
          </p>
        </header>

        <div className="pj-controls">
          <div className="pj-filters" role="tablist" aria-label="Filter projects by category">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`pj-filter ${filter === f.key ? "is-active" : ""}`}
                aria-pressed={filter === f.key}
              >
                {f.label}
                <span className="pj-filter-count">{counts[f.key] || 0}</span>
              </button>
            ))}
          </div>

          <label className="pj-search">
            <Search className="w-4 h-4" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech…"
              aria-label="Search projects"
            />
          </label>
        </div>

        {visible.length > 0 ? (
          <div className="pj-grid">
            {visible.map((p) => (
              <ProjectCard key={p.repo} project={p} />
            ))}
          </div>
        ) : (
          <div className="pj-empty surface">
            <Sparkles className="w-6 h-6" />
            <p>No projects match “{query}”. Try another keyword.</p>
          </div>
        )}

        <div className="pj-cta">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Github className="w-4 h-4" />
            View all repositories on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style>{`
        .pj-section {
          padding: 6rem 0;
          background: var(--bg);
        }
        .pj-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .pj-header {
          max-width: 640px;
          margin-bottom: 2.5rem;
        }
        .pj-header .section-title { margin: 0.8rem 0 0.9rem; }
        .pj-sub { font-size: 1rem; line-height: 1.65; }

        .pj-controls {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .pj-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pj-filter {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 0.9rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-soft);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pj-filter:hover { border-color: var(--border-strong); color: var(--text); }
        .pj-filter.is-active {
          color: #05070d;
          background: var(--grad);
          border-color: transparent;
        }
        .pj-filter-count {
          min-width: 1.3rem;
          height: 1.3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.35rem;
          border-radius: 999px;
          background: rgba(0,0,0,0.18);
          font-size: 0.7rem;
        }
        .pj-filter:not(.is-active) .pj-filter-count {
          background: var(--surface-strong);
          color: var(--muted);
        }

        .pj-search {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.9rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--muted);
          min-width: 240px;
        }
        .pj-search input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text);
          font-size: 0.9rem;
          width: 100%;
        }
        .pj-search input::placeholder { color: var(--muted); }
        .pj-search:focus-within { border-color: var(--accent); }

        .pj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
        }

        /* ---- Flip card ---- */
        .pj-flip {
          position: relative;
          height: 430px;
          perspective: 1400px;
        }
        .pj-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          cursor: pointer;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          transform-style: preserve-3d;
          outline: none;
        }
        .pj-flip.is-flipped .pj-inner {
          transform: rotateY(180deg);
        }
        .pj-inner:focus-visible {
          box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--accent);
        }
        .pj-face {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .pj-back {
          transform: rotateY(180deg);
          padding: 1.15rem 1.2rem 1.1rem;
          gap: 0.85rem;
        }
        @media (prefers-reduced-motion: reduce) {
          .pj-inner { transition: none; }
        }

        .pj-cover {
          position: relative;
          height: 140px;
        }
        .pj-flip-hint {
          position: absolute;
          bottom: 0.7rem;
          left: 0.7rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.26rem 0.55rem;
          border-radius: 999px;
          font-size: 0.68rem;
          font-weight: 600;
          color: #fff;
          background: rgba(0, 0, 0, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.28);
          backdrop-filter: blur(4px);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .pj-inner:hover .pj-flip-hint,
        .pj-inner:focus-visible .pj-flip-hint {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---- Back face ---- */
        .pj-back-head {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .pj-back-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .pj-about {
          flex: 1;
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          overflow-y: auto;
          color: var(--text-soft);
          font-size: 0.83rem;
          line-height: 1.5;
        }
        .pj-about li {
          position: relative;
          padding-left: 1rem;
        }
        .pj-about li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--grad);
        }
        .pj-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.4rem 0.7rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-soft);
          background: var(--surface-strong);
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pj-back-btn:hover { color: var(--text); border-color: var(--accent); }
        .pj-back-watermark {
          position: absolute;
          right: -14px;
          bottom: -14px;
          width: 96px;
          height: 96px;
          color: var(--text);
          opacity: 0.05;
          pointer-events: none;
        }
        .pj-featured {
          position: absolute;
          top: 0.7rem;
          right: 0.7rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.28rem 0.55rem;
          border-radius: 999px;
          font-size: 0.68rem;
          font-weight: 700;
          color: #fff;
          background: rgba(0,0,0,0.42);
          border: 1px solid rgba(255,255,255,0.28);
          backdrop-filter: blur(4px);
        }
        .pj-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 1.05rem 1.1rem 1.1rem;
        }
        .pj-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.55rem;
        }
        .pj-title {
          font-family: "Sora", sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          line-height: 1.25;
          color: var(--text);
        }
        .pj-meta {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          flex-shrink: 0;
          font-size: 0.75rem;
          color: var(--muted);
          font-family: "JetBrains Mono", monospace;
        }
        .pj-desc {
          color: var(--muted);
          font-size: 0.85rem;
          line-height: 1.55;
          margin-bottom: 0.9rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }
        .pj-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-top: auto;
        }
        .pj-cat {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.72rem;
          font-weight: 600;
        }
        .pj-cat--fullstack { color: #67e8f9; }
        .pj-cat--ai { color: #c4b5fd; }
        .pj-cat--backend { color: #6ee7b7; }
        .pj-cat--frontend { color: #fcd34d; }
        .pj-cat--mobile { color: #5eead4; }
        html.light .pj-cat--fullstack { color: #0e7490; }
        html.light .pj-cat--ai { color: #6d28d9; }
        html.light .pj-cat--backend { color: #047857; }
        html.light .pj-cat--frontend { color: #b45309; }
        html.light .pj-cat--mobile { color: #0f766e; }

        .pj-links { display: inline-flex; gap: 0.4rem; }
        .pj-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.4rem 0.7rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-soft);
          background: var(--surface-strong);
          border: 1px solid var(--border);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .pj-link:hover { color: var(--text); border-color: var(--accent); }
        .pj-link--demo {
          color: #05070d;
          background: var(--grad);
          border-color: transparent;
        }
        .pj-link--demo:hover { color: #05070d; transform: translateY(-1px); }

        .pj-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 3rem 1rem;
          border-radius: 18px;
          color: var(--muted);
          text-align: center;
        }

        .pj-cta {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
        }

        @media (max-width: 640px) {
          .pj-section { padding: 4rem 0; }
          .pj-search { width: 100%; }
          .pj-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
