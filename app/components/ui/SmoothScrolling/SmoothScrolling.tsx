'use client';
import Lenis from 'lenis';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SmoothScrolling() {
  const searchParams = useSearchParams();
  const modal = searchParams.get('cart');

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      // @ts-ignore
      wrapper: !modal
        ? document.querySelector('body')
        : document.querySelector('dialog') || document.querySelector('body'),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [modal]);
  return <></>;
}
