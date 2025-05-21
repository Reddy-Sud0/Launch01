"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const ScalingWaySection = () => {
  // Replace random values with fixed values for light rays
  const lightRays = [
    { id: 0, rotation: 0, length: 90, opacity: 0.07, animationDuration: 18 },
    { id: 1, rotation: 45, length: 85, opacity: 0.08, animationDuration: 20 },
    { id: 2, rotation: 90, length: 95, opacity: 0.06, animationDuration: 22 },
    { id: 3, rotation: 135, length: 87, opacity: 0.09, animationDuration: 19 },
    { id: 4, rotation: 180, length: 92, opacity: 0.05, animationDuration: 23 },
    { id: 5, rotation: 225, length: 88, opacity: 0.07, animationDuration: 21 },
    { id: 6, rotation: 270, length: 93, opacity: 0.08, animationDuration: 17 },
    { id: 7, rotation: 315, length: 86, opacity: 0.06, animationDuration: 24 }
  ];

  // Replace random values with fixed values for hexagons
  const hexagons = [
    { id: 0, x: 15, y: 25, size: 2.5, opacity: 0.12, animationDelay: 0.5, animationDuration: 18 },
    { id: 1, x: 35, y: 45, size: 1.8, opacity: 0.09, animationDelay: 1.2, animationDuration: 22 },
    { id: 2, x: 75, y: 15, size: 3.2, opacity: 0.07, animationDelay: 2.1, animationDuration: 20 },
    { id: 3, x: 25, y: 85, size: 2.1, opacity: 0.11, animationDelay: 0.8, animationDuration: 15 },
    { id: 4, x: 65, y: 35, size: 1.5, opacity: 0.08, animationDelay: 1.5, animationDuration: 23 },
    { id: 5, x: 85, y: 65, size: 2.8, opacity: 0.10, animationDelay: 0.3, animationDuration: 17 },
    { id: 6, x: 10, y: 55, size: 2.3, opacity: 0.13, animationDelay: 1.8, animationDuration: 21 },
    { id: 7, x: 45, y: 75, size: 1.7, opacity: 0.09, animationDelay: 2.4, animationDuration: 19 },
    { id: 8, x: 55, y: 5, size: 3.5, opacity: 0.06, animationDelay: 0.7, animationDuration: 24 },
    { id: 9, x: 95, y: 85, size: 2.0, opacity: 0.12, animationDelay: 1.1, animationDuration: 16 },
    { id: 10, x: 5, y: 35, size: 2.7, opacity: 0.08, animationDelay: 1.9, animationDuration: 25 },
    { id: 11, x: 60, y: 50, size: 1.9, opacity: 0.10, animationDelay: 0.4, animationDuration: 22 },
    { id: 12, x: 40, y: 20, size: 2.2, opacity: 0.07, animationDelay: 2.3, animationDuration: 18 },
    { id: 13, x: 80, y: 70, size: 3.0, opacity: 0.09, animationDelay: 1.6, animationDuration: 20 },
    { id: 14, x: 30, y: 60, size: 2.4, opacity: 0.11, animationDelay: 0.9, animationDuration: 23 },
    { id: 15, x: 70, y: 30, size: 1.6, opacity: 0.13, animationDelay: 2.2, animationDuration: 19 },
    { id: 16, x: 20, y: 90, size: 2.9, opacity: 0.08, animationDelay: 0.6, animationDuration: 17 },
    { id: 17, x: 90, y: 10, size: 2.6, opacity: 0.10, animationDelay: 1.3, animationDuration: 21 },
    { id: 18, x: 50, y: 40, size: 3.3, opacity: 0.07, animationDelay: 1.7, animationDuration: 24 },
    { id: 19, x: 10, y: 80, size: 2.0, opacity: 0.12, animationDelay: 2.0, animationDuration: 16 },
    { id: 20, x: 75, y: 55, size: 1.8, opacity: 0.09, animationDelay: 0.2, animationDuration: 22 },
    { id: 21, x: 35, y: 95, size: 2.5, opacity: 0.11, animationDelay: 1.4, animationDuration: 20 },
    { id: 22, x: 65, y: 15, size: 3.1, opacity: 0.06, animationDelay: 2.5, animationDuration: 18 },
    { id: 23, x: 25, y: 45, size: 1.4, opacity: 0.13, animationDelay: 1.0, animationDuration: 23 },
    { id: 24, x: 85, y: 75, size: 2.2, opacity: 0.08, animationDelay: 0.1, animationDuration: 19 }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, 50]);

  const statements = [
    "to streamline operations and build a scalable system that actually works",
    "to automate 80% of your business tasks so you can focus on growth, not admin",
    "to execute without getting stuck in an endless loop of strategy and planning"
  ];

  const goldenRules = [
    {
      title: "Internal Structure",
      description: "Scale sustainably with the right foundation",
      icon: "🏗️"
    },
    {
      title: "Automation & AI",
      description: "Eliminate bottlenecks with smart processes",
      icon: "🤖"
    },
    {
      title: "Clear Roadmap",
      description: "Execute without overcomplication",
      icon: "🗺️"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden bg-[#0A0A0A]"
    >
      {/* 3D Wireframe background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Torus Knot - Top Left */}
        <motion.div 
          className="absolute -top-20 -left-20"
          animate={{
            rotate: [0, 360],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="400" height="400" viewBox="0 0 200 200" className="opacity-30">
            <path 
              d="M70,100 C70,80 130,80 130,100 S70,120 70,100 Z" 
              fill="none" 
              strokeWidth="1.5" 
              stroke="#d0ed01" 
              strokeLinecap="round"
            />
            <path 
              d="M110,70 C130,70 130,130 110,130 S90,70 110,70 Z" 
              fill="none" 
              strokeWidth="1.5" 
              stroke="#d0ed01" 
              strokeLinecap="round"
            />
            <path 
              d="M50,110 C50,90 150,90 150,110 S50,130 50,110 Z" 
              fill="none" 
              strokeWidth="1.5" 
              stroke="#d0ed01" 
              strokeLinecap="round"
            />
            <path 
              d="M60,60 C100,20 140,60 140,100 S100,180 60,140 S60,60 60,60 Z" 
              fill="none" 
              strokeWidth="1.5" 
              stroke="#d0ed01" 
              strokeLinecap="round"
            />
            <motion.g
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <ellipse 
                  key={i} 
                  cx="100" 
                  cy="100" 
                  rx={40 + i * 2} 
                  ry={20 + i} 
                  fill="none" 
                  stroke="#d0ed01" 
                  strokeWidth="0.3" 
                  transform={`rotate(${i * 10})`} 
                />
              ))}
            </motion.g>
          </svg>
        </motion.div>

        {/* Torus - Top Right */}
        <motion.div 
          className="absolute top-[15%] -right-10"
          animate={{
            rotate: [0, -360],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="300" height="300" viewBox="0 0 200 200" className="opacity-30">
            <motion.g
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center",
              }}
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <circle 
                  key={i} 
                  cx="100" 
                  cy="100" 
                  r="50" 
                  fill="none" 
                  stroke="#d0ed01" 
                  strokeWidth="0.5" 
                  transform={`rotate(${i * 6}) translate(0, ${i % 2 === 0 ? 15 : -15})`} 
                />
              ))}
            </motion.g>
          </svg>
        </motion.div>

        {/* Möbius Strip - Bottom Left */}
        <motion.div 
          className="absolute bottom-[20%] -left-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="300" height="300" viewBox="0 0 200 200" className="opacity-20">
            <motion.g
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {Array.from({ length: 60 }).map((_, i) => {
                const angle = (i / 60) * Math.PI * 2;
                const twist = (i / 60) * Math.PI;
                
                const r = 50;
                const x1 = 100 + r * Math.cos(angle);
                const y1 = 100 + r * Math.sin(angle) * Math.cos(twist);
                
                const r2 = 45;
                const x2 = 100 + r2 * Math.cos(angle + 0.1);
                const y2 = 100 + r2 * Math.sin(angle + 0.1) * Math.cos(twist + 0.1);
                
                return (
                  <line 
                    key={i} 
                    x1={x1.toFixed(5)} 
                    y1={y1.toFixed(5)} 
                    x2={x2.toFixed(5)} 
                    y2={y2.toFixed(5)} 
                    stroke="#d0ed01" 
                    strokeWidth="0.5" 
                  />
                );
              })}
            </motion.g>
          </svg>
        </motion.div>

        {/* Wormhole - Bottom Right */}
        <motion.div 
          className="absolute bottom-[10%] -right-10"
          animate={{
            rotate: [0, -180],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="300" height="300" viewBox="0 0 200 200" className="opacity-20">
            <motion.g
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {Array.from({ length: 20 }).map((_, i) => {
                const scale = 1 - (i / 30);
                return (
                  <ellipse 
                    key={i} 
                    cx="100" 
                    cy="100" 
                    rx={70 * scale} 
                    ry={40 * scale} 
                    fill="none" 
                    stroke="#d0ed01" 
                    strokeWidth="0.5" 
                  />
                );
              })}
              
              {Array.from({ length: 10 }).map((_, i) => (
                <line 
                  key={i} 
                  x1="100" 
                  y1="100" 
                  x2={(100 + 70 * Math.cos(i * Math.PI / 5)).toFixed(5)} 
                  y2={(100 + 40 * Math.sin(i * Math.PI / 5)).toFixed(5)} 
                  stroke="#d0ed01" 
                  strokeWidth="0.3" 
                />
              ))}
            </motion.g>
          </svg>
        </motion.div>

        {/* Cube - Center */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            perspective: "500px",
          }}
        >
          <svg width="400" height="400" viewBox="0 0 200 200">
            {/* Cube front face */}
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="#d0ed01" strokeWidth="0.5" />
            
            {/* Cube back face */}
            <rect x="75" y="75" width="100" height="100" fill="none" stroke="#d0ed01" strokeWidth="0.5" />
            
            {/* Connecting lines */}
            <line x1="50" y1="50" x2="75" y2="75" stroke="#d0ed01" strokeWidth="0.5" />
            <line x1="150" y1="50" x2="175" y2="75" stroke="#d0ed01" strokeWidth="0.5" />
            <line x1="50" y1="150" x2="75" y2="175" stroke="#d0ed01" strokeWidth="0.5" />
            <line x1="150" y1="150" x2="175" y2="175" stroke="#d0ed01" strokeWidth="0.5" />
            
            {/* Grid lines */}
            {Array.from({ length: 11 }).map((_, i) => (
              <line 
                key={`front-h-${i}`} 
                x1="50" 
                y1={50 + i * 10} 
                x2="150" 
                y2={50 + i * 10} 
                stroke="#d0ed01" 
                strokeWidth="0.2" 
              />
            ))}
            
            {Array.from({ length: 11 }).map((_, i) => (
              <line 
                key={`front-v-${i}`} 
                x1={50 + i * 10} 
                y1="50" 
                x2={50 + i * 10} 
                y2="150" 
                stroke="#d0ed01" 
                strokeWidth="0.2" 
              />
            ))}
            
            {Array.from({ length: 11 }).map((_, i) => (
              <line 
                key={`back-h-${i}`} 
                x1="75" 
                y1={75 + i * 10} 
                x2="175" 
                y2={75 + i * 10} 
                stroke="#d0ed01" 
                strokeWidth="0.2" 
              />
            ))}
            
            {Array.from({ length: 11 }).map((_, i) => (
              <line 
                key={`back-v-${i}`} 
                x1={75 + i * 10} 
                y1="75" 
                x2={75 + i * 10} 
                y2="175" 
                stroke="#d0ed01" 
                strokeWidth="0.2" 
              />
            ))}
          </svg>
        </motion.div>

        {/* Yellow glow overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-[#d0ed01]/10 via-transparent to-transparent opacity-30" style={{ backgroundPosition: 'center 30%' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity, scale, y }}
          className="max-w-7xl mx-auto"
        >
          {/* Main heading with emphasized "IS A WAY" */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative inline-block"
            >
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-16 tracking-tight">
                There <span className="relative inline-block">
                  <span className="relative z-10 text-[#d0ed01]">IS A WAY</span>
                  <motion.span 
                    className="absolute inset-0 bg-[#d0ed01]/10 rounded-lg -skew-x-12"
                    animate={{
                      skewX: [-12, 0, -12],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span> to Scale Without Chaos
              </h2>
            </motion.div>
          </div>

          {/* "yes," and statements section without cards */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-24">
            {/* Left side - floating "yes," element */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3 mb-8 md:mb-0 relative"
            >
              <div className="relative">
                <motion.h3
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 3, 0, -3, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="text-7xl md:text-9xl font-script text-[#d0ed01] transform -rotate-12"
                >
                  yes,
                </motion.h3>
                <motion.div
                  className="absolute inset-0 blur-xl bg-[#d0ed01]/20 -z-10 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Right side - statements with dividing line */}
            <div className="md:w-2/3 relative md:border-l-2 border-[#d0ed01]/30 md:pl-10 space-y-12">
              {statements.map((statement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="flex-shrink-0 mt-2"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#d0ed01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-3xl text-white/90 leading-relaxed">
                        There <span className="relative inline-flex items-center">
                          <span className="relative z-10 font-bold text-[#d0ed01]">IS A WAY</span>
                          <motion.svg 
                            className="absolute left-0 bottom-0 w-full" 
                            height="5" 
                            viewBox="0 0 100 5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          >
                            <motion.path 
                              d="M 0 3 Q 25 0 50 3 T 100 3" 
                              fill="none" 
                              stroke="#d0ed01" 
                              strokeWidth="1.5"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              transition={{ duration: 1.5, delay: 0.4 + index * 0.1 }}
                            />
                          </motion.svg>
                        </span> {statement}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    className="absolute -inset-x-4 inset-y-0 -z-10"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d0ed01]/5 to-transparent"
                      animate={{
                        x: [-100, 100],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* We're going to tell you statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d0ed01]/5 to-transparent -z-10"
              animate={{
                x: [-200, 200],
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto px-4">
              We're going to tell you right now how we've created a 
              <span className="font-bold text-[#d0ed01]"> predictable process </span> 
              that can be used over and over again!
            </p>
          </motion.div>

          {/* Golden Rules Section - No card design */}
          <div className="relative mt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-2xl md:text-4xl font-bold text-[#d0ed01] mb-4">
                The Three Simple Golden Scaling Rules
              </h3>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-16 justify-center">
              {goldenRules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group flex flex-col items-center"
                >
                  {/* Number indicator */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }} 
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                    className="w-14 h-14 mb-6 rounded-full flex items-center justify-center bg-[#d0ed01]/20 border border-[#d0ed01]"
                  >
                    <span className="text-[#d0ed01] font-bold text-2xl">{index + 1}</span>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="text-center relative">
                    <motion.div 
                      className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      {rule.icon}
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-4">{rule.title}</h4>
                    <p className="text-white/80 text-lg">{rule.description}</p>
                    
                    {/* Animated underline */}
                    <motion.div 
                      className="h-px bg-gradient-to-r from-transparent via-[#d0ed01] to-transparent mt-4 mx-auto"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                  
                  {/* Subtle background glow */}
                  <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{
                      opacity: [0, 0.2, 0],
                      scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    <div className="w-full h-full bg-[#d0ed01]/5 blur-xl rounded-full" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group relative px-10 py-5 bg-[#d0ed01] text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,237,1,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                📅 Schedule A Call
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#d0ed01] to-[#cce808]"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group relative px-10 py-5 bg-white/10 text-white font-semibold rounded-full overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                📊 Access Your KPI Dashboard
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScalingWaySection; 