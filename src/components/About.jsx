import React from 'react';
import { Award, Briefcase, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const skills = [
  { name: 'React / Next.js', level: 92 },
  { name: 'Node.js / Express', level: 90 },
  { name: 'TypeScript', level: 82 },
  { name: 'MongoDB / PostgreSQL', level: 85 },
  { name: 'LangChain / RAG', level: 80 },
  { name: 'AWS / Docker', level: 78 },
  { name: 'Redis / Caching', level: 74 },
  { name: 'REST API Design', level: 90 },
];

const facts = [
  { icon: Award, value: '60+', label: 'Projects' },
  { icon: Briefcase, value: '2+', label: 'Years coding' },
  { icon: GraduationCap, value: '2026', label: 'B.Tech, DTU' },
];

const codeLines = [
  ['const', ' developer', ' = {'],
  null,
  ['  name: ', '"Firoz Ahmad"', ','],
  ['  role: ', '"Backend & AI-focused Full Stack Dev"', ','],
  ['  location: ', '"Delhi, India"', ','],
  ['  focus: ', '["REST APIs", "AI apps", "Cloud"]', ','],
  ['  currentlyLearning: ', '"Distributed systems & LLMOps"', ','],
  null,
  ['};'],
];

const About = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="about" ref={ref} className="ab-section aurora">
      <div className="ab-container">
        <header className="ab-header">
          <span className="eyebrow">Who I am</span>
          <h2 className="section-title">About me</h2>
          <p className="ab-sub text-muted">
            I’m a developer who enjoys the whole stack but is happiest in the backend and
            AI layer — designing APIs, data models, and intelligent features that hold up
            in production.
          </p>
        </header>

        <div className="ab-grid">
          {/* Terminal / code card */}
          <div className={`ab-code card reveal ${visible ? 'is-visible' : ''}`}>
            <div className="ab-code-bar">
              <span className="ab-dot" style={{ background: '#ff5f56' }} />
              <span className="ab-dot" style={{ background: '#ffbd2e' }} />
              <span className="ab-dot" style={{ background: '#27c93f' }} />
              <span className="ab-code-file font-mono">developer.ts</span>
            </div>
            <pre className="ab-code-body font-mono">
              <code>
                {codeLines.map((line, i) =>
                  line === null ? (
                    '\n'
                  ) : (
                    <span key={i}>
                      <span className="c-key">{line[0]}</span>
                      {line[1] && <span className="c-str">{line[1]}</span>}
                      {line[2] && <span className="c-punc">{line[2]}</span>}
                      {'\n'}
                    </span>
                  )
                )}
              </code>
            </pre>
          </div>

          {/* Skills */}
          <div className={`ab-skills card reveal ${visible ? 'is-visible' : ''}`} style={{ animationDelay: '120ms' }}>
            <h3 className="ab-card-title">Technical toolkit</h3>
            <div className="ab-skill-list">
              {skills.map((s, i) => (
                <div key={s.name} className="ab-skill">
                  <div className="ab-skill-top">
                    <span>{s.name}</span>
                    <span className="text-muted font-mono">{s.level}%</span>
                  </div>
                  <div className="ab-bar">
                    <span
                      className="ab-bar-fill"
                      style={{
                        width: visible ? `${s.level}%` : '0%',
                        transitionDelay: `${i * 70}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Facts + contact */}
          <div className={`ab-side reveal ${visible ? 'is-visible' : ''}`} style={{ animationDelay: '220ms' }}>
            <div className="ab-facts">
              {facts.map((f) => (
                <div key={f.label} className="ab-fact card">
                  <f.icon className="w-5 h-5" />
                  <p className="ab-fact-value font-display grad-text">{f.value}</p>
                  <p className="ab-fact-label text-muted">{f.label}</p>
                </div>
              ))}
            </div>

            <div className="ab-contact card">
              <h3 className="ab-card-title">Get in touch</h3>
              <a className="ab-contact-row" href="mailto:firozahmed709p@gmail.com">
                <Mail className="w-4 h-4" /> firozahmed709p@gmail.com
              </a>
              <a className="ab-contact-row" href="tel:+919315742128">
                <Phone className="w-4 h-4" /> +91 93157 42128
              </a>
              <span className="ab-contact-row">
                <MapPin className="w-4 h-4" /> Delhi, India
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ab-section { padding: 6rem 0; background: var(--bg-soft); }
        .ab-container { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
        .ab-header { max-width: 640px; margin-bottom: 2.5rem; }
        .ab-header .section-title { margin: 0.8rem 0 0.9rem; }
        .ab-sub { font-size: 1rem; line-height: 1.65; }

        .ab-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          grid-template-areas: "code skills" "code side";
          gap: 1.25rem;
          align-items: start;
        }
        .ab-code { grid-area: code; overflow: hidden; }
        .ab-skills { grid-area: skills; padding: 1.4rem; }
        .ab-side { grid-area: side; display: flex; flex-direction: column; gap: 1.25rem; }

        .ab-code-bar {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.8rem 1rem;
          border-bottom: 1px solid var(--border);
          background: var(--surface);
        }
        .ab-dot { width: 0.7rem; height: 0.7rem; border-radius: 999px; }
        .ab-code-file { margin-left: 0.6rem; font-size: 0.8rem; color: var(--muted); }
        .ab-code-body {
          margin: 0;
          padding: 1.3rem 1.4rem;
          font-size: 0.86rem;
          line-height: 1.9;
          white-space: pre-wrap;
          word-break: break-word;
          color: var(--text-soft);
        }
        .c-key { color: var(--accent-2); }
        .c-str { color: var(--accent-3); }
        .c-punc { color: var(--muted); }

        .ab-card-title {
          font-family: "Sora", sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text);
          margin-bottom: 1.1rem;
        }
        .ab-skill-list { display: flex; flex-direction: column; gap: 0.9rem; }
        .ab-skill-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-soft);
          margin-bottom: 0.4rem;
        }
        .ab-bar {
          height: 7px;
          border-radius: 999px;
          background: var(--surface-strong);
          overflow: hidden;
        }
        .ab-bar-fill {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: var(--grad);
          transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ab-facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
        .ab-fact { padding: 1.1rem 0.75rem; text-align: center; color: var(--accent); }
        .ab-fact-value { font-size: 1.5rem; font-weight: 800; margin-top: 0.4rem; }
        .ab-fact-label { font-size: 0.72rem; margin-top: 0.15rem; }

        .ab-contact { padding: 1.4rem; }
        .ab-contact-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0;
          color: var(--text-soft);
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ab-contact-row:hover { color: var(--accent); }

        @media (max-width: 900px) {
          .ab-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "code" "skills" "side";
          }
        }
        @media (max-width: 460px) {
          .ab-facts { grid-template-columns: 1fr; }
          .ab-fact { display: flex; align-items: center; justify-content: flex-start; gap: 0.6rem; text-align: left; }
          .ab-fact-value { margin-top: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;
