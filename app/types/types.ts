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
  rating: number;
};

// export interface IProductCard {
//   id: string;
//   imageName: string[];
//   beerName: string;
//   volumeLarge: string;
//   priceLarge: number;
//   description: string;
//   rating: number;
// }

export interface IFeedbackCard {
  img: string;
  author: string;
  rating: number;
  feedback: string;
}

export type FormFieldType = {
  id: string;
  type: string;
  placeholder: string;
  checked?: boolean;
  validation: (value: string) => boolean;
};

export enum Palitra {
  light = "light",
  dark = "dark",
}
