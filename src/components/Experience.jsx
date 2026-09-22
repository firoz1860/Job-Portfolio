import React from 'react';
import { ArrowUpRight, Briefcase, Calendar, MapPin } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const experience = [
  {
    company: 'Handshake AI Fellowship',
    role: 'Expert Contributor — AI Training Data / Task Curation',
    period: 'Jun 2026 – Aug 2026',
    location: 'San Francisco Bay Area · Remote',
    current: false,
    points: [
      'Reviewed and validated 20+ Harbor-format, SWE-bench-style coding tasks derived from real open-source pull requests.',
      'Corrected factual and architectural errors in task specs and strengthened fail-to-pass and regression test coverage.',
    ],
    stack: ['Docker', 'Python', 'Testing', 'LLM Eval'],
  },
  {
    company: 'AfterQuery Experts',
    role: 'Software Engineer',
    period: 'Feb 2026 – Jun 2026',
    location: 'San Francisco Bay Area · Remote',
    current: false,
    points: [
      'Designed and built scalable backend systems, RESTful APIs, and server-side features aligned with product requirements.',
      'Shipped full-stack features end to end with the founding team — from system design through testing and deployment.',
    ],
    stack: ['Node.js', 'REST APIs', 'System Design', 'Agile'],
  },
  {
    company: 'Outlier',
    role: 'AI Trainer',
    period: 'Sep 2025 – Jan 2026',
    location: 'Remote',
    current: false,
    points: [
      'Improved LLM quality by evaluating AI-generated outputs across reasoning, coding, and instruction-following tasks.',
    ],
    stack: ['LLM', 'Evaluation', 'Prompting'],
  },
  {
    company: 'Creative Business Labs',
    role: 'Full Stack Developer',
    period: 'Aug 2024 – Jul 2025',
    location: 'Delhi, India',
    current: false,
    points: [
      'Built appointment booking, therapist scheduling, and patient management for 50+ therapists with React, Next.js, Node.js, and FastAPI.',
      'Designed microservices for booking, payments, and users; integrated Stripe for 1,000+ transactions with refunds and subscriptions.',
      'Cut API response time ~30% with Redis caching and query tuning, and added OpenAI/Claude/Gemini RAG features deployed on AWS.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Stripe', 'AWS'],
    products: [
      {
        name: 'Cope Ahead',
        tagline: 'Mental Wellness Platform',
        url: 'https://copeahead.com/',
      },
      {
        name: 'Agency Connect Hub',
        tagline: 'Multi-tenant Agency Portal',
        url: 'https://agencyconnecthub.com/',
      },
    ],
  },
];

const Experience = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" ref={ref} className="xp-section aurora">
      <div className="xp-container">
        <header className="xp-header">
          <span className="eyebrow">Where I’ve worked</span>
          <h2 className="section-title">Experience</h2>
          <p className="xp-sub text-muted">
            My employment so far — software engineering and AI roles across remote,
            US-based, and Delhi teams. Live products I built at Creative Business Labs are
            linked below.
          </p>
        </header>

        <ol className="xp-timeline">
          {experience.map((job, i) => (
            <li
              key={job.company}
              className={`xp-item reveal ${visible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="xp-node" aria-hidden="true">
                <Briefcase className="w-4 h-4" />
              </span>

              <div className="xp-card card">
                <div className="xp-top">
                  <div>
                    <h3 className="xp-company">{job.company}</h3>
                    <p className="xp-role text-soft">{job.role}</p>
                  </div>
                  <div className="xp-when">
                    <span className="xp-period font-mono">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {job.period}
                    </span>
                    <span className="xp-loc text-muted">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="xp-points">
                  {job.points.map((p) => (
                    <li key={p} className="xp-point text-muted">{p}</li>
                  ))}
                </ul>

                {job.products && (
                  <div className="xp-products">
                    <p className="xp-products-label font-mono text-muted">Live products</p>
                    <div className="xp-products-list">
                      {job.products.map((prod) => (
                        <a
                          key={prod.url}
                          href={prod.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xp-product"
                        >
                          <span className="xp-product-text">
                            <span className="xp-product-name text-app">{prod.name}</span>
                            <span className="xp-product-tag text-muted">{prod.tagline}</span>
                          </span>
                          <ArrowUpRight className="w-4 h-4 xp-product-icon" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="xp-stack">
                  {job.stack.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .xp-section { padding: 6rem 0; background: var(--bg); }
        .xp-container { max-width: 900px; margin: 0 auto; padding: 0 1.25rem; }
        .xp-header { max-width: 640px; margin-bottom: 2.75rem; }
        .xp-header .section-title { margin: 0.8rem 0 0.9rem; }
        .xp-sub { font-size: 1rem; line-height: 1.65; }

        .xp-timeline {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
        }
        .xp-timeline::before {
          content: "";
          position: absolute;
          left: 1.05rem;
          top: 0.4rem;
          bottom: 0.4rem;
          width: 2px;
          background: linear-gradient(var(--accent), var(--accent-2), transparent);
          opacity: 0.5;
        }
        .xp-item {
          position: relative;
          padding-left: 3rem;
          margin-bottom: 1.5rem;
        }
        .xp-item:last-child { margin-bottom: 0; }
        .xp-node {
          position: absolute;
          left: 0;
          top: 0.35rem;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #05070d;
          background: var(--grad);
          box-shadow: 0 8px 20px -10px var(--accent);
        }
        .xp-card { padding: 1.3rem 1.4rem; }
        .xp-card:hover { transform: none; box-shadow: var(--shadow); }
        .xp-top {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.6rem;
          margin-bottom: 0.9rem;
        }
        .xp-company {
          font-family: "Sora", sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text);
          line-height: 1.2;
        }
        .xp-role { font-size: 0.9rem; margin-top: 0.2rem; }
        .xp-when { display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem; }
        .xp-period {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.76rem;
          color: var(--text-soft);
          white-space: nowrap;
        }
        .xp-loc {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
        }
        .xp-points {
          list-style: none;
          margin: 0 0 1rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .xp-point {
          position: relative;
          padding-left: 1rem;
          font-size: 0.86rem;
          line-height: 1.55;
        }
        .xp-point::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 0.35rem;
          height: 0.35rem;
          border-radius: 999px;
          background: var(--accent);
        }

        .xp-products {
          margin: 0 0 1rem;
          padding: 0.9rem;
          border-radius: 14px;
          border: 1px dashed var(--border-strong);
          background: var(--surface);
        }
        .xp-products-label {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 0.6rem;
        }
        .xp-products-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
        }
        .xp-product {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--card);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .xp-product:hover { transform: translateY(-2px); border-color: var(--accent); }
        .xp-product:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--ring); }
        .xp-product-text { display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
        .xp-product-name { font-size: 0.9rem; font-weight: 600; }
        .xp-product-tag { font-size: 0.72rem; }
        .xp-product-icon { color: var(--accent); flex-shrink: 0; }

        .xp-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; }

        @media (max-width: 640px) {
          .xp-section { padding: 4rem 0; }
          .xp-when { align-items: flex-start; }
          .xp-products-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
