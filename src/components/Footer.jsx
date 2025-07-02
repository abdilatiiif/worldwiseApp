import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {" "}
      <p className={styles.copyright}>
        Copyright 2025 by MisterLatif & Co {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
