"use client";
import Address from "@/app/components/containers/footer/components/Address";

export default function Loacations() {
  return (
    <div className="locations">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1k2Y10AP0ZfEQ1ShafMcgTtoq03slDAU&ehbc=2E312F&noprof=1"
        width="800"
        height="600"
      />
      <Address />
    </div>
  );
}
