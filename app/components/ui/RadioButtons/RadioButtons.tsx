import "./radio.scss";
import { IProps } from "./types";

export default function RadioButtons({
  id,
  placeholder,
  name,
  checked,
  onChange,
  children,
}: IProps) {
  return (
    <>
      <div className="radio-buttons">
        <input
          type="radio"
          id={id}
          value={id}
          name={name}
          checked={checked}
          onChange={({ target: { value } }) => onChange({ value })}
        />
        <label htmlFor={id}>{placeholder}</label>
      </div>
      {children}
    </>
  );
}
