import React from "react";
import SocialCards from "./ui/card-fan-carousel.jsx";

// Real project screenshots that already live in /public, each fanned card
// linking straight to that project's live demo. Using genuine builds (not
// stock imagery) keeps this honest for a reviewer skimming the portfolio.
const base = process.env.PUBLIC_URL || "";

const FEATURED_CARDS = [
  {
    imgUrl: `${base}/apollo.png`,
    alt: "Apollo 247 — healthcare platform",
    linkUrl: "https://apolo247.vercel.app",
  },
  {
    imgUrl: `${base}/smart-note-app.png`,
    alt: "Smart Note App — AI note-taking",
    linkUrl: "https://smart-note-taking-app-kappa.vercel.app",
  },
  {
    imgUrl: `${base}/3D-portfolio.png`,
    alt: "3D Portfolio — interactive WebGL site",
    linkUrl: "https://3-d-portfolio-psi-gold.vercel.app",
  },
  {
    imgUrl: `${base}/news-app.png`,
    alt: "Khabar24 — real-time news reader",
    linkUrl: "https://khabar-24-hours.vercel.app",
  },
  {
    imgUrl: `${base}/job-portal.png`,
    alt: "JobPortal — MERN job platform",
    linkUrl: "https://jobportal-frontend-app.netlify.app/",
  },
];

const FeaturedShowcase = () => {
  return (
    <section id="featured" className="fs-section aurora">
      <div className="fs-container">
        <header className="fs-header">
          <span className="eyebrow">Featured work</span>
          <h2 className="section-title">
            Built &amp; <span className="grad-text">shipped</span>
          </h2>
          <p className="fs-sub text-muted">
            A fan of my standout live builds — hover to spread the deck, then
            click any card to open the deployed app. Full catalogue is in the
            Projects section below.
          </p>
        </header>

        <SocialCards cards={FEATURED_CARDS} />
      </div>

      <style>{`
        .fs-section {
          padding: 5rem 0 2rem;
          background: var(--bg);
          overflow: hidden;
        }
        .fs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .fs-header {
          max-width: 640px;
          margin: 0 auto 1rem;
          text-align: center;
        }
        .fs-header .section-title { margin: 0.8rem 0 0.9rem; }
        .fs-header .eyebrow { justify-content: center; }
        .fs-sub { font-size: 1rem; line-height: 1.65; }

        /* ===== Structural CSS required by the card-fan-carousel primitive =====
           The cards are absolutely stacked at the layout centre; GSAP then
           translates/rotates/scales each one into its fanned slot. Card size
           (and the layout height that contains the fan) shrink per breakpoint,
           matching the multipliers inside card-fan-carousel.jsx. */
        .fan-layout {
          height: 38rem;
        }
        .fan-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 19rem;
          height: 25rem;
          margin: -12.5rem 0 0 -9.5rem;
          border-radius: 1.25rem;
          overflow: hidden;
          background: var(--surface-strong);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          will-change: transform;
          -webkit-tap-highlight-color: transparent;
        }
        .fan-card img { pointer-events: none; }

        @media (max-width: 1023px) {
          .fan-layout { height: 34rem; }
          .fan-card {
            width: 16rem;
            height: 21rem;
            margin: -10.5rem 0 0 -8rem;
          }
        }
        @media (max-width: 767px) {
          .fan-layout { height: 28rem; }
          .fan-card {
            width: 13rem;
            height: 17rem;
            margin: -8.5rem 0 0 -6.5rem;
          }
        }
        @media (max-width: 639px) {
          .fan-layout { height: 26rem; }
          .fan-card {
            width: 11rem;
            height: 14.5rem;
            margin: -7.25rem 0 0 -5.5rem;
          }
        }
        @media (max-width: 479px) {
          .fan-layout { height: 22rem; }
          .fan-card {
            width: 9rem;
            height: 12rem;
            margin: -6rem 0 0 -4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedShowcase;
