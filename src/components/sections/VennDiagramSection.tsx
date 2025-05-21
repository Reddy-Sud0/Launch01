"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define interfaces for our component data
interface VennComponent {
  id: string;
  title: string;
  color: string;
  textColor: string;
  size: { 
    sm: { width: string; height: string };
    md: { width: string; height: string };
    lg: { width: string; height: string };
  };
  description: string;
}

// Define the three key components of the Venn diagram
const vennComponents: VennComponent[] = [
  {
    id: 'problem',
    title: 'FINDING THE\nRIGHT PROBLEM',
    color: '#FFFACC', // Light yellow
    textColor: '#000000', // Black
    // Responsive sizes based on screen width
    size: { 
      sm: { width: '220px', height: '220px' }, // Reduced from 280px
      md: { width: '320px', height: '320px' },
      lg: { width: '380px', height: '380px' },
    },
    description: 'Understanding the pain points of your audience is the first step in building a meaningful course. If you don\'t have the right problem, your solution won\'t matter.'
  },
  {
    id: 'roadmap',
    title: 'CREATING THE\nROADMAP',
    color: '#FFEEA8', // Slightly darker yellow
    textColor: '#000000', // Black
    // Responsive sizes based on screen width
    size: { 
      sm: { width: '220px', height: '220px' }, // Reduced from 280px
      md: { width: '320px', height: '320px' },
      lg: { width: '380px', height: '380px' },
    },
    description: 'A well-defined plan is your blueprint. Without it, you\'ll be stumbling in the dark, unable to focus on delivering real value.'
  },
  {
    id: 'mvp',
    title: 'EXECUTING\nTHE MVP',
    color: '#FFDC62', // Darker yellow
    textColor: '#000000', // Black
    // Responsive sizes based on screen width
    size: { 
      sm: { width: '220px', height: '220px' }, // Reduced from 280px
      md: { width: '320px', height: '320px' },
      lg: { width: '380px', height: '380px' },
    },
    description: 'The MVP is your first draft. It\'s your way of getting out there fast, gathering feedback, and iterating on your ideas. Without the MVP, you\'ll never know if your course or product is truly hitting the mark.'
  },
];

const VennDiagramSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circlesContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('lg');

  // End positions reference for other components
  const endPositionsRef = {
    sm: [
      { left: '25%', top: '40%' }, // estimating - mobile
      { left: '75%', top: '40%' }, // prioritizing - mobile
      { left: '50%', top: '70%' }, // focus - mobile
    ],
    md: [
      { left: '28%', top: '42%' }, // estimating - tablet
      { left: '72%', top: '42%' }, // prioritizing - tablet
      { left: '50%', top: '75%' }, // focus - tablet
    ],
    lg: [
      { left: '34%', top: '43%' }, // estimating - desktop
      { left: '66%', top: '43%' }, // prioritizing - desktop
      { left: '50%', top: '80%' }, // focus - desktop
    ]
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('sm');
      } else if (window.innerWidth < 1024) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };

    // Set initial screen size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (sectionRef.current && circlesContainerRef.current) {
      const section = sectionRef.current;
      
      // Create ScrollTrigger - improve animation timing
      const scrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top 80%", // Start when top of section reaches 80% of viewport
        end: "center center", // End when center of section reaches center of viewport
        scrub: 0.7,       // Smoother animation response
        onUpdate: (self) => {
          // Set scroll progress for the animations
          setScrollProgress(self.progress);
        },
      });

      // Add an animation for the circles when they appear
      if (circlesContainerRef.current) {
        const circles = circlesContainerRef.current.querySelectorAll('.venn-circle');
        
        circles.forEach((circle, index) => {
          gsap.fromTo(
            circle,
            { 
              scale: 0.7,
              opacity: 0,
              rotation: -5 + (index * 5)
            },
            { 
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.8,
              delay: 0.2 * index,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }

      return () => {
        // Clean up the ScrollTrigger on unmount
        scrollTrigger.kill();
      };
    }
  }, []);

  // Calculate positions based on scroll progress
  const getCircleStyles = (index: number) => {
    // Starting positions - responsive to screen size
    const startPositions = {
      sm: [
        { left: '20%', top: '25%' }, // estimating - mobile
        { left: '80%', top: '25%' }, // prioritizing - mobile
        { left: '50%', top: '85%' }, // focus - mobile
      ],
      md: [
        { left: '15%', top: '30%' }, // estimating - tablet
        { left: '85%', top: '30%' }, // prioritizing - tablet
        { left: '50%', top: '90%' }, // focus - tablet
      ],
      lg: [
        { left: '15%', top: '30%' }, // estimating - desktop
        { left: '85%', top: '30%' }, // prioritizing - desktop
        { left: '50%', top: '95%' }, // focus - desktop
      ]
    };
    
    // End positions - responsive to screen size
    const endPositions = endPositionsRef; // Reuse the reference

    const startPos = startPositions[screenSize][index];
    const endPos = endPositions[screenSize][index];

    const left = `calc(${startPos.left} + (${endPos.left} - ${startPos.left}) * ${Math.pow(scrollProgress, 1.5)})`;
    const top = `calc(${startPos.top} + (${endPos.top} - ${startPos.top}) * ${Math.pow(scrollProgress, 1.5)})`;
    
    // Enhanced scale and opacity based on scroll progress with easing
    const scale = 0.8 + (0.2 * Math.pow(scrollProgress, 0.8));
    const opacity = 0.6 + (0.4 * Math.pow(scrollProgress, 0.5));
    
    return {
      left,
      top,
      transform: `translate(-50%, -50%) scale(${scale}) rotate(${(1 - scrollProgress) * (index - 1) * 3}deg)`,
      opacity,
    };
  };

  // Get sizes based on screen size
  const getCircleSize = (component: VennComponent) => {
    return component.size[screenSize];
  };

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white py-16">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          You <span className="text-yellow-400">need ALL three</span>, because just two out of three... and the{' '}
          <span className="relative">
            system breaks.
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M1 5.5C40 0.5 60 7.5 199 3.5" 
                stroke="#FFD700" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
          When it comes to building a successful course or product, there are three key elements that must be present. 
          If you're missing any one of them, the system fails.
        </p>
      </div>

      {/* Main Venn Diagram Container - height responsive to screen size */}
      <div 
        ref={circlesContainerRef} 
        className="relative w-full max-w-6xl mx-auto h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] bg-contain bg-repeat"
        style={{
          backgroundImage: 'url("/striped-bg-dark.png")' // Only use the backgroundImage property
        }}
      >
        {/* The three main circles - with enhanced animation */}
        {vennComponents.map((component, index) => (
          <div
            key={component.id}
            className={`venn-circle venn-circle-${component.id} absolute rounded-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center`}
            style={{
              width: getCircleSize(component).width,
              height: getCircleSize(component).height,
              backgroundColor: component.color,
              zIndex: 10,
              boxShadow: scrollProgress > 0.5 ? `0 4px 20px rgba(255,215,0,${0.15 + scrollProgress * 0.15})` : '0 4px 15px rgba(0,0,0,0.05)',
              ...getCircleStyles(index),
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <h3 
              className="font-bold text-lg sm:text-xl md:text-2xl mb-2 md:mb-3 whitespace-pre-line text-center text-black"
              style={{
                opacity: scrollProgress * 1.5 > 1 ? 1 : scrollProgress * 1.5,
                transform: `scale(${0.9 + scrollProgress * 0.1})`,
                transition: 'all 0.3s ease'
              }}
            >
              {component.title}
            </h3>
            <p 
              className="text-xs sm:text-sm md:text-base text-black px-2 overflow-y-auto max-h-32 md:max-h-40 lg:max-h-48"
              style={{
                opacity: scrollProgress * 1.5 > 1 ? 1 : scrollProgress * 1.5,
                transition: 'all 0.3s ease'
              }}
            >
              {component.description}
            </p>
          </div>
        ))}

        {/* Center intersection - appears when all three circles join with enhanced animation */}
        <div 
          className="absolute rounded-full bg-yellow-500 bg-opacity-90"
          style={{
            width: screenSize === 'sm' ? '80px' : screenSize === 'md' ? '100px' : '120px',
            height: screenSize === 'sm' ? '80px' : screenSize === 'md' ? '100px' : '120px',
            left: '50%',
            top: screenSize === 'sm' ? '45%' : screenSize === 'md' ? '48%' : '50%',
            transform: `translate(-50%, -50%) scale(${scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 : 0})`,
            zIndex: 22,
            opacity: scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 : 0, // Appear at 50% scroll
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: scrollProgress > 0.6 ? `0 0 25px rgba(255,215,0,${0.3 * (scrollProgress - 0.6)})` : 'none', // Add glow effect
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span 
              className="text-black font-bold text-xs sm:text-sm md:text-base"
              style={{
                opacity: scrollProgress > 0.7 ? (scrollProgress - 0.7) * 3 : 0,
                transform: `scale(${scrollProgress > 0.7 ? 0.5 + (scrollProgress - 0.7) * 1.67 : 0.5})`,
                transition: 'all 0.3s ease'
              }}
            >
              NEEDED
            </span>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <motion.div 
        className="container mx-auto text-center mt-8 md:mt-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-xl font-medium text-yellow-300">
          If you're missing one of these ingredients, things will start to unravel.
        </p>
      </motion.div>
    </div>
  );
};

export default VennDiagramSection; 