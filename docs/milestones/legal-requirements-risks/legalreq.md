---
sidebar_position: 4
---

# Legal Requirements for Automotive Apps

## 1. Introduction to Automotive Safety Compliance

Building an app for a car isn't just about writing good code or protecting user data; it's about physical safety. When a user is behind the wheel, a distracting interface isn't just annoying, it's dangerous. To keep drivers focused and to mitigate our own liability, our app strictly follows Google's [Android Car App Quality Guidelines](https://developer.android.com/docs/quality-guidelines/car-app-quality).
Following these rules isn't optional. If we don't meet these standards, our app won't make it onto the Play Store, and worse, it could contribute to an accident.

To help frame our goals, Google categorizes app quality into three tiers:
- **Tier 3 - Car ready:** Compatible with large screens and usable while parked.
- **Tier 2 - Car optimized:** Provides a great experience on the car's center stack display across driving or parked modes.
- **Tier 1 - Car differentiated:** Adapts to various car hardware screens (center console, instrument cluster, etc.) seamlessly.

## 2. Core Safety & Distraction Requirements

To make sure our app is a helpful co-pilot rather than a dangerous distraction, we have to lock down certain behaviors the moment the car goes into gear:

- **The 2-Second Rule (Glanceability)**: Drivers need to keep their eyes on the road. Any alert we show (like Speeding, Overtaking, or Hazards) must be instantly understandable in a quick glance. Plus, if a user taps a button, the app has to react in under 2 seconds (DR-1).
- **No Complex Interactions While Driving:** The app must lock out any tasks that require sustained attention while the vehicle is moving. Users must be able to complete tasks using 5 screens or fewer (AC-1).
  - *Implementation:* Typing on a keyboard is disabled while the car is in gear.
  - *Alternative:* Rely on voice commands and simple tap interactions.
- **No Animated Intrusions (SA-1) & No Scrolling Text (ST-1):** The interface cannot have distracting animations, looping videos, or auto-scrolling text while the car is moving. Our hazard and speeding alerts need to be clean, static, high-contrast overlays.
- **Visual Information on Phone (VI-1):** If the user must go to the phone screen (e.g., for a permission request), the app must display a message instructing the user to only look at their phone screen when it’s safe to do so.

## 3. UI/UX Mandatory Standards

Google enforces strict ergonomic standards for Car OS apps to ensure drivers do not struggle to use the interface:

- **Minimum Tap Target Sizes (UX-1 & UX-2):** Because a vehicle vibrates and the driver's arm is extended, all interactive elements must have a minimum touch target size of **64x64 dp**. Touch targets must also be spaced at least **24dp apart** from each other and from the screen edges.
- **Legible Fonts (UX-3):** Font sizes must be at least **24sp**.
- **Contrast Ratios & Day/Night Mode (MR-1 & VD-1):** The UI must automatically respond to the vehicle's sensor data. Apps that draw maps must draw a light-themed or dark-themed map when instructed. Colors and icons must meet Android Auto's contrast requirements.
- **Image Usage (IU-1):** No images are allowed on screen except to aid in driving decision-making (e.g., lane/junction guidance for navigation) or standard consumption context (like background map artwork).
- **Ads Restriction (AD-1 & NA-1):** The app must not display text-based advertising (other than naming), nor present advertisements through notifications.

## 4. Specific Navigation & Alert Compliance

Since the application falls under the "Navigation" and "Driver Assistance" categories, it must meet specific functional expectations:

- **Timely and Contextual Prompts:** Navigation instructions and hazard alerts must be delivered with sufficient lead time. The app must launch and load content in **10 seconds or less** (DR-2 & DR-3).
- **Audio-Visual Synergy (DD-1):** Visual alerts for critical safety events must be accompanied by auditory cues. The navigation audio channel must be used exclusively for navigation instructions. 
- **Voice Commands (VC-1):** The app must support Google Assistant voice commands for hands-free interactions.
- **Navigation Functionality & Templates (NF-1 to NF-9):**
  - Must provide turn-by-turn navigation directions.
  - Must draw only map content on the navigation templates. Text-based directions, lane guidance, and ETA must display on relevant safe areas.
  - Must trigger navigation notifications and send next-turn information to the vehicle's cluster display (where applicable).
  - Must provide a **"test drive"** mode that simulates driving (NF-7).
- **Irrelevant Notifications (IN-1):** Notifications must only be displayed when strictly relevant to the driver's immediate needs (e.g., a hazard ahead, not a marketing update).

## 5. Additional Compliance & Edge Cases

- **Expected Performance (EP-2):** When relaunched from the home screen, the app must restore state as closely as possible to the previous state.
- **Payments (PA-1):** If any purchases are enabled, flows must be simple (e.g., existing payment methods). Setup of new payment methods, multiple item selection, or subscriptions are strictly prohibited while driving. 
- **Deep Linking (DL-2):** The app needs to support deep links so it integrates naturally with the rest of the car's native software ecosystem.

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