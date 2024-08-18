'use client';

import { oazaStorage } from '@/app/utils';
import axios from 'axios';
import { useEffect } from 'react';

export default function StorageUtils() {
  useEffect(() => {
    const fn = async () => {
        const params = new URLSearchParams({
          apiKey: '4cac5e01a9bf4ea7bbf673af55297e12',
          fields: 'city',
        });
        const { data } = await axios.get(`https://api.ipgeolocation.io/ipgeo?${params.toString()}`);
      console.log('--------------front-end location', data.city);
    };
    fn();
    window.addEventListener('beforeunload', () => oazaStorage.clearSecure());
  }, []);
  return null;
}
