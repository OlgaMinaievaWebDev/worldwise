import styles from "../components/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Copyright by WorldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
