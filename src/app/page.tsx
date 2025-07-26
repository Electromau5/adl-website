'use client'

import Milestones from './components/Milestones'
import AboutUsSection from './components/About/about'

export default function HomePage() {
  const scrollToAbout = () => {
    const section = document.getElementById('about')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-start text-left px-6 sm:px-12 md:px-24 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 font-space-grotesk">
            <span className="text-white">Accelerate AI product development from concept to production</span>
            <br />
            <span className="text-green-500">by removing design bottlenecks</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mb-12 text-gray-300 font-jakarta leading-relaxed">
            We partner with AI-focused teams to transform complex workflows into
            intuitive experiences that accelerate time-to-market and user adoption.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <button
              onClick={scrollToAbout}
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-inter font-medium text-lg"
            >
              Start Your Project
            </button>
            <button
              onClick={scrollToAbout}
              className="border-2 border-gray-400 text-white px-8 py-4 rounded-lg hover:border-gray-300 hover:bg-gray-800 transition-all duration-300 font-inter font-medium text-lg"
            >
              View Our Work
            </button>
          </div>
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">What Sets Us Apart</h2>
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
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to Design What&rsquo;s Next in AI?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Book a call with our team and let&rsquo;s explore how we can bring your product vision to life—faster, simpler, and more strategically.
        </p>
        <button className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Book a Discovery Call
        </button>
      </section>
    </div>
  )
}