import { GeneratedProductType } from "@/app/types/products";

export interface IProps extends GeneratedProductType {
  increment: () => void;
  decrement: () => void;
  remove: () => void;
}