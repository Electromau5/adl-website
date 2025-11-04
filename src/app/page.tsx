'use client'

import Milestones from './components/templates/Milestones'
import AboutUsSection from './components/About/about'
import SectionHeader from './components/molecules/SectionHeader'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import FullScreenMenu from './components/FullScreenMenu'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [marqueeWidth, setMarqueeWidth] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const measureRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Measure the width of the first set of keywords (hidden element)
    const measureWidth = () => {
      if (measureRef.current) {
        setMarqueeWidth(measureRef.current.offsetWidth)
      }
    }

    measureWidth()
    
    // Re-measure on window resize
    window.addEventListener('resize', measureWidth)
    return () => window.removeEventListener('resize', measureWidth)
  }, [])

  const scrollToAbout = () => {
    const section = document.getElementById('about')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white text-black">
      {/* Full Screen Menu */}
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 bg-black z-50 px-6 sm:px-12 md:px-24 py-6 flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-medium tracking-wide hover:opacity-80 transition-opacity cursor-pointer">
            ARTEMIS DESIGN LABS
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-lg font-medium tracking-wide hover:opacity-80 transition-opacity cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </nav>

        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Content Container */}
        <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          
          {/* Keyword Tags - Infinite Carousel */}
          <div className="mb-8 text-sm md:text-base">
            {/* Hidden element to measure width */}
            <div 
              ref={measureRef}
              className="absolute opacity-0 pointer-events-none flex items-center gap-3"
              style={{ visibility: 'hidden', whiteSpace: 'nowrap' }}
            >
              <span className="text-cyan-400 font-medium tracking-wide">SPEED</span>
              <span className="text-gray-500">•</span>
              <span className="text-cyan-400 font-medium tracking-wide">SPECIALIZATION</span>
              <span className="text-gray-500">•</span>
              <span className="text-cyan-400 font-medium tracking-wide">INTEGRATION</span>
              <span className="text-gray-500">•</span>
              <span className="text-cyan-400 font-medium tracking-wide">QUALITY</span>
            </div>
            
            {/* Visible carousel - only render when width is measured */}
            {marqueeWidth && (
              <div 
                className="overflow-hidden mx-auto" 
                style={{ 
                  width: `${marqueeWidth}px`,
                  display: 'inline-block'
                }}
              >
                <div 
                  className="flex items-center gap-3 whitespace-nowrap"
                  style={{
                    '--marquee-width': `${-marqueeWidth}px`,
                    animation: `marquee ${marqueeWidth * 0.05}s linear infinite`
                  } as React.CSSProperties}
                >
                  <span className="text-cyan-400 font-medium tracking-wide">SPEED</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400 font-medium tracking-wide">SPECIALIZATION</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400 font-medium tracking-wide">INTEGRATION</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400 font-medium tracking-wide">QUALITY</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400 font-medium tracking-wide">SPEED</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400 font-medium tracking-wide">SPECIALIZATION</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400 font-medium tracking-wide">INTEGRATION</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400 font-medium tracking-wide">QUALITY</span>
                </div>
              </div>
            )}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
            <span className="block text-white mb-2">
              Where Enterprise AI
            </span>
            <span className="block text-cyan-400">
              Meets Exceptional Design
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
            We partner with AI-focused teams to transform complex workflows into intuitive
            user experiences that accelerate time-to-market and user adoption.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-300 transition-all duration-300 hover:scale-105"
          >
            About us
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
              <Image
                src={logo}
                alt="Client Logo"
                width={200}
                height={160}
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
              <Image
                src={logo}
                alt="Client Logo"
                width={200}
                height={160}
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