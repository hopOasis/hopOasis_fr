import Section from "../../ui/section/section";
import "./weakProducts.scss";
// import { getProducts } from '@/app/api/api';
import {
  // Endpoints,
  ProductsResponseType,
  ProxiEndpoints,
} from "@/app/api/types";
// import { getProducts } from "@/app/api/api";
import { memo, Suspense } from "react";
import Loader from "../../ui/Loader/Loader";
import { CardSlider } from "../../ui/slider/CardSlider";
import Card from "../../ui/card/Card";

const WeakProducts = async () => {
  const resProducts = await fetch(ProxiEndpoints.beer);
  const products:ProductsResponseType = await resProducts.json();

  return (
    <Section>
      <p className="title typography__h2">Товари тижня</p>
      {/* <Suspense fallback={<Loader />}>
        <CardSlider
          products={products.content.map((product) => (
            <swiper-slide key={product.id}>
              <Card {...product} />
            </swiper-slide>
          ))}
        />
      </Suspense> */}
    </Section>
  );
};

export default WeakProducts;