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
  value: string;
  isTrueCurrentLocation: string | null;
}
