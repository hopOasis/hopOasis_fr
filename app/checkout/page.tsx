"use client";
import { useState } from "react";
import Field from "../components/ui/Field/Field";
import { LogoLink } from "../components/ui/links/links";
import { fields } from "../static/form";
import "./checkout.scss";
import { FormStateType } from "./types";

export default function Page() {
  const [values, setValues] = useState<FormStateType>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  return (
    <>
      <header>
        <div className="container">
          <LogoLink variant="dark" />
        </div>
      </header>
      <main className="checkout container">
        <form className="form">
          <div className="form__fields-block">
            <p className="typography__h8">Особисті дані</p>
            {fields.map((props) => (
              <Field
                key={props.id}
                {...props}
                onChange={({ id, value }) =>
                  setValues({ ...values, [id]: value })
                }
              />
            ))}
          </div>
        </form>
      </main>
    </>
  );
}
