export enum Endpoints {
  beer = "beer",
  cart = "cart",
  cider = "cider",
}

export interface IProps {
  endpoint: Endpoints;
}
