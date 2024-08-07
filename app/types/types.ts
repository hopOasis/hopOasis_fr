export type ProductType = {
  id: number;
  beerName: string;
  volumeLarge: number;
  volumeSmall: number;
  priceLarge: number;
  priceSmall: number;
  description: string;
  bearColor: string;
  image: string[];
  averageRating: number;
};

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
  light = 'light',
  dark = 'dark',
  white = 'white',
  blue = 'blue',
}
