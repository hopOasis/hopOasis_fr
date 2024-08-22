import { BeersApiResponse } from './beers';
import { CiderApiResponse } from './ciders';
import { PageableType, SortType } from './common';
import { SetsApiResponse } from './sets';
import { SnackApiResponse } from './snacks';

export type ProductsResponseType = ({} & BeersApiResponse) | CiderApiResponse | SnackApiResponse | SetsApiResponse;

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
  itemType: string
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
