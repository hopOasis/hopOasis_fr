"use client";
import React, { useEffect, useRef, useState } from "react";
import "./cardslider.scss";
import { SwiperContainer, register } from "swiper/element/bundle";
import Icons from "../icons/icons";

type Props = {
  products: React.ReactElement[];
  slidesPerView?: number;
};

export const CardSlider: React.FC<Props> = ({
  products,
  slidesPerView = 4,
}) => {
  const swiperElRef = useRef<SwiperContainer>(null);
  const [isActiveIdx, setIsActiveIdx] = useState(0);

  useEffect(() => {
    register();
    if (swiperElRef.current) {
      Object.assign(swiperElRef.current, {
        on: {
          slideChange(e) {
            setIsActiveIdx(e.activeIndex);
            e.isEnd && setIsActiveIdx(-1);
          },
        },
      });
      swiperElRef.current.initialize();
    }
  }, []);

  return (
    <>
      <div className="swiper-navigation">
        <button
          type="button"
          className={
            isActiveIdx > 0 || isActiveIdx === -1
              ? "active-swiper-arrow"
              : undefined
          }
          onClick={() => swiperElRef.current?.swiper.slidePrev()}
        >
          <Icons name="swiper-left-arrow" />
        </button>
        <button
          type="button"
          className={isActiveIdx === -1 ? undefined : "active-swiper-arrow"}
          onClick={() => swiperElRef.current?.swiper.slideNext()}
        >
          <Icons name="swiper-right-arrow" />
        </button>
      </div>
      <swiper-container
        slides-per-view={slidesPerView}
        speed={1000}
        init={false}
        ref={swiperElRef}
      >
        {products}
      </swiper-container>
    </>
  );
};
