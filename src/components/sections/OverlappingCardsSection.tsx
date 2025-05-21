"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function OverlappingCardsSection() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    const ctx = gsap.context(() => {
      // Initial state setup - NO blur effects anywhere
      gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
        xPercent: 0, 
        left: "50%", 
        x: "-50%", 
        position: "absolute"
      });
      
      // Make first card visible, others invisible initially
      gsap.set(card1Ref.current, { opacity: 1, zIndex: 3 });
      gsap.set(card2Ref.current, { opacity: 0, y: 35, zIndex: 2 });
      gsap.set(card3Ref.current, { opacity: 0, y: 70, zIndex: 1 });

      // Create the main timeline
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          pin: true,
          pinSpacing: true,
          start: "top 15%",
          end: "bottom+=2000 bottom",
          scrub: 1,
          markers: false,
        }
      });

      // Animation sequence for Card 1 to Card 2 - NO opacity reduction or other blur-like effects
      timeline.to(card1Ref.current, {
        scale: 0.95,
        y: -10,
        opacity: 0,  // Changed from 0.5 to 0 to avoid partial visibility
        duration: 1
      }, "+=0.5");
      
      timeline.to(card2Ref.current, {
        y: 0,
        opacity: 1,
        duration: 1
      }, "-=0.7");
      
      // Animation sequence for Card 2 to Card 3 - NO opacity reduction or other blur-like effects
      timeline.to(card2Ref.current, {
        scale: 0.98,
        y: -5,
        opacity: 0,  // Changed from 0.6 to 0 to avoid partial visibility
        duration: 1
      }, "+=0.5");
      
      timeline.to(card3Ref.current, {
        y: 0,
        opacity: 1,
        duration: 1
      }, "-=0.7");
    });
    
    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section className="py-20  bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-rose-300">Here's What We Discovered...</h2>
        
        <div 
          ref={cardsContainerRef} 
          className="w-full relative flex justify-center"
          style={{ height: "600px" }} // Fixed height container for animation
        >
          {/* Card 1 */}
          <div 
            ref={card1Ref} 
            className="card-1 w-full max-w-2xl bg-black flex flex-col justify-center items-center rounded-lg shadow-xl px-4 sm:px-6 py-4 mx-auto space-y-2 border-2 border-[#d0ed01]"
          >
            {/* Section Title with Flask Icons */}
            <div className="flex items-center justify-center w-full mb-1">
              <span className="text-2xl mr-2">🧪</span>
              <span className="text-[#d0ed01] font-semibold tracking-wide border-b-2 border-[#d0ed01] px-2 text-base md:text-lg">TOP SECRET INGREDIENT NO. 1</span>
              <span className="text-2xl ml-2">🧪</span>
            </div>
            {/* Headline and Arrow */}
            <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-1 text-center sm:text-left">
              <span className="text-[#d0ed01] font-extrabold text-xl md:text-2xl mr-0 sm:mr-2">Finding the Right Problem</span>
              <span className="text-2xl text-[#d0ed01] mx-0 sm:mx-2">&#x27A1;&#xFE0F;</span>
              <span className="text-white font-semibold text-base md:text-lg mt-1 sm:mt-0">Pre-selling a course works, but the key is to make sure you're solving a real problem.</span>
            </div>
            {/* Supporting Statement */}
            <div className="w-full text-center font-bold text-white my-1 text-base md:text-lg">
              We've broken down the pre-selling process into actionable steps so that you can confidently sell before you build.
            </div>
            {/* Preparation List and Image */}
            <div className="flex flex-col md:flex-row w-full mt-2 items-start md:items-center">
              <div className="flex-1">
                <div className="text-[#d0ed01] font-bold mb-1 text-sm md:text-base">PREPARATION INVOLVES:</div>
                <ul className="text-white text-sm md:text-base ml-2">
                  <li className="flex items-start mb-1"><span className="text-[#d0ed01] mr-2 mt-1">&#x1F9EA;</span> <span className="font-semibold">A solid mission statement that communicates your purpose.</span></li>
                  <li className="flex items-start mb-1"><span className="text-[#d0ed01] mr-2 mt-1">&#x1F9EA;</span> <span className="font-semibold">A detailed outline of what your course or product will provide.</span></li>
                  <li className="flex items-start"><span className="text-[#d0ed01] mr-2 mt-1">&#x1F9EA;</span> <span className="font-semibold">Sales copy that speaks directly to your target audience's needs and desires.</span></li>
                </ul>
              </div>
              <div className="flex items-center justify-center w-full md:w-28 h-28 mt-4 md:mt-0 md:ml-4">
                <div className="w-24 h-24 bg-[#d0ed01]/10 rounded-lg flex items-center justify-center border border-[#d0ed01]">
                  <span className="text-5xl">🎯</span>
                </div>
              </div>
            </div>
            {/* Fast-Acting Takeaway */}
            <div className="w-full mt-6 flex flex-col md:flex-row items-stretch md:items-center">
              <div className="bg-[#d0ed01] px-4 py-2 rounded-t md:rounded-t-none md:rounded-l font-semibold text-black whitespace-nowrap text-sm md:text-base">FAST-ACTING TAKEAWAY:</div>
              <div className="bg-[#d0ed01]/10 px-4 py-2 rounded-b md:rounded-b-none md:rounded-r text-white flex-1 text-sm md:text-base font-bold border border-[#d0ed01]">
                When you anchor your course or product in a real-world problem, you ensure it's something that real people are ready to pay for.
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div 
            ref={card2Ref}
            className="card-2 w-full max-w-2xl bg-black flex flex-col justify-center items-center rounded-lg shadow-xl px-4 sm:px-6 py-4 mx-auto space-y-2 border-2 border-[#d0ed01]"
          >
            {/* Section Title with Flask Icons */}
            <div className="flex items-center justify-center w-full mb-1">
              <span className="text-2xl mr-2">🧪</span>
              <span className="text-[#d0ed01] font-semibold tracking-wide border-b-2 border-[#d0ed01] px-2 text-base md:text-lg">TOP SECRET INGREDIENT NO. 2</span>
              <span className="text-2xl ml-2">🧪</span>
            </div>
            {/* Headline and Arrow */}
            <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-1 text-center sm:text-left">
              <span className="text-[#d0ed01] font-extrabold text-xl md:text-2xl mr-0 sm:mr-2">The Roadmap</span>
              <span className="text-2xl text-[#d0ed01] mx-0 sm:mx-2">&#x27A1;&#xFE0F;</span>
              <span className="text-white font-semibold text-base md:text-lg mt-1 sm:mt-0">Creating a roadmap is crucial to your course's success.</span>
            </div>
            {/* Supporting Statement */}
            <div className="w-full text-center font-bold text-white my-1 text-base md:text-lg">
              Planning your course is about more than just deciding what topics to cover—it's about making sure that each lesson delivers a tangible outcome.
            </div>
            {/* Roadmap List and Image */}
            <div className="flex flex-col md:flex-row w-full mt-2 items-start md:items-center">
              <div className="flex-1">
                <div className="text-[#d0ed01] font-bold mb-1 text-sm md:text-base">HERE'S THE SECRET TO A STRONG ROADMAP:</div>
                <ul className="text-white text-sm md:text-base ml-2">
                  <li className="flex items-start mb-1"><span className="text-[#d0ed01] mr-2 mt-1">🧪</span> <span className="font-semibold">Combine marketing with instructional design to build a seamless experience.</span></li>
                  <li className="flex items-start mb-1"><span className="text-[#d0ed01] mr-2 mt-1">🧪</span> <span className="font-semibold">Focus on actionable content that drives engagement and results.</span></li>
                  <li className="flex items-start"><span className="text-[#d0ed01] mr-2 mt-1">🧪</span> <span className="font-semibold">Don't rush the planning phase—it's where your course's success is born.</span></li>
                </ul>
              </div>
              <div className="flex items-center justify-center w-full md:w-28 h-28 mt-4 md:mt-0 md:ml-4">
                <div className="w-24 h-24 bg-[#d0ed01]/10 rounded-lg flex items-center justify-center border border-[#d0ed01]">
                  <span className="text-5xl">🗺️</span>
                </div>
              </div>
            </div>
            {/* Fast-Acting Takeaway */}
            <div className="w-full mt-6 flex flex-col md:flex-row items-stretch md:items-center">
              <div className="bg-[#d0ed01] px-4 py-2 rounded-t md:rounded-t-none md:rounded-l font-semibold text-black whitespace-nowrap text-sm md:text-base">FAST-ACTING TAKEAWAY:</div>
              <div className="bg-[#d0ed01]/10 px-4 py-2 rounded-b md:rounded-b-none md:rounded-r text-white flex-1 text-sm md:text-base font-bold border border-[#d0ed01]">
                A well-crafted roadmap turns your vision into a memorable experience for your audience. Without it, your course risks being forgotten.
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div 
            ref={card3Ref}
            className="card-3 w-full max-w-2xl bg-black flex flex-col justify-center items-center rounded-lg shadow-xl px-4 sm:px-8 py-6 mx-auto space-y-4 border-2 border-[#d0ed01]"
          >
            {/* Section Title with Flask Icons */}
            <div className="flex items-center justify-center w-full mb-2">
              <span className="text-2xl mr-2">🧪</span>
              <span className="text-[#d0ed01] font-semibold tracking-wide border-b-2 border-[#d0ed01] px-2 text-base md:text-lg">TOP SECRET INGREDIENT NO. 3</span>
              <span className="text-2xl ml-2">🧪</span>
            </div>
            {/* Headline and Arrow */}
            <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-2 text-center sm:text-left">
              <span className="text-[#d0ed01] font-extrabold text-xl md:text-2xl mr-0 sm:mr-2">The MVP Execution</span>
              <span className="text-2xl text-[#d0ed01] mx-0 sm:mx-2">&#x27A1;&#xFE0F;</span>
              <span className="text-white font-semibold text-base md:text-lg mt-1 sm:mt-0">This is the part where the rubber meets the road.</span>
            </div>
            {/* Supporting Statement */}
            <div className="w-full text-center font-bold text-white my-2 text-base md:text-lg">
              Executing the MVP is all about getting your course out to your audience as quickly as possible, and then improving based on their real-time feedback.
            </div>
            {/* MVP List and Image */}
            <div className="flex flex-col md:flex-row w-full mt-4 items-start md:items-center">
              <div className="flex-1">
                <div className="text-[#d0ed01] font-bold mb-1 text-sm md:text-base">THE KEY TO A SUCCESSFUL MVP IS:</div>
                <ul className="text-white text-sm md:text-base ml-2">
                  <li className="flex items-start mb-1"><span className="text-[#d0ed01] mr-2 mt-1">🧪</span> <span className="font-semibold">Starting small with the most critical parts of your course.</span></li>
                  <li className="flex items-start mb-1"><span className="text-[#d0ed01] mr-2 mt-1">🧪</span> <span className="font-semibold">Iterating quickly based on feedback.</span></li>
                  <li className="flex items-start"><span className="text-[#d0ed01] mr-2 mt-1">🧪</span> <span className="font-semibold">Testing early to confirm your assumptions and course structure.</span></li>
                </ul>
              </div>
              <div className="flex items-center justify-center w-full md:w-28 h-28 mt-4 md:mt-0 md:ml-4">
                <div className="w-24 h-24 bg-[#d0ed01]/10 rounded-lg flex items-center justify-center border border-[#d0ed01]">
                  <span className="text-5xl">⚡</span>
                </div>
              </div>
            </div>
            {/* Fast-Acting Takeaway */}
            <div className="w-full mt-6 flex flex-col md:flex-row items-stretch md:items-center">
              <div className="bg-[#d0ed01] px-4 py-2 rounded-t md:rounded-t-none md:rounded-l font-semibold text-black whitespace-nowrap text-sm md:text-base">FAST-ACTING TAKEAWAY:</div>
              <div className="bg-[#d0ed01]/10 px-4 py-2 rounded-b md:rounded-b-none md:rounded-r text-white flex-1 text-sm md:text-base font-bold border border-[#d0ed01]">
                A rapid MVP launch allows you to test your ideas with real users and refine your offering before going all-in.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}