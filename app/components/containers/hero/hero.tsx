import { routes } from '@/app/static/routes';
import MainLink from '../../ui/links/links';
import './hero.scss';
import { Palitra } from '@/app/types/types';

export default function Hero() {
  return (
    <section className="hero t-w-500">
      <section className="container">
        <div className="hero__wrapper">
          <h1 className="hero__title">Завітай до нашої оази!</h1>
          <p className="hero__text">Спробуй наші авторські види пива та відпочинь від повсякденної метушні</p>
          <MainLink href={routes[2].href.pathname} variant={Palitra.light}>
            Магазин
          </MainLink>
        </div>
      </section>
    </section>
  );
}
