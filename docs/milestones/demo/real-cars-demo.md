---
sidebar_position: 2
---

# Real-car system validation

To test our system in production environment, we went to **IT camp**, with two **real cars** equipped with on-board units (**OBUs**) sending position messages to our backend. This was the **first full-scale** field validation and a major challenge our project faced - it stressed connectivity, message timing, and **real-world** sensor alignment.

## Objectives
- Validate **position processing** (ingest, etc.)
- Validate **lane-merge** detection
- Validate **overtaking** detection

## Outcomes
- **Position processing**: our system **successfully** ingested and aligned the two vehicle streams; latency was within **acceptable** bounds for the scenarios tested
- **Lane merge**: detection worked perfectly, our system correctly identified the merge points and the safe lane merge maneuver
- **Overtaking**: system correctly identified overtaking maneuver although we discovered a minor issue with vehicle heading (car stopped - velocity = 0 - default heading)

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