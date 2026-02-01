import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      
      <section id="projects" className={styles.projectsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              A selection of products I&apos;ve helped build and scale across different industries.
            </p>
          </div>
          
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      <About />
      <Footer />
    </>
  );
}
