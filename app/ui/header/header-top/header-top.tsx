import { Icons } from "../../icons/icons";
import { Navigation } from "../../navigation/navigation";
import styles from "./header-top.module.scss";

export default function HeaderTop() {
  return (
    <div className={styles["header-top"]}>
      <h1 className={styles["header-top__title"]}>Хмільна Оаза</h1>
      <Navigation />
      <Icons />
    </div>
  );
}
