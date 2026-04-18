---
title: Risks Assessment
---

# Risks Assessment

## 1. Technical Risks Assessment

### High Latency from Cloud2Edge
* **Risk:** If latency spikes beyond your 2-second requirement, alerts (like overtaking) become dangerous rather than helpful
* **Mitigation:** System that prioritizes critical alerts (e.g., overtaking) and degrades gracefully for less critical ones (e.g., weather updates). Check timestamps to ensure alerts are timely

### Network Connectivity Loss
* **Risk:** Cars drive through tunnels and dead zones. If the app loses connection to the Mosquitto broker, it fails.
* **Mitigation:** Local cache for map and alert data to ensure offline functionality and graceful degradation (e.g., showing a "Reconnecting... Data may be outdated" UI warning)

### Sensor Noise and GPS Inaccuracy
* **Risk:** Our current tests use clean, simulated data. Real-world ITAv sensors and vehicle GPS will have noise, "ghost" vehicles, or signal jumping.
* **Mitigation:** Algorithms or proximity thresholds to prevent false-positive alerts

---

## 2. Business & Project Risks Assessment

### Third-Party Dependencies
* **The Risk:** MapTiler and OpenWeatherMap have free tiers, but if the app scales or hits rate limits during testing, the APIs will block our requests
* **The Mitigation:** Implement caching (as done in the speed limit implementation) to reduce API calls, and have a backup API ready if some of current APIs becomes unavailable

### Infrastructure Dependency
* **The Risk:** The app relies entirely on ITAv’s physical sensors and the DT4MOB infrastructure. If their sensors go offline or undergo maintenance, our app has no data.
* **The Mitigation:** No mitigation possible. This is a risk we must accept as part of the project scope.

### User Adoption vs. Trust
* **The Risk:** As we saw in our competitor analysis, Waze and TomTom are established giants. If our app gives too many false alarms or distracts the driver, users will abandon it.
* **The Mitigation:** Implement a robust alert system that minimizes false positives and ensures that alerts are only triggered when necessary. Have key features (like overtaking alerts) prioritized and tested extensively to ensure reliability as this is the core value proposition of the app.