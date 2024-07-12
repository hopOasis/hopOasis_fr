import Section from "../../ui/section/section";
import "./weakProducts.scss";
import { CardSlider } from "../../ui/slider/CardSlider";
import Card from "../../ui/card/Card";
// import { memo } from "react";
import { ProxiEndpoints, PruductsResponseType } from "@/app/api/types";
import { getProducts } from "@/app/api/api";
import https from "https";
import axios from "axios";

const WeakProducts = async () => {

  const products = await getProducts();
  // const products: PruductsResponseType = await res.json();
//  const agent = new https.Agent({
//    rejectUnauthorized: false,
//  });
//     const res = await axios.get(ProxiEndpoints.beer, {
//       httpsAgent: agent,
//     });
  
//   console.log("res", res)
    // const products: PruductsResponseType = await res.json();


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
};

export default WeakProducts;
