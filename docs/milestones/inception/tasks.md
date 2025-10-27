---
sidebar_position: 2
---

# Tasks

## Our System's modules

Our system revolvers around 4 modules:

- Data from sensors
- System for processing the data and determining events
- System for sending and recieving the data
- UI for the app

Given our goals and the resourses provided to us, the development of this work will focus on the last 3 modules, the data from the sensors will be done on a project in conjunction to ours (mode detail [here](related_work.md#digital-twins-for-mobility-dt4mob)).

## Tasks to develop

After deviding our work onto three modules, we listed some tasks for each:

### Process and determine events

This is the core "brain" of the system, where the virtual representation is updated and events are identified.  

1. Receive Data from [Digital Twin Network*](#digital-twins)
- Develop connectors to subscribe to data streams from the digital twin network API.
- Implement a listener service to ingest real-time state updates from the relevant vehicle digital twins.

2. Process the Received Data
- Create a service to map the [digital twin's*](#digital-twins) state updates to the local event processing model.
- Implement data correlation to combine multiple twin data points for complex event analysis.

3. Develop Rule-Based Event Detection Engine
- Create a configurable rules engine to analyze the [digital twin's*](#digital-twins) state and identify significant events.
- When an event is triggered, this engine should package it into an event notification object.

This module will be mainly developed[**](#module-development-note) by:
- Duarte Branco
- Filipe Viseu

### Send and recive Data

This layer is responsible for getting the identified events to the end-user.  

1. Build a Notification Dispatcher
- Develop a service that listens for events from the processing engine.
- This dispatcher should be able to route notifications to different channels. The primary initial channel will be the UI, but it could be extended to push notifications or logging systems.

2. Implement an In-App Notification System
- Create a real-time communication channel between the backend and the Android Auto app to push event notifications instantly.
- Define the API payload for sending events to the UI.

This module will be mainly developed[**](#module-development-note) by:
- Eduardo Romano

### Automotive App UI

This is the user-facing component that displays information and events within the car's infotainment system. 

1. Implement the Android Auto App Scaffold
- Set up the basic Android Auto project structure with the necessary dependencies and configurations.
- Create the main CarAppService and Session classes, which are required for all Android Auto apps.

2. Design and Develop the "Event Alert" Screen
- Create a UI template (using Android Auto's Template classes, like PaneTemplate or AlertTemplate) to clearly display event details when a notification is received from the backend.

This module will be mainly developed[**](#module-development-note) by:
- Diogo Nascimento
- Samuel Vinhas

---

<a id="digital-twins"></a>

*The use of a digital twin network will be the basis for the data provided, explained [here](related_work.md#digital-twins-for-mobility-dt4mob)

<a id="module-development-note"></a>

**Altough each module was assign to specific members, other team members may help develop some parts of diferent modules

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