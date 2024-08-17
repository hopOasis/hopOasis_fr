import { ProductType } from '../types/types';

export interface IPropsGet {
  endpoint: Endpoints;
}

export interface IPropsGetById extends IPropsGet {
  id: string;
}

export interface IPropsGetById {
  endpoint: Endpoints;
  id: string;
}

export type CartResponseType = {
  items: ProductType[];
  priceForAll: number;
};

export type PageableType = {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type ProductsResponseType = {
  content: ProductType[];
  pageable: PageableType;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

const proxiUrl = process.env.NEXT_PUBLIC_HOST_URL;
const apiUrl = process.env.API_URL;

export enum Endpoints {
  beer = 'beers',
  cart = 'cart',
  cider = 'ciders',
  snack = 'snacks',
  set = 'sets',
  rating = 'ratings',
  products = 'products',
}

export const ProxiEndpoints = {
  beer: proxiUrl + Endpoints.beer,
  cart: proxiUrl + Endpoints.cart,
  rating: proxiUrl + Endpoints.rating,
  products: proxiUrl + Endpoints.products,

  //future remove
  cartDB: proxiUrl + 'cartDB',
};

export const ApiEndpoints = {
  beer: apiUrl + Endpoints.beer,
  cidr: apiUrl + Endpoints.cider,
  cart: apiUrl + Endpoints.cart,
  rating: apiUrl + Endpoints.rating,
};
