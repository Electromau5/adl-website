'use client'

import Milestones from './components/Milestones'

/* eslint-disable react/no-unescaped-entities */

// Import Google Fonts in your global CSS or HTML head
// Example: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

export default function HomePage() {
  /*
  const scrollToAbout = () => {
    const section = document.getElementById('about')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }
  */
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center order-2 md:order-1">
          <img
            src="/images/Banner-image-3.png"
            alt="Iridescent Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Container */}
        <div className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-xs p-6 sm:p-8 md:p-12 lg:p-16 order-1 md:order-2">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6 md:mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Working with AI <br /> Should be Seamless
            </h1>
            <p className="text-black text-sm sm:text-base mb-4 md:mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We help early to mid-stage SaaS and B2B startups in the Enterprise AI space create scalable, beautiful user experiences — built to grow with your product and stand out in the market.
            </p>
            <p className="text-black text-sm sm:text-base mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              With over 10+ years as Enterprise Designers, we understand that design is the foundation of every successful product.
            </p>
            <button className="bg-black text-white font-semibold px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Let&apos;s Go
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="overflow-hidden bg-white py-4">
        <div className="flex animate-scroll" style={{ width: '350%', overflowX: 'hidden' }}>
          <div className="flex">
            <img src="/images/Verizon-logo.png" alt="Image 1" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/NBCU-logo.png" alt="Image 2" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/NYCPS-logo.png" alt="Image 3" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/Freshop-logo.png" alt="Image 4" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/AT&T-Logo.png" alt="Image 5" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/Qualitrol-logo.png" alt="Image 6" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/CMA-logo.png" alt="Image 7" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/NYCERS-logo.png" alt="Image 8" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
          </div>
          {/* Duplicate images to create a seamless loop */}
          <div className="flex">
            <img src="/images/Verizon-logo.png" alt="Image 1" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/NBCU-logo.png" alt="Image 2" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/NYCPS-logo.png" alt="Image 3" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/Freshop-logo.png" alt="Image 4" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/AT&T-Logo.png" alt="Image 5" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/Qualitrol-logo.png" alt="Image 6" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/CMA-logo.png" alt="Image 7" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
            <img src="/images/NYCERS-logo.png" alt="Image 8" className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 mx-2 sm:mx-4 object-contain" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16 xl:space-x-20">
          {/* Image */}
          <div className="flex-1 w-full md:w-auto">
            <img src="/images/who-we-are.png" alt="Who we are" className="rounded-lg shadow-md w-full h-auto" />
          </div>
          {/* Text */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Who we are</h2>
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our Agency is built specifically for founders and product leaders building AI-powered enterprise software.
              <br /><br />
              We understand the unique pressures of creating usable AI interfaces, aligning with business goals, and launching under aggressive timelines.
              <br /><br />
              Whether you're building from scratch, seeking a design system for scale, or overhauling a clunky UX, ADL acts as an embedded partner—translating ideas into scalable, enterprise-ready digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 text-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
          Designers with a Founder Mindset
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col items-start text-left">
            <img src="/images/test-image.png" alt="Early Stage Design" className="mb-4 sm:mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>Where Scalability Meets Elegance</h3>
            <p className="text-gray-900 text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              We help Enterprise AI startups build pixel-perfect, scalable design systems that rival the polish and usability of world-class enterprise platforms.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <img src="/images/test-image.png" alt="Foundation to Market Leader" className="mb-4 sm:mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>Set the Foundation, Lead the Market</h3>
            <p className="text-gray-900 text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              We treat your product like a future market leader—establishing a strategic design foundation that evolves with your team, tech, and users.
            </p>
          </div>
          <div className="flex flex-col items-start text-left">
            <img src="/images/test-image.png" alt="Scalable Design" className="mb-4 sm:mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>Build Beautiful, Scale Seamlessly</h3>
            <p className="text-gray-900 text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              We design enterprise software that&rsquo;s as intuitive and elegant as consumer apps—built to grow with your product and captivate your users from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <Milestones />
    </div>
  )
}
