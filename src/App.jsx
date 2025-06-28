// src/App.js
import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.js';

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
       <CustomCursor />
      <Header />
      <main className="px-4 sm:px-8 md:px-16 lg:px-32">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

