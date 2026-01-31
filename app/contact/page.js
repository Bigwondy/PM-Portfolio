import styles from './contact.module.css';
import { Mail, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xreknyzd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

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
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <h3>Message Sent! 🚀</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className={styles.resetBtn}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Your Name" 
                    className={styles.input}
                    required 
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="name@company.com" 
                    className={styles.input}
                    required 
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project..." 
                    className={styles.textarea}
                    required 
                    disabled={status === 'submitting'}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 size={18} className={styles.spinner} />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                  <p className={styles.errorText}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
