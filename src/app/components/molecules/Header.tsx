'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="w-full pl-2 pr-8 lg:px-8 flex justify-between items-center h-15">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/images/logos/adl-logo-1.png" alt="Artemis Design Labs Logo" className="h-15 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center ml-auto" aria-label="Main navigation">
          <Link href="/work">
            <span className="font-medium text-gray-600 hover:text-black text-base">Work</span>
          </Link>
          <Link href="/services">
            <span className="font-medium text-gray-600 hover:text-black text-base">Services</span>
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
          <Link href="/services">
            <span className="text-gray-700 hover:text-black text-base">Services</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-700 hover:text-black text-base">Contact</span>
          </Link>
        </nav>
      )}
    </header>
  )
}
