'use client'

import Milestones from './components/templates/Milestones'
import AboutImpactSection from './components/molecules/AboutImpactSection'
import DesignScaleSection from './components/molecules/DesignScaleSection'
import ServicesSection from './components/molecules/ServicesSection'
import SectionHeader from './components/molecules/SectionHeader'
import Button from './components/Atoms/Button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import FullScreenMenu from './components/FullScreenMenu'
import { useTheme } from './contexts/ThemeContext'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [marqueeWidth, setMarqueeWidth] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const measureRef = React.useRef<HTMLDivElement>(null)
  const { theme, toggleTheme } = useTheme()

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
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Full Screen Menu */}
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 md:px-24 py-6 flex justify-between items-center" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
          <Link href="/" className="text-lg font-medium tracking-wide hover:opacity-80 transition-opacity cursor-pointer" style={{ color: 'var(--color-text-primary)' }}>
            ARTEMIS DESIGN LABS
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-lg font-medium tracking-wide hover:opacity-80 transition-opacity cursor-pointer"
              style={{ color: 'var(--color-text-primary)' }}
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? 'LIGHT' : 'DARK'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-lg font-medium tracking-wide hover:opacity-80 transition-opacity cursor-pointer"
              style={{ color: 'var(--color-text-primary)' }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </nav>

        {/* Background grid pattern */}
        <div 
          className="absolute inset-0 bg-[size:64px_64px]"
          style={{
            backgroundImage: `linear-gradient(var(--grid-pattern-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-pattern-color) 1px, transparent 1px)`
          }}
        ></div>

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
              <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>SPEED</span>
              <span style={{ color: 'var(--color-gray-500)' }}>•</span>
              <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>SPECIALIZATION</span>
              <span style={{ color: 'var(--color-gray-500)' }}>•</span>
              <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>INTEGRATION</span>
              <span style={{ color: 'var(--color-gray-500)' }}>•</span>
              <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>QUALITY</span>
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
                  <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>SPEED</span>
                  <span style={{ color: 'var(--color-gray-500)' }}>•</span>
                  <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>SPECIALIZATION</span>
                  <span style={{ color: 'var(--color-gray-500)' }}>•</span>
                  <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>INTEGRATION</span>
                  <span style={{ color: 'var(--color-gray-500)' }}>•</span>
                  <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>QUALITY</span>
                  <span style={{ color: 'var(--color-gray-500)' }}>•</span>
                  <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>SPEED</span>
                  <span style={{ color: 'var(--color-gray-500)' }}>•</span>
                  <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>SPECIALIZATION</span>
                  <span style={{ color: 'var(--color-gray-500)' }}>•</span>
                  <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>INTEGRATION</span>
                  <span style={{ color: 'var(--color-gray-500)' }}>•</span>
                  <span className="font-medium tracking-wide" style={{ color: 'var(--color-accent-cyan)' }}>QUALITY</span>
                </div>
              </div>
            )}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
            <span className="block mb-2" style={{ color: 'var(--color-text-primary)' }}>
              Where Enterprise AI
            </span>
            <span className="block" style={{ color: 'var(--color-accent-cyan)' }}>
              Meets Exceptional Design
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
            We partner with AI-focused startups to transform complex workflows into intuitive
            user experiences that accelerate time-to-market and user adoption.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToAbout}
            size="md"
          >
            About us
          </Button>
        </div>
      </section>

      {/* About/Impact Section */}
      <AboutImpactSection />

      {/* Design Once. Scale Forever Section */}
      <DesignScaleSection />

      {/* Our Services Section */}
      <ServicesSection />

      {/* Client Logos */}
      <section className="overflow-hidden py-12" style={{ backgroundColor: 'var(--background)' }}>
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
      <section className="px-6 sm:px-12 md:px-24 py-12" style={{ backgroundColor: 'var(--background)' }}>
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
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{title}</h3>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <Milestones />

      {/* Final CTA */}
      <section className="px-6 sm:px-12 md:px-24 py-20 text-center" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6" style={{ color: 'var(--color-text-primary)' }}>Ready to Design What&rsquo;s Next in AI?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-text-primary)' }}>
          Book a call with our team and let&rsquo;s explore how we can bring your product vision to life—faster, simpler, and more strategically.
        </p>
        <Button size="md" style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)', borderColor: 'var(--color-text-primary)' }}>
          Book a Discovery Call
        </Button>
      </section>
    </div>
  )
}