import Link from 'next/link';
import   './sale-link.scss';

export const SaleLink = () => {
  return (
    <Link href={'/sale'} className="sale-link">
      {'Магазин'}
    </Link>
  );
};
