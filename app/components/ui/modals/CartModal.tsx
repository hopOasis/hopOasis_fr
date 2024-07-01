import "./cartModal.scss";
import ModalTop from "./ModalTop";
import WeeklyProductsModal from "./WeeklyProductsModal";
import { IPropsCartModal } from "./types";
import CartList from "../../containers/CartList/CartList";
import Overflow from "../Overflov/Overflow";

export default  function CartModal({ cart, products }: IPropsCartModal) {
  return (
    <dialog open className="cart-modal">
      <Overflow />
      <ModalTop />
      <CartList cart={cart} />
      <WeeklyProductsModal products={products} />
    </dialog>
  );
}
