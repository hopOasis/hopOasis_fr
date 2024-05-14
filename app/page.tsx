import styles from "./page.module.scss";
import { Header } from "./ui/header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
