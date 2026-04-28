---
title: SWOT Analysis
sidebar_position: 4
---

# SWOT Analysis
This section evaluates the internal factors (controllable) and external factors (uncontrollable) directly affecting the project

## Internal Factors

### Strengths (S):
- **Native Integration**: Built specifically for Android Automotive OS (AAOS), providing a deeper and more seamless vehicle integration than standard smartphone projection apps
- **Data Sovereignty & Privacy**: A completely self-hosted backend infrastructure (Eclipse Ditto/Hono via ITAv) that ensures 100% GDPR and EU Data Act compliance without relying on data-harvesting cloud providers (like AWS, Google Cloud, Azure)
- **Fail-Silent Architecture**: High baseline of functional safety designed to suppress errors rather than distract drivers, mitigating legal liability

### Weaknesses (W):
- **Infrastructure Dependence**: Complete reliance on ITAv's physical sensor network (DT4MOB) - the app has no utility if the vehicle drives outside the sensor-equipped region
- **Lack of Capital**: No budget for expensive API tiers like Google APIs which would be much more robust than our current free-tier APIs (MapTiler, OpenWeatherMap)
- **Zero Brand Recognition**: We don't have the brand recognition like Waze or TomTom, which have been around for years and have millions of users. This makes user acquisition and trust-building a significant challenge if we don't deliver a flawless and differentiated experience from day one

## External Factors

### Opportunities (O):
- **AAOS Market Growth**: Major OEMs (Volvo, Polestar, Renault) are rapidly adopting Android Automotive OS, creating a massive new market for native vehicle apps
- **Smart City Initiatives**: V2X (Vehicle-to-Everything) and IoT infrastructures are getting more prevalent as time goes on, expanding the potential data sources our app can tap into
- **Privacy Backlash**: Growing consumer distrust of big tech companies tracking location data creates a niche for privacy-first, locally hosted navigation tools like ours

### Threats (T):
- **Aggressive Big Tech Competition**: Waze and TomTom have billions of daily data points from crowdsourcing, making their traffic data inherently more comprehensive than our localized IoT sensors
- **API Pricing Volatility**: Reliance on third-party freemium APIs (MapTiler, OpenWeatherMap). A sudden price hike or change to their free-tier limits could break the app's functionality
- **Physical Sensor Vandalism/Outages**: External IoT sensors are vulnerable to weather damage, power outages, or vandalism, degrading the reliability of the digital twins and thus the app's core functionality

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