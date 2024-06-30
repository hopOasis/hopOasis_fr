import { ProductType } from "../types/types";

export enum Endpoints {
  beer = "beers",
  cart = "cart",
  cider = "cider",
}

export interface IPropsGetAll {
  endpoint: Endpoints;
}

export interface IPropsGetById {
  endpoint: Endpoints;
  id: string;
}

export type CartResponseType = {
  items: ProductType[];
  priceForAll: number;
};
