import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Cpu,
  Zap,
  GitBranch,
  Award,
  Calendar,
} from "lucide-react";

const About = () => {
  const [flipped, setFlipped] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      name: "HTML/CSS/JS",
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-orange-500 to-red-500",
      level: 90,
    },
    {
      name: "Node.js",
      icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-green-500 to-emerald-500",
      level: 85,
    },
    {
      name: "ReactJS",
      icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-500 to-cyan-500",
      level: 95,
    },
    {
      name: "MongoDB",
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-green-600 to-lime-500",
      level: 80,
    },
    {
      name: "TypeScript",
      icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-600 to-indigo-500",
      level: 75,
    },
    {
      name: "NextJS",
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-gray-700 to-gray-900",
      level: 88,
    },
    {
      name: "ExpressJS",
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-yellow-500 to-amber-500",
      level: 85,
    },
    {
      name: "GIT",
      icon: <GitBranch className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-purple-500 to-pink-500",
      level: 90,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) =>
        prev === null ? 0 : (prev + 1) % skills.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section
      id="about"
      className="min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-5 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-5 left-1/4 sm:bottom-10 sm:left-1/3 w-36 h-36 sm:w-54 sm:h-54 md:w-72 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-purple-500 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 border border-cyan-500 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-5 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 transform rotate-45 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 relative">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              &lt; About Me /&gt;
            </span>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-20 animate-pulse"></div>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4">
            Crafting digital experiences with passion, precision, and
            cutting-edge technology
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Main Profile Card */}
          <div className="flex-1 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto xl:mx-0">
            <div
              className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] perspective-1000 cursor-pointer group"
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`relative w-full h-full transition-all duration-1000 ease-in-out transform-style-preserve-3d ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side - Enhanced Code Style */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="bg-gray-800/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full overflow-auto group-hover:border-purple-500/50 relative">
                    {/* Code Editor Header */}
                    <div className="flex items-center space-x-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-700">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-2 sm:ml-4 text-gray-400 font-mono text-xs sm:text-sm">
                        developer.js
                      </span>
                    </div>
                    <div className="relative w-full max-w-full overflow-auto rounded-lg bg-gray-900 p-4 sm:p-6 border border-gray-700 shadow-inner">
                      <pre className="text-xs sm:text-sm md:text-base font-mono text-gray-100 leading-relaxed whitespace-pre-wrap break-words">
                        <code>
                          <span className="text-purple-400">class</span>{" "}
                          <span className="text-cyan-400">Developer</span>{" "}
                          <span className="text-white">&#123;</span>
                          {"\n  "}
                          <span className="text-purple-400">
                            constructor
                          </span>() <span className="text-white">&#123;</span>
                          {"\n    "}
                          <span className="text-blue-300">this</span>.name ={" "}
                          <span className="text-green-400">"Firoz Ahmad"</span>;
                          {"\n    "}
                          <span className="text-blue-300">this</span>.role ={" "}
                          <span className="text-green-400">
                            "Full Stack Developer"
                          </span>
                          ;{"\n    "}
                          <span className="text-blue-300">this</span>.location ={" "}
                          <span className="text-green-400">"Delhi, India"</span>
                          ;{"\n  "}
                          <span className="text-white">&#125;</span>
                          {"\n\n  "}
                          <span className="text-purple-400">
                            getContact
                          </span>() <span className="text-white">&#123;</span>
                          {"\n    "}
                          <span className="text-yellow-300">return</span>{" "}
                          <span className="text-white">&#123;</span>
                          {"\n      "}email:{" "}
                          <span className="text-green-400">
                            "firozahmed709p@gmail.com"
                          </span>
                          ,{"\n      "}phone:{" "}
                          <span className="text-green-400">
                            "+91 9315742128"
                          </span>
                          ,{"\n      "}linkedin:{" "}
                          <span className="text-green-400">
                            "linkedin.com/in/firoz-ahmad"
                          </span>
                          {"\n    "}
                          <span className="text-white">&#125;;</span>
                          {"\n  "}
                          <span className="text-white">&#125;</span>
                          {"\n\n  "}
                          <span className="text-purple-400">getEducation</span>
                          () <span className="text-white">&#123;</span>
                          {"\n    "}
                          <span className="text-yellow-300">return</span>{" "}
                          <span className="text-white">&#123;</span>
                          {"\n      "}degree:{" "}
                          <span className="text-green-400">
                            "B.Tech Electrical Engineering"
                          </span>
                          ,{"\n      "}university:{" "}
                          <span className="text-green-400">
                            "Delhi Technological University"
                          </span>
                          ,{"\n      "}period:{" "}
                          <span className="text-cyan-400">"2022 - 2026"</span>,
                          {"\n      "}cgpa:{" "}
                          <span className="text-cyan-400">
                            "7.5 upto 6th semester"
                          </span>
                          {"\n    "}
                          <span className="text-white">&#125;;</span>
                          {"\n  "}
                          <span className="text-white">&#125;</span>
                          {"\n\n  "}
                          <span className="text-purple-400">
                            getSpecialties
                          </span>
                          () <span className="text-white">&#123;</span>
                          {"\n    "}
                          <span className="text-yellow-300">return</span> [
                          {"\n      "}
                          <span className="text-green-400">
                            "MERN Stack Development"
                          </span>
                          ,{"\n      "}
                          <span className="text-green-400">
                            "RESTful API Design"
                          </span>
                          ,{"\n    "}];
                          {"\n  "}
                          <span className="text-white">&#125;</span>
                          {"\n\n  "}
                          <span className="text-purple-400">
                            getCurrentFocus
                          </span>
                          () <span className="text-white">&#123;</span>
                          {"\n    "}
                          <span className="text-yellow-300">return</span>{" "}
                          <span className="text-green-400">
                            "Building scalable web applications"
                          </span>
                          ;{"\n  "}
                          <span className="text-white">&#125;</span>
                          {"\n"}
                          <span className="text-white">&#125;</span>
                        </code>
                      </pre>
                    </div>

                    <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                      <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Click to explore skills
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side - Enhanced Skills Grid */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="bg-gray-800/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/30 shadow-2xl h-full overflow-auto">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                        Technical Arsenal
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Technologies I work with
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                      {skills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className={`relative p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r ${
                            skill.color
                          } text-white transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer group ${
                            activeSkill === index
                              ? "ring-2 sm:ring-4 ring-white/50 scale-105"
                              : ""
                          }`}
                          style={{ animationDelay: `${index * 150}ms` }}
                          onMouseEnter={() => setActiveSkill(index)}
                        >
                          <div className="flex items-center justify-between mb-2 sm:mb-4">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="bg-white/20 p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                                {skill.icon}
                              </div>
                              <span className="font-bold text-sm sm:text-base md:text-lg">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-lg sm:text-xl md:text-2xl font-bold">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Skill Progress Bar */}
                          <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2 overflow-hidden">
                            <div
                              className="h-full bg-white/80 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width:
                                  activeSkill === index
                                    ? `${skill.level}%`
                                    : "0%",
                                transitionDelay:
                                  activeSkill === index ? "200ms" : "0ms",
                              }}
                            ></div>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-white/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Click to return to profile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Side Panel */}
          <div className="flex-1 max-w-full sm:max-w-md mx-auto xl:mx-0">
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-500 group">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4 flex items-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Contact Information
                </h3>
                <div className="space-y-3 sm:space-y-4 text-gray-300">
                  <div className="flex items-center space-x-2 sm:space-x-3 hover:text-cyan-400 transition-colors duration-200 group/item">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-xs sm:text-sm break-all">
                      firozahmed709p@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 hover:text-cyan-400 transition-colors duration-200 group/item">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">+91 9315742128</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 hover:text-cyan-400 transition-colors duration-200 group/item">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Delhi, India</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>

              {/* Stats Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div className="bg-purple-500/20 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-purple-500/30 transition-colors duration-300">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
                      8+
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Technologies
                    </div>
                  </div>
                  <div className="bg-cyan-500/20 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-cyan-500/30 transition-colors duration-300">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
                      2026
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Graduation</div>
                  </div>
                  <div className="bg-green-500/20 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-green-500/30 transition-colors duration-300">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
                      15+
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Projects</div>
                  </div>
                  <div className="bg-pink-500/20 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-pink-500/30 transition-colors duration-300">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-400">
                      2+
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Years Coding
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Card */}
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gradient-to-r hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-500">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Currently Learning
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Advanced React Patterns
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-500 flex-shrink-0"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">
                      GraphQL & Apollo
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse animation-delay-1000 flex-shrink-0"></div>
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Cloud Architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .perspective-1000 {
            perspective: 900px;
          }
        }

        /* Desktop optimizations */
        @media (min-width: 1025px) {
          .perspective-1000 {
            perspective: 1000px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Code, Database, Globe, Cpu, Zap, GitBranch } from 'lucide-react';

// const About = () => {
//   const [flipped, setFlipped] = useState(false);

//   const skills = [
//     { name: 'HTML/CSS/JS', icon: <Globe className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
//     { name: 'Node.js', icon: <Cpu className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
//     { name: 'ReactJS', icon: <Code className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
//     { name: 'MongoDB', icon: <Database className="w-5 h-5" />, color: 'from-green-600 to-lime-500' },
//     { name: 'TypeScript', icon: <Code className="w-5 h-5" />, color: 'from-blue-600 to-indigo-500' },
//     { name: 'NextJS', icon: <Zap className="w-5 h-5" />, color: 'from-gray-700 to-gray-900' },
//     { name: 'ExpressJS', icon: <Globe className="w-5 h-5" />, color: 'from-yellow-500 to-amber-500' },
//     { name: 'GIT', icon: <GitBranch className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
//   ];

//   return (
//     <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-0 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
//             &lt; About Me /&gt;
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Full Stack Developer crafting digital experiences with code and creativity
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           {/* Profile Card */}
//           <div className="flex-1 max-w-2xl">
//             <div
//               className="relative w-full h-[600px] perspective-1000 cursor-pointer group"
//               onClick={() => setFlipped(!flipped)}
//             >
//               <div
//                 className={`relative w-full h-full transition-all duration-700 ease-in-out transform-style-preserve-3d ${
//                   flipped ? 'rotate-y-180' : ''
//                 }`}
//               >
//                 {/* Front Side - Code Style */}
//                 <div className="absolute inset-0 backface-hidden">
//                   <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full overflow-auto group-hover:border-purple-500/40">
//                     <pre className="text-sm md:text-base font-mono leading-relaxed text-gray-100">
//                       <code>
//                         <span className="text-purple-400">class</span> <span className="text-cyan-400">Developer</span> <span className="text-white">&#123;</span>
//                         {'\n  '}<span className="text-purple-400">constructor</span>() <span className="text-white">&#123;</span>
//                         {'\n    '}<span className="text-blue-300">this</span>.name = <span className="text-green-400">"Firoz Ahmad"</span>;
//                         {'\n    '}<span className="text-blue-300">this</span>.role = <span className="text-green-400">"Full Stack Developer"</span>;
//                         {'\n    '}<span className="text-blue-300">this</span>.location = <span className="text-green-400">"Delhi, India"</span>;
//                         {'\n  '}<span className="text-white">&#125;</span>

//                         {'\n\n  '}<span className="text-purple-400">contact</span>() <span className="text-white">&#123;</span>
//                         {'\n    '}<span className="text-yellow-300">return</span> <span className="text-white">&#123;</span>
//                         {'\n      '}email: <span className="text-green-400">"firozahmed709p@gmail.com"</span>,
//                         {'\n      '}phone: <span className="text-green-400">"+91 9315742128"</span>
//                         {'\n    '}<span className="text-white">&#125;;</span>
//                         {'\n  '}<span className="text-white">&#125;</span>

//                         {'\n\n  '}<span className="text-purple-400">education</span>() <span className="text-white">&#123;</span>
//                         {'\n    '}<span className="text-yellow-300">return</span> <span className="text-white">&#123;</span>
//                         {'\n      '}degree: <span className="text-green-400">"B.Tech in Electrical Engineering"</span>,
//                         {'\n      '}university: <span className="text-green-400">"Delhi Technological University"</span>,
//                         {'\n      '}year: <span className="text-cyan-400">2022</span>-<span className="text-cyan-400">2026</span>
//                         {'\n    '}<span className="text-white">&#125;;</span>
//                         {'\n  '}<span className="text-white">&#125;</span>

//                         {'\n\n  '}<span className="text-purple-400">getPassion</span>() <span className="text-white">&#123;</span>
//                         {'\n    '}<span className="text-yellow-300">return</span> <span className="text-green-400">"Building scalable web applications"</span>;
//                         {'\n  '}<span className="text-white">&#125;</span>
//                         {'\n'}<span className="text-white">&#125;</span>
//                       </code>
//                     </pre>

//                     <div className="mt-6 text-center">
//                       <p className="text-gray-400 text-sm">Click to see skills →</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Back Side - Skills Grid */}
//                 <div className="absolute inset-0 backface-hidden rotate-y-180">
//                   <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 shadow-2xl h-full overflow-auto">
//                     <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Technical Skills</h3>
//                     <div className="grid grid-cols-2 gap-4">
//                       {skills.map((skill, index) => (
//                         <div
//                           key={skill.name}
//                           className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
//                           style={{ animationDelay: `${index * 100}ms` }}
//                         >
//                           <div className="flex items-center space-x-3">
//                             <div className="bg-white/20 p-2 rounded-lg">
//                               {skill.icon}
//                             </div>
//                             <span className="font-semibold text-sm">{skill.name}</span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="mt-8 text-center">
//                       <p className="text-gray-400 text-sm">Click to see profile →</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info Side Panel */}
//           <div className="flex-1 max-w-md">
//             <div className="space-y-6">
//               <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
//                 <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
//                   <Mail className="w-5 h-5 mr-2" />
//                   Get In Touch
//                 </h3>
//                 <div className="space-y-3 text-gray-300">
//                   <div className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
//                     <Mail className="w-4 h-4" />
//                     <span className="text-sm">firozahmed709p@gmail.com</span>
//                   </div>
//                   <div className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
//                     <Phone className="w-4 h-4" />
//                     <span className="text-sm">+91 9315742128</span>
//                   </div>
//                   <div className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
//                     <MapPin className="w-4 h-4" />
//                     <span className="text-sm">Delhi, India</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
//                 <h3 className="text-xl font-bold text-cyan-400 mb-4">Quick Stats</h3>
//                 <div className="grid grid-cols-2 gap-4 text-center">
//                   <div className="bg-purple-500/20 p-3 rounded-lg">
//                     <div className="text-2xl font-bold text-purple-400">8+</div>
//                     <div className="text-xs text-gray-400">Technologies</div>
//                   </div>
//                   <div className="bg-cyan-500/20 p-3 rounded-lg">
//                     <div className="text-2xl font-bold text-cyan-400">2026</div>
//                     <div className="text-xs text-gray-400">Graduation</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-6 rounded-2xl border border-gradient-to-r">
//                 <h3 className="text-lg font-bold text-white mb-2">Currently Learning</h3>
//                 <p className="text-gray-300 text-sm">
//                   Advanced React patterns, GraphQL, and Cloud Architecture
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
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

// export default About;

// // src/components/About.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <section id="about" className="py-16 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden min-h-screen">
//       <motion.h2
//         className="text-3xl font-bold text-purple-500 mb-6 text-left pl-4"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         &lt; About /&gt;
//       </motion.h2>

//       <motion.div
//         className="mt-6 text-sm flex justify-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <div
//           className="relative w-full max-w-3xl h-[800px] perspective-[1000px]"
//           onClick={() => setFlipped(!flipped)}
//         >
//           <div className={`relative w-full h-full transition-transform duration-700 ease-in-out ${flipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
//             {/* Front side */}
//             <div className={`absolute w-full h-full backface-hidden ${flipped ? 'opacity-0' : 'opacity-100'}`} style={{ backfaceVisibility: 'hidden' }}>
//               <div className="bg-gray-900 p-6 rounded-xl text-sm font-mono leading-relaxed border border-gray-700 shadow-xl cursor-pointer h-full overflow-auto">
//                 <p><span className="text-yellow-400">class</span> <span className="text-pink-400">Firoz</span> <span className="text-white">&#123;</span></p>
//                 <p className="ml-4"><span className="text-yellow-400">constructor</span>() <span className="text-white">&#123;</span></p>
//                 <p className="ml-8"><span className="text-blue-400">this</span>.name = <span className="text-green-400">"Firoz Ahmad"</span>;</p>
//                 <p className="ml-8"><span className="text-blue-400">this</span>.email = <span className="text-green-400">"firozahmed709p@gmail.com"</span>;</p>
//                 <p className="ml-8"><span className="text-blue-400">this</span>.contact = <span className="text-green-400">"9315742128"</span>;</p>
//                 <p className="ml-4"><span className="text-white">&#125;</span></p>

//                 <p className="ml-4"><span className="text-yellow-400">workExperience</span>() <span className="text-white">&#123;</span></p>
//                 <p className="ml-8"><span className="text-purple-300">return</span> [</p>
//                 {/* <p className="ml-12 text-sky-300">&#123; date: <span className="text-green-400">"Dec 2024 - Present"</span>, role: <span className="text-green-400">"Full Stack Development Intern at PocketClass"</span> &#125;,</p>
//                 <p className="ml-12 text-sky-300">&#123; date: <span className="text-green-400">"Feb 2024 - May 2024"</span>, role: <span className="text-green-400">"Web Developer Intern at Neon Shark"</span> &#125;,</p> */}
//                 <p className="ml-8">];</p>
//                 <p className="ml-4"><span className="text-white">&#125;</span></p>

//                 <p className="ml-4"><span className="text-yellow-400">education</span>() <span className="text-white">&#123;</span></p>
//                 <p className="ml-8"><span className="text-purple-300">return</span> <span className="text-green-400">"2022-2026: B.Tech in Electrical Engineering from DTU"</span>;</p>
//                 <p className="ml-4"><span className="text-white">&#125;</span></p>

//                 <p className="ml-4"><span className="text-yellow-400">skills</span>() <span className="text-white">&#123;</span></p>
//                 <p className="ml-8"><span className="text-purple-300">return</span> [</p>
//                 <p className="ml-12 text-green-300">"HTML/CSS/JS", "Node.js", "Bootstrap", "npm/yarn/pnpm",</p>
//                 <p className="ml-12 text-green-300">"GIT", "Web Sockets", "MongoDB", "C++", "TypeScript",</p>
//                 <p className="ml-12 text-green-300">"ReactJS", "NextJS", "DSA", "ExpressJS"</p>
//                 <p className="ml-8">];</p>
//                 <p className="ml-4"><span className="text-white">&#125;</span></p>
//                 <p><span className="text-white">&#125;</span></p>
//               </div>
//             </div>

//             {/* Back side */}
//             <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${flipped ? 'opacity-100' : 'opacity-0'}`} style={{ backfaceVisibility: 'hidden' }}>
//               <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-green-400 text-base p-6 bg-gray-900 rounded-xl shadow-xl border border-gray-700 cursor-pointer h-full overflow-auto">
//                 <li className="text-lg">💻 HTML/CSS/JS</li>
//                 <li className="text-lg">⚙️ Node.js</li>
//                 <li className="text-lg">🎨 Bootstrap</li>
//                 <li className="text-lg">📦 npm/yarn/pnpm</li>
//                 <li className="text-lg">🔧 GIT</li>
//                 <li className="text-lg">🔌 Web Sockets</li>
//                 <li className="text-lg">🗄️ MongoDB</li>
//                 <li className="text-lg">🧠 C++</li>
//                 <li className="text-lg">📘 TypeScript</li>
//                 <li className="text-lg">⚛️ ReactJS</li>
//                 <li className="text-lg">🧪 NextJS</li>
//                 <li className="text-lg">📊 DSA</li>
//                 <li className="text-lg">🌐 ExpressJS</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;
