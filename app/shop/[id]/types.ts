import { ProductType } from '@/app/types/types';
export interface IProps {
  params: {
    id: string;
  };
}

export interface IPropsTitle {
  active: number;
  onClick: (idx: number) => void;
}
type HeroSectionProps = Pick<
  ProductType,
  'beerName' | 'imageName' | 'priceLarge' | 'averageRating' | 'id'
>;

export interface IPropsHeroSection extends HeroSectionProps {
  image: string;
}

type DeliveryPaymentProps = { description: string };

export interface IPropsDeliveryPaymentSection extends DeliveryPaymentProps {}
