---
sidebar_position: 8
---

# Domain Model

![Domain Model Diagram](/img/Domain_model.png)

## Overview
The domain model represents the comprehensive architecture of the road monitoring, event management, and user navigation system. It defines how users, vehicles, roads, routes, and various event types interact to provide real-time information about road conditions, incidents, and personalized navigation experiences.

## Key Entities

### User
Represents a registered user in the system with:
- **userId**: Unique identifier for the user
- **username**: User's display name
- **email**: User's email address
- **createdAt**: Account creation timestamp

### Vehicle
Represents a vehicle owned by a user with:
- **vehicleId**: Unique identifier for the vehicle
- **userId**: Reference to the vehicle's owner

### Road
Represents a major road in the system with:
- **roadId**: Unique identifier for the road
- **name**: Road name
- **speedLimit**: Maximum speed limit for the road

### RoadSegment
Represents a specific segment of a road with precise coordinates:
- **roadId**: Reference to the parent road
- **id**: Unique identifier for the segment
- **startAt**: Starting latitude coordinate
- **startLng**: Starting longitude coordinate
- **endAt**: Ending latitude coordinate
- **endLng**: Ending longitude coordinate

### Location
Represents a specific geographic point with:
- **locationId**: Unique identifier for the location
- **latitude**: Geographic latitude
- **longitude**: Geographic longitude
- **description**: Location description

### Route
Represents a user-defined navigation route:
- **userId**: Reference to the route creator
- **id**: Unique identifier for the route
- **name**: Route name
- **createdAt**: Route creation timestamp
- **isFavorite**: Boolean indicating if route is marked as favorite

### RouteStep
Represents individual steps within a route:
- **id**: Unique identifier for the step
- **roadId**: Reference to the road for this step
- **stepNumber**: Sequential step number
- **instruction**: Navigation instruction
- **startLat**: Starting latitude
- **startLng**: Starting longitude
- **endLat**: Ending latitude
- **endLng**: Ending longitude
- **distance**: Distance for this step
- **expectedTime**: Expected time to complete this step

### UserNotificationPreferences
Represents user preferences for specific event notifications:
- **id**: Unique identifier for the preference
- **userId**: Reference to the user
- **eventType**: Type of event for this preference
- **enabled**: Boolean indicating if notifications for that event are enabled

### Event
Base entity representing an event that occurs on the road network. Attributes include:
- **id**: Unique identifier for the event
- **type**: The type of event (WeatherEvent, RoadworkEvent, PavementConditionEvent, RoadTrafficEvent, AccidentEvent)
- **roadId**: Reference to the road where the event occurred
- **sourceVehicleId**: Reference to the vehicle that was responsible for the event (optional)
- **time**: When the event occurred
- **active**: Boolean indicating if the event is currently active
- **severity**: Event severity level

### Event Subtypes

#### WeatherEvent
Represents weather-related events with:
- **eventId**: Reference to the base event
- **roadId**: Reference to the affected road
- **weatherType**: Type of weather condition
- **time**: Event timestamp

#### RoadworkEvent
Represents road construction/maintenance events with:
- **eventId**: Reference to the base event
- **segmentId**: Reference to the affected road segment
- **expectedDuration**: Estimated duration of roadworks

#### PavementConditionEvent
Represents road surface condition events with:
- **eventId**: Reference to the base event
- **segmentId**: Reference to the affected road segment
- **condition**: Description of pavement condition

#### RoadTrafficEvent
Represents traffic congestion events with:
- **eventId**: Reference to the base event
- **segmentId**: Reference to the affected road segment
- **avgSpeed**: Average speed of traffic
- **vehicleCount**: Number of vehicles in the affected area

#### AccidentEvent
Represents accident events with:
- **eventId**: Reference to the base event
- **locationId**: Reference to the accident location
- **numberVehicles**: Number of vehicles involved

## Relationships

The domain model illustrates the following key relationships:

### User-Centric Relationships
- A **User** can own multiple **Vehicles** (1:N relationship)
- A **User** can create multiple **Routes** (1:N relationship)
- A **User** can have multiple **UserNotificationPreferences** (1:N relationship)

### Road Network Structure
- A **Road** can be divided into multiple **RoadSegments** (1:N relationship)
- A **Route** consists of multiple **RouteSteps** (1:N relationship)
- A **RouteStep** references a specific **Road** (N:1 relationship)

### Event System
- **Event** is the base entity for all event types (WeatherEvent, RoadworkEvent, PavementConditionEvent, RoadTrafficEvent, AccidentEvent)
- **Events** are associated with **Roads** through the **roadId** reference
- **RoadworkEvent**, **PavementConditionEvent**, and **RoadTrafficEvent** reference specific **RoadSegments**
- **AccidentEvent** references a specific **Location**
- **Events** may optionally reference a **sourceVehicleId** to track which vehicle was responsible for the event

### Cross-Entity Relationships
- **Vehicles** are associated to **Events** through the sourceVehicleId field
- **Events** are linked to the road network either through Road references (WeatherEvent) or RoadSegment references (RoadworkEvent, PavementConditionEvent, RoadTrafficEvent)
 - **Locations** provide precise geographic coordinates for incidents like accidents, while **RoadSegment** provides a designated area for broader events.

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
