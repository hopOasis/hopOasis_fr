import Link from "next/link";
import Icon from "./icon";
import { iconPaths } from "./icon-path";
import styles from './icons.module.scss';

export function Icons() {
  return (
    <ul className={styles.icons}>
      {iconPaths.map(({ d, href }) => (
        <li key={d} >
          <Link href={href}>
            <Icon coordinates={d} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
