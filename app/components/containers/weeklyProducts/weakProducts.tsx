import { beer } from "@/app/static/bear";
import Card from "../../ui/card/Card";
import Section from "../../ui/section/section";
import "./weakProducts.scss";
import Gallery from "../gallery/gallery";

export default function WeakProducts() {
  return (
    <Section>
      <p className="title">WeakProductsSection</p>
      <Gallery>
        {Array(4)
          .fill(1)
          .map((el, idx) => (
            <Card {...beer} key={idx} />
          ))}
      </Gallery>
    </Section>
  );
}
