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
}

export interface IPropsDepartmentComponent {
  location: string;
  isTrueCurrentLocation: boolean | null;
  setIsTrueCurrentLocation:()=>void;
}
