import gsap from 'gsap';
import { IPropsTitle } from '../types';

export default function Title({ active, onClick }: IPropsTitle) {
  return (
    <div className="delivery-payment-tabs">
      <button
        id="delivery-payment-tab-0"
        type="button"
        className={
          active === 0 ? 'active-tab typography__h2' : 'typography__h2'
        }
        onClick={() => {
          onClick(0);
          gsap.to('.tab-line', { y: 0 });
        }}
      >
        Опис
      </button>
      <span className="tab-line" />
      <button
        id="delivery-payment-tab-1"
        type="button"
        className={
          active === 1 ? 'active-tab typography__h2' : 'typography__h2'
        }
        onClick={() => {
          onClick(1);
          gsap.to('.tab-line', { y: 87 });
        }}
      >
        Доставка і оплата
      </button>
    </div>
  );
}
