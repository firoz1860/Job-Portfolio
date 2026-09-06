import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Loader,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm(
        'service_uufzalm',
        'template_z7psnof',
        form.current,
        'IxGoeqXhmuZbQcqxf'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const button = {
    idle: { icon: <Send className="w-4 h-4" />, text: 'Send message' },
    loading: { icon: <Loader className="w-4 h-4 animate-spin" />, text: 'Sending…' },
    success: { icon: <CheckCircle className="w-4 h-4" />, text: 'Message sent!' },
    error: { icon: <AlertCircle className="w-4 h-4" />, text: 'Try again' },
  }[status];

  const details = [
    { icon: Mail, label: 'Email', value: 'firozahmed709p@gmail.com', href: 'mailto:firozahmed709p@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 93157 42128', href: 'tel:+919315742128' },
    { icon: MapPin, label: 'Location', value: 'Delhi, India' },
  ];

  return (
    <section id="contact" className="ct-section aurora">
      <div className="ct-container">
        <header className="ct-header">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let’s build something</h2>
          <p className="ct-sub text-muted">
            Have a role, a project, or an idea in mind? I usually reply within 24 hours.
          </p>
        </header>

        <div className="ct-grid">
          <div className="ct-info">
            <div className="ct-card card">
              {details.map((d) => {
                const Row = d.href ? 'a' : 'div';
                return (
                  <Row key={d.label} className="ct-row" href={d.href}>
                    <span className="ct-row-icon"><d.icon className="w-5 h-5" /></span>
                    <span>
                      <span className="ct-row-label text-muted">{d.label}</span>
                      <span className="ct-row-value">{d.value}</span>
                    </span>
                  </Row>
                );
              })}
            </div>

            <div className="ct-socials card">
              <p className="ct-socials-title text-muted">Find me online</p>
              <div className="ct-social-row">
                <a href="https://github.com/firoz1860" target="_blank" rel="noopener noreferrer" className="ct-social" aria-label="GitHub"><Github className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/firoz-ahmad-020166251" target="_blank" rel="noopener noreferrer" className="ct-social" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                <a href="mailto:firozahmed709p@gmail.com" className="ct-social" aria-label="Email"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="ct-form card">
            <div className="ct-field">
              <label htmlFor="name">Full name</label>
              <div className="ct-input">
                <User className="w-4 h-4" />
                <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
              </div>
            </div>
            <div className="ct-field">
              <label htmlFor="email">Email</label>
              <div className="ct-input">
                <Mail className="w-4 h-4" />
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
              </div>
            </div>
            <div className="ct-field">
              <label htmlFor="message">Message</label>
              <div className="ct-input ct-input--area">
                <MessageSquare className="w-4 h-4" />
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or role…" />
              </div>
            </div>

            <button type="submit" className={`btn btn-primary ct-submit ${status}`} disabled={status === 'loading'}>
              {button.icon}
              {button.text}
            </button>

            {status === 'success' && <p className="ct-alert ct-alert--ok">Thanks for reaching out — I’ll get back to you soon.</p>}
            {status === 'error' && <p className="ct-alert ct-alert--err">Something went wrong. Please email me directly.</p>}
          </form>
        </div>
      </div>

      <style>{`
        .ct-section { padding: 6rem 0; background: var(--bg); }
        .ct-container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
        .ct-header { max-width: 620px; margin-bottom: 2.5rem; }
        .ct-header .section-title { margin: 0.8rem 0 0.9rem; }
        .ct-sub { font-size: 1rem; line-height: 1.6; }

        .ct-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 1.25rem;
          align-items: start;
        }
        .ct-info { display: flex; flex-direction: column; gap: 1.25rem; }
        .ct-card { padding: 1.4rem; display: flex; flex-direction: column; gap: 0.4rem; }
        .ct-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.7rem 0;
          text-decoration: none;
          color: var(--text);
        }
        .ct-row + .ct-row { border-top: 1px solid var(--border); }
        .ct-row-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 12px;
          background: var(--surface-strong);
          color: var(--accent);
          flex-shrink: 0;
        }
        .ct-row-label { display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; }
        .ct-row-value { display: block; font-size: 0.92rem; font-weight: 500; }

        .ct-socials { padding: 1.4rem; }
        .ct-socials-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.9rem; }
        .ct-social-row { display: flex; gap: 0.6rem; }
        .ct-social {
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
        .ct-social:hover { color: var(--text); border-color: var(--accent); transform: translateY(-2px); }

        .ct-form { padding: 1.6rem; display: flex; flex-direction: column; gap: 1rem; }
        .ct-field { display: flex; flex-direction: column; gap: 0.45rem; }
        .ct-field label { font-size: 0.82rem; font-weight: 500; color: var(--text-soft); }
        .ct-input {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 0.9rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--muted);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .ct-input--area { align-items: flex-start; }
        .ct-input:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--ring); }
        .ct-input input,
        .ct-input textarea {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          color: var(--text);
          font-size: 0.92rem;
          font-family: inherit;
          resize: vertical;
        }
        .ct-input input::placeholder,
        .ct-input textarea::placeholder { color: var(--muted); }

        .ct-submit { margin-top: 0.3rem; }
        .ct-submit.success { background: var(--accent-3); }
        .ct-submit.error { background: #ef4444; color: #fff; }
        .ct-alert { font-size: 0.86rem; text-align: center; padding: 0.7rem; border-radius: 12px; }
        .ct-alert--ok { color: var(--accent-3); background: color-mix(in srgb, var(--accent-3) 14%, transparent); }
        .ct-alert--err { color: #f87171; background: rgba(239, 68, 68, 0.14); }

        @media (max-width: 820px) {
          .ct-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
