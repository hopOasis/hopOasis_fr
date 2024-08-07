'use client';
import { useEffect } from 'react';

export default function Overflow() {
  useEffect(() => {
    const root = document.body;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = 'auto';
    };
  }, []);
  return null;
}
