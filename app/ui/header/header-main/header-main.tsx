import { SaleLink } from "../../links/sale-link/sale-link";
import styles from "./header-main.module.scss";

export default function HeaderMain() {
  return (
    <div className={styles["header-main"]}>
      <div>
        <h2 className={styles["header-main__title"]}>Завітай до нашої оази!</h2>
        <p className={styles["header-main__information"]}>
        Спробуй наші авторські  види пива та <br/> відпочинь від повсякденної метушні
        </p>
        <SaleLink />
      </div>
    </div>
  );
}
