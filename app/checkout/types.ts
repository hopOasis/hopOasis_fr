import { GeneratedProduct } from "../types/products";

export type FormStateType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  delivery: string;
  payment: string;
};

export interface IPropsChekoutForm {
  cart: GeneratedProduct;
}

export interface IPropsDepartmentComponent {
  isLoading:boolean;
  location: string;
  isTrueCurrentLocation: boolean | null;
  setIsTrueCurrentLocation: React.Dispatch<React.SetStateAction<boolean | null>>;
}
