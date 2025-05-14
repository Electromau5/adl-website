'use client'

import Milestones from './components/Milestones'

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white whitespace-nowrap sm:whitespace-normal w-full text-center font-space-grotesk">
            Working with AI Should be Seamless.
          </h1>
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

      {/* Client Logos */}
      <section className="overflow-hidden bg-white py-6">
        {/* Keep existing carousel */}
        <div className="flex animate-scroll" style={{ width: '400%' }}>
          {/* [existing client logo divs here — unchanged] */}
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 sm:px-12 md:px-24 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Design Built for Scale, Speed & Strategy</h2>
        <p className="text-lg max-w-3xl mx-auto">
          From MVPs to full-scale systems, ADL embeds into your team to ship enterprise-grade UX at startup speed—designed to drive adoption, trust, and business outcomes in AI.
        </p>
      </section>

      {/* Differentiators Grid */}
      <section className="px-6 sm:px-12 md:px-24 py-12 bg-gray-50">
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
      </section>

      {/* About Us */}
      <section id="about" className="px-6 sm:px-12 md:px-24 py-20 bg-white text-left">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/who-we-are.png" alt="Who we are" className="rounded-xl shadow-md w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4">
              Artemis Design Labs was built specifically for founders and product teams building AI-powered enterprise software.
            </p>
            <p className="mb-4">
              We've worked with Fortune 500s and public institutions alike—designing enterprise platforms used by 100,000+ users. Our strength lies in balancing scale, speed, and human-centered design in high-stakes environments.
            </p>
            <p>
              Whether launching something new or cleaning up legacy UX, we become part of your team—fast, flexible, and focused on outcomes.
            </p>
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
