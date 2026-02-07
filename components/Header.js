'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeProvider';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
  ];

  const resumeLink = "https://drive.google.com/file/d/18fwKC9kNBlEo7IOeLYiPhcYHKqqrH148/view?usp=sharing";

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} container`}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">Wonderful Onwuchekwa<span className={styles.accent}>.</span></Link>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={styles.link}>
                {link.name}
              </a>
            ))}
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              Resume
            </a>
          </nav>

          {/* Actions (CTA + Theme Toggle + Mobile Menu) */}
          <div className={styles.actions}>
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className={styles.ctaWrapper}>
              <a href="mailto:wondy.onwuchekwa@gmail.com" className={styles.cta}>
                Hire Me
              </a>
            </div>

            <button 
              className={styles.mobileToggle}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button 
              className={styles.closeParams}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={styles.mobileLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>

            <a 
              href="mailto:wondy.onwuchekwa@gmail.com" 
              className={`${styles.cta} ${styles.mobileCta}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
