import { CartResponseType } from "@/app/api/types";
import { ProductType } from "@/app/types/types";

export interface IPropsWeeklyProducts {
  products: ProductType[];
}

export interface IPropsCartModal{
  cart: CartResponseType
  products: ProductType[];
}
