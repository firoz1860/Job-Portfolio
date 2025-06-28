import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ['home', 'about', 'projects', 'contact'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="relative group">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            &lt; Firoz /&gt;
          </h1>
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={800}
              className="relative cursor-pointer text-gray-300 hover:text-white transition-all duration-300 group py-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 font-medium">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex items-center justify-center text-purple-400 focus:outline-none group"
          >
            <div className="absolute inset-0 bg-purple-500/20 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            {menuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-black/95 backdrop-blur-md transition-all duration-500 ease-in-out ${
        menuOpen 
          ? 'max-h-80 opacity-100 border-b border-purple-500/20' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={800}
              onClick={toggleMenu}
              className="block relative group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <span className="text-gray-300 group-hover:text-white font-medium">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;



// // src/components/Header.js
// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header className="sticky top-0 bg-black z-50 p-4 shadow-md">
//       <div className="flex justify-between items-center max-w-6xl mx-auto">
//         <h1 className="text-xl font-bold text-purple-500">&lt; Firoz /&gt;</h1>

//         {/* Desktop Nav */}
//         <nav className="space-x-4 hidden md:block">
//           <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400 transition duration-300 ease-in-out">Home</Link>
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400 transition duration-300 ease-in-out">About</Link>
//           <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400 transition duration-300 ease-in-out">Projects</Link>
//           <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400 transition duration-300 ease-in-out">Contact</Link>
//         </nav>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-purple-400 focus:outline-none">
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav Dropdown */}
//       <div
//         className={`md:hidden bg-black px-4 pt-4 pb-2 space-y-2 transition-all duration-500 ease-in-out overflow-hidden ${
//           menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <Link to="home" smooth={true} duration={500} onClick={toggleMenu} className="block text-white hover:text-purple-400">Home</Link>
//         <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="block text-white hover:text-purple-400">About</Link>
//         <Link to="projects" smooth={true} duration={500} onClick={toggleMenu} className="block text-white hover:text-purple-400">Projects</Link>
//         <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="block text-white hover:text-purple-400">Contact</Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

