import { PageableType, SortType } from "./common";

export type SetsType = {
  id: number;
  name: string;
  price: number;
  description: string;
  productImageName: string[];
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[];
};

export type SnackTypeApiResponse = {
  content: SetsType[];
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