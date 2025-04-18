'use client'

export default function HomePage() {
  const scrollToAbout = () => {
    const section = document.getElementById('about')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
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
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Working with AI <br /> Should be Seamless
            </h1>
            <p className="text-gray-800 text-sm md:text-base mb-6">
              We help early to mid-stage SaaS and B2B startups in the Enterprise AI space create scalable, beautiful user experiences — built to grow with your product and stand out in the market.
            </p>
            <p className="text-gray-800 text-sm md:text-base mb-6">
              With over 10+ years as Enterprise Designers, we understand that design is the foundation of every successful product.
            </p>
            <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Start Now
            </button>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who we are</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Nestled in the heart of New York City, we at Artemis Design Labs specialise in catapulting
            early and mid-stage startups into the forefront of the Enterprise, SaaS, and B2B sectors by
            collaborating with visionary founders to understand their unique challenges and aspirations.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-20 text-gray-900">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Designers with a Founder Mindset
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center">
            <img src="/images/early-stage-design.png" alt="Early Stage Design" className="mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Where Early-Stage meets Elite Design</h3>
            <p className="text-gray-700">
              We specialize in elevating early-stage products with enterprise-grade design. By focusing on impactful UI and scalable design systems, we craft products that don't just look good but set new standards in usability and growth potential for B2B and SaaS markets.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center">
            <img src="/images/foundation-market-leader.png" alt="Foundation to Market Leader" className="mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Set the Foundation, Lead the Market</h3>
            <p className="text-gray-700">
              We approach your startup as a future market leader from day one. By integrating strategic design thinking into the core of your product development process and goals, we help you navigate the complex landscape of user expectations and industry standards.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center">
            <img src="/images/scalable-beauty.png" alt="Scalable Design" className="mb-6 rounded-lg shadow-md w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Build Beautiful, Scale Seamlessly</h3>
            <p className="text-gray-700">
              Our design philosophy focuses on creating visually stunning products engineered to grow smoothly with your business. With meticulous attention to detail and a design architecture that supports expansion and adaptability, we ensure your product is captivating at launch and continues to enchant as it evolves.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
