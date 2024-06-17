import { HeaderBottom } from './header-bottom/HeaderBottom';
import HeaderMain from './header-main/header-main';
import HeaderTop from './header-top/header-top';
import styles from './header.module.scss';
export function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderMain />
      <HeaderBottom />
    </header>
  );
}
