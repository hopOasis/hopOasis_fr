"use client";
import Address from "@/app/components/containers/footer/components/Address";
import GoogleMaps from "@/app/components/ui/GoogleMaps/GoogleMaps";

export default function Loacations() {
  return (
    <div className="locations">
      <GoogleMaps />
      <Address />
    </div>
  );
}
