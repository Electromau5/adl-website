'use client';

import React from 'react';
import Image from 'next/image';

const milestones = Array(6).fill({
  title: 'Milestone',
  details: 'Milestone Details',
  icon: '/images/tests/test-image.png',
});

export default function Milestones() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-sm uppercase font-medium tracking-wide text-gray-700 border-b pb-2 mb-4">
          Our Achievements
        </p>
        <h2 className="text-xl font-semibold mb-2">Milestones</h2>
        <h3 className="text-3xl font-bold mb-4">
          From Startups to Titans of Industries
        </h3>
        <p className="text-gray-600 max-w-3xl">
          Our talk track is minimal; our work proves itself. As a testament to our purpose-driven
          product design beliefs and meticulous approach to our craft, we built deep relationships
          with people at all levels in organizations, from early-stage start-ups to Fortune 100
          companies. With their vision and our drive, we have moved mountains together.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition"
          >
            <Image
              src={milestone.icon}
              alt="Milestone Icon"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold mb-1">{milestone.title}</h4>
            <p className="text-sm text-gray-600">{milestone.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
