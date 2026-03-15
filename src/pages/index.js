import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <div className={styles.heroContent}>
                    {/* The logo image is expected to be located at static/img/logo.svg */}
                    <div className={styles.heroLogo}></div>
                    <Heading as="h1" className={styles.heroTitle}>
                        PEI{" "}
                        <span className={styles.heroTitleHighlight}>
                            Automotive
                        </span>
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        Android Automotive OS driver assistance application
                    </p>
                    <p className={styles.heroDescription}>
                        Leveraging real-life sensor infrastructure in Aveiro to
                        provide real-time intelligent transportation alerts for
                        safer, smarter driving. A contribution to the DT4MOB
                        project within the ATNoG research group.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/calendar/overview"
                        >
                            View Calendar
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/category/milestones"
                        >
                            Documentation
                        </Link>
                        <a
                            className="button button--secondary button--lg"
                            href="https://github.com/ATNoG/pei-automotive-frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repo
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

function CollaborationSection() {
    return (
        <section className={clsx(styles.collabSection, styles.scrollAnimate)}>
            <div className="container">
                <h2 className={styles.collabTitle}>In Collaboration With</h2>
                <div className={styles.collabGrid}>
                    {/* Place your collaboration logos in static/img/ and uncomment the img tags below */}
                    <div className={styles.collabLogo}>
                        {/* <img src="/pei-automotive-microsite/img/company1.png" alt="Company 1" /> */}
                        <span>Company 1 Logo</span>
                    </div>
                    <div className={styles.collabLogo}>
                        {/* <img src="/pei-automotive-microsite/img/company2.png" alt="Company 2" /> */}
                        <span>Company 2 Logo</span>
                    </div>
                    <div className={styles.collabLogo}>
                        {/* <img src="/pei-automotive-microsite/img/company3.png" alt="Company 3" /> */}
                        <span>Company 3 Logo</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AppShowcase() {
    return (
        <section
            className={clsx(styles.appShowcaseSection, styles.scrollAnimate)}
        >
            <div className={styles.appShowcaseContainer}>
                <div className={styles.appShowcaseHeader}>
                    <h2 className={styles.appShowcaseTitle}>
                        System Architecture & Features
                    </h2>
                    <p className={styles.appShowcaseSubtitle}>
                        A robust, edge-to-cloud infrastructure enabling
                        real-time telemetry processing and digital twin
                        representation.
                    </p>
                </div>

                <div className={styles.appGrid}>
                    <div className={styles.appCard}>
                        <h3 className={styles.appCardTitle}>
                            Android Automotive App
                        </h3>
                        <p className={styles.appCardDescription}>
                            A native driver assistance application built for
                            AAOS, delivering real-time telemetry and hazard
                            alerts directly to the vehicle's infotainment
                            system.
                        </p>
                        {/* Place your app screenshot in static/img/ and uncomment the img tag */}
                        <div className={styles.appImageWrapper}>
                            {/* <img src="/pei-automotive-microsite/img/app-screenshot.png" alt="App Interface" /> */}
                            <span>App Interface Placeholder</span>
                        </div>
                    </div>

                    <div className={styles.appCard}>
                        <h3 className={styles.appCardTitle}>
                            Cloud2Edge Stack
                        </h3>
                        <p className={styles.appCardDescription}>
                            Deployed on Kubernetes (k3s) utilizing Eclipse Hono
                            and Ditto for seamless IoT device connectivity,
                            telemetry representation, and digital twin
                            management.
                        </p>
                        {/* Place your infra diagram in static/img/ and uncomment the img tag */}
                        <div className={styles.appImageWrapper}>
                            {/* <img src="/pei-automotive-microsite/img/infra-diagram.png" alt="Infrastructure Diagram" /> */}
                            <span>Infrastructure Diagram Placeholder</span>
                        </div>
                    </div>

                    <div className={styles.appCard}>
                        <h3 className={styles.appCardTitle}>
                            Microservices Backend
                        </h3>
                        <p className={styles.appCardDescription}>
                            Python-based microservices utilizing MQTT with
                            Eclipse Mosquitto for reliable, asynchronous message
                            brokering and real-time event detection.
                        </p>
                        {/* Place your backend architecture image in static/img/ and uncomment the img tag */}
                        <div className={styles.appImageWrapper}>
                            {/* <img src="/pei-automotive-microsite/img/backend-architecture.png" alt="Backend Architecture" /> */}
                            <span>Backend Architecture Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Overview"
            description="Android Automotive OS driver assistance app that leverages data from real-life sensors in Aveiro."
        >
            <HomepageHeader />
            <main>
                <CollaborationSection />
                <AppShowcase />
            </main>
        </Layout>
    );
}
