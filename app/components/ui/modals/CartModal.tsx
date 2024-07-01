"use client";
import "./cartModal.scss";
import ModalTop from "./ModalTop";
import WeeklyProductsModal from "./WeeklyProductsModal";
import { IPropsCartModal } from "./types";
import CartList from "../../containers/CartList/CartList";
import Overflow from "../Overflov/Overflow";
import { useEffect, useLayoutEffect } from "react";
import { animate } from "@/app/utils";

export default function CartModal({ cart, products }: IPropsCartModal) {
  useLayoutEffect(() => {
    const animation = animate.modal.open();
    return () => animation.revert();
  }, []);
  return (
    <dialog open className="cart-modal">
      <Overflow />
      <ModalTop />
      <CartList cart={cart} />
      <WeeklyProductsModal products={products} />
    </dialog>
  );
}
