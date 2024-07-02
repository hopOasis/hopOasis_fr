import { ProductType } from "../types/types";

export enum Endpoints {
  beer = "beers",
  cart = "cart",
  cider = "cider",
}

export interface IPropsGetAll {
  endpoint: Endpoints;
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

export type PruductsResponseType = {
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

export enum ProxiEndpoints {
  beer = `http://localhost:3000/api/products/beer`,
  cart = "http://localhost:3000/api/cart",
}
