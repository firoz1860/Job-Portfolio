import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'React Specialist', 'Node.js Expert', 'Problem Solver'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeout;

    if (displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/50 to-cyan-950/30">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 sm:top-40 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 sm:bottom-20 w-56 h-56 sm:w-80 sm:h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 opacity-10 sm:opacity-20"
        >
          <Code size={40} className="sm:w-15 sm:h-15 text-purple-400" />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 opacity-10 sm:opacity-20"
        >
          <Database size={35} className="sm:w-12 sm:h-12 text-cyan-400" />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 opacity-10 sm:opacity-20"
        >
          <Globe size={45} className="sm:w-17 sm:h-17 text-pink-400" />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-full sm:max-w-4xl"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
            <span className="text-gray-300 text-xs sm:text-sm font-mono">&lt; Start /&gt;</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="block text-gray-200">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Firoz Ahmad
          </span>
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 sm:mb-8 h-12 sm:h-16 flex items-center"
        >
          <span className="text-gray-300 mr-2 sm:mr-3">I am a</span>
          <span className="text-cyan-400 font-mono border-r-2 border-cyan-400 animate-pulse">
            {displayText}
          </span>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-full sm:max-w-2xl leading-relaxed"
        >
          Passionate about creating beautiful, functional web applications with modern technologies. 
          Let's build something amazing together.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden group text-sm sm:text-base"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-mono">Scroll to explore</span>
        <ChevronDown size={20} className="sm:w-6 sm:h-6" />
      </motion.div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, Code, Database, Globe } from 'lucide-react';

// const Hero = () => {
//   const [displayText, setDisplayText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const roles = ['Full Stack Developer', 'React Specialist', 'Node.js Expert', 'Problem Solver'];

//   useEffect(() => {
//     const currentRole = roles[currentIndex];
//     let timeout;

//     if (displayText.length < currentRole.length) {
//       timeout = setTimeout(() => {
//         setDisplayText(currentRole.slice(0, displayText.length + 1));
//       }, 100);
//     } else {
//       timeout = setTimeout(() => {
//         setDisplayText('');
//         setCurrentIndex((prev) => (prev + 1) % roles.length);
//       }, 2000);
//     }

//     return () => clearTimeout(timeout);
//   }, [displayText, currentIndex, roles]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex flex-col justify-center items-start px-6 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/50 to-cyan-950/30">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{ y: [-20, 20, -20] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/4 right-1/4 opacity-20"
//         >
//           <Code size={60} className="text-purple-400" />
//         </motion.div>
//         <motion.div
//           animate={{ y: [20, -20, 20] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-1/3 right-1/3 opacity-20"
//         >
//           <Database size={50} className="text-cyan-400" />
//         </motion.div>
//         <motion.div
//           animate={{ y: [-15, 15, -15] }}
//           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/2 left-1/4 opacity-20"
//         >
//           <Globe size={70} className="text-pink-400" />
//         </motion.div>
//       </div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 max-w-4xl"
//       >
//         <motion.div variants={itemVariants} className="mb-6">
//           <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
//             <span className="text-gray-300 text-sm font-mono">&lt; Start /&gt;</span>
//           </div>
//         </motion.div>

//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
//         >
//           <span className="block text-gray-200">Hi, I'm</span>
//           <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
//             Firoz Ahmad
//           </span>
//         </motion.h1>

//         <motion.div 
//           variants={itemVariants}
//           className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center"
//         >
//           <span className="text-gray-300 mr-3">I am a</span>
//           <span className="text-cyan-400 font-mono border-r-2 border-cyan-400 animate-pulse">
//             {displayText}
//           </span>
//         </motion.div>

//         <motion.p 
//           variants={itemVariants}
//           className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
//         >
//           Passionate about creating beautiful, functional web applications with modern technologies. 
//           Let's build something amazing together.
//         </motion.p>

//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.4)" }}
//             whileTap={{ scale: 0.95 }}
//             className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden group"
//           >
//             <span className="relative z-10">View My Work</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
//           >
//             Get In Touch
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
//       >
//         <span className="text-sm mb-2 font-mono">Scroll to explore</span>
//         <ChevronDown size={24} />
//       </motion.div>

//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 3s ease infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;



// // src/components/Hero.js
// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => (
//   <section id="home" className="h-screen flex flex-col justify-center items-start px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
//     <motion.p 
//       className="text-gray-400"
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       &lt; Start /&gt;
//     </motion.p>

//     <motion.h2 
//       className="text-4xl sm:text-5xl font-bold mt-4"
//       initial={{ opacity: 0, x: -40 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       Hi, my name is <span className="text-purple-500">Firoz Ahmad</span>
//     </motion.h2>

//     <motion.h3 
//       className="text-2xl sm:text-3xl font-semibold mt-2"
//       initial={{ opacity: 0, x: -40 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       I am a Full Stack Developer
//     </motion.h3>

//     <motion.p 
//       className="text-gray-400 mt-4"
//       initial={{ opacity: 0, x: -40 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 1 }}
//     >
//       Wanna know more about me? Let's go..
//     </motion.p>
//   </section>
// );

// export default Hero;



