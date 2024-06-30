import Section from "../../ui/section/section";
import "./weakProducts.scss";
import { CardSlider } from "../../ui/slider/CardSlider";
import Card from "../../ui/card/Card";
import { memo } from "react";
import { ShopCardType } from "@/app/shop/types";
import { getData } from "@/app/api/api";
import { Endpoints } from "@/app/api/types";

const WeakProducts = memo(async () => {
  const products: ShopCardType[] = await getData({
    endpoint: Endpoints.beer,
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
