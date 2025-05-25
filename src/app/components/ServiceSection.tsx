"use client"
import { useState } from "react"

const servicesData = [
  {
    category: "User Research",
    title: "Craft tangible strategies backed by user research",
    subtitle:
      "Whether you’re defining a strategy for market entry, guiding the product development process, or prioritizing improvements for service design, back your most important decisions with evidence and activate your team with a compelling vision.",
    cards: [
      {
        title: "Persona Development",
        description:
          "Use insights to define user archetypes and tailor experiences effectively.",
        imageUrl: "/images/tests/test-image.png",
      },
      {
        title: "Journey Mapping",
        description:
          "Visualize user journeys to identify opportunities and pain points.",
        imageUrl: "/images/tests/test-image.png",
      },
    ],
  },
  {
    category: "Strategy",
    title: "Turn business objectives into design strategies",
    subtitle:
      "Bridge the gap between business needs and user needs with design-led planning that aligns teams and defines priorities for impactful delivery.",
    cards: [
      {
        title: "Market Positioning",
        description:
          "Clarify your unique value proposition and competitive advantage.",
        imageUrl: "/images/tests/test-image.png",
      },
      {
        title: "Design Audits",
        description:
          "Uncover UX gaps and opportunities in your product to inform design updates.",
        imageUrl: "/images/tests/test-image.png",
      },
    ],
  },
  {
    category: "Prototyping",
    title: "Rapid prototyping for faster decision-making",
    subtitle:
      "Quickly bring ideas to life, test assumptions early, and gather feedback before heavy investment.",
    cards: [
      {
        title: "Interactive Prototypes",
        description:
          "Simulate real user flows and gather feedback at early stages.",
        imageUrl: "/images/tests/test-image.png",
      },
      {
        title: "Concept Testing",
        description:
          "Evaluate product ideas through short-form UX experiments.",
        imageUrl: "/images/tests/test-image.png",
      },
    ],
  },
  {
    category: "Design Systems",
    title: "Build scalable, consistent interfaces with design systems",
    subtitle:
      "Unify design and development teams under a shared set of reusable components, guidelines, and tools.",
    cards: [
      {
        title: "Component Libraries",
        description: "Figma and code-based libraries for speed and consistency.",
        imageUrl: "/images/tests/test-image.png",
      },
      {
        title: "Token Integration",
        description:
          "Use design tokens to align themes, spacing, and branding across platforms.",
        imageUrl: "/images/tests/test-image.png",
      },
    ],
  },
]

export default function ServicesTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = servicesData[activeIndex]

  return (
    <section className="px-6 py-16 bg-[#f8fcfd] font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold tracking-wide mb-2 uppercase">
          Our Services
        </h2>
        <hr className="mb-10 border-t border-gray-300" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="w-full lg:w-1/4 space-y-4">
            {servicesData.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`block text-left text-lg font-medium ${
                  activeIndex === idx
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {service.category}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-3/4">
            <h3 className="text-xl font-semibold mb-1">
              {active.category}
            </h3>
            <h2 className="text-2xl font-bold mb-2">{active.title}</h2>
            <p className="text-sm text-gray-600 mb-8">{active.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {active.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden shadow"
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-gray-800 text-white p-4 h-full">
                    <h4 className="text-lg font-semibold mb-1">
                      {card.title}
                    </h4>
                    <p className="text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
