import Section from "../../ui/section/section";
import "./weakProducts.scss";
import { CardSlider } from "../../ui/slider/CardSlider";
import Card from "../../ui/card/Card";
import { memo } from "react";
import { getData } from "@/app/api/api";
import { Endpoints, PruductsResponseType } from "@/app/api/types";

const WeakProducts = memo(async () => {
  const products: PruductsResponseType = await getData({
    endpoint: Endpoints.beer,
  });
  return (
    <Section>
      <p className="title typography__h2">Товари тижня</p>
      <CardSlider
        products={products.content.map((product) => (
          <swiper-slide key={product.id}>
            <Card {...product} />
          </swiper-slide>
        ))}
      />
    </Section>
  );
});

export default WeakProducts;
