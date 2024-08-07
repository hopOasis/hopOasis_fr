'use client';
import {
  getDepartmentsAndPostalLib,
  getNewPostSettlementsLib,
} from '@/app/api/api';
import Loader from '@/app/components/ui/Loader/Loader';
import AsyncSelectComponent from '@/app/components/ui/SelectComponent/AsyncSelectComponent';
import SelectComponent from '@/app/components/ui/SelectComponent/SelectComponent';
import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
//@ts-ignore
import { IPropsDepartmentComponent } from '../types';
import NewPostCharacters from './NewPostCharacters';
import { ThrottleType } from './type';
const defaultOption = [
  {
    label: 'Почніть вводити текст. Викоистовуйте українську літерацію',
    value: null,
  },
];
export const DepartmentComponent = ({
  isTrueCurrentLocation,
  location,
  setIsTrueCurrentLocation,
}: IPropsDepartmentComponent) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cityRef, setCityRef] = useState<any | null>(null);
  const [departmentRef, setDepartmentRef] = useState<any | null>(null);

  useEffect(() => {
    if (!isTrueCurrentLocation) return;
    setLoading(true);
    const getData = async () => {
      try {
        const { data } = await getNewPostSettlementsLib({ city: location });
        setCityRef(data.data[0].Addresses[0]);
      } catch (error) {
        //@ts-ignore

        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [isTrueCurrentLocation, location]);

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
    { noLeading: true },
  );

  const cityOptions = async (city: string) => {
    if (!city) return defaultOption;
    const options = await new Promise((resolve) => {
      throttledFunc({
        inputValue: city,
        resolve,
        fetchFn: (val) => getNewPostSettlementsLib({ city: val }),
        generateOptionsFn: (addresses) =>
          //@ts-ignore
          addresses.data[0].Addresses.map((data) => ({
            value: data.DeliveryCity,
            label: data.Present,
            transferData: data,
          })),
      });
    });
    return options;
  };

  const departmentsAndPostalOptions = async (street: string) => {
    if (!cityRef) return defaultOption;

    const options = await new Promise((resolve) => {
      throttledFunc({
        inputValue: street,
        resolve,
        fetchFn: (val) =>
          getDepartmentsAndPostalLib({
            cityRef: cityRef.DeliveryCity,
            streetName: val,
          }),
        generateOptionsFn: (streets) =>
          //@ts-ignore

          streets.data.map((data) => ({
            value: data.Ref,
            label: data.Description,
            transferData: data,
          })),
      });
    });
    return options;
  };

  return (
    <div className="delivery-component">
      {isTrueCurrentLocation ? (
        loading ? (
          <Loader />
        ) : (
          <SelectComponent
            id="_city"
            placeholder={cityRef?.Present}
            value={{ label: cityRef?.Present, value: cityRef?.Ref }}
            onChange={() => {
              setIsTrueCurrentLocation(false);
              setCityRef(null);
              setDepartmentRef(null);
            }}
          />
        )
      ) : (
        <AsyncSelectComponent
          id="city"
          placeholder="Місто"
          options={cityOptions}
          onChange={(value) => {
            if (!value) {
              setCityRef(null);
              setDepartmentRef(null);
              return;
            }
            setCityRef(value.transferData);
          }}
        />
      )}
      {cityRef && (
        <AsyncSelectComponent
          id="street"
          placeholder="Адреса або номер відділення"
          options={departmentsAndPostalOptions}
          onChange={(value) => {
            setDepartmentRef(value ? value.transferData : null);
          }}
        />
      )}
      {departmentRef && cityRef && <NewPostCharacters {...departmentRef} />}
    </div>
  );
};
