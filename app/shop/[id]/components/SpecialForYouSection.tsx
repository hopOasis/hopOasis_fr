import Card from "@/app/components/ui/card/Card";
import Section from "@/app/components/ui/section/section";
import { CardSlider } from "@/app/components/ui/slider/CardSlider";
import { memo, Suspense } from "react";
import { Endpoints, ProductsResponseType } from "@/app/api/types";
import { getProducts } from "@/app/api/api";
import Loader from "@/app/components/ui/Loader/Loader";

const SpecialForYouSection = memo(async () => {
  // const products: ProductsResponseType = await getProducts({
  //   endpoint: Endpoints.beer,
  // });

  return (
    <Section>
      <p className="title typography__h2">Спеціально для тебе</p>
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

export default SpecialForYouSection;
