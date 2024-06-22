"use client";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import CartModal from "../../ui/modals/CartModal";

export default function Portal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("cart");

  return modal
    ? createPortal(<CartModal />, document.querySelector("body")!)
    : null;
}
