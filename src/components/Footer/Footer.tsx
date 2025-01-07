import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a
            href="#"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i>{" "}
            {/* You can replace with icons */}
          </a>
          <a
            href="#"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="#"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>

        <div className={styles.footerLinks}>
          <a href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="/terms-of-service" className={styles.footerLink}>
            Terms of Service
          </a>
          <a href="/contact" className={styles.footerLink}>
            Contact Us
          </a>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Appscrip-task. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
