'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeader from '../molecules/SectionHeader';

const milestones = Array(6).fill({
  title: 'Milestone',
  details: 'Milestone Details',
  icon: '/images/tests/test-image.png',
});

export default function Milestones() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto" style={{ backgroundColor: 'var(--background)' }}>
      {/* Component - Section Header */}
      
        <SectionHeader title="OUR ACHIEVEMENTS" />

      {/* Component - Section Header */}

      {/* Introductory Text */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Milestones</h2>
        <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          From Startups to Titans of Industries
        </h3>
        <p className="max-w-3xl" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
          Our talk track is minimal; our work proves itself. As a testament to our purpose-driven
          product design beliefs and meticulous approach to our craft, we built deep relationships
          with people at all levels in organizations, from early-stage start-ups to Fortune 100
          companies. With their vision and our drive, we have moved mountains together.
        </p>
      </div>

      {/* Milestone Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="p-6 rounded-lg hover:shadow-md transition"
            style={{ 
              borderColor: 'var(--color-card-border)',
              borderWidth: '1px',
              borderStyle: 'solid',
              backgroundColor: 'var(--color-card-bg)'
            }}
          >
            <Image
              src={milestone.icon}
              alt="Milestone Icon"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--foreground)' }}>{milestone.title}</h4>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>{milestone.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
