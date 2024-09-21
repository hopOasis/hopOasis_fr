import { GeneratedProductType } from '@/app/types/products';

export interface IProps {
  params: { id: string };
  searchParams: { filter: string };
}

export interface IPropsTitle {
  active: number;
  onClick: (idx: number) => void;
}

type DeliveryPaymentProps = Pick<GeneratedProductType, 'description'>;

export interface IPropsDeliveryPaymentSection extends DeliveryPaymentProps {}

export interface IHeroSection
  extends Pick<
    GeneratedProductType,
    | 'id'
    | 'name'
    | 'image'
    | 'priceLarge'
    | 'priceSmall'
    | 'isInCart'
    | 'rating'
    | 'votes'
    | 'itemType'
    | 'volumeLarge'
    | 'volumeSmall'
  > {}
