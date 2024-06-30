import Card from "../card/Card";
import { CardSlider } from "../slider/CardSlider";
import { getData } from "@/app/api/api";
import { Endpoints } from "@/app/api/types";
import { useEffect, useState } from "react";
import { ProductType } from "@/app/types/types";

export default function WeeklyProductsModal({list}) {
  // const [cart, setCart] = useState<ProductType[] | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const products = await getData({
  //       endpoint: Endpoints.beer,
  //     });
  //     setCart(products);
  //   };
  //   fetchData();
  // }, []);

  // if (!cart) return null;

  return (
    <section className="cart-modal__container cart-modal__section ">
      <p className="cart-modal__title">Рекомендовані товари</p>
      <CardSlider
        slidesPerView={3}
        products={list.map((product) => (
          <swiper-slide key={product.id}>
            <Card {...product} />
          </swiper-slide>
        ))}
      />
    </section>
  );
}
