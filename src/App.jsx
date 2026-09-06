import React, { Suspense, lazy } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

const About = lazy(() => import('./components/About.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '60vh' }} aria-hidden="true" />}>
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
