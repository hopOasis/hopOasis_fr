

type IconType =
  | 'search'
  | 'phone'
  | 'heart'
  | 'avatar'
  | 'trash'
  | 'arrow'
  | 'cart'
  | 'chevronDown'
  | 'close'
  | 'minus'
  | 'plus'
  | 'swiper-right-arrow'
  | 'swiper-left-arrow'
  | 'eye'
  | 'empty-cart-icon';

export interface IProps {
  name: IconType;
}

export type CasesType = {
  [key in IconType]: React.ReactNode;
};
