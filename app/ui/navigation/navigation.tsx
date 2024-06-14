import Link from 'next/link';
import styles from './navigation.module.scss';

const links = [
  { name: 'Про нас', href: '/about-us' },
  { name: 'Магазин', href: '/shop' },
  { name: 'Доставка і оплата', href: '/dev-payment' },
];

export function Navigation() {
  return (
    <ul className={styles.navigation}>
      {links.map(({ name, href }) => (
        <li className={styles.navigation__item} key={name}>
          <Link href={href}> {name} </Link>
        </li>
      ))}
    </ul>
  );
}
