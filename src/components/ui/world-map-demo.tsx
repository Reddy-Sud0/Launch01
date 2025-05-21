"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function WorldMapDemo() {
  return (
    <div className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-0">
        {/* Left Side: Text and Bars */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start px-4 md:px-12">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-2">Learners from 84+ countries</p>
          <h2 className="font-bold text-2xl md:text-4xl text-white mb-4 text-center md:text-left">
            Join a Global Community Shaping<br />the Future of AI
          </h2>
          <p className="text-sm md:text-base text-neutral-400 mb-8 text-center md:text-left">
            55% of our Community consists of Founders,<br />Working Professionals, Students & More.
          </p>
          <div className="flex flex-col gap-5 w-full max-w-xs">
            <div className="bg-[#d0ed01] border border-[#d0ed01] px-6 flex items-center justify-between" style={{ borderRadius: '8px', height: '64px', width: '100%' }}>
              <span className="font-extrabold text-2xl text-black">50%</span>
              <span className="text-base text-neutral-700 ml-2">5-10 years</span>
            </div>
            <div className="bg-[#d0ed01] border border-[#d0ed01] px-6 flex items-center justify-between" style={{ borderRadius: '8px', height: '64px', width: '85%' }}>
              <span className="font-extrabold text-2xl text-black">40%</span>
              <span className="text-base text-neutral-700 ml-2">10+ years</span>
            </div>
            <div className="bg-[#d0ed01] border border-[#d0ed01] px-6 flex items-center justify-between" style={{ borderRadius: '8px', height: '64px', width: '60%' }}>
              <span className="font-extrabold text-2xl text-black">10%</span>
              <span className="text-base text-neutral-700 ml-2">0-2 years</span>
            </div>
          </div>
        </div>
        {/* Right Side: World Map */}
        <div className="flex-1 flex justify-center items-center w-full md:w-auto px-4 md:px-0 mt-12 md:mt-0">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 25.6139, lng: 77.209 }, // New Delhi (moved lower)
              },
              {
                start: { lat: 25.6139, lng: 77.209 }, // New Delhi (moved lower)
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 25.6139, lng: 77.209 }, // New Delhi (moved lower)
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
              {
                start: { lat: 25.6139, lng: 77.209 }, // New Delhi (moved lower)
                end: { lat: 25.6139, lng: 77.209 }, // New Delhi (moved lower)
              },
              {
                start: { lat: 25.6139, lng: 77.209 }, // New Delhi (moved lower)
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 25.6139, lng: 77.209 }, // New Delhi (moved lower)
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 25.6139, lng: 77.209 }, // New Delhi (moved lower)
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
} 