"use client";
import "./cartModal.scss";
import ModalTop from "./ModalTop";
import { IPropsCartModal } from "./types";
import CartList from "../../containers/CartList/CartList";
import Overflow from "../Overflov/Overflow";
import { useEffect } from "react";
import { animate } from "@/app/utils";
import SpesialForYouModal from "./SpesialForYouModal";

export default function CartModal({ cart, products }: IPropsCartModal) {
  useEffect(() => {
    const animation = animate.modal.open();
    return () => animation.revert();
  }, []);
  return (
    <dialog open className="cart-modal">
      <Overflow />
      <ModalTop />
      <CartList cart={cart} />
      <SpesialForYouModal products={products} />
    </dialog>
  );
}
