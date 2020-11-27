import Link from "next/link";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/" prefetch={false}>
        <a className={styles.header__link}>Main</a>
      </Link>
    </div>
  );
};

export default Header;
