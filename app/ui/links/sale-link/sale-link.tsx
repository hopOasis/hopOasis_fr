import Link from 'next/link';
import styles from './sale-link.module.scss';

export const SaleLink = () => {
  return (
    <Link href={'/sale'} className={styles['sale-link']} type="button">
      {'Магазин'}
    </Link>
  );
};
