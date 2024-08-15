import { ProductType } from "../types/types";

export type ShopCardType = Omit<ProductType, "rating">;
