'use client';

import { ProxiEndpoints } from '@/app/static/constants';
import { oazaStorage } from '@/app/utils';
import { useEffect } from 'react';

export default function StorageUtils() {
  useEffect(() => {
    const saveCookiesToDatabase = async () => {
      await fetch(ProxiEndpoints.dbSaveCookie, { method: 'GET', credentials: 'include' });
    };
    saveCookiesToDatabase();
    window.addEventListener('beforeunload', () => oazaStorage.clearSecure());
  }, []);
  return null;
}
