import { ProductType } from '@/app/types/types';

export interface IDescriptionBlock
  extends Pick<ProductType, 'beerName' | 'volumeLarge' | 'priceLarge' | 'id' | 'isInCart'> {}
