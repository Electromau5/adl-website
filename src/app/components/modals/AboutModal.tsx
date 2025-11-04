'use client'

import { useEffect } from 'react'

interface AboutModalProps {
  onClose: () => void
}

export default function AboutModal({ onClose }: AboutModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Hero Message - Centered and Powerful */}
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-light text-gray-900 mb-12 leading-tight tracking-tight">
              We believe technology should
              <span className="block font-medium">feel human</span>
            </h3>

            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
              So we design AI experiences that people actually want to use.
            </p>
          </div>

          {/* Simple Visual Separator */}
          <div className="flex justify-center mb-16">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Philosophy Statement */}
          <div className="text-center mb-16">
            <h4 className="text-2xl md:text-3xl font-light text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Every interaction should feel effortless.
              <span className="block text-gray-900 font-medium mt-4">
                That's not just our goal—it's our obsession.
              </span>
            </h4>
          </div>

          {/* Mission Statement */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              We partner with AI-focused teams to transform complex workflows into
              intuitive experiences that accelerate time-to-market and user adoption.
              Our approach combines rapid MVP design, outcome-focused UX, and
              AI-specific expertise to deliver solutions that bridge complexity with simplicity.
            </p>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h5 className="text-xl font-semibold mb-3 text-blue-900">Rapid MVP Design</h5>
              <p className="text-gray-700">Ship lean, scalable MVPs in 8–12 sprint cycles to validate fast.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h5 className="text-xl font-semibold mb-3 text-green-900">AI-Specific Expertise</h5>
              <p className="text-gray-700">Design explainable, intuitive, and compliant AI experiences.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h5 className="text-xl font-semibold mb-3 text-purple-900">Human-Machine Interaction</h5>
              <p className="text-gray-700">Bridge complexity with simplicity through cognitive design.</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <h5 className="text-xl font-semibold mb-3 text-orange-900">Embedded UX Teams</h5>
              <p className="text-gray-700">Plug directly into your workflow as your product evolves.</p>
            </div>
          </div>

          {/* Elegant CTA */}
          <div className="text-center">
            <button className="group bg-gray-900 text-white px-12 py-5 rounded-full hover:bg-gray-800 transition-all duration-500 font-medium text-lg tracking-wide">
              Let's create something beautiful
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>

            <p className="text-gray-400 mt-6 text-sm font-light">
              Usually ready in 8-12 weeks
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 