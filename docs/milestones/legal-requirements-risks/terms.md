---
title: Terms of Use & Privacy Policy
---

# Automotive App Terms of Use & Privacy Policy
**Effective Date:** 20/04/2026

Welcome to the Automotive App. This application is developed as part of an academic engineering project ("Projeto em Engenharia Informática") at the Universidade de Aveiro, in collaboration with the Instituto de Telecomunicações de Aveiro (ITAv).

By explicitly consenting to these terms within the App, you agree to the following conditions.

## Terms Of Use

### 1. User Eligibility
To use this Service, you must meet the following requirements:
* **Age and Licensing:** You must be at least 18 years old and hold a valid driver's license to use this Service. By using the App, you confirm that you meet these requirements.
* **Emergency Use:** This application is built for standard civilian commuting. It has **not** been tested, certified, or authorized for use by emergency vehicles (e.g., ambulances, police, fire departments) acting in an official capacity.

### 2. Critical Safety Warnings
Your primary responsibility is safe driving. 
* **Road Information Prevails:** This App is a driving aid. Actual road conditions, traffic signs, police instructions, and traffic laws always supersede any information or alerts provided by the App.
* **No Reliance on Maneuver Coordination:** Features such as overtaking alerts or highway entry instructions are strictly for situational awareness. You must **not** rely solely on the App to execute maneuvers. You are legally obligated to check your mirrors and blind spots.
* **Offline and Connectivity Limitations:** The App relies on continuous internet connectivity. In scenarios where internet connectivity is not guaranteed, the App operates on a fail-silent basis and may not display any alerts or maneuver coordination instructions.
* **Interface Interaction:** Because this App runs natively on Android Automotive OS, you must only interact with the interface when it is safe and legal to do so.
* **System Limitations:** The Service relies on experimental IoT sensor data (DT4MOB) and digital twin infrastructure (Eclipse Ditto). Network latency, sensor failures, or environmental factors may cause alerts (e.g., speeding, overtaking, hazards) to be delayed and/or inaccurate.

### 3. License and Restrictions
You are granted a free, non-exclusive, revocable license to use the App for personal, non-commercial use. You may not:
* Reverse engineer, decompile, or copy the App or its backend infrastructure.
* Systematically scrape or extract data from the ITAv sensor network or Mosquitto message brokers.
* Use the App for commercial fleet tracking or any illegal purposes.

### 4. Limitation of Liability
We strive to provide a helpful and innovative academic tool, but the Service is provided "as is" without commercial warranties of uninterrupted performance or absolute accuracy. To the maximum extent permitted by applicable EU and Portuguese law, the Universidade de Aveiro, ITAv, and the development team shall not be liable for indirect damages, loss of profits, or damages resulting from your driving decisions, system latency, or sensor inaccuracies. Nothing in these terms limits liability for gross negligence, willful misconduct, or personal injury where mandated by law.

### 5. Service Modifications and Project Lifespan
As an academic research project, the App, backend microservices, and sensor data streams may be modified, suspended, or permanently discontinued at any time without prior notice, particularly at the conclusion of the academic term.

---

## Privacy Policy
As the App processes your location, we are committed to protecting your privacy in compliance with the General Data Protection Regulation (GDPR).

### 1. Data Controller & Data Protection Officer (DPO)
The legal responsibility for data processing lies jointly with the Universidade de Aveiro and ITAv.
**Data Controller:**
Universidade de Aveiro / ITAv
Campus Universitário de Santiago, 3810 - 193 Aveiro – Portugal
**Contact Email:** it@lx.it.pt
**Data Protection Officer (DPO):** For any doubts regarding data protection, you can contact the DPO via email at filipeviseu@ua.pt

### 2. What Data We Collect
To provide the Service, we collect:
* **Telemetry and Location Data:** Your vehicle's precise GPS coordinates, heading, and speed.
* **Device/System Data:** Device identifiers necessary for Android Automotive OS to communicate with Eclipse Hono and the Mosquitto message broker.
* **Usage Data:** Interactions with the App (e.g., routing choices, acknowledged alerts).

### 3. Data Sovereignty & Self-Hosted Infrastructure
Your privacy is protected by structural design. The core backend services utilized by this App (Eclipse Ditto, Eclipse Hono, Mosquitto Brokers) are entirely **self-hosted** within the ITAv infrastructure. Your telemetry and digital twin data **does not leave the ITAv network** and is not shared with external cloud providers (e.g., AWS, Google Cloud) for processing.

### 4. Legal Basis and Purpose for Processing
We process your data based on your **Explicit Consent (Article 6(1)(a) GDPR)**. The data is used strictly for:
* Creating a digital twin in Eclipse Ditto to provide you with real-time hazard, speeding, and overtaking alerts.
* Calculating routing and navigation.
* Academic research to identify traffic patterns and improve event-detection algorithms.

### 5. Data Anonymization and Retention
We do not sell your data or share it with commercial third parties.
* **Active Use:** Your precise location is processed in real-time to provide the service.
* **Storage and Anonymization:** Historical telemetry data used for academic research is stripped of direct identifiers (pseudonymized) when stored.
* **End of Project:** Upon the official conclusion of this academic project (estimated **July 2026**), or if the Service is discontinued, all personal and location data linking back to you or your specific vehicle will be permanently deleted. Any remaining data kept for academic publication will be strictly and irreversibly aggregated so that it cannot be linked back to any individual.

### 6. Your User Rights
Under the GDPR, you have the right to:
* **Access:** Request a copy of the personal data we hold about you.
* **Rectification:** Request correction of inaccurate data.
* **Erasure ("Right to be Forgotten"):** Request the deletion of your data. You can delete your account/data via the App settings at any time.
* **Withdraw Consent:** You may withdraw your consent for location tracking at any time by disabling location permissions in your vehicle's Android Automotive OS settings, though this will render the App non-functional.
* **Lodge a Complaint:** If you believe your rights are being violated, you have the right to file a complaint with the Portuguese Data Protection Authority (Comissão Nacional de Proteção de Dados - CNPD).

### 7. Contact Us
For any questions regarding these Terms, your privacy, or to exercise your GDPR rights, please contact the development team at: pei.automotiveapp.ua@gmail.com

### 8. Changes to this Policy
If we make material changes to this policy, we will notify you via an in-app alert before the changes take effect.