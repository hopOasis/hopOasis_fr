import Card from "@/app/components/ui/card/Card";
import Section from "@/app/components/ui/section/section";
import { CardSlider } from "@/app/components/ui/slider/CardSlider";
import { memo } from "react";
import {  ProxiEndpoints, PruductsResponseType } from "@/app/api/types";

 const SpecialForYouSection = memo(
   async () => {
     const res = await fetch(ProxiEndpoints.beer);
     const products: PruductsResponseType = await res.json();

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
   }
 );

export default SpecialForYouSection;
