import { FormStateType } from "@/app/checkout/types";
import { FormFieldType } from "@/app/types/types";

export interface IProps extends FormFieldType {
  onChange: (
    e: React.InputHTMLAttributes<HTMLInputElement>
  ) => React.Dispatch<React.SetStateAction<FormStateType>>;
  value: string;
}
