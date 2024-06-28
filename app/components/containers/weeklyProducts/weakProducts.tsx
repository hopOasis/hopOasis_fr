'use client';
import { beer } from '@/app/static/bear';
// import Card from '../../ui/card/Card';
import Section from '../../ui/section/section';
import './weakProducts.scss';
import { CardSlider } from '../../ui/slider/CardSlider';
// import Gallery from '../gallery/gallery';

export default function WeakProducts() {
  const products = Array(8)
    .fill(1)
    .map(() => {
      const id = crypto.randomUUID();
      return { ...beer, id };
    });
  return (
    <Section>
      <p className="title">Товари тижня</p>
      {/* <Gallery> */}
      <CardSlider products={products} />
      {/* </Gallery> */}
    </Section>
  );
}
