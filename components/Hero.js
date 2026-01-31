import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Available for Contract & Full-time Roles</span>
          </div>

          <h1 className={styles.title}>
            Product Manager and <span className={styles.highlight}>Builder.</span>
          </h1>
          
          <div className={styles.imageWrapper}>
             <Image 
              src="/profile-hero.jpg" 
              alt="Wonderful Onwuchekwa" 
              width={240} 
              height={240} 
              className={styles.profileImage}
              priority
            />
          </div>


          
          <p className={styles.tagline}>
            Shipping products users love and businesses need — proven across 
            <span className={styles.accent}> logistics</span>, <span className={styles.accent}>fintech</span>, and <span className={styles.accent}>SaaS</span> with measurable impact.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Get in Touch
            </Link>
            <a href="#about" className={styles.secondaryBtn}>
              Read Bio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
