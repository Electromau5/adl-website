'use client'

export default function AboutImpactSection() {
  const stats = [
    {
      number: '15',
      label: 'Successful Product Launches',
    },
    {
      number: '$5M',
      label: 'Revenue Generated for Clients',
    },
    {
      number: '6',
      label: 'Design Systems Built for Scale',
    },
    {
      number: '300K+',
      label: 'Users Impacted',
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-24" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Tagline */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 text-center mb-8 font-medium">
          Designers with a Founder Mindset
        </h3>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight mb-16 max-w-6xl mx-auto" style={{ color: '#feead8' }}>
          We are a Team of Designers & Engineers with over a Decade of Designing & Launching Enterprise Products Built for Scale
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4" style={{ color: '#feead8' }}>
                {stat.number}
              </div>
              <div className="text-base sm:text-lg md:text-[22px]" style={{ color: '#feead8', opacity: 0.7 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

