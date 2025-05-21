"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=64&h=64", // Sample Unsplash avatar
    title: "Self-paced video content",
    desc: "Learn at your own pace with flexible, on-demand videos.",
  },
  {
    icon: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64",
    title: "Office hours with mentors",
    desc: "Get direct support when you need it to overcome any challenges.",
  },
  {
    icon: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=64&h=64",
    title: "Project-driven approach",
    desc: "Gain real-world, practical skills through actionable projects.",
  },
  {
    icon: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&h=64",
    title: "Access to 1000+ learners",
    desc: "Join a network of passionate learners and grow together.",
  },
];

export default function UpskillSection() {
  // Duplicate features to make 8 (as in the screenshot)
  const allFeatures = [...features, ...features];
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    featureRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.08,
          }
        );
      }
    });
    // Refresh ScrollTrigger after setup
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-white mb-2">Skill Up, Scale Up</p>
        <h2 className="text-4xl font-bold mb-2 text-white">Upskill Your Team; Upscale Your Business</h2>
        <p className="text-gray-200 mb-8">
          To achieve long-term growth, you need a team that is constantly evolving and improving. That's where we come in.
        </p>
        <button className="border border-white text-white px-6 py-2 rounded mb-10 float-right hover:bg-white hover:text-black transition">Upskill Your Team</button>
        <div className="clear-both"></div>
        <h3 className="font-semibold text-lg mb-6 text-white">Why Learn With Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {allFeatures.map((f, i) => (
            <div
              key={i}
              ref={el => { featureRefs.current[i] = el; }}
              className="flex items-start space-x-6 p-6 bg-black rounded-xl"
            >
              <img src={f.icon} alt="" className="w-20 h-20 rounded object-cover flex-shrink-0" />
              <div className="flex flex-col justify-center">
                <h4 className="font-semibold text-2xl mb-2" style={{ color: '#d0ed01' }}>{f.title}</h4>
                <p className="text-gray-200 text-lg">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
