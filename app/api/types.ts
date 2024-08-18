import { ProductType } from '../types/types';

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


