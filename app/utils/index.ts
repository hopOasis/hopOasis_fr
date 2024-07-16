import gsap from "gsap";
import store from "store";
import { ProductType } from "../types/types";

export const parseProductName = (name: string) => name.split(" ").join("_");

export const animate = {
  modal: {
    open: () => {
      const tl = gsap.timeline();
      tl.to("dialog", { top: 100, opacity: 1, duration: 0.2 }).to("dialog", {
        top: 0,
        duration: 0.35,
      });
      return tl;
    },
    close: ({ cb }: { cb: () => void }) => {
      gsap.to("dialog", {
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
      tl.to(".popup", { top: "10%", opacity: 1, duration: 0.2 }).to(".popup", {
        top: "5%",
        duration: 0.35,
      });
      return tl;
    },
    close: () => {
      gsap.to("dialog", {
        top: -500,
        opacity: 0,
        duration: 0.2,
      });
    },
  },
  ageGateModal: {
    open: () => {
      const tl = gsap.timeline();
      tl.to(".age-gate-modal", { top: 100, opacity: 1, duration: 0.2 }).to(
        ".age-gate-modal",
        {
          top: 0,
          duration: 0.35,
        }
      );
      return tl;
    },
    close: ({ cb }: { cb: () => void }) => {
      gsap.to(".age-gate-modal", {
        top: -500,
        opacity: 0,
        duration: 0.2,
        onComplete: cb,
      });
    },
  },
  eye: () => {
    const tl = gsap.timeline();
    tl.to("#eye", {
      scaleY: 0.5,
      duration: 0.25,
    }).to("#eye", {
      scaleY: 1,
      duration: 0.1,
    });
  },
};

type CitiesType = { [key: string]: string };

export const localizationCity = (city: string) => {
  const cities: CitiesType = {
    kiev: "київ",
    kyiv: "київ",
  };
  return (
    cities?.[city.toLowerCase()] || "CITY not found in localization Library"
  );
};

type LocalStorageSetType = {
  quantity: number;
} & Pick<ProductType, "id">;

export const oazaStorage = {
  key: "oaza_guest",
  keySecure: "oaza_age_gate_secure",
  set: function ({ id, quantity }: LocalStorageSetType) {
    const data = this.get();

    if (!data) {
      store.set(this.key, [{ id, quantity }]);
      return "Added to localstorage";
    }
    data.push({ id, quantity });

    const newData = new Set(data.map((item) => JSON.stringify(item)));

    store.set(
      this.key,
      [...newData].map((item) => JSON.parse(item))
    );
    return "Added to localstorage";
  },
  get: function () {
    return store.get(this.key);
  },
  isInStore: function (id: Pick<ProductType, "id">) {
    const data = this.get();
    if (!data) return false;
    return !!this.get().find(({ id: storeId }) => storeId === id);
  },
  getItemById: function (id: Pick<ProductType, "id">) {
    return this.get().find(({ id: storeId }) => storeId === id);
  },
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
};
