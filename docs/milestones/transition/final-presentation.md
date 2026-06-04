---
sidebar_position: 1
---

# Final Presentation

The Transition milestone (MS9) closes the project. This page summarizes what we presented in the **final presentation (MS2.6)**, where we walked through the journey of the **Automotive App** from its objective to its final results.

## Objective

Develop an app for **Android Automotive OS (AAOS)** capable of leveraging the sensor data deployed around Aveiro to provide an **Automotive Unified Road Assistant** - a single in-vehicle assistant that warns drivers about road events and helps them drive more safely.

## Opportunity

The **Telecommunications Institute (IT)** has deployed a wide range of equipment across the Aveiro region - radars, cameras, weather stations, and other sensors. On top of this, the **Digital Twins for Mobility (DT4MOB)** infrastructure, built on **Eclipse Cloud2Edge** and orchestrated with **Kubernetes**, provides:

- Faster communication and interaction between objects.
- Rapid and efficient event detection - a perfect fit for a road assistance app.

This combination of real sensor coverage and a digital-twin platform was the opportunity our project set out to exploit.

## Architecture

The final architecture is split into clear layers and a set of independent backend microservices, all decoupled through a **Message Broker (MQTT)**:

- **Data Gathering** - real data ingested from IT through **Hono** and modeled as digital twins in **Ditto**.
- **Data Processing** - the Position Processor and Proximity Filter clean and route incoming data.
- **Event Detection** - dedicated detectors for Overtaking, Speeding, Traffic Jam, Lane Merge, Accidents, Emergency Vehicles, and Weather.
- **Data Storage** - a Preference Database accessed through the Database Manager.
- **Authentication** - user authentication on top of the DT4MOB authentication service.
- **Event Transmission & UI** - alerts published over MQTT and rendered by the **Android Automotive OS** app (built in Kotlin).

Components were clearly classified during the presentation as developed for the project (app/backend), recreated DT4MOB infrastructure used for validation, or out of scope.

## Development Methods

Throughout the project the team relied on:

- **Constant communication** (Slack, WhatsApp) and **weekly meetings** with the advisers.
- **Task management** in Jira, organized by sprints and releases.
- **Pull requests** with mandatory review (at least two approvals) and CI checks before merging to `main`.
- A **shared environment** on GitHub across the four repositories.

## Main Obstacles

- **No Google services** - being on AAOS without GMS, we replaced Firebase/Google Maps style stacks with open alternatives (e.g. Ditto for real-time data and OSRM for routing).
- **Complex, still-in-development infrastructure** - Hono, Ditto, and the surrounding digital-twin platform were evolving as we built on top of them.
- **Strict environment** - Android Automotive OS imposes distraction-optimization and safety constraints on every screen.

## Demonstration

We demonstrated the assistant end-to-end, including a **real-car field test** at the IT camp for overtaking and maneuver coordination, plus the remaining use cases:

- Provide knowledge of: **Speeding, Overtakes, Accidents, Traffic Congestions, Emergency Vehicles, Weather Conditions**.
- Assist with: **Maneuver Coordination** and **Navigation**.

## Results

### Functional Requirements

Most functional requirements were met, including overtaking detection, speeding alerts, accident and traffic-congestion identification, emergency-vehicle detection, weather conditions, navigation and route generation, safe highway entry/exit, and enabling/disabling alerts. A few were left out of scope, namely roadworks identification, pavement condition alerts, and recording data for later analysis.

### Non-Functional Requirements

We satisfied safety (encrypted communication), accuracy (GPS error ≤ 5 m), performance (alerts displayed ≤ 2 s), and usability (no intrusive pop-ups). Scalability (100,000 users) and reliability under long disconnections were partially met and are addressed in our future work.

---

**Tutors:**  
- Rafael Direito (rafael.neves.direito@ua.pt)  
- Diogo Gomes (dgomes@ua.pt)  

**Group:**
- Diogo Nascimento (dca.nascimento5@ua.pt)
- Duarte Branco (duartebranco@ua.pt)
- Eduardo Romano (eduardo.romano@ua.pt)
- Filipe Viseu (filipeviseu@ua.pt)
- Samuel Vinhas (samuelmvinhas@ua.pt)

**Institution:** Telecommunications Institute of Aveiro (ITAv)
