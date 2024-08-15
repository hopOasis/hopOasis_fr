import https from 'https';
import axios from 'axios';
import {
  CartResponseType,
  Endpoints,
  IPropsGet,
  IPropsGetById,
  ProductsResponseType,
} from './types';


export async function getLocation() {
  const params = new URLSearchParams({
    apiKey: process.env.GEOLOCATION_API_KEY,
    fields: 'city',
  });
  const { data } = await axios.get(
    `${process.env.GEOLOCATION_URL}?${params.toString()}`,
  );

  return data.city;
}
// @ts-ignore

export async function addProdactToCart({ body }) {
  const params = new URLSearchParams({
    ...body,
  });

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const { data } = await axios.get(
    `${process.env.API_URL + Endpoints.cart}/items?${params.toString()}`,
    {
      httpsAgent: agent,
      withCredentials: true,
    },
  );

  return data;
}

export async function getNewPostSettlementsLib({ city }: { city: string }) {
  const data = await axios.post(process.env.NEW_POST_URL, {
    apiKey: process.env.NEW_POST_API_KEY,
    modelName: 'AddressGeneral',
    calledMethod: 'searchSettlements',
    methodProperties: {
      CityName: city,
    },
  });
  return data;
}

export async function getDepartmentsAndPostalLib({
  cityRef,
  streetName,
}: { cityRef: string; streetName: string }) {
  const data = await axios.post(process.env.NEW_POST_URL, {
    apiKey: process.env.NEW_POST_API_KEY,
    modelName: 'AddressGeneral',
    calledMethod: 'getWarehouses',
    methodProperties: {
      FindByString: streetName,
      CityRef: cityRef,
      Limit: 50,
    },
  });
  return data;
}
