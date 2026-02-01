'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={styles.badgeDot}></span>
            <span>Available for Contract & Full-time Roles</span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Product Manager and <span className={styles.highlight}>Builder.</span>
          </motion.h1>
          
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
             <Image 
              src="/profile-hero.jpg" 
              alt="Wonderful Onwuchekwa" 
              width={240} 
              height={240} 
              className={styles.profileImage}
              priority
            />
          </motion.div>


          
          <motion.p 
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Shipping products users love and businesses need — proven across 
            <span className={styles.accent}> logistics</span>, <span className={styles.accent}>fintech</span>, and <span className={styles.accent}>SaaS</span> with measurable impact.
          </motion.p>
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/contact" className={styles.primaryBtn}>
              Get in Touch
            </Link>
            <a href="#about" className={styles.secondaryBtn}>
              Read Bio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
