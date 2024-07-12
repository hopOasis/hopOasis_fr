import Section from "../../ui/section/section";
import "./weakProducts.scss";
import { CardSlider } from "../../ui/slider/CardSlider";
import Card from "../../ui/card/Card";
import { Endpoints, PruductsResponseType } from "@/app/api/types";
import { getProducts } from "@/app/api/api";
import { memo } from "react";

const WeakProducts = memo(async () => {
  const products: PruductsResponseType = await getProducts({
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
