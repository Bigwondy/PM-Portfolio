import styles from './contact.module.css';
import { Mail, Calendar, ArrowRight, Loader2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <div className={`${styles.content} container`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Let&apos;s Connect</h1>
          <p className={styles.subtitle}>
            Have a project in mind or looking for a Product Manager?
            <br />I&apos;m currently available for contract and full-time roles.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Booking Section */}
          <div className={styles.bookingSection}>
            <h2 className={styles.bookingTitle}>Book a Quick Call</h2>
            <p className={styles.bookingText}>
              Want to discuss your project directly? Schedule a 30-minute intro call.
            </p>
            <a 
              href="https://calendly.com/wondy-onwuchekwa/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.bookingBtn}
            >
              <Calendar size={20} />
              Book a 30-min Call
            </a>
          </div>

          {/* Contact Form */}
          <div className={styles.formSection}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className={styles.input}
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="name@company.com" 
                  className={styles.input}
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className={styles.textarea}
                  required 
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
