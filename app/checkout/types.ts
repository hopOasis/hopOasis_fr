import { CartResponseType } from '../api/types';

export type FormStateType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  delivery: string;
  payment: string;
};

export interface IPropsChekoutForm {
  location: string;
  cart: CartResponseType;
}

export interface IPropsDepartmentComponent {
  location: string;
  isTrueCurrentLocation: boolean | null;
  setIsTrueCurrentLocation: React.Dispatch<React.SetStateAction<boolean | null>>;
}
