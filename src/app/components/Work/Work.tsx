"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "HANDS AI",
    description:
      "A WIC case management platform powered by a custom AI agent that helps caseworkers serve vulnerable populations.",
    image: "/images/hands-ai/cover.png",
    link: "/hands-ai",
    tags: ["AI", "Case Management", "Public Healthcare"],
  },
  {
    title: "Insight",
    description:
      "A school data platform designed for DOE officials to make fast, informed decisions using predictive AI.",
    image: "/images/insight/cover.png",
    link: "/insight",
    tags: ["AI", "Education", "Data Visualization"],
  },
  {
    title: "My Project Inbox",
    description:
      "A project management platform that streamlines workflows for internal engineering teams.",
    image: "/images/my-project-inbox/cover.png",
    link: "/my-project-inbox",
    tags: ["Project Management", "Engineering Teams"],
  },
];
export default function Work() {
  return (
    <div className="bg-white text-black px-6 py-16">
      {/* Section Label */}
      <div className="pb-8 mb-24 max-w-screen-xl mx-auto">
    
      <h1 className="text-3xl font-bold mb-6">Our Work</h1>
        <div className="border-b border-gray-300 mb-16"></div>

        {/* Hero Layout */}
        <div className="grid md:grid-cols-2 gap-16 max-w-screen-xl mx-auto">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              Improving Products <br />
              that Humanize <br />
              Technology
            </h2>
          </div>

          {/* Right Side - Paragraph */}
          <div className="text-gray-600 text-lg leading-relaxed pt-8">
            <p>
              We are dreamers and builders focused on improving the human relationship with
              technology. Our creative and technical expertise across industries has earned us
              extensive experience and knowledge from around the globe, which we leverage to build
              your vision and accomplish your goals together.
            </p>
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="max-w-screen-xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="mt-[160px] first:mt-0">
            <Link href={project.link}>
              <div className="cursor-pointer group w-full max-w-5xl mx-auto">
                {/* Image */}
                <div className="relative w-full h-[480px] rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title & Description */}
                <h4 className="text-blue-600 text-2xl font-bold mt-6">{project.title}</h4>
                <p className="text-black text-lg font-medium mt-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
