---
sidebar_position: 2
---

# Future Work

Our Automotive App reached a mature, demonstrable state, but the project also opened clear paths for what comes next. Our main aspiration is to take the app from a validated prototype to a product that real drivers can install.

## Publishing on Google Play

Our central goal for the future is to **deploy the Automotive App on the Google Play Store**. Reaching the in-vehicle ecosystem through the official store would let any compatible Android Automotive OS vehicle install the assistant and benefit from the road events detected across the Aveiro region.

Getting there involves a few concrete steps:

- Going through the **Play Store review and publishing process** for an Automotive OS app, meeting Google's distraction-optimization and safety requirements.
- **Integrating with Google Services** where appropriate, complementing the open-source stack (Ditto, OSRM) we adopted because the project ran without GMS.

## Other Future Work

Beyond reaching the store, the next iterations of the project would focus on:

- **Improving cache and offline mode** - robust local caching so the app keeps working through connectivity gaps (the deferred local-cache work from earlier sprints).
- **Implementing a distributed broker architecture** - to scale the message flow toward the 100,000-user target identified during validation.
- **Improving detection accuracy** - refining the detectors (including the overtaking heading edge case found in the real-car test) for fewer false positives and more reliable alerts.

Together, these would move the Automotive App from a validated academic prototype toward a publicly available road assistant.

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
