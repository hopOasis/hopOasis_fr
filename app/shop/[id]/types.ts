import { IProductCard } from "@/app/types/types";

export interface IPropsTitle {
  active: number;
  onClick: (idx: number) => void;
}
type HeroSectionProps = Pick<
  IProductCard,
  "name" | "image" | "priceLarge" | "rating"
>;

export interface IPropsHeroSection extends HeroSectionProps {
  handleAddToFav: () => void;
  handleAddToCart: () => void;
  handleSetRating: (val: number) => void;
}

type DeliveryPaymentProps = Pick<IProductCard, "description">;

export interface IPropsDeliveryPaymentSection extends DeliveryPaymentProps {
  activeTab: number;
  onClick: (idx: number) => void;
}
