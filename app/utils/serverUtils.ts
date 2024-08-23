import { cookies } from 'next/headers';
import { oaza_guest, ProxiEndpoints } from '../static/constants';
import { separateId } from '.';

export const fetchCartUtils = () => {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const cartId = !oazaCookie ? false : oazaCookie.value;

  return !cartId
    ? () => fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
    : () => fetch(`${ProxiEndpoints.carts}/${cartId}`, { cache: 'no-store', method: 'GET' });
};

export const fetchProductsUtils = ({ filter, id = null }: { filter: string; id?: string }) => {
  const cases = {
    BEER: 'beers',
    CIDER: 'ciders',
    SNAK: 'sancks',
    PRODUCT_BUNDLE: 'sets',
  };

  return !id
    ? () => fetch(ProxiEndpoints?.[cases[filter]] ?? ProxiEndpoints.beers, { method: 'GET' })
    : () => fetch(`${ProxiEndpoints?.[cases[filter]]}/${separateId(id)}`, { method: 'GET' });
};
