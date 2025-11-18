---
sidebar_position: 8
---

# Domain Model

![Domain Model Diagram](/img/domainmodel.png)

## Overview

The domain model represents the core entities and relationships within the road monitoring and event management system. It defines how roads, events, and various event types interact to provide real-time information about road conditions and incidents.

## Key Entities

### Road
Represents a road segment in the system with the following attributes:
- **roadId**: Unique identifier for the road
- **speedLimit**: Maximum speed limit for the road
- **weatherCondition**: Current weather conditions
- **trafficDensity**: Current traffic density level

### Event
Base entity representing an event that occurs on a road. Attributes include:
- **eventId**: Unique identifier for the event
- **type**: The type of event (Speeding, Roadworks, Accidents, RoadTraffic, WeatherCondition, PavementCondition)
- **latitude**: Location latitude
- **longitude**: Location longitude
- **date**: When the event occurred
- **roadId**: Reference to the road where the event occurred

### Event Subtypes

#### Speeding
Represents speeding events with:
- **eventType**: Event classification
- **actualSpeed**: The speed that was recorded
- **speedLimit**: The speed limit being exceeded
- **duration**: How long the speeding occurred
- **vehicleId**: Reference to the vehicle involved

#### Roadworks
Represents road construction/maintenance events with:
- **eventType**: Event classification
- **duration**: Estimated duration of roadworks

#### Accidents
Represents accident events with:
- **eventType**: Event classification
- **numberVehicles**: Number of vehicles involved

#### RoadTraffic
Represents traffic congestion events with:
- **eventType**: Event classification
- **numberVehicles**: Number of vehicles affected
- **duration**: Expected duration of traffic

#### WeatherCondition
Represents weather-related events with:
- **eventType**: Event classification
- **weather**: Description of weather condition

#### PavementCondition
Represents road surface condition events with:
- **eventType**: Event classification
- **condition**: Description of pavement condition

### Vehicle
Represents a vehicle in the system with:
- **vehicleId**: Unique identifier for the vehicle

## Relationships

The domain model illustrates the following key relationships:
- A **Road** can have multiple **Events** (1:N relationship)
- **Event** is the parent class for specialized event types (Speeding, Roadworks, Accidents, RoadTraffic, WeatherCondition, PavementCondition)
- **Speeding** events reference a specific **Vehicle**
- **RoadTraffic** can be associated with **PavementCondition**
- **WeatherCondition** events are linked to roads
- All events are associated with specific roads through the **roadId** reference
