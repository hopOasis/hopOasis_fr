import { PageableType, SortType } from "./common";

export type BeerType = {
  id: number;
  beerName: string;
  volumeLarge: number;
  volumeSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  beerColor: string;
  imageName: string[];
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[];
};

export type BeersApiResponse = {
  content: BeerType[];
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
