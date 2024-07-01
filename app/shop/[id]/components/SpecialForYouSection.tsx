import { getData } from "@/app/api/api";
import Card from "@/app/components/ui/card/Card";
import Section from "@/app/components/ui/section/section";
import { CardSlider } from "@/app/components/ui/slider/CardSlider";
import { memo } from "react";
import { Endpoints, PruductsResponseType } from "@/app/api/types";

 const SpecialForYouSection = memo(async () => {
   const products: PruductsResponseType = await getData({
     endpoint: Endpoints.beer,
   });
  return (
    <Section>
      <p className="title">Спеціально для тебе</p>
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
