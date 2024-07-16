"use client";
import Field from "@/app/components/ui/Field/Field";
import { fields } from "@/app/static/form";
import { useState } from "react";
import { IAuthorizationFormState } from "./types";
import { animate } from "@/app/utils";
import EyeButton from "./EyeButton";

export default function AuthorizationForm() {
  const [values, setValues] = useState<IAuthorizationFormState>({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState<boolean>(false);

  const defineType = (type: string): string =>
    type === "password" ? (!showPass ? "password" : "text") : type;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    };
    
  return (
    <form onSubmit={onSubmit}>
      {[fields[3], fields[4]].map((props) => (
        <Field
          {...props}
          key={props.id}
          type={defineType(props.type)}
          value={values[props.id]}
          onChange={({ id, value }) => setValues({ ...values, [id]: value })}
        >
          {props.type === "password" && (
            <EyeButton
              onClick={() => {
                setShowPass((prev) => !prev);
                animate.eye();
              }}
            />
          )}
        </Field>
      ))}
      <button className="main-link blue" type="submit">
        Вхід
      </button>
    </form>
  );
}
