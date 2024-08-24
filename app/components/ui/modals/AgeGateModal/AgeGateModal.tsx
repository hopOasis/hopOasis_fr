'use client';
import { useState } from 'react';
import './ageGateModal.scss';
import { oazaStorage } from '@/app/utils';
import AgeGateModalBody from './components/AgeGateModalBody';

export default function AgeGateModal() {
  const [show, setShow] = useState<boolean>(() => {
    const isInStore = oazaStorage.getSecure();
    return !isInStore;
  });
  return show && <AgeGateModalBody setShow={setShow} />;
}
