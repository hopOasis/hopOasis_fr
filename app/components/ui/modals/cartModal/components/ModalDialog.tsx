import CartList from '@/app/components/containers/CartList/CartList';
import { animate } from '@/app/utils';
import { useEffect } from 'react';
import Overflow from '../../../Overflov/Overflow';
import { IPropsCartModal } from '../types';
import ModalTop from './ModalTop';
import SpecialForYouModal from './SpesialForYouModal';

export default function ModalDialog({ cart, specialForYou }: IPropsCartModal) {
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
      <CartList cart={cart} />
      <SpecialForYouModal specialForYou={specialForYou} />
    </dialog>
  );
}
