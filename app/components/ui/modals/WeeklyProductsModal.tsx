import { beer } from "@/app/static/bear";
import Gallery from "../../containers/gallery/gallery";
import Card from "../card/Card";

export default function WeeklyProductsModal() {
  return (
    <section className="cart-modal__container cart-modal__section ">
      <p className="cart-modal__title">Рекомендовані товари</p>
      <Gallery>
        {Array(3)
          .fill(1)
          .map((el, idx) => (
            <Card {...beer} key={idx} />
          ))}
      </Gallery>
    </section>
  );
}
