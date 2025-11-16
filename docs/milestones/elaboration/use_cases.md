---
sidebar_position: 4
---

# Use Cases

## Context

This section outlines the primary use cases of our system, detailing how drivers interact with the system to enhance their driving experience and safety.

## UC1. Create a Safe Route

**Description:**  
Allows the user to create a custom route to a chosen destination by selecting preferences such as safest, shortest, or fastest route. The system considers historical and real-time road hazard data when determining the optimal path.

**Primary Actor:** Driver  
**Preconditions:** User is in the vehicle and the application is active  
**Main Flow:**
1. User enters destination address
2. User selects route preference (safest, shortest, or fastest)
3. System analyzes historical and real-time hazard data
4. System calculates optimal route based on selected preference
5. System displays route on map with turn-by-turn directions
6. User confirms route selection

**Postconditions:** Navigation begins with real-time alerts enabled

---

## UC2. View Weather Conditions

**Description:**  
Displays current weather information in a compact section of the interface, allowing the driver to quickly assess conditions without distraction.

**Primary Actor:** Driver  
**Preconditions:** Application is active and location services are enabled  
**Main Flow:**
1. System periodically retrieves current weather data for user's location
2. System displays weather information in a non-intrusive widget
3. Driver can glance at weather status without taking eyes off road for long

**Postconditions:** Weather information is continuously updated

---

## UC3. View Road Map

**Description:**  
Shows the map with the user's current location, nearby roads, and active events such as accidents, traffic jams, or weather hazards.

**Primary Actor:** Driver  
**Preconditions:** Application is active and GPS is enabled  
**Main Flow:**
1. System displays live map with user's current location
2. System shows nearby roads and streets
3. System marks active events on map:
   - Accidents
   - Traffic congestion
   - Weather hazards
   - Roadworks
4. Driver can view comprehensive road situation awareness

**Postconditions:** Map is continuously updated with real-time information

---

## UC4. Receive Safe Entry/Exit Instructions

**Description:**  
Provides real-time instructions to safely enter or exit highways, such as adjusting speed to merge or exit efficiently.

**Primary Actor:** Driver  
**Preconditions:** Driver is approaching highway entry/exit  
**Main Flow:**
1. System detects driver's proximity to highway entry/exit
2. System provides turn-by-turn guidance for:
   - Optimal lane positioning
   - Speed adjustment recommendations
   - Merge/exit timing
3. System displays:
   - Clear lane guidance
   - Distance to entry/exit
   - Traffic conditions on target lane
4. System provides voice guidance for hands-free operation
5. Driver safely enters or exits highway

**Postconditions:** Driver successfully and safely navigates highway transition

---

## View Alerts

The following use cases describe the various alert systems integrated into the application:

### UC5. View Hazard Alerts

**Description:**  
Notifies the driver of potential hazards on the road, such as roadworks and obstacles.

**Primary Actor:** Driver  
**Preconditions:** Driver is navigating and hazards are detected  
**Main Flow:**
1. System detects hazards through IoT sensors or external data sources
2. System determines if hazard is within alert radius (1.5 km)
3. System displays alert to driver with:
   - Type of hazard
   - Distance and location
   - Recommended action (if applicable)
4. Driver acknowledges alert

**Postconditions:** Driver is aware of hazard and can take appropriate action

---

### UC6. View Weather Alerts

**Description:**  
Displays upcoming or ongoing weather events (e.g., heavy rain, fog, or strong winds) that may affect driving conditions.

**Primary Actor:** Driver  
**Preconditions:** Adverse weather conditions are detected or forecasted  
**Main Flow:**
1. System monitors weather data for driver's route
2. System identifies adverse weather events
3. System displays weather alert with:
   - Weather event type
   - Severity level
   - Expected duration
   - Safety recommendations
4. Driver is informed and can adjust driving behavior

**Postconditions:** Driver adapts driving style to weather conditions

---

### UC7. View Accident Alerts

**Description:**  
Alerts the driver about accidents that have occurred on the route ahead, providing the option to reroute if necessary.

**Primary Actor:** Driver  
**Preconditions:** Accident is reported on or near the current route  
**Main Flow:**
1. System receives accident report from external data sources or users
2. System analyzes if accident affects current route
3. System displays accident alert with:
   - Location and severity
   - Impact on travel time
   - Alternative routes (if available)
4. Driver can choose to:
   - Continue on current route
   - Accept suggested alternative route
   - Manually select different route

**Postconditions:** Driver has options to avoid accident-affected areas

---

### UC8. View Priority Vehicle Alerts

**Description:**  
Warns the driver when an emergency or priority vehicle (e.g., ambulance, police car) is approaching, allowing the driver to take appropriate action.

**Primary Actor:** Driver  
**Preconditions:** Emergency/priority vehicle is detected within 1 km radius  
**Main Flow:**
1. System detects proximity of emergency vehicle through:
   - Dedicated emergency vehicle beacons
   - Connected vehicle networks
2. System calculates approach vector and distance
3. System displays alert with:
   - Vehicle type (ambulance, police, fire truck)
   - Direction of approach
   - Recommended action (move to shoulder, reduce speed)
4. Driver takes appropriate action to facilitate priority passage

**Postconditions:** Driver safely yields to emergency vehicle

---

### UC9. View Overtaking Alerts

**Description:**  
Notifies the driver when another vehicle is overtaking, increasing driver awareness and safety.

**Primary Actor:** Driver  
**Preconditions:** Vehicle detection sensors detect overtaking vehicle  
**Main Flow:**
1. System monitors adjacent lanes for overtaking vehicles
2. System detects vehicle in blind spot or approaching from behind
3. System displays alert indicating:
   - Direction of overtaking vehicle (left/right)
   - Relative speed and distance
   - Safety recommendation (maintain lane, increase awareness)
4. Driver maintains awareness of surrounding traffic

**Postconditions:** Driver is aware of overtaking vehicles and reduces accident risk

---

### UC10. Monitor Speed Limit and Current Speed

**Description:**  
Detects the current speed limit for the road and continuously monitors the vehicle's current speed, alerting the driver when speed limit changes occur or when the vehicle exceeds the speed limit.

**Primary Actor:** Driver  
**Preconditions:** Application is active and vehicle is moving on a road with defined speed limits  
**Main Flow:**
1. System retrieves current speed limit for the road using GPS location and map data
2. System continuously monitors vehicle's current speed via GPS/speedometer
3. System compares current speed with speed limit
4. When speed limit changes:
   - System displays notification: "Speed limit changed to XX km/h"
   - System updates speed limit display on interface
   - System provides audio alert for attention
5. When vehicle exceeds speed limit:
   - System displays warning: "You are exceeding the speed limit!"
   - System highlights current speed in red/warning color
   - System provides audio alert to notify driver
   - System may suggest deceleration if significantly over limit
6. Driver is informed of speed regulations and adjusts speed accordingly

**Postconditions:** Driver remains compliant with speed limits and is aware of speed limit changes

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
