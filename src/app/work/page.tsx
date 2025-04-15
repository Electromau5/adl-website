import Link from 'next/link'

export default function WorkPage() {
    const projects = [
        {
          title: 'HANDS AI',
          subtitle: 'AI Chatbot for WIC Management',
          href: '/hands-ai',
          image: '/images/project-hands-cover.png',
        },
        {
          title: 'DOE Insight',
          subtitle: 'AI-Powered School Performance Reports',
          href: '/nyc-department-of-education-insight',
          image: '/images/project-insight-cover.png',
        },
        {
          title: 'Project Inbox',
          subtitle: 'Project Coordination for Engineering Teams',
          href: '/project-management-for-engineering-teams',
          image: '/images/project-mpi-cover.png',
        },
      ]
      

    return (
        <div className="min-h-screen px-6 py-20 md:px-20 bg-white text-gray-900">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Case Studies</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <Link
                        key={idx}
                        href={project.href}
                        className="block border border-gray-200 rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl bg-white"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                            <p className="text-gray-600 mt-2">{project.subtitle}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}