'use client'

import Milestones from './components/templates/Milestones'
import SectionHeader from './components/molecules/SectionHeader'
import AboutUsSection from './components/templates/About/about'
import BannerHeader from './components/molecules/BannerHeader';

export default function HomePage() {
  const scrollToAbout = () => {
    const section = document.getElementById('about')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-24 pt-12 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{ filter: 'brightness(0.7)' }}
          >
            <source src="/videos/banner-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
        <main className="py-24">
  <div className="max-w-15xl mx-auto px-4 text-center">
    <BannerHeader text="We make Enterprise AI more Human-Centered" />
  </div>
</main>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 text-white font-jakarta">
            Artemis Design Labs partners with AI-focused SaaS startups to build product-ready user experiences that scale with your business and differentiate you in a competitive landscape.
          </p>
          <button
            onClick={scrollToAbout}
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition font-inter font-medium"
          >
            Let's Work Together
          </button>
        </div>
      </section>

      <AboutUsSection />

      {/* Client Logos */}
      <section className="overflow-hidden bg-white py-12">
        <div className="flex animate-scroll space-x-16">
          {/* First set of logos */}
          {[
            '/images/AT&T-Logo.png',
            '/images/Verizon-logo.png',
            '/images/NBCU-logo.png',
            '/images/NYCPS-logo.png',
            '/images/NYCERS-logo.png',
            '/images/CMA-logo.png',
            '/images/Qualitrol-logo.png',
            '/images/Freshop-logo.png',
          ].map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              <img
                src={logo}
                alt="Client Logo"
                className="h-40 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {[
            '/images/AT&T-Logo.png',
            '/images/Verizon-logo.png',
            '/images/NBCU-logo.png',
            '/images/NYCPS-logo.png',
            '/images/NYCERS-logo.png',
            '/images/CMA-logo.png',
            '/images/Qualitrol-logo.png',
            '/images/Freshop-logo.png',
          ].map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              <img
                src={logo}
                alt="Client Logo"
                className="h-40 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="px-6 sm:px-12 md:px-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
             {/* Component - Section Header */}
                
                  <SectionHeader title="WHAT SETS US APART" />
          
                {/* Component - Section Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              ['Rapid MVP Design', 'Ship lean, scalable MVPs in 8–12 sprint cycles to validate fast.'],
              ['Outcome-Focused UX', 'Align design with conversion, adoption, and retention KPIs.'],
              ['Unified Brand + Product', 'Deliver consistency across touchpoints for instant trust.'],
              ['Embedded UX Teams', 'Plug directly into your workflow as your product evolves.'],
              ['AI-Specific Expertise', 'Design explainable, intuitive, and compliant AI experiences.'],
              ['Human-Machine Interaction', 'Bridge complexity with simplicity through cognitive design.'],
            ].map(([title, desc]) => (
              <div key={title}>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <Milestones />

      {/* Final CTA */}
      <section className="px-6 sm:px-12 md:px-24 py-20 text-center bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to Design What's Next in AI?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Book a call with our team and let's explore how we can bring your product vision to life—faster, simpler, and more strategically.
        </p>
        <button className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Book a Discovery Call
        </button>
      </section>
    </div>
  )
}