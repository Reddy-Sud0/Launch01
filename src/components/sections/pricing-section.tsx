'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '₹50,000',
      description: 'Perfect for small businesses looking to automate their first launch',
      features: [
        'Initial process automation',
        'Basic AI integration',
        'Up to 5 team members',
        'Email support',
        '1 month of maintenance'
      ],
      cta: 'Get Started',
      ctaLink: 'https://launch.symbiotes.ai/signup'
    },
    {
      name: 'Growth',
      price: '₹150,000',
      description: 'Ideal for growing businesses needing multiple automated launches',
      features: [
        'Multiple process automation',
        'Advanced AI integration',
        'Up to 20 team members',
        'Priority support',
        '3 months of maintenance',
        'Custom reporting'
      ],
      cta: 'Get Started',
      ctaLink: 'https://launch.symbiotes.ai/signup',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations requiring comprehensive automation solutions',
      features: [
        'Full process automation',
        'Enterprise AI integration',
        'Unlimited team members',
        '24/7 dedicated support',
        '6 months of maintenance',
        'Custom reporting & analytics',
        'SLA guarantees'
      ],
      cta: 'Contact Us',
      ctaLink: 'https://launch.symbiotes.ai/signup'
    }
  ];

  return (
    <section id="pricing" className="section-dark py-20 bg-[#000]/50">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-300/80 uppercase text-sm tracking-wide font-medium">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-white">
            Choose the plan that fits your needs
          </h2>
          <p className="text-white/80 md:text-lg mt-4 max-w-2xl mx-auto">
            We offer flexible pricing plans to help businesses of all sizes scale efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden border ${
                plan.popular
                  ? 'border-yellow-300 bg-black/50'
                  : 'border-white/20 bg-black/30'
              } backdrop-blur-sm p-8 hover:border-yellow-300/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-300 text-black text-xs font-medium px-4 py-1.5 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4 text-yellow-300">{plan.price}</div>
                <p className="text-white/80">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-white/80">
                    <svg
                      className="w-4 h-4 text-yellow-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={`block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-yellow-300 text-black hover:bg-yellow-400'
                    : 'bg-black/50 text-white border border-white/20 hover:bg-black/70'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 