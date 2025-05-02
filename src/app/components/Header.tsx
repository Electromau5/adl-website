'use client'

import Link from 'next/link'
import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          <span>Artemis Design Labs</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center" aria-label="Main navigation">
          <Link href="/work">
            <span className="font-satoshi text-gray-600 hover:text-black">Work</span>
          </Link>
          <Link href="/services">
            <span className="font-satoshi text-gray-600 hover:text-black">Services</span>
          </Link>
          <Link href="/contact">
            <span className="font-satoshi text-gray-600 hover:text-black">Contact</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
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
          className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white border-t dark:border-gray-700"
        >
          <Link href="/work">
            <span className="text-gray-700 hover:text-black">Work</span>
          </Link>
          <Link href="/services">
            <span className="text-gray-700 hover:text-black">Services</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-700 hover:text-black">Contact</span>
          </Link>
          <div className="pt-2">
            <DarkModeToggle />
          </div>
        </nav>
      )}
    </header>
  )
}
