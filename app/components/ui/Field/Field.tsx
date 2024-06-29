"use client";
import { useState } from "react";
import { IProps } from "./types";
import "./field.scss";

export default function Field({
  id,
  type,
  placeholder,
  validation,
  onChange,
}: IProps) {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [blurClass, setBlurClass] = useState<boolean>(false);

  return (
    <div className="field">
      <input
        id={id}
        type={type}
        onChange={({ target: { id, value } }) => {
          onChange({ id, value });
          setIsValid(validation(value));
        }}
        onBlur={({ target: { value } }) => setBlurClass(value.length > 0)}
      />
      <label htmlFor={id} className={blurClass ? "blur t-b-50" : "t-b-50"}>
        {placeholder}
      </label>
      <span>{isValid !== null && isValid.toString()}</span>
    </div>
  );
}
