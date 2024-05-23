import Link from "next/link";
import styles from "./about-link.module.scss";

const AboutLink = () => {
  return (
    <Link className={styles["about-link"]} href={"/about"}>
      Детальніше
    </Link>
  );
};

export default AboutLink;
