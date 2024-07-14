import Field from "@/app/components/ui/Field/Field";
import { IPropsDepartmentComponent } from "../types";
import { fields } from "@/app/static/form";

export const DepartmentComponent = ({
  isTrueCurrentLocation,
  value,
}: IPropsDepartmentComponent) => {
  return (
    <div>
      <Field
        id="city"
        type="text"
        placeholder="Місто"
        validation={(value) => value.length >= 3}
        onChange={({ id, value }) => console.log({ [id]: value })}
        value={value}
      />
      {/* {fields.map((props) => (
        <Field
          key={props.id}
          {...props}
          onChange={({ id, value }) => setValues({ ...values, [id]: value })}
        />
      ))} */}
    </div>
  );
};
