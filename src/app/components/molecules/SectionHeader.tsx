'use client';

import React from 'react';
import { sectionHeaderStyle } from '@/lib/typography';

interface SectionHeaderProps {
  title: string;
  className?: string; // optional override or extension
}

export default function SectionHeader({ title, className = '' }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <h2 className={`${sectionHeaderStyle} ${className}`} style={{ color: 'var(--foreground)' }}>
        {title}
      </h2>
      <div className="w-full h-[1px]" style={{ backgroundColor: 'var(--var-divider-color)' }} />
    </div>
  );
}
