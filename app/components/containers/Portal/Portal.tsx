"use client";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import CartModal from "../../ui/modals/CartModal";
import {  useRef } from "react";

export default function Portal() {
  const ref = useRef(document.querySelector("body")!);
  const searchParams = useSearchParams();
  const modal = searchParams.get("cart");
 
  return modal
    ? createPortal(<CartModal />, ref.current)
    : null;
}
