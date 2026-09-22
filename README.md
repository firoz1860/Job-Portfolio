# Firoz Ahmad — Developer Portfolio

A responsive, modern personal portfolio showcasing my skills, experience, and **60+ projects**
spanning full-stack apps, AI/ML systems, backend services, frontend, and mobile. It serves as a
digital resume — every project links to its GitHub source and, where available, a live demo.

🔗 **Live:** https://job-portfolio-nine.vercel.app/
💻 **All repositories:** https://github.com/firoz1860?tab=repositories

## Tech stack

- **React 19** (Create React App)
- **Tailwind CSS** + a token-based design system (CSS custom properties) with light/dark themes
- **Framer Motion** / CSS reveal animations
- **lucide-react** & **react-icons** for iconography
- **EmailJS** for the contact form

## Sections

- **Hero** — intro, key stats, and tech stack
- **About** — bio, animated skill bars, quick facts, and contact details
- **Projects** — filterable (Full Stack / AI / Backend / Frontend / Mobile) and searchable grid of
  all GitHub projects with auto-generated covers, source links, and live demos
- **Contact** — validated EmailJS-powered form plus direct links
- **Footer** — navigation, socials, and a system/light/dark theme switcher

## Getting started

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in /build
npm test         # run the test suite
```

## EmailJS configuration

The contact form reads its EmailJS settings at build time. Copy `.env.example` to `.env.local` for local development, then provide the same values in your hosting provider's environment-variable settings:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

For the deployed Vercel project, add these values under **Project Settings > Environment Variables** and redeploy. In EmailJS, ensure the selected template includes `{{name}}`, `{{email}}`, and `{{message}}` so each visitor's details appear in the message you receive.

## Project data

`src/data/projects.js` is generated from my public GitHub repositories and then curated
(titles, descriptions, tech tags, categories, featured flags). Categories: `fullstack`,
`ai`, `backend`, `frontend`, `mobile`.

---

© Firoz Ahmad — Backend & AI-focused Full Stack Developer, Delhi, India.
