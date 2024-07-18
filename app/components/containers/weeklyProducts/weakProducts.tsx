import Section from "../../ui/section/section";
import "./weakProducts.scss";
import { CardSlider } from "../../ui/slider/CardSlider";
import Card from "../../ui/card/Card";
import { Endpoints, ProductsResponseType } from "@/app/api/types";
import { getProducts } from "@/app/api/api";
import { memo, Suspense } from "react";
import Loader from "../../ui/Loader/Loader";

const WeakProducts = memo(async () => {
  // const products: ProductsResponseType = await getProducts({
  //   endpoint: Endpoints.beer,
  // });

  return (
    <Section>
      <p className="title typography__h2">Товари тижня</p>

      <Suspense fallback={<Loader />}>
        {/* <CardSlider
        products={products.content.map((product) => (
          <swiper-slide key={product.id}>
            <Card {...product} />
          </swiper-slide>
        ))}
      /> */}
      </Suspense>
    </Section>
  );
});

export default WeakProducts;
