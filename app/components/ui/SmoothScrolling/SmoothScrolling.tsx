"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { useSearchParams } from "next/navigation";

export default function SmoothScrolling() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("cart");

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.065,
      wrapper: document.querySelector(modal ? "dialog" : "body")!,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [modal]);
  return <></>;
}
