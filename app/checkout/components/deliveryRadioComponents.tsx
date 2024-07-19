"use client";
import { IPropsDepartmentComponent } from "../types";
import { getNewPostSettlementsLib, getNewPostStreetsLib } from "@/app/api/api";
import { throttle } from "throttle-debounce";
import { ThrottleType } from "./type";
import { useEffect, useState } from "react";
import Loader from "@/app/components/ui/Loader/Loader";
import SelectComponent from "@/app/components/ui/SelectComponent/SelectComponent";
import AsyncSelectComponent from "@/app/components/ui/SelectComponent/AsyncSelectComponent";
const defaultOption = [
  {
    label: "Почніть вводити текст. Викоистовуйте українську літерацію",
    value: null,
  },
];
export const DepartmentComponent = ({
  isTrueCurrentLocation,
  location,
  setIsTrueCurrentLocation,
}: IPropsDepartmentComponent) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cityRef, setCityRef] = useState<any | {}>({});
  // const [streetRef, setStreetRef] = useState<string | null>(null);

  useEffect(() => {
    if (!isTrueCurrentLocation) return;
    setLoading(true);
    const getData = async () => {
      try {
        const { data } = await getNewPostSettlementsLib({ city: location });
        setCityRef(data.data[0].Addresses[0]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [isTrueCurrentLocation]);

  const throttledFunc = throttle(
    1000,
    async ({
      inputValue,
      resolve,
      fetchFn,
      generateOptionsFn,
    }: ThrottleType) => {
      const { data } = await fetchFn(inputValue);
      if (!data.success) return resolve(defaultOption);
      const options = generateOptionsFn(data);
      resolve(options);
    },
    { noLeading: true }
  );

  const cityOptions = async (city: string) => {
    if (!city) return defaultOption;
    const options = await new Promise((resolve) => {
      throttledFunc({
        inputValue: city,
        resolve,
        fetchFn: (val) => getNewPostSettlementsLib({ city: val }),
        generateOptionsFn: (data) =>
          data.data[0].Addresses.map(({ Present, DeliveryCity }) => ({
            value: DeliveryCity,
            label: Present,
          })),
      });
    });
    return options;
  };

  // const streetOptions = async (street: string) => {
  //   if (!cityRef) return defaultOption;

  //   const options = await new Promise((resolve) => {
  //     throttledFunc({
  //       inputValue: street,
  //       resolve,
  //       fetchFn: (val) => getNewPostStreetsLib({ cityRef, streetName: val }),
  //       generateOptionsFn: (data) =>
  //         data.data[0].Addresses.map(({ Present, SettlementStreetRef }) => ({
  //           value: SettlementStreetRef,
  //           label: Present,
  //         })),
  //     });
  //   });
  //   return options;
  // };

  // console.log("isTrueCurrentLocation", isTrueCurrentLocation);
  return (
    <div>
      {isTrueCurrentLocation ? (
        loading ? (
          <Loader />
        ) : (
          <SelectComponent
            id="_city"
            placeholder={cityRef.Present}
            value={{ label: cityRef.Present, value: cityRef.Ref }}
            options={() => []}
            onChange={() => setIsTrueCurrentLocation(false)}
          />
        )
      ) : (
        <AsyncSelectComponent
          id="city"
          placeholder="Місто"
          options={cityOptions}
          onChange={(value) => setCityRef(value ? value.value : null)}
        />
      )}
      {/* {cityRef && (
        <AsyncSelectComponent
          id="street"
          placeholder="Ведіть назву вулиці"
          options={streetOptions}
          onChange={(value) => setStreetRef(value ? value.value : null)}
        />
      )} */}
    </div>
  );
};
