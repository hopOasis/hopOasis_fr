import { ProductType } from "../types/types";

export interface IProps {
  searchParams: { filter: string };
}

export type ShopCardType = Omit<ProductType, "rating">;

