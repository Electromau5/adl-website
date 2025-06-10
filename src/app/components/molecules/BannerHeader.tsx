'use client';

import React from 'react';
import { bannerHeaderStyle } from '@/lib/typography';

interface BannerHeaderProps {
  text: string;
  className?: string;
}

export default function BannerHeader({ text, className = '' }: BannerHeaderProps) {
  return (
    <h1 className={`${bannerHeaderStyle} ${className}`}>
      {text}
    </h1>
  );
}
