import "./cartModal.scss";
import ModalTop from "./ModalTop";
import WeeklyProductsModal from "./WeeklyProductsModal";
import CartList from "./CartList";

export default function CartModal() {
  return (
    <dialog open className="cart-modal">
      <ModalTop />
      <CartList />
      <WeeklyProductsModal />
    </dialog>
  );
}
