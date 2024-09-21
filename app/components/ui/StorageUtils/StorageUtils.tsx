'use client';

import { ProxiEndpoints } from '@/app/static/constants';
import { oazaStorage } from '@/app/utils';
import { useEffect } from 'react';

export default function StorageUtils() {
  useEffect(() => {
<<<<<<< Updated upstream
=======
    const saveCookiesToDatabase = async () => {
      await fetch(ProxiEndpoints.dbSaveCookie, { method: 'GET', credentials: 'include' });
    };
    saveCookiesToDatabase();
>>>>>>> Stashed changes
    window.addEventListener('beforeunload', () => oazaStorage.clearSecure());
  }, []);
  return null;
}
