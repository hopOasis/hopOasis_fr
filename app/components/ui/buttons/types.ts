import { ProductType } from '@/app/types/types';

export interface ICardButton {
  id: number;
  onClick: (id: number) => void;
  isInCart: boolean;
}

export interface IFavButton {
  id: number;
  onClick: (id: number) => void;
}
