import Card from "@/app/components/ui/card/Card";
import Section from "@/app/components/ui/section/section";
import { CardSlider } from "@/app/components/ui/slider/CardSlider";
import { memo } from "react";
import { Endpoints, ProductsResponseType } from "@/app/api/types";
import { getProducts } from "@/app/api/api";

const SpecialForYouSection = memo(async () => {
  const products: ProductsResponseType = await getProducts({
    endpoint: Endpoints.beer,
  });

  return (
    <Section>
      <p className="title typography__h2">Спеціально для тебе</p>
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

export default SpecialForYouSection;
