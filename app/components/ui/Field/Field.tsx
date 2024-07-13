"use client";
import { useState } from "react";
import { IProps } from "./types";
import "./field.scss";

export default function Field({
  id,
  type,
  placeholder,
  value,
  validation,
  onChange,
}: IProps) {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isBlur, setIsBlur] = useState<boolean>(false);
  const invalid = isValid !== null && !isValid;
  return (
    <div className="field">
      <input
        id={id}
        type={type}
        value={value}
        onChange={({ target: { id, value } }) => {
          onChange({ id, value });
          if (!value) {
            setIsValid(null);
            return;
          }
          setIsValid(validation(value));
        }}
        onBlur={({ target: { value } }) => setIsBlur(value.length > 0)}
        className={invalid ? "invalid" : undefined}
      />
      <label htmlFor={id} className={isBlur || value ? "blur t-b-50" : "t-b-50"}>
        {placeholder}
      </label>
      {invalid && <span className="typography__h6">{isValid.toString()}</span>}
    </div>
  );
}
