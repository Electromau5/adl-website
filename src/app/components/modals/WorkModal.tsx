'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface WorkModalProps {
  onClose: () => void
}

export default function WorkModal({ onClose }: WorkModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const projects = [
    {
      id: 'hands-ai',
      title: 'HANDS AI',
      description: 'AI-powered healthcare appointment scheduling system',
      image: '/images/project-hands-cover.png',
      year: '2024',
      category: 'Healthcare AI',
      link: '/hands-ai'
    },
    {
      id: 'insight-ai',
      title: 'Insight AI',
      description: 'Intelligent data visualization and analytics platform',
      image: '/images/project-insight-cover.png',
      year: '2024',
      category: 'Data Analytics',
      link: '/insight'
    },
    {
      id: 'my-project-inbox',
      title: 'My Project Inbox',
      description: 'Project management and collaboration tool',
      image: '/images/project-mpi-cover.png',
      year: '2023',
      category: 'Productivity',
      link: '/my-project-inbox'
    }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Our Work</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of AI-focused projects that demonstrate our expertise in 
              creating intuitive, human-centered experiences for complex technologies.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={project.id} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg transform -translate-x-2"></div>
                  
                  {/* Project Content */}
                  <div className="ml-16 flex-1">
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                              {project.year}
                            </span>
                            <span className="text-sm text-gray-500">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Project Image */}
                        <div className="ml-6 flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-24 h-24 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-4">
                        <Link
                          href={project.link}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                        >
                          View Project
                        </Link>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                          Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Impact by the Numbers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">8-12</div>
                <div className="text-gray-600">Weeks Average Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your AI product vision to life with our 
              proven design methodology and rapid development approach.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 