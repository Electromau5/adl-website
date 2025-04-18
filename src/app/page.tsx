'use client'

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
      <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/Banner-image-3.png"
            alt="Iridescent Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Container */}
        <div className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-xs p-12 md:p-16">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Working with AI <br /> Should be Seamless
            </h1>
            <p className="text-black text-sm md:text-base mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We help early to mid-stage SaaS and B2B startups in the Enterprise AI space create scalable, beautiful user experiences — built to grow with your product and stand out in the market.
            </p>
            <p className="text-black text-sm md:text-base mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              With over 10+ years as Enterprise Designers, we understand that design is the foundation of every successful product.
            </p>
            <button className="bg-black text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Let&apos;s Go
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="overflow-hidden bg-white py-10">
        <div className="flex animate-scroll">
          <div className="flex">
            <img src="/images/Verizon-logo.png" alt="Image 1" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/NBCU-logo.png" alt="Image 2" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/NYCPS-logo.png" alt="Image 3" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/Freshop-logo.png" alt="Image 4" className="w-60 h-60 mx-4 object-contain" />

            <img src="/images/AT&T-Logo.png" alt="Image 1" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/Qualitrol-logo.png" alt="Image 2" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/CMA-logo.png" alt="Image 3" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/NYCERS-logo.png" alt="Image 4" className="w-60 h-60 mx-4 object-contain" />
          </div>
          {/* Duplicate images to create a seamless loop */}
          <div className="flex">
            <img src="/images/Verizon-logo.png" alt="Image 1" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/NBCU-logo.png" alt="Image 2" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/NYCPS-logo.png" alt="Image 3" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/Freshop-logo.png" alt="Image 4" className="w-60 h-60 mx-4 object-contain" />

            <img src="/images/AT&T-Logo.png" alt="Image 1" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/Qualitrol-logo.png" alt="Image 2" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/CMA-logo.png" alt="Image 3" className="w-60 h-60 mx-4 object-contain" />
            <img src="/images/NYCERS-logo.png" alt="Image 4" className="w-60 h-60 mx-4 object-contain" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="relative py-20 px-6 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-us.jpg')" }}
      >
        {/* Frosted white text box */}
        <div className="w-full max-w-md bg-white/40 max-w-2xl mx-auto backdrop-blur-sm rounded-2xl shadow-md p-10 text-center">
          <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Who we are</h2>
          <p className="text-gray-900 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nestled in the heart of New York City, we at Artemis Design Labs specialise in catapulting
            early and mid-stage startups into the forefront of the Enterprise, SaaS, and B2B sectors by
            collaborating with visionary founders to understand their unique challenges and aspirations.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-20 text-black">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
          Designers with a Founder Mindset
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col items-start text-left">
            <img src="/images/test-image.png" alt="Early Stage Design" className="mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>Where Scalability Meets Elegance</h3>
            <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
              We help Enterprise AI startups build pixel-perfect, scalable design systems that rival the polish and usability of world-class enterprise platforms.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start text-left">
            <img src="/images/test-image.png" alt="Foundation to Market Leader" className="mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>Set the Foundation, Lead the Market</h3>
            <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
              We treat your product like a future market leader—establishing a strategic design foundation that evolves with your team, tech, and users.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start text-left">
            <img src="/images/test-image.png" alt="Scalable Design" className="mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>Build Beautiful, Scale Seamlessly</h3>
            <p className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
              We design enterprise software that's as intuitive and elegant as consumer apps—built to grow with your product and captivate your users from day one.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
