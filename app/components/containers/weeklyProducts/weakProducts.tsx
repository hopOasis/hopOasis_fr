import { beer } from "@/app/static/bear";
import Section from "../../ui/section/section";
import "./weakProducts.scss";
import { CardSlider } from "../../ui/slider/CardSlider";
import Card from "../../ui/card/Card";
import { memo } from "react";

const WeakProducts = memo(() => {
  const products = Array(8)
    .fill(1)
    .map(() => {
      const id = crypto.randomUUID();
      return { ...beer, id };
    });
  return (
    <Section>
      <p className="title">Товари тижня</p>
      <CardSlider
        products={products.map((product) => (
          <swiper-slide key={product.id}>
            <Card {...product} />
          </swiper-slide>
        ))}
      />
    </Section>
  );
});

export default WeakProducts;
