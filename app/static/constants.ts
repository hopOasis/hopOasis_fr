export const PROXI_URL = process.env.NEXT_PUBLIC_HOST_URL;
export const API_URL = process.env.API_URL;
export const NEW_POST_API_KEY = process.env.NEW_POST_API_KEY;
export const NEW_POST_URL = process.env.NEW_POST_URL;
export const GEOLOCATION_API_KEY = process.env.GEOLOCATION_API_KEY;
export const GEOLOCATION_URL = process.env.GEOLOCATION_URL;


export const ProxiEndpoints = {
  beers: PROXI_URL + 'beers',
  snacks: PROXI_URL + 'snacks',
  carts: PROXI_URL + 'carts',
  cartDefaults: PROXI_URL + 'carts/defaults',
  ratings: PROXI_URL + 'ratings',
  products: PROXI_URL + 'products',
  weekProducts: PROXI_URL + 'weekProducts',
  specialForYou: PROXI_URL + 'specialForYou',
};

export const ApiEndpoints = {
  beers: API_URL + 'beers',
  ciders: API_URL + 'ciders',
  snacks: API_URL + 'snacks',
  sets: API_URL + 'products-bundle',
  carts: API_URL + 'carts',
  ratings: API_URL + 'ratings',
  //needed to add real api
  weekProducts: API_URL + 'special-offers/active',
  specialForYou: API_URL + 'beers',
};

export const oaza_guest = 'oaza_guest';
