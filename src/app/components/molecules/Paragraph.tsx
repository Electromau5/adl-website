'use client';

import React from 'react';
import { paragraphStyle } from '@/lib/typography';

interface ParagraphProps {
  text: string;
  className?: string;
}

export default function Paragraph({ text, className = '' }: ParagraphProps) {
  return (
    <p className={`${paragraphStyle} ${className}`}>
      {text}
    </p>
  );
}
