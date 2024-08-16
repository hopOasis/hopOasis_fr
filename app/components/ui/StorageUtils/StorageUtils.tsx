'use client';

import { oazaStorage } from '@/app/utils';
import { useEffect } from 'react';

export default function StorageUtils() {
  useEffect(() => {
    window.addEventListener('beforeunload', () => oazaStorage.clearSecure());
  }, []);
  return null;
}
