// components/AboutUsSection.tsx
import Button from '../Atoms/Button'

export default function AboutUsSection() {
  return (
    <section id="about" className="bg-white py-40">
      <div className="max-w-5xl mx-auto px-6">

        {/* Hero Message - Centered and Powerful */}
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-12 leading-tight tracking-tight">
            We believe technology should
            <span className="block font-medium">feel human</span>
          </h2>

          <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            So we design AI experiences that people actually want to use.
          </p>
        </div>

        {/* Simple Visual Separator */}
        <div className="flex justify-center mb-32">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Philosophy Statement */}
        <div className="text-center mb-32">
          <h3 className="text-3xl md:text-4xl font-light text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Every interaction should feel effortless.
            <span className="block text-gray-900 font-medium mt-4">
              That&apos;s not just our goal—it&apos;s our obsession.
            </span>
          </h3>
        </div>

        {/* Elegant CTA */}
        <div className="text-center">
          <Button size="lg" className="group">
            Let&apos;s create something beautiful
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Button>

          <p className="text-gray-400 mt-6 text-sm font-light">
            Usually ready in 8-12 weeks
          </p>
        </div>

      </div>
    </section>
  );
}