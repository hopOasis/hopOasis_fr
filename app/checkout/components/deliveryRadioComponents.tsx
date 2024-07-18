"use client";
import { IPropsDepartmentComponent } from "../types";
import AsyncSelect from "react-select/async";
import { getNewPostSettlementsLib } from "@/app/api/api";
const defaultOption = [
  {
    label: "Почніть вводти назву міста. Викоистовуйте українську літерацію",
    value: null,
  },
];
export const DepartmentComponent = ({
  isTrueCurrentLocation,
  value,
}: IPropsDepartmentComponent) => {
  const promiseOptions = async (city: string) => {
    if (!city) return defaultOption;
    const { data } = await getNewPostSettlementsLib({ city });
    if (!data.success) return defaultOption;
    const options = data.data[0].Addresses.map(({ Present }) => ({
      value: Present,
      label: Present,
    }));

    return options;
  };
  return (
    <AsyncSelect
      id="city"
      placeholder="Місто"
      cacheOptions
      loadOptions={promiseOptions}
      defaultOptions
    />
  );
};
