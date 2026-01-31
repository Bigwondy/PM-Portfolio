import styles from './SkillsSection.module.css';

const skillGroups = [
  {
    category: "Strategy & Discovery",
    skills: ["Product Discovery", "User Research", "Roadmap Planning", "Feature Prioritization", "A/B Testing"]
  },
  {
    category: "Design & Execution",
    skills: ["Wireframing (Figma)", "Agile (Scrum/Kanban)", "Backlog Management", "Usability Testing"]
  },
  {
    category: "Technical",
    skills: ["SQL", "API Documentation", "REST APIs", "SDLC", "HTML/CSS", "Git"]
  },
  {
    category: "Soft Skills",
    skills: ["Strategic Thinking", "Stakeholder Management", "User Empathy", "Cross-functional Collaboration"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Expertise & Skills</h2>
        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <div key={index} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.skills.map((skill, i) => (
                  <li key={i} className={styles.skillBadge}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
