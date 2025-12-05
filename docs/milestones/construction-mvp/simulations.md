---
sidebar_position: 2
---

# Simulations

## Overview

For the **MVP (Minimum Viable Product)**, we implemented a **simulation-based approach** using synthetic GPS data instead of real IoT sensors. This strategic decision enabled rapid development and thorough testing while maintaining an architecture that seamlessly transitions to production hardware.

Our simulation framework generates realistic vehicle movement patterns, allowing us to validate the entire event detection pipeline in a controlled, reproducible environment.

## Why Simulations?

### Technical Justification

1. **No Physical Infrastructure Required**
   - Eliminated dependency on actual vehicle-mounted IoT sensors or GPS tracking devices
   - Avoided logistical challenges of vehicle instrumentation during development
   - Enabled distributed team members to test independently

2. **Controlled and Reproducible Testing**
   - Create specific scenarios (speeding events, overtaking maneuvers) on demand
   - Replay identical sequences for debugging and performance improvements

3. **Rapid Iteration and Prototyping**
   - Modify detection algorithms and immediately validate changes
   - Experiment with different parameters
   - Accelerated development cycles from concept to working code

## System Architecture

The simulation environment integrates with our production architecture through standard interfaces:

### Processing Pipeline

```
[Simulation Scripts] → [Eclipse Hono] → [Eclipse Ditto] → [MQTT Broker] → [Detection Services]
```

The system follows a **microservices architecture** with three main processing services:

1. **Position Processor**
   - Receives raw GPS coordinates via Eclipse Ditto
   - Calculates derived metrics: speed, heading, acceleration
   - Updates vehicle state with computed attributes
   - Publishes data to MQTT topics

2. **Speed Detector**
   - Subscribes to vehicle position updates
   - Compares current speed against road speed limits
   - Generates violation alerts when thresholds are exceeded
   - Tracks violation duration and severity

3. **Overtaking Detector**
   - Monitors relative positions and movements between vehicles
   - Analyzes heading changes and lateral displacement
   - Detects lane-change patterns indicative of overtaking
   - Publishes overtaking events with vehicle pair information

### Technology Stack

- **Eclipse Ditto** - Digital twin platform maintaining vehicle state models
- **Eclipse Hono** - IoT connectivity layer providing device authentication and messaging
- **Eclipse Mosquitto** - MQTT broker enabling real-time publish/subscribe messaging
- **Docker & Docker Compose** - Containerization and orchestration for all services
- **Python 3.11** - Implementation language for simulation scripts and processing services
- **Paho MQTT** - Python MQTT client library
- **Requests** - HTTP client for Ditto and Hono API interactions

## Simulation Components

The `simulations/` directory contains the following tools:

### Vehicle Provisioning: `create_car.py`

**Purpose**: Registers a new vehicle in the system's digital twin and device registry.

**Functionality**:
- Creates a digital twin representation in Eclipse Ditto with vehicle metadata
- Registers device credentials in Eclipse Hono for authentication
- Configures initial vehicle properties (ID, type, capabilities)
- Establishes MQTT topics for bi-directional communication

### Position Simulation: `send_position.py`

**Purpose**: Simulates GPS position updates from a moving vehicle.

**Functionality**:
- Reads predefined GPS coordinate sequences from route files
- Publishes position updates at configurable intervals (e.g., 1 Hz)
- Authenticates with Eclipse Hono using device credentials
- Mimics real GPS sensor data format and timing characteristics

**Configurable Parameters**:
- Update frequency (positions per second)
- Route selection (which road/lane to follow)
- Speed profile (constant, accelerating, decelerating)
- Start time offset (for multi-vehicle scenarios)

### Road Definitions: `roads/` Directory

**Purpose**: Contains predefined GPS coordinate sequences representing realistic vehicle trajectories.

## Simulation Scenarios

### 1. Speed Violation Detection
**Setup**: Single vehicle following a route with varying speeds
**Validation**: Verify alerts are generated when speed exceeds limits

### 2. Overtaking Event Detection
**Setup**: Two vehicles, one overtaking the other on a multi-lane road
**Validation**: Confirm overtaking event is detected and reported

## Conclusion

For the Construction MVP phase, the simulation-first strategy worked incredibly well. It reduced expenses and risks while facilitating quick development and architectural validation. Now that all of the system's core processing logic has been verified and is ready for production, it can be seamlessly integrated with actual IoT sensors.

This approach shows how using simulations strategically can greatly speed up the development of IoT systems without sacrificing production readiness.