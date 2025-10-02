import Image from 'next/image';
import PrimaryHeader from '../../molecules/PrimaryHeader';
import Paragraph from '../../molecules/Paragraph';

export default function AboutUsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Header */}
        <PrimaryHeader text="About Us" />

        {/* Paragraph */}
        <Paragraph
          text="Artemis Design Labs is a UX design agency specializing in AI-powered enterprise software for early to mid-stage startups. We embed with your team to craft simple, scalable, and strategic user experiences—whether you’re launching an MVP or growing a mature platform. With experience across telecom, government, finance, and education, we’ve designed systems used by 100,000+ users, always prioritizing usability, accessibility, and performance."
          className="mb-8 max-w-3xl mx-auto"
        />

        {/* Button */}
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition mb-12">
          Learn more
        </button>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex justify-center md:-mt-8">
            <Image
              src="/images/tests/test-image.png"
              alt="About visual 1"
              width={384}
              height={400}
              className="w-full max-w-sm h-[400px] object-cover"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/tests/test-image.png"
              alt="About visual 2"
              width={384}
              height={400}
              className="w-full max-w-sm h-[400px] object-cover"
            />
          </div>
          <div className="flex justify-center md:-mt-8">
            <Image
              src="/images/tests/test-image.png"
              alt="About visual 3"
              width={384}
              height={400}
              className="w-full max-w-sm h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
