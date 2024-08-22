

export interface ICardButton {
  id: string;
  onClick: (id: string) => void;
  isInCart: boolean;
}

export interface IFavButton {
  id: string;
  onClick: (id: string) => void;
}
