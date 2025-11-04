'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay - slides down from top */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 sm:px-12 md:px-24 h-20 border-b border-gray-800">
          <Link href="/" onClick={onClose}>
            <span className="text-white text-lg font-bold tracking-wide">
              ARTEMIS DESIGN LABS
            </span>
          </Link>
          <button
            onClick={onClose}
            className="text-white text-lg font-medium tracking-wide hover:text-cyan-400 transition-colors duration-300"
            aria-label="Close menu"
          >
            CLOSE
          </button>
        </div>

        {/* Navigation Menu - Centered */}
        <nav
          className="flex flex-col items-center justify-center h-full pt-20 pb-20"
          aria-label="Main navigation"
        >
          <div className="flex flex-col items-center space-y-12 text-center">
            {/* Row 1: About us / Services */}
            <div className="flex items-center gap-6 sm:gap-12">
              <Link
                href="/about"
                onClick={onClose}
                className="menu-link-fill text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                data-text="About us"
              >
                About us
              </Link>
              <span className="text-3xl sm:text-4xl md:text-5xl text-cyan-400">/</span>
              <Link
                href="/services"
                onClick={onClose}
                className="menu-link-fill text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                data-text="Services"
              >
                Services
              </Link>
            </div>

            {/* Row 2: Work / Marketplace / Design System */}
            <div className="flex items-center gap-6 sm:gap-12 flex-wrap justify-center">
              <Link
                href="/work"
                onClick={onClose}
                className="menu-link-fill text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                data-text="Work"
              >
                Work
              </Link>
              <span className="text-3xl sm:text-4xl md:text-5xl text-cyan-400">/</span>
              <Link
                href="/marketplace"
                onClick={onClose}
                className="menu-link-fill text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                data-text="Marketplace"
              >
                Marketplace
              </Link>
              <span className="text-3xl sm:text-4xl md:text-5xl text-cyan-400">/</span>
              <Link
                href="/design-system-license"
                onClick={onClose}
                className="menu-link-fill text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                data-text="Design System"
              >
                Design System
              </Link>
            </div>

            {/* Row 3: Publication / Contact */}
            <div className="flex items-center gap-6 sm:gap-12">
              <Link
                href="/publication"
                onClick={onClose}
                className="menu-link-fill text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                data-text="Publication"
              >
                Publication
              </Link>
              <span className="text-3xl sm:text-4xl md:text-5xl text-cyan-400">/</span>
              <Link
                href="/contact"
                onClick={onClose}
                className="menu-link-fill text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
                data-text="Contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

