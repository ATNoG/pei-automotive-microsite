import clsx from 'clsx';
import styles from './styles.module.css';

const TeamMembers1 = [
  {
    name: 'Diogo Nascimento',
    role: 'Dev',
    image: 'https://avatars.githubusercontent.com/u/152305663?v=4',
    github: 'https://github.com/DCANascimento',
  },
  {
    name: 'Duarte Branco',
    role: 'Dev',
    image: 'https://avatars.githubusercontent.com/u/123300057?v=4',
    github: 'https://github.com/duartebranco',
  },
  {
    name: 'Eduardo Romano',
    role: 'Dev',
    image: 'https://avatars.githubusercontent.com/u/188698407?v=4',
    github: 'https://dribbble.com/EduardoRomano44',
  },
];

const TeamMembers2 = [
    {
        name: 'Filipe Viseu',
        role: 'Dev',
        image: 'https://avatars.githubusercontent.com/u/144609567?v=4',
        github: 'https://github.com/FilipeNV1',
    },
    {
        name: 'Samuel Vinhas',
        role: 'Dev',
        image: 'https://avatars.githubusercontent.com/u/153758633?v=4',
        github: 'https://github.com/samuelvinhas',
    },
];

const Orientors = [
  {
    name: 'Rafael Direito',
    image: 'https://avatars.githubusercontent.com/u/30239227?v=4',
    github: 'https://github.com/rafael-direito',
  },
  {
    name: 'Diogo Gomes',
    image: 'https://avatars.githubusercontent.com/u/137684?v=4',
    github: 'https://github.com/dgomes',
  },
];

function PersonCard({ name, role, image, github }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <a href={github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          <svg className={styles.githubIcon} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Team Members</h2>
        <div className={styles.cardsGrid}>
          {TeamMembers1.map((member, idx) => (
            <PersonCard key={idx} {...member} />
          ))}
        </div>
        <div className={styles.cardsGrid} style={{marginTop: '2rem'}}>
          {TeamMembers2.map((member, idx) => (
            <PersonCard key={idx} {...member} />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Orientors</h2>
        <div className={styles.cardsGrid}>
          {Orientors.map((orientor, idx) => (
            <PersonCard key={idx} {...orientor} />
          ))}
        </div>
      </div>
    </div>
  );
}
