'use client';
import { getNewPostSettlementsLib, getSettlementStreets } from '@/app/api/api';
import Loader from '@/app/components/ui/Loader/Loader';
import AsyncSelectComponent from '@/app/components/ui/SelectComponent/AsyncSelectComponent';
import SelectComponent from '@/app/components/ui/SelectComponent/SelectComponent';
import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { IPropsDepartmentComponent } from '../types';
import { ThrottleType } from './type';
import { fields } from '@/app/static/form';
import Field from '@/app/components/ui/Field/Field';
const defaultOption = [
  {
    label: 'Почніть вводити текст. Викоистовуйте українську літерацію',
    value: null,
  },
];
export const CourierComponent = ({
  isLoading,
  isTrueCurrentLocation,
  location,
  setIsTrueCurrentLocation,
}: IPropsDepartmentComponent) => {
  const [loading, setLoading] = useState<boolean>(isLoading);
  const [cityRef, setCityRef] = useState<any | null>(null);
  const [departmentRef, setDepartmentRef] = useState<any | null>(null);
  const [values, setValues] = useState({
    building_number: '',
    appartment_number: '',
  });


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
  }, [isTrueCurrentLocation, location]);

  const throttledFunc = throttle(
    1000,
    async ({ inputValue, resolve, fetchFn, generateOptionsFn }: ThrottleType) => {
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

  const settlementStreets = async (street: string) => {
    if (!cityRef) return defaultOption;

    const options = await new Promise((resolve) => {
      throttledFunc({
        inputValue: street,
        resolve,
        fetchFn: (val) =>
          getSettlementStreets({
            cityRef: cityRef.Ref,
            streetName: val,
          }),
        generateOptionsFn: (streets) =>
          //@ts-ignore

          streets.data[0].Addresses.map((data) => ({
            value: data.Present,
            label: data.Present,
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
          placeholder="Вулиця"
          options={settlementStreets}
          onChange={(value) => {
            setDepartmentRef(value ? value.transferData : null);
          }}
        />
      )}
      {cityRef &&
        departmentRef &&
        [fields[5]].map((props) => (
          <Field
            key={props.id}
            {...props}
            //@ts-ignore

            value={values[props.id]}
            onChange={({ id, value }) =>
              //@ts-ignore
              setValues({ ...values, [id]: value })
            }
          />
        ))}
      {cityRef &&
        departmentRef &&
        values.building_number &&
        [fields[6]].map((props) => (
          <Field
            key={props.id}
            {...props}
            //@ts-ignore

            value={values[props.id]}
            onChange={({ id, value }) =>
              //@ts-ignore
              setValues({ ...values, [id]: value })
            }
          />
        ))}
    </div>
  );
};
