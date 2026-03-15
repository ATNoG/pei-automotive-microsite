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
                        <span className={styles.heroTitleHighlight}>
                            Automotive App
                        </span>
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        Android Automotive OS driver assistance application
                    </p>
                    <p className={styles.heroDescription}>
                        Leveraging real-life sensor infrastructure in Aveiro to
                        provide real-time intelligent transportation alerts for
                        safer, smarter driving. A contribution to the{" "}
                        <a
                            href="https://www.it.pt/Projects/Index/4934"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DT4MOB
                        </a>{" "}
                        project within the{" "}
                        <a
                            href="https://www.it.pt/Groups/Index/19"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ATNoG
                        </a>{" "}
                        research group.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/category/milestones"
                        >
                            View Docs
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            to="/team"
                        >
                            Team
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

function CollaborationSection() {
    return (
        <section className={styles.collabSection}>
            <div className="container">
                <h2 className={styles.collabTitle}>In Collaboration With</h2>
                <div className={styles.collabGrid}>
                    <a
                        href="https://www.it.pt/Groups/Index/19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.collabLogo}
                    >
                        <img
                            src="/pei-automotive-microsite/img/atnog.png"
                            alt="ATNoG"
                        />
                    </a>
                    <a
                        href="https://www.it.pt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.collabLogo}
                    >
                        <img
                            src="/pei-automotive-microsite/img/it.png"
                            alt="IT"
                        />
                    </a>
                    <a
                        href="https://www.ua.pt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.collabLogo}
                    >
                        <img
                            src="/pei-automotive-microsite/img/ua.png"
                            alt="UA"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

function AppShowcase() {
    return (
        <section className={styles.appShowcaseSection}>
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
                            {
                                <img
                                    src="/pei-automotive-microsite/img/UI.png"
                                    alt="App Interface"
                                />
                            }
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
                            {
                                <img
                                    src="/pei-automotive-microsite/img/c2e.png"
                                    alt="Infrastructure Diagram"
                                />
                            }
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
                            {
                                <img
                                    src="/pei-automotive-microsite/img/carbon.png"
                                    alt="Backend Architecture"
                                />
                            }
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
