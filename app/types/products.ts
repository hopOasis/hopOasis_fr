import { PageableType, SortType } from './common';

export type PreparedProductType = {
  id: string;
  name: string;
  volumeLarge: number;
  volumeSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  beerColor: string;
  image: string[];
  rating: number;
  votes: number;
  specialOfferIds: number[];
};

export type PreparedProductApiResponse = {
  content: PreparedProductType[];
  pageable: PageableType;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: SortType;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};

export type GeneratedProductType = {
  isInCart: boolean;
  quantity: number | null;
} & PreparedProductType;

export type GeneratedProduct = {
  content: GeneratedProductType[];
  pageable: PageableType;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: SortType;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};

