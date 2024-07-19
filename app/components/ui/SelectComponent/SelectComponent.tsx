import "./styles.scss";
import Select from "react-select";
import { IProps } from "./types";

export default function SelectComponent({
  options = [],
  placeholder,
  id,
  onChange,
  value,
}: IProps) {
  return (
    <Select
      id={id}
      placeholder={placeholder}
      onChange={(value) => onChange(value)}
      isClearable
      defaultValue={value}
    />
  );
}
