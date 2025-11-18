---
sidebar_position: 7
---

# Architecture

![Arquitecture Diagram](/img/architecture.png)

## 1. Architecture Overview

The system implements a **hybrid layered architecture**, combining elements of traditional layered architecture with a microservices approach for specific components. This approach aims to balance structural organization with the scalability and performance required for real-time operations.

## 2. Architecture Layers

### 2.1. Presentation Layer
- **Component**: Mobile application
- **Technology**: Kotlin for Android Automotive OS
- **Functionalities**:
  - Visual interface and audible alerts
  - Navigation and monitoring
  - Data presentation to users
  - Integration with external APIs

### 2.2. Business Layer
- **Technology**: Python with Docker
- **Main Services**:
  - **Authentication Service**: User authentication management
  - **Delivery Service**: Message delivery with persistence via Firebase
  - **Statistics Handler**: Event aggregation and prioritization
  - **Proximity Filter**: Relevant vehicle filtering based on proximity

### 2.3. Data Layer
- **Main Database**: PostgreSQL
  - **Event Database**: Historical event storage for statistics
  - **Message Broker**: Event flow management

### 2.4. Microservices Layer
- **Architecture**: Specialized microservices per event type
- **MVP Services**:
  - **Overtake Detection Engine**: Overtaking detection
  - **Speeding Detection Engine**: Speeding detection
- **Expansion Strategy**: Addition of more detection engines in the future

## 3. Data Flow and Processing

### 3.1. Real-time Data Acquisition
Sensors -> Hono (Connection Management) -> Ditto (Digital Twins Framework)


### 3.2. Event Processing
Digital Twins -> Proximity Filter -> Detection Microservices -> Message 


### 3.3. Notification Delivery
Message Broker -> Aggregation/Prioritization -> Delivery Service -> Application

## 4. Infrastructure Components

### 4.1. Digital Twins Framework (Ditto)
- Maintains real-time updated digital representations
- Bidirectional communication via Hono
- Foundation for event detection

### 4.2. Message Management
- **Message Broker**: Receives diverse events from microservices
- **Prioritization System**: Classifies events by criticality

### 4.3. Persistence and Statistics
- **Firebase**: Persistence reinforcement for messages
- **PostgreSQL**: Historical database for statistical analysis

## 5. Performance Considerations

### 5.1. Response Time Optimization
- Microservices architecture to reduce congestion
- Parallel processing of different event types
- Proximity filtering to reduce computational load

### 5.2. Deployment Strategy
- **Backend**: Docker for containerization
- **Application**: Android Studio for development and deployment
- **Environment**: Android Automotive OS

## 6. Technologies and Tools

| Layer | Technologies |
|-------|--------------|
| Presentation | Kotlin, Android Automotive OS, Android Studio |
| Business | Python, Docker, Firebase |
| Data | PostgreSQL |
| Infrastructure | Hono, Ditto, Message Broker |


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
