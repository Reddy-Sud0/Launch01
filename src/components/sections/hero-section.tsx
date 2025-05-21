'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 md:pt-40 bg-[#181b01d1] md:pb-16 lg:py-48">
      {/* Background Shapes */}
      {/* <div className="absolute inset-0 overflow-visible">
        <div className="absolute left-[15%] top-[40%] w-[300px] h-[300px] rounded-full bg-[#cce808] blur-[100px] opacity-70"></div>
        <div className="absolute left-[35%] top-[40%] w-[300px] h-[300px] rounded-full bg-[#cce806] blur-[100px] opacity-40"></div>
        <div className="absolute right-[25%] top-[40%] w-[200px] h-[400px] rounded-[100px] bg-[#1a1a1a] border border-white/30"></div>
        <div className="absolute right-[15%] top-[40%] w-[200px] h-[400px] rounded-[100px] bg-gradient-to-b from-[#cce808] to-transparent shadow-[0_0_30px_rgba(208,237,1,0.75)]"></div>
      </div> */}

      {/* Header Effect Wrap */}
      <div className="absolute inset-0 overflow-visible flex flex-col justify-center items-center max-w-[1440px] mx-auto z-0">
        {/* Header Circles */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 transform -rotate-[15deg] perspective-[1000px] rotate-x-12 scale-[0.8] sm:scale-[0.6] md:scale-100">
          {/* Largest Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1221px] h-[1221px] rounded-[10000px] p-[1px] opacity-80 border border-black animate-[rotate_30s_linear_infinite]">
            <div className="w-full h-full rounded-[1000px] bg-gradient-to-b from-[#cce808]/20 to-black border border-white/20 shadow-[0_0_100px_rgba(208,237,1,0.75)]"></div>
          </div>s
          
          {/* Middle Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1004px] h-[1004px] animate-[rotate_25s_linear_infinite_reverse]">
            <div className="w-full h-full rounded-[1000px] bg-gradient-to-b from-[#d0ed01bf]/30 to-black opacity-95 border border-black/30 shadow-[0_0_80px_rgba(208,237,1,0.75)]"></div>
          </div>
          
          {/* Middle Circle with Gradient Detail */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1004px] h-[1004px] rounded-[10000px] p-[2px] animate-[gradientRotate_15s_linear_infinite] bg-[linear-gradient(315deg,#d0ed01bf_8%,#cce808_12%,transparent_42%),linear-gradient(33deg,#ffffff_8%,#d0ed01bf_12%,transparent_42%)]">
            <div className="w-full h-full rounded-[1000px] bg-gradient-to-b from-black to-[#121315] border border-black/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(209, 237, 1, 0.51),transparent_70%)]"></div>
             
              <div className="absolute inset-0 bg-gradient-to-b from-[#d0ed01bf]/40 via-[#d0ed01bf]/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
          
          {/* Smallest Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[789px] h-[789px] rounded-[10000px] p-[1px] opacity-80 bg-gradient-to-b from-white to-[#1d1e2100] animate-[rotate_20s_linear_infinite]">
            <div className="w-full h-full rounded-[1000px] bg-gradient-to-b from-[#070809] to-black"></div>
          </div>
        </div>
      
        {/* Blur Effects - Reduced blue and red effects */}
        <div className="absolute left-[7%] top-[343px] w-[350px] h-[350px] rounded-[260px] bg-white/25 blur-[60px] mix-blend-overlay"></div>
        <div className="absolute left-[13%] top-[433px] w-[204px] h-[204px] rounded-[260px] bg-[#d0ed01bf]/30 blur-[60px]"></div>
        <div className="absolute right-[13%] top-[433px] w-[204px] h-[204px] rounded-[260px] bg-[#cce808]/30 blur-[60px]"></div>
        
        {/* Stars */}
        <div className="absolute left-[7%] top-[343px] w-[350px] h-[350px] bg-[url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657d7a6d3e44cc3168e9df1e_stars.svg')] bg-center bg-contain opacity-80 z-2"></div>
        <div className="absolute right-[7%] top-[343px] w-[350px] h-[350px] bg-[url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657d7a6d3e44cc3168e9df1e_stars.svg')] bg-center bg-contain opacity-80 z-2"></div>
        
        {/* Large Blur Effects - Reduced blue and red effects */}
        <div className="absolute top-[40%] left-0 w-[720px] h-[720px] rounded-[1000px] bg-[#d0ed01bf] blur-[150px] opacity-10 z-1"></div>
        <div className="absolute top-[40%] right-0 w-[720px] h-[720px] rounded-[1000px] bg-[#cce808] blur-[150px] opacity-10 z-1"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center min-h-[70vh] sm:min-h-[80vh] md:min-h-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[800px] lg:max-w-[1000px] mx-auto">
            <div className="flex flex-col items-center justify-center text-center w-full">
              <span className="text-[12px] sm:text-[14px] tracking-[0.2em] uppercase font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#cce808] to-[#d0ed01bf] mb-1">
              We help launch zero to one products and services
              </span>
              <h1 className="text-[20px] sm:text-[40px] leading-[1.2] md:text-5xl lg:text-6xl mx-auto text-white">
              Find and onboard 
                <span className="block mt-1"> your first customers </span>
              </h1>

              <p className="mt-2 sm:mt-6 text-[11px] sm:text-[16px] leading-[1.6] md:text-xl text-white/70 mx-auto max-w-[220px] sm:max-w-[600px]">
              From Idea to Momentum -  We Navigate the Chaos 
                <span className="block mt-1">of Zero to One With You</span>
              </p>

              <div className="relative mt-3 sm:mt-10 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <Link
                  href="/signup"
                  className="relative py-3 px-6 sm:py-3.5 sm:px-8 flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#cce808] to-[#d0ed01bf] hover:from-[#d0ed01bf] hover:to-[#cce808] min-w-[200px] transition-all duration-300 shadow-[0_0_20px_rgba(204,232,8,0.3)] hover:shadow-[0_0_30px_rgba(204,232,8,0.5)]"
                >
                  <span className="text-black font-medium">Get started</span>
                  <Image
                    src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657b388b5a2f8cade34f6f94_arrow-right.svg"
                    alt="Arrow right"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </Link>

                <div className="relative group">
                  <Link
                    href="https://app.symbiotes.ai/kpi-dashboard"
                    className="py-3.5 px-8 text-white/80 hover:text-white flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 bg-white/10 hover:bg-white/15 rounded-full min-w-[200px] backdrop-blur-[10px] border border-white/20"
                  >
                    <span>Access Your KPI Dashboard</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}