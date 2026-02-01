import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/profile-about.jpg" 
                alt="Profile Picture" 
                width={400} 
                height={400} 
                className={styles.profileImage}
                priority
              />
            </div>
          </div>
          
          <div className={styles.contentColumn}>
            <div className={styles.content}>
              <h2 className={styles.heading}>I&apos;m Wonderful Onwuchekwa</h2>
              <p className={styles.bio}>
                Product Manager with a passion for building logistics and fintech solutions that solve real problems. 
                I&apos;ve shipped features like multi-currency payments and B2B delivery platforms that help businesses run smoother and grow faster.
              </p>
              <p className={styles.bio}>
                What drives me is simple: I care about understanding what frustrates users, then working with talented teams to fix it. 
                I get energized when a feature launches and genuinely makes someone&apos;s job easier. For me, great product management 
                is about listening well, communicating clearly, and staying focused on building things people actually want to use.
              </p>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>3+</span>
                <span className={styles.statLabel}>Core Industries</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>10+</span>
                <span className={styles.statLabel}>Products Shipped</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>70%</span>
                <span className={styles.statLabel}>Efficiency Gain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
