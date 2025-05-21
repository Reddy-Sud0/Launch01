import HeroSection from '@/components/sections/hero-section';
import VSL from '@/components/sections/VSL';
import OurSolution from '@/components/sections/Our-Solution';
import OurProcess from '@/components/sections/Our-Process';
import FAQSection from '@/components/sections/faq-section';
import ScalingProblems from '@/components/sections/ProblemSection';
import PricingSection from '@/components/sections/pricing-section';
import RelatableSection from '@/components/sections/relatable-section';
import ScalingWaySection from '@/components/sections/ScalingWaySection';
import VennDiagramSection from '@/components/sections/VennDiagramSection';
import WorldMapSection from '@/components/sections/world-map-section';
import UpskillSection from '@/components/sections/UpskillSection';

import OverlappingCardsSection from '@/components/sections/OverlappingCardsSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - First Impression */}
      <HeroSection />

      {/* VSL Section - Value Proposition */}
      {/* <VSL /> */}
      
      {/* Scaling Problems Section - Pain Points */}
      <ScalingProblems />

      {/* Relatable Section - Connection */}
      <RelatableSection />

      {/* There IS A WAY Section - Hope */}
      <ScalingWaySection />

      {/* Venn Diagram Section - Visualization */}
      <VennDiagramSection />

      {/* Overlapping Cards Section - Feature Highlights */}
      <OverlappingCardsSection />

      {/* Solution Section - What We Offer */}
      <OurSolution />

      {/* Design Section - How We Do It */}
      <OurProcess />

      {/* Upskill Section - Team Upskilling */}
      <UpskillSection />

      {/* World Map Section - Global Reach */}
      <WorldMapSection />

      {/* Pricing Section - Investment */}
      <PricingSection />

      {/* FAQ Section - Common Questions */}
      <FAQSection />
    </div>
  );
}