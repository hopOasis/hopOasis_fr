export const PROXI_URL = process.env.NEXT_PUBLIC_HOST_URL;
export const API_URL = process.env.API_URL;
export const NEW_POST_API_KEY = process.env.NEW_POST_API_KEY;
export const NEW_POST_URL = process.env.NEW_POST_URL;
export const GEOLOCATION_API_KEY = process.env.GEOLOCATION_API_KEY;
export const GEOLOCATION_URL = process.env.GEOLOCATION_URL;


export const ProxiEndpoints = {
  beer: PROXI_URL + 'beers',
  cart: PROXI_URL + 'cart',
  cartDefaults: PROXI_URL + 'cart/defaults',
  rating: PROXI_URL + 'rating',
  products: PROXI_URL + 'products',
  //needed to create and add real proxi
  weekProducts: PROXI_URL + 'beers',
};

export const ApiEndpoints = {
  beer: API_URL + 'beers',
  cart: API_URL + 'carts',
  rating: API_URL + 'ratings',
};

export const oaza_guest = 'oaza_guest';
