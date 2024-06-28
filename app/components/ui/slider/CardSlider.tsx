"use client";
import React, { useEffect, useRef } from "react";
import "./cardslider.scss";
import { SwiperContainer, register } from "swiper/element/bundle";

type Props = {
  products: React.ReactElement[];
  slidesPerView?: number;
};

export const CardSlider: React.FC<Props> = ({
  products,
  slidesPerView = 4,
}) => {
  const swiperElRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    register();
    if (swiperElRef.current) {
      Object.assign(swiperElRef.current, {});
      swiperElRef.current.initialize();
    }
  }, []);

  return (
    <swiper-container
      slides-per-view={slidesPerView}
      space-between={24}
      speed={1000}
      init={false}
      navigation={true}
      ref={swiperElRef}
    >
      {products}
    </swiper-container>
  );
};
