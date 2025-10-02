'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="w-full pl-2 pr-8 lg:px-8 flex justify-between items-center h-15">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logos/adl-logo-1.png"
            alt="Artemis Design Labs Logo"
            width={150}
            height={60}
            className="h-15 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center ml-auto" aria-label="Main navigation">
          <Link href="/work">
            <span className="font-medium text-gray-600 hover:text-black text-base">Work</span>
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="font-medium text-gray-600 hover:text-black text-base flex items-center"
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <Link href="/services/rapid-mvp-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Rapid MVP Design
                </Link>
                <Link href="/services/design-systems" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Design Systems
                </Link>
                <Link href="/services/product-redesign" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Product Redesign
                </Link>
                <Link href="/services/end-to-end-ux" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  End-to-End UX
                </Link>
              </div>
            )}
          </div>
          <Link href="/marketplace">
            <span className="font-medium text-gray-600 hover:text-black text-base">Marketplace</span>
          </Link>
          <Link href="/design-system-license">
            <span className="font-medium text-gray-600 hover:text-black text-base">Design System License</span>
          </Link>
          <Link href="/publication">
            <span className="font-medium text-gray-600 hover:text-black text-base">Publication</span>
          </Link>
          <Link href="/contact">
            <span className="font-medium text-gray-600 hover:text-black text-base">Contact</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-800 focus:outline-none ml-auto"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white border-t"
        >
          <Link href="/work">
            <span className="text-gray-700 hover:text-black text-base">Work</span>
          </Link>
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-700 hover:text-black text-base flex items-center justify-between w-full"
            >
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/services/rapid-mvp-design" className="block text-sm text-gray-600 hover:text-black">
                  Rapid MVP Design
                </Link>
                <Link href="/services/design-systems" className="block text-sm text-gray-600 hover:text-black">
                  Design Systems
                </Link>
                <Link href="/services/product-redesign" className="block text-sm text-gray-600 hover:text-black">
                  Product Redesign
                </Link>
                <Link href="/services/end-to-end-ux" className="block text-sm text-gray-600 hover:text-black">
                  End-to-End UX
                </Link>
              </div>
            )}
          </div>
          <Link href="/marketplace">
            <span className="text-gray-700 hover:text-black text-base">Marketplace</span>
          </Link>
          <Link href="/design-system-license">
            <span className="text-gray-700 hover:text-black text-base">Design System License</span>
          </Link>
          <Link href="/publication">
            <span className="text-gray-700 hover:text-black text-base">Publication</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-700 hover:text-black text-base">Contact</span>
          </Link>
        </nav>
      )}
    </header>
  )
}
