'use client'

import Link from 'next/link'
import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-10 flex justify-between items-center h-14 md:h-16">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-bold text-gray-800 flex-shrink-0">
          <span>Artemis Design Labs</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center ml-auto" aria-label="Main navigation">
          <Link href="/work">
            <span className="font-satoshi text-gray-600 hover:text-black text-sm lg:text-base">Work</span>
          </Link>
          <Link href="/services">
            <span className="font-satoshi text-gray-600 hover:text-black text-sm lg:text-base">Services</span>
          </Link>
          <Link href="/contact">
            <span className="font-satoshi text-gray-600 hover:text-black text-sm lg:text-base">Contact</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-800 dark:text-white focus:outline-none ml-auto"
        >
          <svg
            className="w-5 h-5"
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
          className="md:hidden px-2 pb-3 flex flex-col space-y-2 bg-white border-t dark:border-gray-700"
        >
          <Link href="/work">
            <span className="text-gray-700 hover:text-black text-sm">Work</span>
          </Link>
          <Link href="/services">
            <span className="text-gray-700 hover:text-black text-sm">Services</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-700 hover:text-black text-sm">Contact</span>
          </Link>
          <div className="pt-2">
            <DarkModeToggle />
          </div>
        </nav>
      )}
    </header>
  )
}
