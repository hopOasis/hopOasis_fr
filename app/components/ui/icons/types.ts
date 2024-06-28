export interface IPathProps {
  stroke?: string;
}

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
  | "plus";

export interface IProps {
  name: IconType;
}

export type CasesType = {
  [key in IconType]: React.ReactNode;
};
