import gsap from "gsap";

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
};

type CitiesType = { [key: string]: string };

export const localizationCity = (city: string) => {
  const cities: CitiesType = {
    kyiv: "київ",
  };
  return cities[city.toLowerCase()];
};
