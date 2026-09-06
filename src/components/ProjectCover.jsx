import React, { memo } from 'react';

// Deterministic gradient cover generated from the project so every card looks
// intentional without needing a screenshot per project.
const PALETTES = {
  fullstack: ['#22d3ee', '#6366f1'],
  ai: ['#a78bfa', '#ec4899'],
  backend: ['#34d399', '#0ea5e9'],
  frontend: ['#f59e0b', '#ef4444'],
  mobile: ['#38bdf8', '#14b8a6'],
};

function initials(title) {
  const words = title.replace(/[^a-zA-Z0-9 ]/g, ' ').trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const ProjectCover = memo(({ project }) => {
  const [from, to] = PALETTES[project.category] || PALETTES.fullstack;
  return (
    <div
      className="project-cover"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      <div className="project-cover__grid" />
      <span className="project-cover__mono">{`</>`}</span>
      <span className="project-cover__initials">{initials(project.title)}</span>
      <span className="project-cover__lang">{project.language}</span>

      <style>{`
        .project-cover {
          position: relative;
          height: 100%;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-cover__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px);
          background-size: 26px 26px;
          opacity: 0.35;
          mix-blend-mode: overlay;
        }
        .project-cover__mono {
          position: absolute;
          top: 0.6rem;
          left: 0.75rem;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
        }
        .project-cover__initials {
          font-family: "Sora", sans-serif;
          font-weight: 800;
          font-size: 2.6rem;
          letter-spacing: -0.03em;
          color: #fff;
          text-shadow: 0 2px 18px rgba(0,0,0,0.28);
        }
        .project-cover__lang {
          position: absolute;
          bottom: 0.6rem;
          right: 0.75rem;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.68rem;
          font-weight: 600;
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
          color: #fff;
          background: rgba(0,0,0,0.28);
          border: 1px solid rgba(255,255,255,0.25);
        }
      `}</style>
    </div>
  );
});

export default ProjectCover;
