import gsap from "gsap";

export const parseProductName = (name: string) => name.split(" ").join("_");

export const animate = {
  modal: {
    tl: gsap.timeline(),
    open: function () {
      //   const newTl = gsap.timeline();
      this.tl
        .to("dialog", { top: 100, opacity: 1, duration: 0.2 })
        .to("dialog", { top: 0, duration: 0.35 });
      return this.tl;
    },
    close: function ({ cb }) {
      return this.tl.reverse().callbackScope("onComplete", cb);
    },
  },
};
