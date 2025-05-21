import React from 'react';

const ScalingProblems = () => {
  const problems = [
    {
      title: 'Problem-Solution Fit',
      description: "Founders struggle with the question: are we solving a real, urgent problem or just building something cool?",
    },
    {
      title: ' Go-to-Market Strategy',
      description: "How do we actually get our first users? Who will buy and how to reach them? ",
    },
    {
      title: 'Resource Constraints',
      description: " Most early-stage teams are spread thin — no dedicated marketers, no zero-to-one experts, just a handful of people juggling everything from branding to customer acquisition on limited time and budget.",
    },
  ];

  return (
    <section className="py-20 bg-[radial-gradient(ellipse_at_bottom_center,#d0ed01ab_0%,#12120cde_45%)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#cce808]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d0ed01bf]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ffd900]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <div className="relative max-w-3xl mx-auto">
            <div className="mt-16">
              <h4 className="text-xl md:text-3xl font-bold text-white mb-4 transform hover:scale-105 transition-transform duration-300">
              You  <span className="text-[#cce808]">Create</span> It. We Help the World {' '}
                <span className="text-[#cce808]">Discover</span> it.
              </h4>
              <p className="text-base md:text-xl text-gray-300 mb-6">
                  Launch01 will help you with your Entire Go-to-Market Journey
              </p>
              <h1 className="text-2xl md:text-4xl font-semibold text-[#cce808] transform hover:scale-105 transition-transform duration-300">
                The three BIG zero &rarr; one problems:
              </h1>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8 shadow-2xl hover:shadow-[#cce808]/20 transition-all duration-300 transform hover:-translate-y-1 border border-[#cce808]/10 overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#cce808]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#cce808] transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#cce808]/10 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalingProblems; 