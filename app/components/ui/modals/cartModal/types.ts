import { GeneratedProduct, GeneratedProductType } from '@/app/types/products';

export interface IPropsSpecialForYou {
  specialForYou: GeneratedProduct;
}

export interface IPropsCartList {
  cart: GeneratedProduct;
}

export interface IPropsCartModal extends IPropsSpecialForYou, IPropsCartList {}
