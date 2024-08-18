'use server';

import { cookies } from 'next/headers';
import { oaza_guest, ProxiEndpoints } from '../static/constants';

export const fetchCartUtils = async () => {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const cartId = !oazaCookie ? false : oazaCookie.value;

  return !cartId
    ? () => fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
    : () => fetch(`${ProxiEndpoints.carts}/${cartId}`, { cache: 'no-store', method: 'GET' });
};
