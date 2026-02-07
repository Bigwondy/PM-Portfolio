import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.name}>Wonderful Onwuchekwa</h3>
            <p className={styles.role}>Product Manager</p>
          </div>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/cheks/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
            <a href="https://github.com/Bigwondy" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub
            </a>
            <a href="mailto:wondy.onwuchekwa@gmail.com" className={styles.socialLink}>
              Email
            </a>
            <a href="https://drive.google.com/file/d/18fwKC9kNBlEo7IOeLYiPhcYHKqqrH148/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Resume
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Wonderful Onwuchekwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
