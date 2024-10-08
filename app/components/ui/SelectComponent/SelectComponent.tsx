import Select from "react-select";
import { IProps } from "./types";
import { styles } from "./select-styles.js";

export default function SelectComponent({
  placeholder,
  id,
  onChange,
  value,
}: IProps) {
  return (
    <Select
      styles={styles}
      id={id}
      placeholder={placeholder}
      onChange={(value) => onChange(value)}
      isClearable
      defaultValue={value}
    />
  );
}
