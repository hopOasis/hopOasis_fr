import styles from './sale-link.module.scss';
import Link from "next/link";

export const SaleLink = () => {
  return (
    <Link href={"/sale"} className={styles["sale-link"]} type="button">
      Детальніше
    </Link>
  );
};
