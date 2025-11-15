---
sidebar_position: 4
---

# Requirements

## Functional Requirements

**FR1.** The user should be able to navigate to a chosen destination using turn-by-turn directions.
**FR2.** The user should receive alerts when rain or adverse weather conditions are detected nearby.
**FR3.** The user should be notified about roadworks or temporary obstacles within a 1.5 km radius.
**FR4.** The user should be alerted if there are accidents or immobilized vehicles in the vicinity.
**FR5.** The user should be informed about traffic congestion in their area.
**FR6.** The user should receive speed alerts when entering zones with different speed limits.
**FR7.** The user should be notified when overtaking is detected and receive safety suggestions.
**FR8.** The user should be warned about pavement conditions (ice, wet, or slippery surfaces) detected by soil moisture and temperature sensors.
**FR9.** The user should be alerted about emergency vehicles within a 1 km radius to help coordinate priority passage.
**FR10.** The user should be able to view a history of conditions and statistics for later analysis, including traffic patterns and safety recommendations.

| #   | Requirement                                                                                  | Source         |
|-----|---------------------------------------------------------------------------------------------|---------------|
| FR1 | Navigate to a chosen destination with turn-by-turn directions                                |     Statistics          |
| FR2 | Receive alerts for rain or adverse weather conditions                                        | Ditto         |
| FR3 | Notification of roadworks/obstacles within 1.5 km                                            | Ditto         |
| FR4 | Alert for accidents/breakdowns nearby                                                        | Ditto         |
| FR5 | Information about traffic congestion                                                         | Ditto         |
| FR6 | Speed alerts when entering zones with different speed limits                                 | OpenStreetMap |
| FR7 | Overtaking detection and safety suggestions                                                  | Ditto         |
| FR8 | Pavement condition alerts (ice, wet, slippery)                                               | Ditto         |
| FR9 | Emergency vehicle alerts within 1 km                                                         | Ditto         |
| FR10| History/statistics for analysis and safety recommendations                                   | Ditto         |

---

## Non-Functional Requirements

- **NFR1. Performance:** Alerts displayed within **2 seconds** of detection.
- **NFR2. Accuracy:** Position data must be **precise** within **15 meters**.
- **NFR3. Usability:** Interface must be **clear** and **non-intrusive** for drivers.
- **NFR4. Safety:** All communications **encrypted** using AES-256.
- **NFR5. Scalability:** Support for **multiple users/data streams** without performance loss.
- **NFR6. Reliability:** App remains **stable** even with temporary internet loss.

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
