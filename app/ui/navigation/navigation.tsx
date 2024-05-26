import Link from "next/link";
import styles from './navigation.module.scss';

const links = [
  { name: "Пиво", href: "/beer" },
  { name: "Cідр", href: "/cider" },
  { name: "Снеки", href: "/snacks" },
  { name: "Набори", href: "/sets" },
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
