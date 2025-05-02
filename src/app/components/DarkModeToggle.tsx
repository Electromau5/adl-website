'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else if (storedTheme === 'light') {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        document.documentElement.classList.add('dark')
        setDarkMode(true)
      }
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition p-2"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
