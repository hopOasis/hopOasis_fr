import CartList from '@/app/components/containers/CartList/CartList';
import { animate } from '@/app/utils';
import { useEffect } from 'react';
import Overflow from '../../../Overflov/Overflow';
import { IPropsCartModal } from '../types';
import ModalTop from './ModalTop';
import SpesialForYouModal from './SpesialForYouModal';

export default function ModalDialog({ cart, products }: IPropsCartModal) {
  useEffect(() => {
    const animation = animate.modal.open();
    return () => {
      animation.revert();
    };
  }, []);
  return (
    <dialog open className="cart-modal">
      <Overflow />
      <ModalTop />
      {/* <CartList cart={cart} /> */}
      <SpesialForYouModal products={products} />
    </dialog>
  );
}
