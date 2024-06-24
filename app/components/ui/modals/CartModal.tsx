"use client";
import "./cartModal.scss";
import ModalTop from "./ModalTop";
import WeeklyProductsModal from "./WeeklyProductsModal";
import CartList from "./CartList";
import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

export default function CartModal() {
  useEffect(() => {
    const root = document.querySelector("dialog")!;
    Scrollbar.init(root, { damping: 0.05 });
  }, []);

  return (
    <dialog open className="cart-modal">
      <ModalTop />
      <CartList />
      <WeeklyProductsModal />
    </dialog>
  );
}
