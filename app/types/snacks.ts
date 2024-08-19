import { PageableType, SortType } from "./common";

type SnackType = {
  id: number;
  snackName: string;
  weightLarge: number;
  weightSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  snackImageDto: string[];
};

export type SnackTypeApiResponse = {
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
