import { PageableType, SortType } from "./common";

export type SnackType = {
  id: number;
  snackName: string;
  weightLarge: number;
  weightSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  snackImageName: string[];
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[];
  itemType: string;
};

export type SnackApiResponse = {
  content: SnackType[];
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
