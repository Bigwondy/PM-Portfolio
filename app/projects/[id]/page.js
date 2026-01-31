import { projects } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import styles from './ProjectDetail.module.css';

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <article className={styles.article}>
        <div className="container">
          <Link href="/#projects" className={styles.backLink}>
            <ArrowLeft size={18} /> Back to Projects
          </Link>
          
          <header className={styles.header}>
            <span className={styles.company}>{project.company}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.productType}>{project.product}</p>
          </header>

          <div className={styles.grid}>
            <div className={styles.mainContent}>
              <section className={styles.section}>
                <h2>The Problem</h2>
                <p>{project.problem}</p>
              </section>

              <section className={styles.section}>
                <h2>Task & My Role</h2>
                <p>{project.role}</p>
              </section>

              <section className={styles.section}>
                <h2>The Solution</h2>
                <p>{project.solution}</p>
              </section>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sticky}>
                <div className={styles.card}>
                  <h3>Impact & Results</h3>
                  <ul className={styles.metricsList}>
                    {project.metrics.map((metric, index) => (
                      <li key={index}>
                        <CheckCircle size={18} className={styles.icon} />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.liveBtn}
                    >
                      Visit Live Site
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
