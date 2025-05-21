"use client"
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// Pre-generated fixed position values to prevent hydration mismatch
const particlePositions = [
  { x: 54.88, y: 99.49, animX: [-300, 200], animY: [-250, 150] },
  { x: 28.78, y: 70.18, animX: [-200, 300], animY: [-100, 200] },
  { x: 37.66, y: 25.70, animX: [100, -200], animY: [200, -150] },
  { x: 41.89, y: 43.42, animX: [-250, 150], animY: [150, -250] },
  { x: 13.15, y: 29.76, animX: [200, -300], animY: [-200, 100] },
  { x: 64.94, y: 72.26, animX: [-150, 250], animY: [100, -200] },
  { x: 31.73, y: 35.97, animX: [250, -150], animY: [-150, 250] },
  { x: 26.77, y: 47.97, animX: [-200, 100], animY: [200, -100] },
  { x: 1.68, y: 71.03, animX: [150, -250], animY: [-100, 200] },
  { x: 82.89, y: 59.44, animX: [-300, 200], animY: [200, -150] },
  { x: 46.89, y: 67.43, animX: [200, -300], animY: [-150, 250] },
  { x: 65.25, y: 14.73, animX: [-250, 150], animY: [150, -300] }
];

// Pre-generated animation durations
const animationDurations = [18, 22, 25, 30, 27, 20, 28, 24, 19, 26, 21, 23];

const RelatableSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChoice, setActiveChoice] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const springRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="relative py-32 overflow-hidden bg-[radial-gradient(70%_70%_at_50%_0%,#d0ed01_0%,#12120c_45%)] min-h-screen flex items-center" ref={containerRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#d0ed01]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-[#d0ed01]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#d0ed01]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Floating Particles with fixed positions */}
      {particlePositions.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-[#d0ed01] backdrop-blur-sm rounded-full"
          animate={{
            x: particle.animX,
            y: particle.animY,
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: animationDurations[i],
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}

      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="inline-block text-sm font-medium text-[#d0ed01] mb-4 tracking-wider bg-black px-4 py-1 rounded-full">
              COMMON CHALLENGES
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#ffff]">
              How Many of You Can Relate?
            </h2>
          </motion.div>

          <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-16 md:gap-24">
            {/* Left Choice */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative group max-w-xl"
              onMouseEnter={() => setActiveChoice(0)}
              onMouseLeave={() => setActiveChoice(null)}
            >
              <div className="relative z-10 p-8 backdrop-blur-md  rounded-2xl hover:bg-[#d0ed01]/10 transition-all  ">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="text-6xl"
                  >
                    📈
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px bg-gradient-to-r from-[#d0ed01] to-transparent flex-1"
                  />
                </div>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-6 text-[#ffff]"
                >
                  Growing Business, Chaotic Systems
                </motion.h3>
                <p className="text-[#ffff] text-lg leading-relaxed mb-8">
                  I have a business that's growing, but my internal systems are chaotic, manual, and unpredictable.
                </p>
              </div>
            </motion.div>

            {/* Animated OR Separator */}
            <div className="relative flex items-center justify-center w-40">
              <motion.div
                style={{ 
                  rotate: springRotate,
                  scale: springScale,
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-40 h-40 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-[#d0ed01]/10 backdrop-blur-xl" />
                <div className="absolute inset-0 rounded-full border-4 border-[#d0ed01]/20" />
                <div className="absolute inset-4 rounded-full border-4 border-[#d0ed01]/30" />
                <div className="absolute inset-8 rounded-full border-4 border-[#d0ed01]/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    style={{
                      rotate: useTransform(springRotate, value => -value)
                    }}
                  >
                    <span className="text-3xl font-bold text-[#d0ed01]  px-6 py-3 ">OR</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Choice */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative group max-w-xl"
              onMouseEnter={() => setActiveChoice(1)}
              onMouseLeave={() => setActiveChoice(null)}
            >
              <div className="relative z-10 p-8 backdrop-blur-md  rounded-2xl hover:bg-[#d0ed01]/10 transition-all">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    animate={{ 
                      rotate: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="text-6xl"
                  >
                    🤖
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px bg-gradient-to-l from-[#d0ed01] to-transparent flex-1"
                  />
                </div>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-6 text-[#ffff]"
                >
                  AI Overwhelm
                </motion.h3>
                <p className="text-[#ffff] text-lg leading-relaxed mb-8">
                  I know AI and automation can help, but I'm overwhelmed by tools, conflicting strategies, and too much theory.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-24 text-center"
          >
            <p className="text-xl font-medium text-[#d0ed01] backdrop-blur-md bg-black/20 px-6 py-3 rounded-full inline-block">
              We're going to put an end to all of this, right here and now—without wasting any more time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RelatableSection;