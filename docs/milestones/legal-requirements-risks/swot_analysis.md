---
title: SWOT Analysis
sidebar_position: 4
---

# SWOT Analysis
This section evaluates the internal factors (controllable) and external factors (uncontrollable) directly affecting the project

## Internal Factors

### Strengths (S):
- **Native Integration**: Built specifically for Android Automotive OS (AAOS), providing a deeper and more seamless vehicle integration than standard smartphone projection apps.
- **Hyper-Local Safety Intelligence**: Unlike generic cloud-based navigation, the app directly consumes real-time, high-fidelity feeds from regional ITAv sensors (radars, cameras). This enables hyper-local, cooperative features, such as the overtaking assistant and coordinated maneuver warnings, that standard mobile apps cannot deliver.
- **Fail-Silent Architecture**: High baseline of functional safety designed to suppress errors rather than distract drivers, mitigating legal liability.

### Weaknesses (W):
- **Area-Constrained Operation**: The app's utility is limited to regions equipped with the specific physical sensor network (DT4MOB).
- **No Integration with Google Services**: Without Google APIs we must use free-tier options (MapTiler, OpenWeatherMap), missing out on industry-leading services.
- **Zero Brand Recognition**: We don't have the brand recognition like Waze or TomTom, which have been around for years and have millions of users. This makes user acquisition and trust-building a significant challenge if we don't deliver a flawless and differentiated experience from day one.

## External Factors

### Opportunities (O):
- **AAOS Market Growth**: Major OEMs (Volvo, Polestar, Renault) are rapidly adopting Android Automotive OS, creating a massive new market for native vehicle apps.
- **Smart City Initiatives**: V2X (Vehicle-to-Everything) and IoT infrastructures are getting more prevalent as time goes on, expanding the potential data sources our app can tap into.
- **ADAS & Autonomous Readiness**: Automakers are actively seeking native V2X safety applications to augment their Advanced Driver Assistance Systems (ADAS). Specialized features like our overtaking assistant directly appeal to OEMs looking to improve vehicle safety scores and transition toward autonomous driving.

### Threats (T):
- **Infrastructure Dependence**: Complete reliance on ITAv's physical sensor network (DT4MOB) acts as a single point of failure.
- **Aggressive Big Tech Competition**: Waze and TomTom have billions of daily data points from crowdsourcing, making their traffic data inherently more comprehensive than our localized IoT sensors.
- **API Pricing Volatility**: Reliance on third-party freemium APIs (MapTiler, OpenWeatherMap). A sudden price hike or change to their free-tier limits could break the app's functionality.
- **Physical Sensor Vandalism/Outages**: External IoT sensors are vulnerable to weather damage, power outages, or vandalism, degrading the reliability of the digital twins and thus the app's core functionality.

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