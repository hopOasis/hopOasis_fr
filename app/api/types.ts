import { ProductType } from "../types/types";

export enum Endpoints {
  beer = "beers",
  cart = "cart",
  cider = "cider",
  rating = "ratings",
}

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

const url = process.env.API_URL;

export const ProxiEndpoints = {
  newPostCities: url + `/api/newPost/citiesLib`,
  newPostSettlements: url + "/api/newPost/settlementsLib",
  geolocation: url + "/api/location",
  beer: url + "/api/products/beer",
  cart: url + "/api/cart",
  cartDB: url + "/api/cartDB",
  rating: url + "/api/rating",
} ;


