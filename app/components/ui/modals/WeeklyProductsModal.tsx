import { beer } from '@/app/static/bear';
import Gallery from '../../containers/gallery/gallery';
import Card from '../card/Card';
import { CardSlider } from '../slider/CardSlider';

export default function WeeklyProductsModal() {
  const products = Array(8)
    .fill(1)
    .map(() => {
      const id = crypto.randomUUID();
      return { ...beer, id };
    });
  return (
    <section className="cart-modal__container cart-modal__section ">
      <p className="cart-modal__title">Рекомендовані товари</p>
      <CardSlider products={products} slidesPerView={3} />
    </section>
  );
}
