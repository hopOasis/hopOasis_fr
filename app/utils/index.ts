import gsap from 'gsap';
import store from 'store';
import { CartResponseType, ProductsResponseType } from '../api/types';
import { BeersApiResponse } from '../types/beers';
import { CiderApiResponse } from '../types/ciders';
import { SnackApiResponse } from '../types/snacks';
import { SetsApiResponse } from '../types/sets';
import { GeneratedProduct, PreparedProductApiResponse } from '../types/products';
import { CartProxiResponse } from '../types/cart';
export const parseProductName = (name: string) => name.split(' ').join('_');

export const animate = {
  modal: {
    open: () => {
      const tl = gsap.timeline();
      tl.to('dialog', { top: 100, opacity: 1, duration: 0.2 }).to('dialog', {
        top: 0,
        duration: 0.35,
      });
      return tl;
    },
    close: ({ cb }: { cb: () => void }) => {
      gsap.to('dialog', {
        top: -500,
        opacity: 0,
        duration: 0.2,
        onComplete: cb,
      });
    },
  },
  popup: {
    open: () => {
      const tl = gsap.timeline();
      tl.to('.popup', { top: '10%', opacity: 1, duration: 0.2 }).to('.popup', {
        top: '5%',
        duration: 0.35,
      });
      return tl;
    },
    close: () => {
      gsap.to('dialog', {
        top: -500,
        opacity: 0,
        duration: 0.2,
      });
    },
  },
  ageGateModal: {
    open: () => {
      const tl = gsap.timeline();
      tl.to('.age-gate-modal', { top: 100, opacity: 1, duration: 0.2 }).to('.age-gate-modal', {
        top: 0,
        duration: 0.35,
      });
      return tl;
    },
    close: ({ cb }: { cb: () => void }) => {
      gsap.to('.age-gate-modal', {
        top: -500,
        opacity: 0,
        duration: 0.2,
        onComplete: cb,
      });
    },
  },
  eye: () => {
    const tl = gsap.timeline();
    tl.to('#eye', {
      scaleY: 0.5,
      duration: 0.25,
    }).to('#eye', {
      scaleY: 1,
      duration: 0.1,
    });
  },
};

type CitiesType = { [key: string]: string };

export const localizationCity = (city: string) => {
  const cities: CitiesType = {
    kiev: 'київ',
    kyiv: 'київ',
  };
  return cities?.[city.toLowerCase()] || 'CITY not found in localization Library';
};

export function generateRandomID():string {
  const randomBigInt = BigInt.asUintN(
    64,
    BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) *
      BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
  );
  const number = Math.round(Number(randomBigInt) * 0.000000000001);
  return number.toString();
}

export const oazaStorage = {
  keySecure: 'oaza_age_gate_secure',
  keyCartId: 'oaza_cart_id',

  setSecure: function () {
    store.set(this.keySecure, true);
    return true;
  },
  getSecure: function () {
    return !!store.get(this.keySecure);
  },
  clearSecure: function () {
    store.remove(this.keySecure);
  },
  getCartId: function () {
    return !!store.get(this.keyCartId);
  },
  generateAndSetCartId: function () {
    const cartId = store.get(this.keyCartId);
    if (!cartId) {
      const cartId = generateRandomID();
      store.set(this.keyCartId, cartId);
      return cartId;
    }
    return cartId;
  },
};

export const generateProducts = ({
  products,
  cart,
}: {
  products: PreparedProductApiResponse;
  cart: CartProxiResponse;
}): GeneratedProduct => {
  const res = products.content.map((product) => {
    const isInCart = cart.items.some(({ itemId: cartId }) => cartId === product.id);
    return isInCart ? { ...product, isInCart: true } : { ...product, isInCart: false };
  });

  return { ...products, content: res };
};

export const generateId = ({ type, id }: { type: string; id: number }): string => `${type}-${id}`;

export const preparingProducts = (
  produtsResponse: BeersApiResponse | CiderApiResponse | SnackApiResponse | SetsApiResponse,
): PreparedProductApiResponse => {
  const products = {
    ...produtsResponse,
    content: produtsResponse.content.map((product) => ({
      id: generateId({ type: product.type, id: product.id }),
      name: product.beerName || product.ciderName || product.snackName || products.name,
      volumeLarge: product.volumeLarge || product.weightLarge || null,
      volumeSmall: product.volumeSmall || product.weightLarge || null,
      priceLarge: product.priceLarge || product.priceLarge || product.price,
      priceSmall: product.priceSmall || null,
      description: product.description,
      beerColor: product.beerColor || null,
      image: product.image || product.ciderImageName || product.snackImageName || product.productImageName,
      rating: product.averageRating,
      votes: product.ratingCount,
      specialOfferIds: product.specialOfferIds,
    })),
  };
  return products;
};
