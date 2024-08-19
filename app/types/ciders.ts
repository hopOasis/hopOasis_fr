import { PageableType, SortType } from "./common";

type CiderType = {
  id: number;
  ciderName: string;
  volumeLarge: number;
  volumeSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  image: string[];
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
