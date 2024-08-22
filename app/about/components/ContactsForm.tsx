"use client";

import Field from "@/app/components/ui/Field/Field";
import { fields } from "@/app/static/form";
import { useState } from "react";
import { ContactsFormType } from "../types";

export default function ContactsForm() {
  const [values, setValues] = useState<ContactsFormType>({
    firstName: "",
    phone: "",
  });
  
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <form className="contacts-form" onSubmit={onSubmit}>
      {[fields[0], fields[2]].map((props) => (
        <Field
          key={props.id}
          {...props}
          value={values[props.id] }
          onChange={({ id, value }) => setValues({ ...values, [id]: value })}
        />
      ))}
      <button className="main-link dark" type="submit">
        Замовити дзвінок
      </button>
    </form>
  );
}
