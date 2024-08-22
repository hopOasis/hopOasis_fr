import { PageableType, SortType } from "./common";

export type CiderType = {
  id: number;
  ciderName: string;
  volumeLarge: number;
  volumeSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  ciderImageName: string[];
  averageRating: number;
  ratingCount: number;
  specialOfferIds: number[];
  itemType: string;
};

export type CiderApiResponse = {
  content: CiderType[];
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
