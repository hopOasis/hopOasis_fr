export const PROXI_URL = process.env.NEXT_PUBLIC_HOST_URL;
export const API_URL = process.env.API_URL;
export const NEW_POST_API_KEY = process.env.NEW_POST_API_KEY;
export const NEW_POST_URL = process.env.NEW_POST_URL;
export const GEOLOCATION_API_KEY = process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY;
export const GEOLOCATION_URL = process.env.NEXT_PUBLIC_GEOLOCATION_URL;

export const ProxiEndpoints = {
  beers: PROXI_URL + 'beers',
  beersRating: (id: string) => `${PROXI_URL}beers/${id}/rating`,
  ciders: PROXI_URL + 'ciders',
  snacks: PROXI_URL + 'snacks',
  sets: PROXI_URL + 'sets',
  carts: PROXI_URL + 'carts',
  cartDefaults: PROXI_URL + 'carts/defaults',
  ratings: PROXI_URL + 'ratings',
  weekProducts: PROXI_URL + 'weekProducts',
  specialForYou: PROXI_URL + 'specialForYou',
  dbGet: PROXI_URL + 'DB/get',
  dbPost: PROXI_URL + 'DB/post',
  dbSaveCookie: PROXI_URL + 'DB/cookie/saveCookieToDataBase',
  dbRemoveCookie: PROXI_URL + 'DB/cookie/removeCookiesAfterExpire',
  currentUserVotes: PROXI_URL + 'DB/user/getCurrentUserData/getVotes',
};

export const ApiEndpoints = {
  beers: API_URL + 'beers',
  ciders: API_URL + 'ciders',
  snacks: API_URL + 'snacks',
  sets: API_URL + 'products-bundle',
  carts: API_URL + 'carts',
  ratings: API_URL + 'ratings',
  weekProducts: API_URL + 'special-offers/active',
  //needed to add real api
  specialForYou: API_URL + 'beers',
};

export const oaza_guest = 'oaza_guest';
