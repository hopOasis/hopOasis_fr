import { FormFieldType } from "@/app/types/types";

export interface IProps extends FormFieldType {
  onChange: (e: React.InputHTMLAttributes<HTMLInputElement>) => void;
}
