'use client'

import Image from 'next/image'

export default function DesignScaleSection() {
  const items = [
    {
      number: 1,
      title: 'Speed',
      description: 'Accelerate iterative AI product development cycles for quick validation from months to days by removing design bottlenecks',
    },
    {
      number: 2,
      title: 'Specialization',
      description: 'Deep enterprise AI design expertise allows us to design explainable, intuitive, and compliant AI experiences',
    },
    {
      number: 3,
      title: 'Integration',
      description: 'Eliminate friction between design and development by utilizing scalable design infrastructure and integrated design solutions',
    },
    {
      number: 4,
      title: 'Quality',
      description: 'Industry level enterprise-grade standards used by both fast growing startups and fortune 100 companies',
    },
  ]

  const logos = [
    '/images/AT&T-Logo.png',
    '/images/Verizon-logo.png',
    '/images/NBCU-logo.png',
    '/images/NYCPS-logo.png',
    '/images/NYCERS-logo.png',
    '/images/CMA-logo.png',
    '/images/Qualitrol-logo.png',
    '/images/Freshop-logo.png',
  ]

  return (
    <section id="design-scale" className="min-h-screen flex items-start justify-center px-6 sm:px-12 md:px-24 pt-20 md:pt-32" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-medium mb-8 md:mb-12">
              Design Once. Scale Forever.
            </h2>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {items.map((item) => (
                <div key={item.number} className="flex flex-col">
                  <div className="flex justify-start mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#feead8' }}>
                      <span className="text-lg md:text-xl font-bold" style={{ color: '#feead8' }}>{item.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-left" style={{ color: '#feead8' }}>
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-left" style={{ color: '#feead8' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Scrolling Logos */}
          <div className="relative overflow-hidden" style={{ height: 'calc(100vh - 10rem)' }}>
            <div className="flex flex-col items-center justify-start animate-scroll-up" style={{ height: '200%' }}>
              {logos.map((logo, index) => (
                <div key={`logo-${index}`} className="flex-shrink-0 logo-hover-container cursor-pointer mb-12">
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={360}
                    height={240}
                    className="h-48 md:h-64 w-auto object-contain grayscale logo-hover-grayscale"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`logo-duplicate-${index}`} className="flex-shrink-0 logo-hover-container cursor-pointer mb-12">
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={360}
                    height={240}
                    className="h-48 md:h-64 w-auto object-contain grayscale logo-hover-grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

