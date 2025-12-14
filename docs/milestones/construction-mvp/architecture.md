---
sidebar_position: 3
---

# Architecture

![Arquitecture Diagram](/img/archchange.jpeg)

## Overview

For the **MVP (Minimum Viable Product)**, we had some problems with our original architecture.
We received equipment named Khadas VIM3 Pro to simulate our cars, but all the AAOS images available for this board had serious problems in terms of Google Services compatibility which made it impossible to use Firebase.

This was a huge problem since Firebase was a key component of our architecture, being used for authentication and real-time database and notifications updates.

To counter this problem, we decided to defer authentication to the next sprint and connect the frontend directly to the backend broker.

## MVP Implementation Scope

Of course, for the MVP we didn't implement everything shown in the original architecture. Our focus was on delivering the core event detection and processing functionality while deferring some advanced features and integrations to future iterations.

The following diagram shows what we actually implemented for the MVP:

![MVP Architecture Diagram](/img/archmvp.jpeg)

### What Was Implemented

The MVP includes the following components:

- **Vehicle Simulation Layer** - Scripts to generate realistic GPS data and vehicle movements
- **Eclipse Hono** - IoT connectivity layer for device management and message routing
- **Eclipse Ditto** - Digital twin platform maintaining vehicle state
- **MQTT Broker (Mosquitto)** - Real-time messaging infrastructure
- **Processing Services**:
  - Position Processor - Enriches GPS data with speed and heading calculations
  - Speed Detector - Monitors speed violations
  - Overtaking Detector - Identifies overtaking events
- **Frontend Application** - Direct connection to MQTT broker for real-time event visualization

### What Was Deferred

The following components from the original architecture were postponed to post-MVP phases:

- **User Authentication System** - Login/registration functionality
- **Advanced Analytics** - Historical data analysis and reporting
- **Production-Grade Sensors** - Integration with real IoT devices
- **Scalable Cloud Infrastructure** - Full deployment on cloud platforms

This phased approach allowed us to validate the core processing logic and system architecture while minimizing complexity and development time for the initial release.

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
