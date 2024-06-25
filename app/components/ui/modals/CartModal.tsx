'use client';
import './cartModal.scss';
import { useEffect } from 'react';
// import Scrollbar from 'smooth-scrollbar';
import CartList from './CartList';
import ModalTop from './ModalTop';
import WeeklyProductsModal from './WeeklyProductsModal';

export default function CartModal() {
  // useEffect(() => {
  //   const root = document.querySelector("dialog")!;
  //   Scrollbar.init(root, { damping: 0.05 });
  // }, []);

  return (
    <dialog open className="cart-modal">
      <ModalTop />
      <CartList />
      <WeeklyProductsModal />
    </dialog>
  );
}
