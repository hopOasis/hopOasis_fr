import { FormFieldType } from "@/app/types/types";

export interface IProps
  extends Pick<FormFieldType, "id"  | "placeholder"> {
  name: string;
  checked: boolean;
  onChange: ({ value }: { value: string }) => void;
  children?: React.ReactElement
}
