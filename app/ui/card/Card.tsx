import type { ProductCard } from '@/app/api/definitions';
import Image from 'next/image';
import { HiOutlineHeart } from 'react-icons/hi';
import { CardButton } from '../buttons/card-button/card-button';
import styles from './card.module.scss';

type Props = {
  beer: Pick<
    ProductCard,
    'description' | 'name' | 'priceLarge' | 'volumeLarge'
  >;
};
export const Card: React.FC<Props> = ({ beer }) => {
  const { description, name, priceLarge, volumeLarge } = beer;
  return (
    <article className={styles.card}>
      <Image
        src={'/beer.png'}
        width={302}
        height={302}
        alt={`picture of ${name}`}
      />
      <div className={styles.card__description}>
        <p className={styles.card__info}>{`${description} ${name}`}</p>
        <p className={styles.card__info}>{volumeLarge}</p>
        <p className={styles.card__price}>{`${priceLarge} грн.`}</p>
      </div>
      <div className={styles['card__button-container']}>
        <CardButton />
      </div>
      <HiOutlineHeart className={styles.card__icon} />
    </article>
  );
};

export default Card;
