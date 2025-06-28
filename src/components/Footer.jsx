import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaMedium, FaTwitter } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import { PiMoonStarsThin } from 'react-icons/pi';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');

    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.classList.add(theme);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchTheme = (newTheme) => setTheme(newTheme);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      url: 'https://www.linkedin.com/in/firoz-ahmad-020166251', 
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    { 
      icon: FaGithub, 
      url: 'https://github.com/firoz1860', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: FaInstagram, 
      url: 'https://instagram.com/_feroze_003', 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      icon: FaTwitter, 
      url: 'https://x.com/FirozAh51793346', 
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    { 
      icon: FaMedium, 
      url: '#', 
      label: 'Medium',
      color: 'hover:text-green-500'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              &lt; Firoz Ahmad /&gt;
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Full Stack Developer passionate about creating innovative web solutions 
              that make a difference in people's lives.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
              <span>in Delhi, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6 text-cyan-400">Quick Links</h4>
            <nav className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-6 text-purple-400">Let's Connect</h4>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-white transition-colors duration-300">
                firozahmed709p@gmail.com
              </p>
              <p className="hover:text-white transition-colors duration-300">
                +91 9315742128
              </p>
              <p className="hover:text-white transition-colors duration-300">
                Delhi, India
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold mb-6 text-gray-300">Follow Me</h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 bg-gray-800/50 rounded-full border border-gray-700/50 transition-all duration-300 hover:border-gray-600 hover:bg-gray-700/50 hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Theme Switcher */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm p-2 rounded-full border border-gray-700/50">
            <button 
              onClick={() => switchTheme('system')} 
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'system' 
                  ? 'bg-gray-700 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              aria-label="System theme"
            >
              <MdComputer size={18} />
            </button>
            <button 
              onClick={() => switchTheme('light')} 
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-gray-700 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              aria-label="Light theme"
            >
              <FiSun size={18} />
            </button>
            <button 
              onClick={() => switchTheme('dark')} 
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              aria-label="Dark theme"
            >
              <PiMoonStarsThin size={18} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Firoz Ahmad. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Crafted with modern web technologies
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;


// // src/components/Footer.js
// import React, { useState, useEffect } from 'react';
// import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
// import { MdComputer } from 'react-icons/md';
// import { FiSun } from 'react-icons/fi';
// import { PiMoonStarsThin } from 'react-icons/pi';

// const Footer = () => {
//   const [theme, setTheme] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const stored = localStorage.getItem('theme');
//       if (stored) return stored;

//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//       return prefersDark ? 'dark' : 'light';
//     }
//     return 'dark';
//   });

//   useEffect(() => {
//     document.documentElement.classList.remove('dark', 'light');

//     if (theme === 'system') {
//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//       document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
//     } else {
//       document.documentElement.classList.add(theme);
//     }

//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const switchTheme = (newTheme) => setTheme(newTheme);

//   return (
//     <footer className="py-8 text-center text-gray-400">
//       <p className="mb-4">Find me on:</p>
//       <div className="flex justify-center space-x-6 mb-4">
//         <a href="www.linkedin.com/in/firoz-ahmad-020166251" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//         <a href="https://github.com/firoz1860" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//         <a href="https://instagram.com/_feroze_003" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//         <a href="#" className="hover:text-white"><FaMedium /></a>
//       </div>
//       <div className="flex justify-center items-center gap-4 bg-gray-800 p-2 rounded-full w-fit mx-auto">
//         <button onClick={() => switchTheme('system')} className={`text-white p-2 rounded-full ${theme === 'system' ? 'bg-gray-700' : ''}`}><MdComputer size={20} /></button>
//         <button onClick={() => switchTheme('light')} className={`text-white p-2 rounded-full ${theme === 'light' ? 'bg-gray-700' : ''}`}><FiSun size={20} /></button>
//         <button onClick={() => switchTheme('dark')} className={`text-white p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : ''}`}><PiMoonStarsThin size={20} /></button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
