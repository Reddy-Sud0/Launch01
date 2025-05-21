"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What distinguishes this Generative AI course from others, like those focused on ChatGPT?",
    answer: "Symbiotes stands out for its personalized mentorship and real-world learning. We offer tailored resources and networks designed for your specific needs, with a focus on collaboration rather than just instruction."
  },
  {
    question: "What will I learn in the 24-week Generative AI course?",
    answer: "From mastering business basics to learning advanced marketing strategies and working with real clients, our program provides a comprehensive understanding of what it takes to build and scale a startup."
  },
  {
    question: "Who is the ideal candidate for this course?",
    answer: "Symbiotes is perfect for founders or aspiring entrepreneurs ready to launch or scale their startup. Whether you're in tech, marketing, or any other field, our program is designed to support your success."
  },
  {
    question: "What type of projects will I work on during the course?",
    answer: "You'll work on real client projects that allow you to build a portfolio and gain hands-on experience. Projects span branding, marketing, sales, and business development."
  },
  {
    question: "Will I receive a certification upon completing the course?",
    answer: "Yes, upon completion of the program, you'll receive a certification that highlights your skills and readiness to scale your startup."
  },
  {
    question: "How does this program prepare me for the job market or building my own business?",
    answer: "With hands-on projects, expert mentorship, and access to a wide network, Symbiotes equips you for the startup ecosystem—whether you're raising funds, hiring talent, or scaling your business."
  }
];

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#000]/50">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-visible">
        <div className="absolute left-[15%] top-[40%] w-[300px] h-[300px] rounded-full bg-[#cce808] blur-[100px] opacity-70"></div>
        <div className="absolute left-[65%] top-[40%] w-[300px] h-[300px] rounded-full bg-[#cce806] blur-[100px] opacity-40"></div>
      </div>

      <div className="container relative px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#cce808] via-[#d0ed01bf] to-[#cce808] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your questions, answered. Can't find what you're looking for? Feel free to reach out to our team.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-[800px] mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-[#cce808]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,232,8,0.3)]"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="text-left hover:no-underline group-hover:text-[#cce808] transition-colors">
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 