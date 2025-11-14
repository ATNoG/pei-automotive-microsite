import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLogo}></div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Leveraging IoT sensor networks to provide real-time intelligent transportation alerts for safer, smarter driving
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/calendar/overview">
              📅 Explore Project's Calender
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/milestones">
              📖 See Docs
            </Link>
          </div>
        </div>
        <div className={styles.heroIllustration}></div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <StatsSection />
      </main>
    </Layout>
  );
}

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>5</div>
            <div className={styles.statLabel}>Team Members</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>4</div>
            <div className={styles.statLabel}>Development Sprints</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Key Milestones</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>Safety Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
}
