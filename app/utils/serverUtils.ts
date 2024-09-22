import { cookies } from 'next/headers';
import { oaza_guest, ProxiEndpoints } from '../static/constants';
import { separateId } from '.';
import { DBService } from '../api/DB/DBService';

export const fetchCartUtils = () => {
  const cookieStore = cookies();
  const oazaCookie = cookieStore.get(oaza_guest);

  const cartId = !oazaCookie ? false : oazaCookie.value;

  return !cartId
    ? () => fetch(ProxiEndpoints.cartDefaults, { cache: 'no-store', method: 'GET' })
    : () => fetch(`${ProxiEndpoints.carts}/${cartId}`, { cache: 'no-store', method: 'GET' });
};

export const fetchProductsUtils = ({ filter, id = null }: { filter: string; id?: string }) => {
  return !id
    ? () => fetch(ProxiEndpoints?.[filter] ?? ProxiEndpoints.beers, { method: 'GET', cache: 'no-store' })
    : () => fetch(`${ProxiEndpoints?.[filter]}/${separateId(id)}`, { method: 'GET', cache: 'no-store' });
};


export const addCurrentUserVotingToDatabase = async({id}:{id:string}) => {
    const cookieStore = cookies();
    const oazaCookie = cookieStore.get(oaza_guest);
    await DBService.addVote({ cookie: oazaCookie, productId: id });

}