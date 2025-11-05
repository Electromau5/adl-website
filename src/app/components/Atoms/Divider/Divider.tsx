'use client'

import { useEffect, useRef, useState } from 'react'

interface DividerProps {
  className?: string
}

export default function Divider({ className = '' }: DividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -20% 0px', // Trigger when section is more in view
      }
    )

    // Find the parent section element
    const sectionElement = dividerRef.current?.closest('section')
    
    if (sectionElement) {
      observer.observe(sectionElement)
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement)
      }
    }
  }, [])

  return (
    <div className={`divider-container ${className}`}>
      <div
        ref={dividerRef}
        className={`divider-line ${isVisible ? 'divider-expand' : 'divider-collapse'}`}
      />
    </div>
  )
}

