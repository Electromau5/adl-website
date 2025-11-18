'use client'

import { useState } from 'react'
import Divider from '../Atoms/Divider'

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const services = [
    {
      category: 'Sprint-Based MVP Design',
      cards: [
        {
          name: '8-12 Week Production Launch',
          description:
            'Transform your concept into a production-ready AI product through weekly sprint cycles. Focused on high-fidelity UI design, interactive prototypes, and core features that win enterprise deals fast.',
        },
        {
          name: 'Design-to-Production Package',
          description:
            'Full UI execution from wireframes to pixel-perfect screens with built-in design QA. Includes interactive prototypes, asset handoff, and specifications developers actually use.',
        },
      ],
    },
    {
      category: 'Enterprise Design Systems',
      cards: [
        {
          name: 'Custom Design System Build',
          description:
            'Scalable, enterprise-grade design systems built from the ground up for your product. Includes complete UI kit, component library, style guides, documentation, and brand-specific patterns that scale from MVP to Series C.',
        },
        {
          name: 'Design System Extension & Evolution',
          description:
            'Expand existing design systems with new components, patterns, and modules as your product grows. Maintain consistency while adding features, verticals, or platform variations (web, mobile, desktop).',
        },
      ],
    },
    {
      category: 'UI Development & Frontend',
      cards: [
        {
          name: 'Coded Component Library',
          description:
            'Convert designs into production-ready frontend code (React, Vue, Angular). Fully documented, accessible components that eliminate design-dev handoff friction and reduce sprint rework by 35%.',
        },
        {
          name: 'Design-to-Code Pipeline Setup',
          description:
            'Implement Figma-to-code workflows with your dev team. Includes component tokenization, design system integration, and developer training for seamless collaboration.',
        },
      ],
    },
    {
      category: 'AI-Specific Interface Design',
      cards: [
        {
          name: 'Explainable AI & Dashboard UI',
          description:
            'Specialized UI patterns for model transparency, data visualization, and real-time AI outputs. Focused on trust-building interfaces that help non-technical users understand complex AI functionality.',
        },
        {
          name: 'Enterprise AI Onboarding Flows',
          description:
            'Design intuitive first-time experiences that reduce onboarding friction from hours to minutes. Includes progressive disclosure patterns, contextual guidance, and feature adoption UI strategies.',
        },
      ],
    },
    {
      category: 'Embedded Design Capacity',
      cards: [
        {
          name: 'Ongoing UI Sprint Support',
          description:
            'Dedicated design resources integrated into your product team\'s workflow. Weekly deliverables including new screens, component extensions, and design system maintenance as you scale.',
        },
        {
          name: 'Design Operations & Workflow Setup',
          description:
            'Establish internal design processes, Figma workspace organization, and handoff protocols. Includes team training on design system usage and quality standards for long-term consistency.',
        },
      ],
    },
  ]

  const activeService = services[activeCategory]

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8" style={{ fontFamily: 'var(--font-sarala)', color: 'var(--color-accent-cyan)' }}>
            Our Services
          </h2>
          <Divider className="mb-16" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-3">
            <nav className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className="block w-full text-left text-xl font-medium transition-colors duration-300"
                  style={activeCategory === index 
                    ? { color: 'var(--color-text-primary)' } 
                    : { color: 'var(--color-gray-500)' }
                  }
                >
                  {service.category}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-9">
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeService.cards.map((card, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--color-card-bg)', 
                    borderColor: 'var(--color-card-border)',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-cyan)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-card-border)'
                  }}
                >
                  <h4 className="text-2xl font-bold text-white mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    {card.name}
                  </h4>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-primary)', opacity: 0.7 }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

