import Field from "@/app/components/ui/Field/Field";
import { IPropsDepartmentComponent } from "../types";
import { fields } from "@/app/static/form";

export const DepartmentComponent = ({
  isTrueCurrentLocation,
}: IPropsDepartmentComponent) => {
  return (
    <div>
      {fields.map((props) => (
        <Field
          key={props.id}
          {...props}
          onChange={({ id, value }) => setValues({ ...values, [id]: value })}
        />
      ))}{" "}
    </div>
  );
};
