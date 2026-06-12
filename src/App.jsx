// src/App.js
import React, { Suspense, lazy } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

const About = lazy(() => import('./components/About.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Header />
      <main className="px-4 sm:px-8 md:px-16 lg:px-32">
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-gray-950" aria-hidden="true" />}>
          <About />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
