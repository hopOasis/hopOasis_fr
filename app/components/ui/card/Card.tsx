'use client';
import './card.scss';
import ImageBlock from './components/ImageBlock';
import DescriptionBlock from './components/DescriptionBlock';
import { GeneratedProductType } from '@/app/types/products';

export const Card = (props: GeneratedProductType) => {
  return (
    <article className="card shadow">
      <ImageBlock {...props}/>
      <DescriptionBlock {...props} />
    </article>
  );
};
