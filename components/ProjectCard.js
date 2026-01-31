import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${project.id}`} className={styles.cardLink}>
        {project.image && (
          <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        )}
      </Link>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.company}>{project.company}</span>
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.externalLink}
              title="Visit Live Site"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        
        <Link href={`/projects/${project.id}`} className={styles.titleLink}>
          <h3 className={styles.title}>{project.title}</h3>
        </Link>
        
        <p className={styles.description}>{project.problem.substring(0, 150)}...</p>
      </div>
    </div>
  );
}
