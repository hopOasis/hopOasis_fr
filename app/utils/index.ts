import gsap from 'gsap';
import store from 'store';
import { ProductType } from '../types/types';
export const parseProductName = (name: string) => name.split(' ').join('_');
import { v4 as uuidv4 } from 'uuid';

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
    const cartId = store.get(this.keyCartId);
    if (!cartId) {
      const cartId = uuidv4();
      store.set(this.keyCartId, cartId);
      return cartId;
    }
    return cartId;
  },
};
