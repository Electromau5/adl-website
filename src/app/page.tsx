
'use client'

export default function HomePage() {
  const scrollToAbout = () => {
    const section = document.getElementById('about')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }



  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-col-reverse md:flex-row flex-grow">
          {/* Left: Hero Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 py-16 md:py-0 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Fast. Scale Beautifully.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-md">
              We help startups create scalable, user-first design systems with precision and speed.
            </p>
            <button
              onClick={scrollToAbout}
              className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
            >
              Learn About Us
            </button>
          </div>

          {/* Right: Hero Video */}
          <div className="w-full md:w-1/2 h-72 md:h-auto relative overflow-hidden">
            <video
              src="/test-hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
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
  <div className="w-full max-w-md bg-white/40 bg-white/40 max-w-2xl mx-auto bg-white/40 backdrop-blur-sm rounded-2xl shadow-md p-10 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Who we are</h2>
    <p className="text-gray-800 text-lg leading-relaxed">
      Nestled in the heart of New York City, we at Artemis Design Labs specialise in catapulting
      early and mid-stage startups into the forefront of the Enterprise, SaaS, and B2B sectors by
      collaborating with visionary founders to understand their unique challenges and aspirations.
    </p>
  </div>
</section>


    </>
  )
}
