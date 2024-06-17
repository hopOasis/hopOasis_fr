"use client";
import { ReactLenis } from "lenis/react";
import { IProps } from "./types";

function SmoothScrolling({ children }: IProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
