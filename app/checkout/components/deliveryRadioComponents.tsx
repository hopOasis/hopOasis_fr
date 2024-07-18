"use client";
import { IPropsDepartmentComponent } from "../types";
import AsyncSelect from "react-select/async";
import { getNewPostSettlementsLib } from "@/app/api/api";
import { throttle } from "throttle-debounce";
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
  const throttledFunc = throttle(
    1000,
    async (city: string, resolve: (val: any) => void) => {
      const { data } = await getNewPostSettlementsLib({ city });
      if (!data.success) return resolve(defaultOption);
      const options = data.data[0].Addresses.map(({ Present }) => ({
        value: Present,
        label: Present,
      }));
      resolve(options);
    },
    { noLeading: true }
  );

  const promiseOptions = async (city: string) => {
    if (!city) return defaultOption;

    const options = await new Promise((resolve) => {
      throttledFunc(city, resolve);
    });

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
