# IDX-3 / User Manual

**Model:** IDX-3  
**Date:** 2026-07-18

![IDX](../images/IDX-3%20Nordic%20Front.jpg)

---

## 01 / THE CONCEPT

IDX bridges the gap between the ephemeral nature of digital data and the tactile permanence of instrumentation. Whether tracking market volatility or environmental signals, you now have a physical anchor for your most important data.

Available in three finishes: Alba, Nordic, and Sanctuary.

![IDX in Alba, Nordic, and Sanctuary](../images/IDX-3%20Trio%20Above.jpg)

We believe in open architecture.

---

## 02 / PRE-FLIGHT CHECK

Before powering the device for the first time, please note:

- **Power Input:** Use the provided USB-C cable. Connect to a standard 5V DC (0.5A) USB power source.
- **WiFi:** IDX is designed for 2.4GHz WPA2 Home Networks. It is **not** compatible with 5GHz-only bands or Captive Portals.
- **Mechanical Care:** The needle is driven by a precision stepper motor. **Do not manually rotate the needle**, as this may cause misalignment or damage.
- **Safety:** Consult and retain the supplied safety information.

---

## 03 / SETUP WIFI

1. **Power On:** Connect the USB-C cable. The device will glow **deep blue**, indicating it is ready for setup.
2. **Access Point:** On your smartphone or laptop, connect to the WiFi network named `IDX_setup`.
3. **Portal:** A configuration page should open automatically. If not, navigate to `http://192.168.4.1`.
4. **Password:** Use `analoguedeskco` if challenged.
5. **Credentials:** Select your home WiFi and enter your password.
6. **IP Address:** Once connected, the device will display its local IP address. **Copy this address** for step 05.
7. **Finish:** Press the button to begin initialisation.

---

## 04 / INITIALISATION

IDX will cycle through several phases indicated by color:

- **WHITE (5s):** Reset mode (Factory reset can be triggered here).
- **LIGHT BLUE / CYAN:** Motor zeroing. The needle will sweep its full range; light buzzing is normal.
- **GREEN:** Centering. Pointer moves to midpoint.
- **ACTIVE:** The device enters operating mode (Default: Clock mode / Glacier ambience).

---

## 05 / CONFIGURATION

Access the internal dashboard via your web browser to customize your device.

1. Paste the **IP Address** from Step 03 into your browser.
2. Create a bookmark for future convenience.
3. Dashboard Sections:
   - **QUICK START:** Several pre-configured pairs of mode and ambience.
   - **MODE:** Select a data source.
   - **AMBIENCE:** Modify LED effects and night mode.
   - **ADVANCED:** Diagnostics and reset options.

---

## 06 / MODE

Choose what data source IDX references.

Each MODE provides a mapping from its value to a 0-1 range, which defines the position of the pointer. Default values are shown below.

| MODE                      | MIN VALUE | MID POINT | MAX VALUE | NOTES                                                                                                                    |
| :------------------------ | :-------- | :-------- | :-------- | :----------------------------------------------------------------------------------------------------------------------- |
| Air Quality Index         | 0         | 50        | 100       | Absolute AQI scale, based on your city location.                                                                         |
| Alt.me Fear & Greed Index | 0         | 50        | 100       | Absolute sentiment index (0 = extreme fear, 100 = extreme greed).                                                        |
| CMC Crypto Tracker        | -5%       | 0%        | +5%       | Relative 24h price change; centre is no change. CMC API key required.                                                    |
| CMC Fear & Greed Index    | 0         | 50        | 100       | Absolute sentiment index. CMC API key required.                                                                          |
| 12-hour Sweep             | 12.00     | 06.00     | 11.59     | Sweeps through 180 degrees in 12h                                                                                        |
| 24-hour Sweep             | 10.00     | 12.00     | 23.59     | Sweeps through 180 degrees in 24h                                                                                        |
| Finnhub Stock Tracker     | -5%       | 0%        | +5%       | Relative 24h price change; centre is no change.                                                                          |
| Home Assistant            | 0         | 50        | 100       | Maps any numeric entity state from your local Homa Assistant instance. For indoor temperature, choose a range like 9-25C |
| Pomodoro Timer            | 0         | 12m30s    | 25m       | Focus sweep toward task completion (counts down). Minutes.                                                               |
| Temperature               | -10C      | 15C       | 40C       | Maps a OpenMeteo temperature report for your city location.                                                              |

### READING THE DIAL

The rotation of the pointer is defined by a `position` value between 0 (MIN) and 1 (MAX).

- MIN: Pointing left
- MID: Pointing up
- MAX: Pointing right

The table above shows each mode's mapping.

You can also go to ADVANCED / DIAGNOSTICS / EVENT LOG in the UI to see the real-time value generated by the current mode.

Optionally, pick a gauge insert (see below) whose printed MIN/MID/MAX labels match the mode you've selected, so the scale on the dial reads correctly. You can also create your own custom inserts.

---

## 07 / GAUGE INSERTS

IDX's faceplate accepts a swappable, printed insert behind the needle, so the dial always reads correctly for whatever MODE you're tracking.

### INCLUDED DESIGNS

A sheet of eight pre-cut inserts is provided:

| Insert            | Scale              | Suits                                    |
| :---------------- | :----------------- | :--------------------------------------- |
| Percentage        | 0 – 100%           | Home Assistant, generic 0-100 sources    |
| Relative %        | -5% – +5%          | Stock / Crypto Tracker                   |
| Percentage (fine) | 0 – 100% (20-step) | Home Assistant, generic 0-100 sources    |
| 12-Hour Clock     | 0 – 12 HOUR        | Clock (12h)                              |
| Temperature       | -10°C – 30°C       | Temperature                              |
| Air Quality       | 0 – 200 AQI        | Air Quality Index                        |
| Blank             | —                  | Custom labelling by hand                 |
| Generic Scale     | 0 – 25             | Pomodoro Timer (minutes), custom sources |

### DOWNLOADS

Prefer to design your own? Both the pre-designed sheet and a blank template are available as vector (SVG) and print-ready (PDF) files, as a starting point:

<div class="manual-download">

[IDX_inserts_dials_v3.pdf](IDX_inserts_dials_v3.pdf) · [IDX_inserts_dials_v3.svg](IDX_inserts_dials_v3.svg)

[IDX_gauge_inserts_blank_v2.2.pdf](IDX_gauge_inserts_blank_v2.2.pdf) · [IDX_gauge_inserts_blank_v2.2.svg](IDX_gauge_inserts_blank_v2.2.svg)

</div>

Print on transparent stock (acetate), then cut along the dotted line.

### SWAPPING AN INSERT

**Tools required:** 2mm hex key.

**Remove circular faceplate**

1. Unplug IDX and lay it on its back with the front facing up.
2. Unscrew the brass corner fixings on the front, using the 2mm hex key.
3. Lift off the clear front window. Hold by the edge to avoid fingerprints. Place somewhere clean.
4. Lift off the 10mm clear spacer.
5. Lift off the plywood face with the circular cutout.

**Add gauge insert**

1. Choose a transparent insert (gauge scale) and slide it behind the needle hub. The needle axle should fit into the slot.
2. Ensure the edge of the insert is aligned with the edge of the device on the 'top' edge.

**Refit gauge faceplate**

1. Slide the faceplate onto the corner pins.
2. Replace the 10mm spacer and front window.
3. Refit the brass corner screws loosely.
4. Ensure all layers are aligned, then perform final tightening of the corner screws. **Do not overtighten.**

---

## 08 / AMBIENCE

We recommend long **CYCLE DURATIONS** (e.g., 600 seconds) for maximum calm.

| Theme         | Effect                                                                        |
| :------------ | :---------------------------------------------------------------------------- |
| **Static**    | A single unchanging colour of your choice.                                    |
| **Pulse**     | Slowly undulating; like breathing.                                            |
| **Glacial**   | Breathless whites and ice blues.                                              |
| **Aurora**    | Electromagnetic storms of green and blue.                                     |
| **Nebula**    | Deep space in blue and purple.                                                |
| **Sunset**    | Soothing end-of-day colours.                                                  |
| **Sentiment** | Red (left), Green (right). Best for market trackers. Colours can be adjusted. |
| **Alert**     | White, until a threshold is reached, then red                                 |

---

## 09 / ADVANCED & TROUBLESHOOTING

- **Pointer Calibration:** If misaligned, set Mode to "Off" and tweak by +/- 10° until pointing at 12 o'clock position.
- **Timezone:** Adjust to ensure Night Mode operates correctly.
- **OTA Updates:** Firmware can be updated via the Advanced page (ElegantOTA).
- **Hardware Reset:** Cycle power 3 times, turning it off specifically during the **White** phase. The device will glow **Magenta** when reset is complete. It will turn blue and be ready for Wifi configuration.

---

## 10 / CARE & MAINTENANCE

- **Cleaning:** Use only a dry microfibre cloth.
- **Warning:** **Do not use isopropyl alcohol or glass cleaners**, as they cause "crazing" in the acrylic.
- **Hardware:** Periodically check that M3 corner bolts are finger-tight. Do not overtighten.
- **Inserts:** Card inserts may fade in direct sunlight over time; reprint from the supplied files as needed.

---

## 11 / DEVELOPER SPECIFICATIONS

IDX is built on an open architecture.

- **MCU:** ESP32-C3-MINI-1 (4MB Flash)
- **Motor:** X27.168 Stepper Motor
- **LEDs:** 6 x WS2812B
- **Interface:** USB-C Serial

### GPIO PIN MAPPING

| Component     | Function   | ESP32-C3 Pin |
| :------------ | :--------- | :----------- |
| Stepper Motor | Coil A (1) | GPIO 00      |
| Stepper Motor | Coil A (2) | GPIO 01      |
| Stepper Motor | Coil B (1) | GPIO 06      |
| Stepper Motor | Coil B (2) | GPIO 07      |
| RGB LEDs      | Data       | GPIO 08      |
| Button        | Reset      | GPIO 09      |

### ESPHOME

IDX supports [ESPHome](https://esphome.io) as an alternative firmware, giving full control to Home Assistant.

The ESPHome configuration files required to build the firmware binary are available at [github.com/analoguedeskco/esphome](https://github.com/analoguedeskco/esphome). Compile these using the ESPHome dashboard or CLI to produce a `.bin`, then flash via [web.esphome.io](https://web.esphome.io/)

Once flashed, IDX appears as a native Home Assistant device — the needle and LEDs are exposed as standard entities and can be driven by any HA automation.

To switch back to the stock firmware, contact support (see below).

---

**Support:**

<support@analoguedesk.co>
