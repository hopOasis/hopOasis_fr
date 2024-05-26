import { SaleLink } from "../../links/sale-link/sale-link";
import styles from "./header-main.module.scss";

export default function HeaderMain() {
  return (
    <div className={styles["header-main"]}>
      <div>
        <p className={styles["header-main__sale"]}>Акція діє до 31.05</p>
        <h2 className={styles["header-main__title"]}>Відкрий новий смак!</h2>
        <p className={styles["header-main__information"]}>
          Спробуй наш новий смак пива та
          <br /> отримай знижку 20% на всю наступну <br /> покупку
        </p>
        <SaleLink />
      </div>
    </div>
  );
}
