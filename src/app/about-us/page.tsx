import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Jacob Klug",
      position: "Co-Founder & CEO",
      image: "https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/63c698c75117ff719136d910_Team%20Shadow.png"
    },
    {
      name: "Damien Ghader",
      position: "Co-Founder & Creative Director",
      image: "https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/63c698c75117ff719136d910_Team%20Shadow.png"
    },
    {
      name: "Tom Jones",
      position: "VP of Sales",
      image: "https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/63c698c75117ff719136d910_Team%20Shadow.png"
    },
    {
      name: "Dominik Tyka",
      position: "Lead Designer",
      image: "https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/63c698c75117ff719136d910_Team%20Shadow.png"
    },
    {
      name: "Nolan Israel",
      position: "Lead Project Manager",
      image: "https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/63c698c75117ff719136d910_Team%20Shadow.png"
    }
  ];

  const values = [
    {
      title: "Move with speed",
      description: "As a no-code team, we understand we're selling speed and time. So we make it our priority to take steps internally and externally to push things the extra step faster."
    },
    {
      title: "User-experience focused",
      description: "We believe UI/UX is a make or break when it comes to products in this era. Building a product the users wants to come back to is more important than ever."
    },
    {
      title: "Collaboration always",
      description: "The best products are born out of many different perspectives. We know that as a team, we won't thrive without recognizing other people's strengths and opinions."
    },
    {
      title: "Process makes quality",
      description: "For us it's key to make sure every project, no matter the size - has the same quality as the last. We have crafted a solid design and development process to ensure that no stone is left unturned in our products."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col pt-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-gradient-radial from-creme-purple/20 via-creme-pink/10 to-transparent opacity-60"></div>
        <Image
          src="https://ext.same-assets.com/2675109532/1100100032.svg"
          alt="Background gradient"
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-white/50 uppercase text-sm tracking-wide">ABOUT US</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 max-w-3xl mx-auto">
              We work with companies to refine their operations by leveraging internal tools & AI.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="stats-card p-8">
              <h2 className="text-4xl font-bold mb-1">10X</h2>
              <p className="text-white/70 text-sm">Faster</p>
            </div>

            <div className="stats-card p-8">
              <h2 className="text-4xl font-bold mb-1">$500M</h2>
              <p className="text-white/70 text-sm">No-code investments in 2020</p>
            </div>

            <div className="stats-card p-8">
              <h2 className="text-4xl font-bold mb-1">5X</h2>
              <p className="text-white/70 text-sm">Cost savings</p>
            </div>

            <div className="stats-card p-8">
              <h2 className="text-4xl font-bold mb-1">67%</h2>
              <p className="text-white/70 text-sm">Share of software Gartner predicts to be no-code by 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-creme-dark/90 to-creme-dark">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our values</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm p-8"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2675109532/1276148605.svg"
                alt="World Map"
                fill
                className="object-contain"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-creme-pink animate-ping absolute"></div>
                  <div className="w-4 h-4 rounded-full bg-creme-pink relative z-10"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mt-2">
                  <p className="text-xs font-medium">Toronto</p>
                  <p className="text-xs text-white/60">Canada</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Proudly based in Toronto, Canada.
              </h2>
              <p className="text-xl font-medium text-white/80">
                Serving markets around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-creme-dark/90 to-creme-dark">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our leadership team</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-6 rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-white/60">{member.position}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">Would you like to join our team?</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-white/70">Check our</span>
              <Link href="#" className="creme-button-primary">
                Career page
              </Link>
              <span className="text-white/70">or</span>
              <Link href="/contact" className="creme-button-outline">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
