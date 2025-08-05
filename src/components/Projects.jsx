import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ExternalLink,
  Github,
  Eye,
  Star,
  GitFork,
  Calendar,
  Code2,
  Users,
} from "lucide-react";

const projects = [
  {
    title: "JobPortal",
    desc: "A comprehensive job portal built with the MERN stack, featuring advanced search, real-time notifications, and secure authentication. Includes recruiter dashboard and candidate management.",
    link: "https://github.com/firoz1860/JobPortal",
    demo: "#",
    image: "https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    featured: true,
    stats: { stars: 15, forks: 8, views: 230 },
    year: "2024",
    status: "Completed",
  },
  {
    title: "NewsApp",
    desc: "React-based news application with infinite scrolling, category filtering, and real-time updates. Features responsive design and optimized performance.",
    link: "https://github.com/firoz1860/news",
    demo: "#",
    image: "/news.png",
    tech: ["React", "News API", "CSS3", "JavaScript"],
    category: "frontend",
    featured: false,
    stats: { stars: 12, forks: 5, views: 180 },
    year: "2023",
    status: "Completed",
  },
  {
    title: "Apollo247",
    desc: "Healthcare platform offering online consultations, medicine delivery, and health records management. Built with modern web technologies for optimal user experience.",
    link: "https://apolo247.vercel.app/",
    demo: "https://apolo247.vercel.app/",
    image: "./apollo.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    featured: true,
    stats: { stars: 20, forks: 12, views: 350 },
    year: "2024",
    status: "Live",
  },
  {
    title: "3D Portfolio",
    desc: "Interactive 3D portfolio showcasing modern web development with Three.js, featuring smooth animations and immersive user experience.",
    link: "https://3-d-portfolio-psi-gold.vercel.app/",
    demo: "https://3-d-portfolio-psi-gold.vercel.app/",
    image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg",
    tech: ["React", "Three.js", "WebGL", "Framer Motion"],
    category: "frontend",
    featured: true,
    stats: { stars: 25, forks: 10, views: 420 },
    year: "2024",
    status: "Live",
  },
  {
    title: "YouTube Backend",
    desc: "Scalable backend service powering video streaming platform with user authentication, video processing, and real-time features.",
    link: "https://github.com/firoz1860/youtube",
    demo: "#",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    featured: false,
    stats: { stars: 18, forks: 7, views: 290 },
    year: "2024",
    status: "Completed",
  },
  {
    title: "Ecommerce Backend",
    desc: "Built a robust and scalable e-commerce backend using Node.js and Express.js for the server framework, MongoDB with Mongoose for flexible and efficient database management, and JWT for secure authentication. Integrated Cloudinary for media storage and Stripe for seamless payment processing. Utilized Multer for file handling, Nodemailer for order and verification emails, and implemented role-based access control for admin and users. Added rate limiting, helmet, and CORS for enhanced security and performance. The API is fully modular, RESTful, and designed to support both web and mobile frontends.",
    link: "https://github.com/firoz1860/ecommerce-backend",
    demo: "#",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stripe",
      "Cloudinary",
      "Multer",
      "Nodemailer",
      "CORS",
      "Redis",
      "Tailwind CSS for styling",

      "Framer Motion for animations",

      "React Router DOM for navigation",

      "Axios for API calls.",

      "React Hook Form + Zod/Yup for form validation",

      "React Toastify for alerts",

      "Socket.io-client for real-time updates",
    ],
    category: "backend",
    featured: false,
    stats: { stars: 18, forks: 7, views: 290 },
    year: "2025",
    status: "Completed",
  },
  {
    title: "Job-finder",
    desc: "A job-finding platform connecting job seekers with employers, featuring advanced search and filtering options.",
    link: "https://github.com/firoz1860/job-finder",
    demo: "#",
    image: "/job.png",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Axios",
      "HTML",
      "CSS",
    ],
    category: "fullstack",
    featured: false,
    stats: { stars: 18, forks: 7, views: 290 },
    year: "2023",
    status: "Completed",
  },
  {
    title: "Smart-Note-App",
    desc: "A note-taking application with smart features like tagging, searching, and real-time collaboration.",
    link: "https://github.com/firoz1860/smart-note-app",
    demo: "https://smart-note-taking-app-kappa.vercel.app/",
    image: "/smart-note-app.png",
    tech: [
      "Next.js",
      "Node.js",
      "Firebase",
      "Langchain",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    category: "fullstack",
    featured: false,
    stats: { stars: 18, forks: 7, views: 290 },
    year: "2025",
    status: "Completed",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className={`project-card-container ${
        project.featured ? "lg:col-span-2" : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`project-card ${isHovered ? "hovered" : ""}`}>
        {/* Glassmorphic Background Overlay */}
        <div className="glass-overlay" />

        {/* Dynamic Light Effect */}
        <div
          className="light-effect"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
          }}
        />

        {/* Project Image */}
        <div className="image-container">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            onError={(e) => {
              e.target.src =
                "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg";
            }}
          />
          <div className="image-overlay" />

          {/* Status Badge */}
          <div
            className={`status-badge ${
              project.status === "Live" ? "live" : "completed"
            }`}
          >
            <div className="status-dot" />
            {project.status}
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="featured-badge">
              <Star className="w-3 h-3" />
              Featured
            </div>
          )}

          {/* Stats Overlay */}
          <div className="stats-overlay">
            <div className="stat-item">
              <Star className="w-3 h-3 text-yellow-400" />
              <span>{project.stats.stars}</span>
            </div>
            <div className="stat-item">
              <GitFork className="w-3 h-3 text-gray-400" />
              <span>{project.stats.forks}</span>
            </div>
            <div className="stat-item">
              <Eye className="w-3 h-3 text-blue-400" />
              <span>{project.stats.views}</span>
            </div>
          </div>

          {/* Hover Action Buttons */}
          <div className={`action-buttons ${isHovered ? "visible" : ""}`}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn github-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </a>
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn demo-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          {/* Header */}
          <div className="content-header">
            <div className="title-section">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-meta">
                <div className="meta-item">
                  <Calendar className="w-3 h-3" />
                  <span>{project.year}</span>
                </div>
                <div className="meta-item">
                  <Code2 className="w-3 h-3" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="project-description">{project.desc}</p>

          {/* Tech Stack */}
          <div className="tech-stack">
            {project.tech.slice(0, 4).map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="tech-more">+{project.tech.length - 4}</span>
            )}
          </div>

          {/* Footer */}
          <div className="content-footer">
            <div className={`category-tag ${project.category}`}>
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </div>

            <div className="action-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
                title="View Code"
              >
                <Github className="w-4 h-4" />
              </a>
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                  title="View Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="animated-border" />

        {/* Hover Glow Effect */}
        <div className="hover-glow" />
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === filter)
      );
    }
  }, [filter]);

  const filters = [
    { key: "all", label: "All Projects", count: projects.length },
    {
      key: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      key: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      key: "backend",
      label: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      {/* Enhanced Background Effects */}
      <div className="background-effects">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="bg-circle bg-circle-3" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="grid-pattern" />

      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">&lt; Projects /&gt;</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my technical skills and creative problem-solving
            through real-world applications
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="filter-container">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`filter-btn ${
                filter === filterItem.key ? "active" : ""
              }`}
            >
              <span className="filter-label">{filterItem.label}</span>
              <span className="filter-count">{filterItem.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Perspective */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${filter}`}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Want to see more?</h3>
              <p>
                Explore my complete collection of projects and contributions
              </p>
            </div>
            <a
              href="https://github.com/firoz1860"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <Github className="w-5 h-5" />
              <span>Visit GitHub</span>
              <div className="button-glow" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          min-height: 100vh;
          padding: 5rem 0;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e1b4b 50%,
            #0f172a 100%
          );
          position: relative;
          overflow: hidden;
          perspective: 1000px;
        }

        .background-effects {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          pointer-events: none;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(60px);
          animation: float 6s ease-in-out infinite;
        }

        .bg-circle-1 {
          top: 10%;
          left: 10%;
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #8b5cf6, #06b6d4);
          animation-delay: 0s;
        }

        .bg-circle-2 {
          bottom: 10%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #06b6d4, #ec4899);
          animation-delay: 2s;
        }

        .bg-circle-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          animation-delay: 4s;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(139, 92, 246, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
          animation: gridMove 20s linear infinite;
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 10;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .title-gradient {
          background: linear-gradient(
            135deg,
            #8b5cf6,
            #06b6d4,
            #ec4899,
            #8b5cf6
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientShift 4s ease infinite;
        }

        .section-subtitle {
          color: #94a3b8;
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(139, 92, 246, 0.3);
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          color: #94a3b8;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          color: white;
          border-color: transparent;
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
        }

        .filter-btn:hover:not(.active) {
          color: white;
          border-color: rgba(139, 92, 246, 0.6);
          background: rgba(139, 92, 246, 0.1);
        }

        .filter-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          perspective: 1000px;
        }

        .project-card-container {
          transform-style: preserve-3d;
        }

        .project-card {
          position: relative;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(139, 92, 246, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
          height: 100%;
          cursor: pointer;
        }

        .project-card:hover {
          transform: scale(1.05) translateY(-10px) rotateX(5deg);
          z-index: 10;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.2);
        }

        .glass-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        .project-card.hovered .glass-overlay {
          opacity: 1;
        }

        .light-effect {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 2;
        }

        .project-card.hovered .light-effect {
          opacity: 1;
        }

        .image-container {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(15, 23, 42, 0.3) 50%,
            rgba(15, 23, 42, 0.8) 100%
          );
        }

        .status-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .status-badge.live {
          background: rgba(34, 197, 94, 0.2);
          color: #4ade80;
        }

        .status-badge.completed {
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          animation: pulse 2s infinite;
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.75rem;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }

        .stats-overlay {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          font-size: 0.75rem;
          color: white;
        }

        .action-buttons {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .action-buttons.visible {
          opacity: 1;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          transform: translateY(20px);
        }

        .action-buttons.visible .action-btn {
          transform: translateY(0);
        }

        .github-btn {
          background: #6366f1;
          color: white;
        }

        .github-btn:hover {
          background: #4f46e5;
          transform: scale(1.05);
        }

        .demo-btn {
          background: #06b6d4;
          color: white;
        }

        .demo-btn:hover {
          background: #0891b2;
          transform: scale(1.05);
        }

        .project-content {
          padding: 1.5rem;
          position: relative;
          z-index: 3;
        }

        .content-header {
          margin-bottom: 1rem;
        }

        .title-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: #8b5cf6;
        }

        .project-meta {
          display: flex;
          gap: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .project-description {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.2),
            rgba(6, 182, 212, 0.2)
          );
          color: #c084fc;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 16px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          border-color: rgba(139, 92, 246, 0.6);
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.3),
            rgba(6, 182, 212, 0.3)
          );
        }

        .tech-more {
          padding: 0.25rem 0.75rem;
          background: rgba(107, 114, 128, 0.2);
          color: #9ca3af;
          font-size: 0.75rem;
          border-radius: 16px;
        }

        .content-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .category-tag {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 20px;
          text-transform: capitalize;
        }

        .category-tag.fullstack {
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.2),
            rgba(59, 130, 246, 0.2)
          );
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .category-tag.frontend {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.2),
            rgba(139, 92, 246, 0.2)
          );
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .category-tag.backend {
          background: linear-gradient(
            135deg,
            rgba(249, 115, 22, 0.2),
            rgba(239, 68, 68, 0.2)
          );
          color: #fb923c;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }

        .action-links {
          display: flex;
          gap: 0.5rem;
        }

        .link-btn {
          padding: 0.5rem;
          color: #94a3b8;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .link-btn:hover {
          color: #8b5cf6;
          background: rgba(139, 92, 246, 0.1);
          transform: scale(1.1);
        }

        .animated-border {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            #8b5cf6,
            #06b6d4,
            #ec4899,
            #8b5cf6
          );
          background-size: 300% 300%;
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: gradientShift 3s ease infinite;
        }

        .project-card:hover .animated-border {
          opacity: 1;
        }

        .animated-border::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: rgba(15, 23, 42, 0.95);
          border-radius: 23px;
        }

        .hover-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 26px;
          opacity: 0;
          filter: blur(20px);
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .project-card:hover .hover-glow {
          opacity: 0.3;
        }

        .cta-section {
          text-align: center;
          margin-top: 4rem;
        }

        .cta-content {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .cta-text h3 {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .cta-text p {
          color: #94a3b8;
          font-size: 1rem;
        }

        .cta-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          color: white;
          font-weight: 600;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
        }

        .button-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-button:hover .button-glow {
          opacity: 1;
        }

        /* Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .projects-section {
            padding: 3rem 0;
          }

          .projects-container {
            padding: 0 1rem;
          }

          .section-header {
            margin-bottom: 2rem;
          }

          .filter-container {
            margin-bottom: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .project-card:hover {
            transform: scale(1.02) translateY(-5px);
          }

          .cta-content {
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
          }

          .cta-text {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            margin: 0 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .action-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { ExternalLink, Github, Eye, Star, GitFork } from 'lucide-react';

// const projects = [
//   {
//     title: "JobPortal",
//     desc: "A comprehensive job portal built with the MERN stack, featuring advanced search, real-time notifications, and secure authentication. Includes recruiter dashboard and candidate management.",
//     link: "https://github.com/firoz1860/JobPortal",
//     demo: "#",
//     image: "https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg",
//     tech: ["React", "Node.js", "MongoDB", "Express"],
//     category: "fullstack",
//     featured: true,
//     stats: { stars: 15, forks: 8, views: 230 }
//   },
//   {
//     title: "NewsApp",
//     desc: "React-based news application with infinite scrolling, category filtering, and real-time updates. Features responsive design and optimized performance.",
//     link: "https://github.com/firoz1860/news",
//     demo: "#",
//     image: "/news.png",
//     tech: ["React", "News API", "CSS3", "JavaScript"],
//     category: "frontend",
//     featured: false,
//     stats: { stars: 12, forks: 5, views: 180 }
//   },
//   {
//     title: "Apollo247",
//     desc: "Healthcare platform offering online consultations, medicine delivery, and health records management. Built with modern web technologies for optimal user experience.",
//     link: "https://apolo247.vercel.app/",
//     demo: "https://apolo247.vercel.app/",
//     // image: "https://images.pexels.com/photos/4269274/pexels-photo-4269274.jpeg",
//     image: "./apollo.png",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     category: "fullstack",
//     featured: true,
//     stats: { stars: 20, forks: 12, views: 350 }
//   },
//   {
//     title: "3D Portfolio",
//     desc: "Interactive 3D portfolio showcasing modern web development with Three.js, featuring smooth animations and immersive user experience.",
//     link: "https://3-d-portfolio-psi-gold.vercel.app/",
//     demo: "https://3-d-portfolio-psi-gold.vercel.app/",
//     image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg",
//     tech: ["React", "Three.js", "WebGL", "Framer Motion"],
//     category: "frontend",
//     featured: true,
//     stats: { stars: 25, forks: 10, views: 420 }
//   },
//   {
//     title: "YouTube Backend",
//     desc: "Scalable backend service powering video streaming platform with user authentication, video processing, and real-time features.",
//     link: "https://github.com/firoz1860/youtube",
//     demo: "#",
//     image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
//     tech: ["Node.js", "Express", "MongoDB", "JWT"],
//     category: "backend",
//     featured: false,
//     stats: { stars: 18, forks: 7, views: 290 }
//   },
//   {
//     title: "Job-finder",
//     desc: "A job-finding platform connecting job seekers with employers, featuring advanced search and filtering options.",
//     link: "https://github.com/firoz1860/job-finder",
//     demo: "#",
//     image: "/job.png",
//     tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS","Axios","html","css"],
//     category: "fullstack",
//     featured: false,
//     stats: { stars: 18, forks: 7, views: 290 }
//   },
// ];

// const ProjectCard = ({ project, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-duration="600"
//       data-aos-delay={index * 100}
//       className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
//         project.featured ? 'lg:col-span-2' : ''
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 h-full">
//         {/* Project Image */}
//         <div className="relative h-64 overflow-hidden">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

//           {/* Featured Badge */}
//           {project.featured && (
//             <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold rounded-full">
//               Featured
//             </div>
//           )}

//           {/* Stats Overlay */}
//           <div className="absolute top-4 right-4 flex space-x-2">
//             <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
//               <Star className="w-3 h-3 text-yellow-400" />
//               <span>{project.stats.stars}</span>
//             </div>
//             <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
//               <GitFork className="w-3 h-3 text-gray-400" />
//               <span>{project.stats.forks}</span>
//             </div>
//           </div>

//           {/* Hover Action Buttons */}
//           <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
//             isHovered ? 'opacity-100 bg-black/50 backdrop-blur-sm' : 'opacity-0'
//           }`}>
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Github className="w-5 h-5" />
//             </a>
//             {project.demo !== "#" && (
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <ExternalLink className="w-5 h-5" />
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Project Content */}
//         <div className="p-6">
//           <div className="flex items-center justify-between mb-3">
//             <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
//               {project.title}
//             </h3>
//             <div className="flex items-center space-x-1 text-gray-400 text-sm">
//               <Eye className="w-4 h-4" />
//               <span>{project.stats.views}</span>
//             </div>
//           </div>

//           <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
//             {project.desc}
//           </p>

//           {/* Tech Stack */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.tech.map((tech, techIndex) => (
//               <span
//                 key={techIndex}
//                 className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>

//           {/* Category Tag */}
//           <div className="flex items-center justify-between">
//             <span className={`px-3 py-1 text-xs font-medium rounded-full ${
//               project.category === 'fullstack'
//                 ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border border-green-500/30'
//                 : project.category === 'frontend'
//                 ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30'
//                 : 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30'
//             }`}>
//               {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
//             </span>

//             <div className="flex space-x-2">
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
//               >
//                 <Github className="w-4 h-4" />
//               </a>
//               {project.demo !== "#" && (
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Animated Border */}
//         <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 p-[1px]">
//             <div className="w-full h-full bg-gray-900/80 rounded-2xl"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const [filter, setFilter] = useState('all');
//   const [filteredProjects, setFilteredProjects] = useState(projects);

//   useEffect(() => {
//     AOS.init({
//       once: true,
//       duration: 600,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   useEffect(() => {
//     if (filter === 'all') {
//       setFilteredProjects(projects);
//     } else {
//       setFilteredProjects(projects.filter(project => project.category === filter));
//     }
//   }, [filter]);

//   const filters = [
//     { key: 'all', label: 'All Projects' },
//     { key: 'fullstack', label: 'Full Stack' },
//     { key: 'frontend', label: 'Frontend' },
//     { key: 'backend', label: 'Backend' }
//   ];

//   return (
//     <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-6xl md:text-7xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               &lt; Projects /&gt;
//             </span>
//           </h2>
//           <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
//             A showcase of my technical skills and creative problem-solving through real-world applications
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {filters.map((filterItem) => (
//             <button
//               key={filterItem.key}
//               onClick={() => setFilter(filterItem.key)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                 filter === filterItem.key
//                   ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
//                   : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50 hover:border-purple-500/50'
//               }`}
//             >
//               {filterItem.label}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={`${project.title}-${filter}`} project={project} index={index} />
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30">
//             <span className="text-gray-300">Want to see more?</span>
//             <a
//               href="https://github.com/firoz1860"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
//             >
//               Visit GitHub
//             </a>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;

// // src/components/Projects.js
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import { image } from 'framer-motion/client';

// const projects = [
//   {
//     title: "JobPortal",
//     desc: "Job Portal is a web application where job seekers can find and apply for jobs, and employers can post job openings and manage applications — built using the MERN stack.",
//     link: "https://github.com/firoz1860/JobPortal",
//     image: "/job-portal.png",
//   },
//   {
//     title: "NewsApp",
//     desc: "NewsApp is a React-based news application that fetches real-time headlines from the NewsAPI. It supports infinite scrolling, categorized browsing (like sports, technology, health), country-based filtering, and dynamic loading indicators. Users can seamlessly explore the latest news with a clean and responsive UI.",
//     link: "https://github.com/firoz1860/news",
//     image: "/news-app.png",
//   },
//   {
//     title: "Apollo247",
//     desc: "Apollo 24|7 is a comprehensive digital healthcare platform offering online doctor consultations, medicine delivery, lab tests, and health records management — all in one app. Backed by the trusted Apollo Hospitals, it ensures accessible, reliable, and personalized healthcare anytime, anywhere.",
//     link: "https://apolo247.vercel.app/",
//     image: "/apollo.png"
//   },
//   {
//     title: "3D-Portfolio",
//     desc: "3D Portfolio is a modern, interactive personal portfolio built using React, Three.js, and WebGL. It features smooth animations, 3D models, and responsive design to creatively showcase projects, skills, and experience in an engaging and immersive way.",
//     link: "https://3-d-portfolio-psi-gold.vercel.app/",
//     image: "3D-Portfolio.png"
//   },
//   {
//     title: "YouTube Backend",
//     desc: "YouTube Backend is a RESTful API service that powers core features of a video-sharing platform, including user authentication, video upload, streaming, likes, comments, and subscriptions. Built using Node.js, Express, MongoDB, and JWT for secure and scalable backend operations.",
//     link: "https://github.com/firoz1860/youtube",
//     image: "/backend.png"
//   },
//   // {
//   //   title: "Docs",
//   //   desc: "Website to collaboratively share documents.",
//   //   link: "https://github.com/example/docs",
//   //   image: "https://via.placeholder.com/300x200?text=Docs"
//   // },
// ];

// const ProjectCard = ({ project }) => (
//   <a
//     href={project.link}
//     target="_blank"
//     rel="noopener noreferrer"
//     data-aos="fade-up"
//     data-aos-duration="600"
//     className="block bg-gray-900 p-4 rounded shadow hover:shadow-lg transition duration-200"
//   >
//     <img src={project.image} alt={project.title} className="rounded mb-3 w-full h-40 object-cover" />
//     <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
//     <p className="text-gray-400">{project.desc}</p>
//   </a>
// );

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ once: true });
//   }, []);

//   const rows = [];
//   for (let i = 0; i < projects.length; i += 4) {
//     rows.push(projects.slice(i, i + 4));
//   }

//   return (
//     <section id="projects" className="py-16">
//       <h2 className="text-3xl font-bold text-purple-500">&lt; Projects /&gt;</h2>
//       <div className="space-y-6 mt-6">
//         {rows.map((row, rowIndex) => (
//           <div key={rowIndex} className="flex flex-wrap -mx-3">
//             {row.map((project, index) => (
//               <div
//                 key={index}
//                 className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6"
//               >
//                 <ProjectCard project={project} />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
