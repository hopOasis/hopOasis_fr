export enum Endpoints {
  beer = "beers",
  cart = "cart",
  cider = "cider",
}

export interface IProps {
  endpoint: Endpoints;
}

export type ProductType = {
  id: number;
  beerName: string;
  volumeLarge: number;
  volumeSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  bearColor: string;
  imageName: string[];
};
