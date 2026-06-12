import React, { memo, useCallback, useMemo, useState } from "react";
import { Calendar, Code2, ExternalLink, Github, Star } from "lucide-react";
import projects from "../data/projects";

const filters = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
];

const ProjectCard = memo(({ project, index }) => (
  <article className="project-card">
    <div className="image-container">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={index === 0 ? "high" : "auto"}
        onError={(e) => {
          e.currentTarget.src = "/backend.png";
        }}
      />
      <div className={`status-badge ${project.status === "Live" ? "live" : "completed"}`}>
        {project.status}
      </div>
    </div>

    <div className="project-content">
      <div className="project-heading">
        <h3 className="project-title">{project.title}</h3>
        {project.featured && (
          <span className="featured-badge">
            <Star className="w-3 h-3" />
            Featured
          </span>
        )}
      </div>

      <div className="project-meta">
        <span>
          <Calendar className="w-3.5 h-3.5" />
          {project.year}
        </span>
        <span>
          <Code2 className="w-3.5 h-3.5" />
          {project.category}
        </span>
      </div>

      <p className="project-description">{project.desc}</p>

      <div className="tech-stack">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && <span className="tech-more">+{project.tech.length - 4}</span>}
      </div>

      <div className="project-footer">
        <span className={`category-tag ${project.category}`}>{project.category}</span>
        <div className="action-links">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn" aria-label={`${project.title} source code`}>
            <Github className="w-4 h-4" />
          </a>
          {project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn" aria-label={`${project.title} live demo`}>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
));

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projectCounts = useMemo(
    () =>
      projects.reduce(
        (counts, project) => ({
          ...counts,
          [project.category]: (counts[project.category] || 0) + 1,
        }),
        { all: projects.length }
      ),
    []
  );

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const handleFilterChange = useCallback((nextFilter) => {
    setFilter(nextFilter);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">&lt; Projects /&gt;</h2>
          <p className="section-subtitle">
            Selected full-stack, frontend, and backend work in a faster compact layout.
          </p>
        </div>

        <div className="filter-container" aria-label="Project filters">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleFilterChange(item.key)}
              className={`filter-btn ${filter === item.key ? "active" : ""}`}
            >
              <span>{item.label}</span>
              <span className="filter-count">{projectCounts[item.key] || 0}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${filter}`} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          min-height: 100vh;
          padding: 4rem 0;
          background: #0f172a;
          content-visibility: auto;
          contain-intrinsic-size: 1000px;
        }

        .projects-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-title {
          color: #f8fafc;
          font-size: clamp(2.25rem, 6vw, 4rem);
          font-weight: 800;
          margin-bottom: 0.75rem;
        }

        .section-subtitle {
          color: #94a3b8;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 560px;
          margin: 0 auto;
        }

        .filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.9rem;
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.9);
          color: #cbd5e1;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .filter-btn.active {
          border-color: #22d3ee;
          background: rgba(8, 145, 178, 0.18);
          color: #f8fafc;
        }

        .filter-count {
          min-width: 1.35rem;
          height: 1.35rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #e2e8f0;
          font-size: 0.75rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 1rem;
          align-items: stretch;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.94);
          contain: layout paint style;
        }

        .project-card:hover {
          border-color: rgba(34, 211, 238, 0.45);
        }

        .image-container {
          position: relative;
          height: 132px;
          overflow: hidden;
          background: #111827;
        }

        .project-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          left: 0.65rem;
          top: 0.65rem;
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #e2e8f0;
          font-size: 0.68rem;
          font-weight: 700;
        }

        .status-badge.live {
          color: #86efac;
        }

        .status-badge.completed {
          color: #93c5fd;
        }

        .project-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 0.9rem;
        }

        .project-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.55rem;
        }

        .project-title {
          color: #f8fafc;
          font-size: 1rem;
          line-height: 1.3;
          font-weight: 750;
        }

        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          flex-shrink: 0;
          padding: 0.25rem 0.45rem;
          border-radius: 999px;
          background: rgba(139, 92, 246, 0.18);
          color: #ddd6fe;
          font-size: 0.65rem;
          font-weight: 700;
        }

        .project-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 0.65rem;
          color: #94a3b8;
          font-size: 0.78rem;
        }

        .project-meta span {
          display: inline-flex;
          align-items: center;
          gap: 0.28rem;
        }

        .project-description {
          color: #cbd5e1;
          font-size: 0.82rem;
          line-height: 1.5;
          margin-bottom: 0.8rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 0.9rem;
        }

        .tech-tag,
        .tech-more {
          padding: 0.22rem 0.5rem;
          border: 1px solid rgba(34, 211, 238, 0.22);
          border-radius: 999px;
          background: rgba(8, 145, 178, 0.12);
          color: #bae6fd;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .tech-more {
          border-color: rgba(148, 163, 184, 0.22);
          background: rgba(148, 163, 184, 0.12);
          color: #cbd5e1;
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: auto;
        }

        .category-tag {
          color: #94a3b8;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: capitalize;
        }

        .category-tag.fullstack {
          color: #86efac;
        }

        .category-tag.frontend {
          color: #93c5fd;
        }

        .category-tag.backend {
          color: #fdba74;
        }

        .action-links {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .link-btn {
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
        }

        .link-btn:hover {
          color: #ffffff;
          background: rgba(34, 211, 238, 0.16);
        }

        @media (max-width: 640px) {
          .projects-section {
            padding: 3rem 0;
          }

          .projects-container {
            padding: 0 0 0 1rem;
          }

          .projects-grid {
            display: flex;
            gap: 1rem;
            overflow-x: auto;
            padding: 0 1rem 0.75rem 0;
            scroll-padding-left: 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .projects-grid::-webkit-scrollbar {
            display: none;
          }

          .project-card {
            flex: 0 0 calc(100vw - 2rem);
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
