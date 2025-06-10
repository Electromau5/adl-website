'use client';

import React from 'react';
import { primaryHeaderStyle } from '@/lib/typography';

interface PrimaryHeaderProps {
  text: string;
  withDivider?: boolean;
  className?: string;
}

export default function PrimaryHeader({
  text,
  withDivider = false,
  className = '',
}: PrimaryHeaderProps) {
  return (
    <div className="mb-10 text-center">
      <h1 className={`${primaryHeaderStyle} ${className}`}>{text}</h1>
      {withDivider && (
        <div className="mt-2 mx-auto w-[80px] h-[2px] bg-black" />
      )}
    </div>
  );
}
