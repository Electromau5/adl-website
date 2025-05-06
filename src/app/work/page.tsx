"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "HANDS AI",
    description: "A WIC case management platform powered by a custom AI agent that helps caseworkers serve vulnerable populations.",
    image: "/images/hands-ai/cover.png",
    link: "/hands-ai",
    tags: ["AI", "Case Management", "Public Healthcare"],
  },
  {
    title: "Insight",
    description: "A school data platform designed for DOE officials to make fast, informed decisions using predictive AI.",
    image: "/images/insight/cover.png",
    link: "/insight",
    tags: ["AI", "Education", "Data Visualization"],
  },
  {
    title: "My Project Inbox",
    description: "A school data platform designed for DOE officials to make fast, informed decisions using predictive AI.",
    image: "/images/my-project-inbox/cover.png",
    link: "/insight",
    tags: ["Project Management", "Engineering Teams"],
  },
];

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Selected Work</h1>
      <p className="text-gray-600 text-lg mb-12">
        A collection of recent projects across enterprise AI, education, and government tech—focused on usability, scalability, and outcomes.
      </p>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <div className="group rounded-2xl border shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}