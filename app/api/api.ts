import axios from 'axios';
import { GEOLOCATION_API_KEY, GEOLOCATION_URL, NEW_POST_API_KEY, NEW_POST_URL } from '../static/constants';
import { localizationCity } from '../utils';


export async function getLocation() {
  const params = new URLSearchParams({
    apiKey: GEOLOCATION_API_KEY,
    fields: 'city',
  });
  const { data } = await axios.get(
    `${GEOLOCATION_URL}?${params.toString()}`,
  );
  return localizationCity(data.city);
}

export async function getNewPostSettlementsLib({ city }: { city: string }) {
  const data = await axios.post(NEW_POST_URL, {
    apiKey: NEW_POST_API_KEY,
    modelName: 'AddressGeneral',
    calledMethod: 'searchSettlements',
    methodProperties: {
      CityName: city,
    },
  });
  return data;
}

export async function getDepartmentsAndPostalLib({
  cityRef,
  streetName,
}: { cityRef: string; streetName: string }) {
  const data = await axios.post(NEW_POST_URL, {
    apiKey: NEW_POST_API_KEY,
    modelName: 'AddressGeneral',
    calledMethod: 'getWarehouses',
    methodProperties: {
      FindByString: streetName,
      CityRef: cityRef,
      Limit: 50,
    },
  });
  return data;
}
