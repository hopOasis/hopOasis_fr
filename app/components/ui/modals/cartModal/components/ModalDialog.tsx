import { useEffect } from "react";
import SpesialForYouModal from "./SpesialForYouModal";
import { animate } from "@/app/utils";
import Overflow from "../../../Overflov/Overflow";
import CartList from "@/app/components/containers/CartList/CartList";
import ModalTop from "./ModalTop";
import { IPropsCartModal } from "../types";

export default function ModalDialog({ cart, products }: IPropsCartModal) {
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
