import { CartProxiResponse } from "@/app/types/cart";
import { GeneratedProductType } from "@/app/types/products";

export interface IPropsWeeklyProducts {
  products: GeneratedProductType[];
}

export interface IPropsCartModal {
  cart: CartProxiResponse;
  products: GeneratedProductType[];
}
