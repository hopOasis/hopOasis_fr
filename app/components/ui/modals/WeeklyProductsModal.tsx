import Card from "../card/Card";
import { CardSlider } from "../slider/CardSlider";
import {  IPropsWeeklyProducts } from "./types";

export default function WeeklyProductsModal({ products }: IPropsWeeklyProducts) {
  return (
    <section className="cart-modal__container cart-modal__section ">
      <p className="cart-modal__title">Рекомендовані товари</p>
      <CardSlider
        slidesPerView={3}
        products={products.map((product) => (
          <swiper-slide key={product.id}>
            <Card {...product} />
          </swiper-slide>
        ))}
      />
    </section>
  );
}
