import "./cartModal.scss";
// import Scrollbar from 'smooth-scrollbar';
import ModalTop from "./ModalTop";
import WeeklyProductsModal from "./WeeklyProductsModal";
import { IPropsCartModal } from "./types";
import CartList from "../../containers/CartList/CartList";

export default  function CartModal({ cart, products }: IPropsCartModal) {
  return (
    <dialog open className="cart-modal">
      <ModalTop />
      <CartList cart={cart} />
      <WeeklyProductsModal products={products} />
    </dialog>
  );
}
