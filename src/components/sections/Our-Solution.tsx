'use client';

import Image from 'next/image';

export default function SolutionSection() {
  return (
    <section id="our-product" className="relative py-8 sm:py-12 lg:py-16 overflow-hidden bg-black bg-[url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657ff6ae9b0c3dd15743c144_PurpleLine.svg'),radial-gradient(circle_at_50%_0,#000000_1%,#00000014_5%,transparent_14%),url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657d7a6d3e44cc3168e9df1e_stars.svg'),radial-gradient(circle_at_50%_0,#ffd90080_9%,#d0ed01bf_55%)] bg-[position:50%_0,0_0,50%_-11%,0_0] bg-[size:contain,auto,auto,auto] bg-no-repeat">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 pt-[20px] sm:pt-[30px] pb-[30px] sm:pb-[50px] lg:pb-[70px] relative">
        <div>
          <div className="flex flex-col items-center justify-center gap-8 sm:gap-[72px]">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 max-w-2xl">
                <span className="text-white uppercase text-xs sm:text-sm tracking-wide bg-[black] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">Our Product</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                  Your own internal tool. Built uniquely for your business.
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg text-center">
                  Your business is unique—your tools should be too. <br />
                  We create solutions that scale with you.
                </p>
              </div>
            </div>

            {/* Monitor Container */}
            <div className="w-full max-w-[1200px] mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/Symbiotes-dash.png"
                alt="Symbiotes Dashboard"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-10 w-full max-w-[1200px] mx-auto relative z-[2] px-4 sm:px-6">
              {/* Interface Card */}
              <div className="bg-[rgba(23,24,26,0.7)] dark:bg-[rgba(255,255,255,0.7)] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 dark:border-black/10 backdrop-blur-2xl relative shadow-lg translate-y-0 sm:translate-y-0 lg:translate-y-12 hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] transition-all duration-300 sm:aspect-[16/9] lg:aspect-square hover:border-[#ffd900] dark:hover:border-[#ffd900]">
                <div className="relative w-full h-full flex flex-col">
                  <div className="relative w-full h-[50%] sm:h-[60%] bg-[#1a1a1a] overflow-hidden">
                    <Image
                      src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/6580e889743df4400db7e45a_screen.png"
                      alt="Interface"
                      width={1066}
                      height={600}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent opacity-70"></div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[rgba(23,24,26,0.95)] to-[rgba(23,24,26,0.98)]">
                    <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">Interface</div>
                    <div className="text-white/70 text-sm sm:text-base leading-relaxed">The front-end your team interacts with daily. A seamless, intuitive experience designed for clarity and ease of use.</div>
                  </div>
                </div>
              </div>

              {/* AI Workflows Card */}
              <div className="bg-[rgba(23,24,26,0.7)] dark:bg-[rgba(255,255,255,0.7)] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 dark:border-black/10 backdrop-blur-2xl relative shadow-lg translate-y-0 sm:translate-y-0 lg:-translate-y-8 hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] transition-all duration-300 sm:aspect-[16/9] lg:aspect-square hover:border-[#ffd900] dark:hover:border-[#ffd900]">
                <div className="relative w-full h-full flex flex-col">
                  <div className="relative w-full h-[50%] sm:h-[60%] bg-[#1a1a1a] overflow-hidden">
                    <Image
                      src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/672e51b61fc86077b132633d_automations.png"
                      alt="AI Workflows"
                      width={1066}
                      height={600}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent opacity-70"></div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[rgba(23,24,26,0.95)] to-[rgba(23,24,26,0.98)]">
                    <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">AI Workflows</div>
                    <div className="text-white/70 text-sm sm:text-base leading-relaxed">The engine automating processes behind the scenes. AI-powered workflows that optimize tasks and eliminate inefficiencies.</div>
                  </div>
                </div>
              </div>

              {/* Data Card */}
              <div className="bg-[rgba(23,24,26,0.7)] dark:bg-[rgba(255,255,255,0.7)] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 dark:border-black/10 backdrop-blur-2xl relative shadow-lg translate-y-0 sm:translate-y-0 lg:translate-y-12 hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] transition-all duration-300 sm:aspect-[16/9] lg:aspect-square hover:border-[#ffd900] dark:hover:border-[#ffd900]">
                <div className="relative w-full h-full flex flex-col">
                  <div className="relative w-full h-[50%] sm:h-[60%] bg-[#1a1a1a] overflow-hidden">
                    <Image
                      src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/672e6dbd369f99e0a1c71aeb_data.png"
                      alt="Data"
                      width={1066}
                      height={600}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent opacity-70"></div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[rgba(23,24,26,0.95)] to-[rgba(23,24,26,0.98)]">
                    <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">Data</div>
                    <div className="text-white/70 text-sm sm:text-base leading-relaxed">The foundation that powers everything. Centralized, real-time data that informs decisions and drives insights.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}