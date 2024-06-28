

type IconType =
  | "search"
  | "phone"
  | "heart"
  | "avatar"
  | "trash"
  | "arrow"
  | "cart"
  | "chevronDown"
  | "close"
  | "minus"
  | "plus"
  | "swiper-right-arrow"
  | "swiper-left-arrow";

export interface IProps {
  name: IconType;
}

export type CasesType = {
  [key in IconType]: React.ReactNode;
};
