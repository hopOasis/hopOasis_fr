'use client';
import './cartModal.scss';
import { useSearchParams } from 'next/navigation';
import ModalDialog from './components/ModalDialog';
import { IPropsCartModal } from './types';

export default function CartModal(props: IPropsCartModal) {
  const searchParams = useSearchParams();
  const modal = searchParams.get('cart');

  return modal && <ModalDialog {...props} />;
}
