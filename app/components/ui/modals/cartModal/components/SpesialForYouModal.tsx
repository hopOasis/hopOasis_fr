import { Card } from '../../../card/Card';
import NoItems from '../../../NoItems/NoItems';
import { CardSlider } from '../../../slider/CardSlider';
import { IPropsSpecialForYou } from '../types';

export default async function SpecialForYouModal({ specialForYou }: IPropsSpecialForYou) {
  return (
    <section className="cart-modal__container cart-modal__section ">
      <p className="cart-modal__title typography__h3">Спеціально для тебе</p>
      {!specialForYou.content.length ? (
        <NoItems />
      ) : (
        <CardSlider
          slidesPerView={3}
          products={specialForYou.content.map((product) => (
            <swiper-slide key={product.id}>
              <Card {...product} />
            </swiper-slide>
          ))}
        />
      )}
    </section>
  );
}
