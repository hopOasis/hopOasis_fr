import Card from "@/app/components/ui/card/Card";
import Section from "@/app/components/ui/section/section";
import { CardSlider } from "@/app/components/ui/slider/CardSlider";
import { beer } from "@/app/static/bear";
import { memo } from "react";

 const SpecialForYouSection = memo(() => {
  const products = Array(8)
    .fill(1)
    .map(() => {
      const id = crypto.randomUUID();
      return { ...beer, id };
    });

  return (
    <Section>
      <p className="title">Спеціально для тебе</p>
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

export default SpecialForYouSection;
