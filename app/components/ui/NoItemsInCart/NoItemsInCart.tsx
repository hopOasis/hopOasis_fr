import Icons from '../icons/icons';
import './no-items-in-cart.scss';

export default function NoItemsInCart() {
  return (
    <div className="empty-cart">
      <Icons name="empty-cart-icon" />
      <p className="empty-cart__title typography__h3">Ваш кошик порожній</p>
      <p className="empty-cart__text typography__h4">Та ви завжди можете додати до нього товари</p>
    </div>
  );
}
