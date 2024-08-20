import { BeerType } from "./beers";
import { CiderType } from "./ciders";
import { SetsType } from "./sets";
import { SnackType } from "./snacks";

export type WeekProductsApiResponse = {
  id: number;
  name: string;
  active: boolean;
  specialOfferBeers: BeerType[];
  specialOfferCiders: CiderType[];
  specialOfferSnacks: SnackType[];
  specialOfferProductBundles: SetsType[];
};