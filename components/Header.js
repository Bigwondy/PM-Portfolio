import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/">Wonderful<span className={styles.accent}>.</span></Link>
        </div>
        <nav className={styles.nav}>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#about" className={styles.link}>About</a>
        </nav>
        <div className={styles.ctaWrapper}>
          <a href="mailto:wondy.onwuchekwa@gmail.com" className={styles.cta}>Hire Me</a>
        </div>
      </div>
    </header>
  );
}
