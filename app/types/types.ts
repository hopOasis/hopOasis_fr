export interface IProductCard {
  id: string;
  image: string;
  name: string;
  volumeLarge: string;
  priceLarge: number;
  description: string;
  rating: number;
}

export interface IFeedbackCard {
  img: string;
  author: string;
  rating: number;
  feedback: string;
}
