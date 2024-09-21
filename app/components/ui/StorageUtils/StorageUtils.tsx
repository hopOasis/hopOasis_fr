'use client';

import { ProxiEndpoints } from '@/app/static/constants';
import { oazaStorage } from '@/app/utils';
import { useEffect } from 'react';

const saveCookiesToDatabase = async () => {
  await fetch(ProxiEndpoints.dbSaveCookie, { method: 'GET', credentials: 'include' });
};

const removeCookiesAfterExpire = async () => {
  await fetch(ProxiEndpoints.dbRemoveCookie, { method: 'GET', credentials: 'include' });
};

export default function StorageUtils() {
  useEffect(() => {
    saveCookiesToDatabase();
    window.addEventListener('beforeunload', () => {
      oazaStorage.clearSecure();
      removeCookiesAfterExpire();
    });
  }, []);
  return null;
}

