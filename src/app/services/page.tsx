'use client';

import React from 'react';
import ServiceSection from '../components/ServiceSection'; // adjust path as needed

export default function ServicesPage() {
  return (
    <main className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <ServiceSection />
    </main>
  );
}
