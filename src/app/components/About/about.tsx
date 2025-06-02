// components/AboutUsSection.tsx
export default function AboutUsSection() {
    return (
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg mb-4">
              Artemis Design Labs is a UX design agency specializing in AI-powered enterprise software for early to mid-stage startups. We embed with your team to craft simple, scalable, and strategic user experiences—whether you're launching an MVP or growing a mature platform. With experience across telecom, government, finance, and education, we've designed systems used by 100,000+ users, always prioritizing usability, accessibility, and performance.
            </p>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full mb-16 hover:bg-gray-800 transition">
            Learn more
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="md:-mt-16">
              <img src="/images/tests/test-image.png" alt="About visual 1" className="w-full h-[400px] object-cover" />
            </div>
            <div>
              <img src="/images/tests/test-image.png" alt="About visual 2" className="w-full h-[400px] object-cover" />
            </div>
            <div className="md:-mt-16">
              <img src="/images/tests/test-image.png" alt="About visual 3" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  