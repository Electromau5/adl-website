'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Artemis Design Labs
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/work" className="font-satoshi text-gray-600 hover:text-black">Work</Link>
          <Link href="/services" className="font-satoshi text-gray-600 hover:text-black">Services</Link>
          <Link href="/contact" className="font-satoshi text-gray-600 hover:text-black">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
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
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white border-t">
          <Link href="/work" className="text-gray-700 hover:text-black">Work</Link>
          <Link href="/services" className="text-gray-700 hover:text-black">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
        </div>
      )}
    </header>
  )
}
