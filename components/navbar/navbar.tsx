import Text from "../text/text";
import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Text type="silkscreen" color="white" size={26}>
        CEDC Directory
      </Text>

      <ul className={styles["nav-list"]}>
        <li className={`${styles["nav-item"]} ${styles.active}`}>
          <Text type="silkscreen" color="white" size={14}>
            Ecosystem
          </Text>
        </li>
        <li className={styles["nav-item"]}>
          <Text type="silkscreen" color="white" size={14}>
            Spotlight
          </Text>
        </li>
        <li className={styles["nav-item"]}>
          <Text type="silkscreen" color="white" size={14}>
            I&apos;m feeling lucky
          </Text>
        </li>
        <li className={styles["nav-item"]}>
          <Text type="silkscreen" color="white" size={14}>
            Integrate on canto
          </Text>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
