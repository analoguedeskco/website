# IDX-3.1 / User Manual

**Model:** IDX-3.1  
**Serial Number:** IDX-3-1xx  
**Firmware:** 6.x  
**Date:** 2026-08-24

![IDX](../images/IDX-3%20Sanctuary%20Front%20Scale.jpg)

---

## 01 / THE CONCEPT

IDX bridges the gap between the ephemeral nature of digital data and the tactile permanence of instrumentation. Whether tracking market volatility or environmental signals, you now have a physical anchor for your most important data.

Available in three finishes: Alba, Nordic, and Sanctuary.

![IDX in Alba, Nordic, and Sanctuary](../images/IDX-3%20Trio%20Scales.jpg)

---

## 02 / PRE-FLIGHT CHECK

Before powering the device for the first time, please note:

- **Power Input:** Use the provided USB-C cable. Connect to a standard 5V DC (0.5A) USB power source.
- **WiFi:** IDX is designed for 2.4GHz WPA2 Home Networks. It is **not** compatible with 5GHz-only bands or Captive Portals.
- **Mechanical Care:** The needle is driven by a precision stepper motor. **Do not manually rotate the needle**, as this may cause misalignment or damage.
- **Safety:** Consult and retain the supplied safety information.

---

## 03 / SETUP WIFI

A new device runs a standalone **Display** MODE, designed for use on a Store shelf. In Display MODE, the needle walks the dial with no data source and no internet connection.

1. **Power On:** Connect the USB-C cable. The device starts up and calibrates the needle (Cyan glow), then the LEDs **flash deep blue for one second** — This indicates Wifi is not yet configured. The needle begins walking.
2. **Access Point:** On your smartphone or laptop, connect to the WiFi network named `IDX-<serial>-setup` — for example `IDX-3-102-setup`. Check the rear of the unit for the Serial Number.
3. **Password:** `idxsetup`.
4. **Portal:** A configuration page should open automatically. If not, navigate to `http://192.168.4.1`.
5. **Credentials:** Select your local WiFi and enter your password.
6. **Address & Login:** The setup page shows the device's local address and its login details. **Copy this address** for step 05.
7. **Finish:** The device restarts onto your network.

### THE 5-MINUTE WINDOW

The Wifi Setup Access Point closes after 5 minutes if unused, as a security precaution.

To reopen it, power-cycle the device.

---

## 04 / INITIALISATION

At power-up, IDX will cycle through several phases indicated by color:

- **WHITE (5s):** Device starting. Reset mode. Unplug and replug repeatedly to Factory Reset.
- **MAGENTA:** Factory reset has been triggered, the device will now reboot.
- **LIGHT BLUE / CYAN:** Motor zeroing. The needle sweeps its full range; A gentle buzzing is normal.
- **DEEP BLUE FLASH (1s):** Only shown if Wifi has not yet been configured.
- **ACTIVE:** The LEDs fade into the ambience and the device enters operating mode. A new or factory-reset device runs **Display / Glacial**.

---

## 05 / CONFIGURATION

Access the internal dashboard via your web browser to customize your device.

1. Paste the **address** from Step 03 into your browser.
2. Sign in (see below).
3. Create a bookmark for future convenience.
4. Dashboard Sections:
   - **QUICK START:** Several pre-configured pairs of mode and ambience.
   - **MODE:** Select a data source.
   - **AMBIENCE:** Modify LED effects and night mode.
   - **ADVANCED:** Diagnostics and reset options.

### SIGNING IN

The web interface requires a login.

|              | Value          |
| :----------- | :------------- |
| **Username** | `idx` (always) |
| **Password** | `idxsetup`     |

You can set your own password under **ADVANCED** (6 to 64 characters). The current password is shown on that page. If you forget it, a factory reset returns the device's password to `idxsetup`.

Spaces are stored exactly as typed, so a password ending in a space needs that space to sign in.

**What the login protects.** The default password is the same on every device and is printed here, so treat it as public. It stops casual and accidental access, but it is not protection from someone who knows the product. If IDX shares a network with people you don't know, set your own password.

**Repeated wrong passwords lock the interface.** Five incorrect passwords in a row lock sign-in for 30 seconds, after which it unlocks on its own — there is nothing to reset. The lock applies to the device rather than to your browser, so if someone else on the network is guessing, you wait alongside them. The gauge keeps running its MODE throughout; only the web interface is affected.

### API KEYS & TOKENS

Keys and tokens (CoinMarketCap, Finnhub, Home Assistant) are never sent back to your browser once saved. The field reads _"Saved — leave blank to keep"_ instead of showing the value.

- **Leave the field blank to keep the stored key.** You do not need to re-enter it to change other settings on the page.
- **A stored key cannot be viewed again.** Keep your own copy.
- **A stored key cannot be cleared from the interface, only replaced.** A factory reset is the only way to remove one.
- **Paste freely.** Spaces and line breaks around a saved value are removed. A Home Assistant token copied from the Home Assistant interface often carries a trailing newline; it will work as pasted.

---

## 06 / MODE

Choose what data source IDX references.

By default, IDX ships in **Display** MODE: the needle walks the dial on its own, with no data source, no keys and no internet connection. A new device demonstrates itself out of the box. Display is also selectable like any other MODE once the device is on your network.

Once you are on WiFi, other modes can be selected.

Each MODE provides a mapping from its value to a 0-1 range, which defines the position of the pointer. Default values are shown below.

| MODE                      | MIN VALUE | MID POINT | MAX VALUE | NOTES                                                                                                                              |
| :------------------------ | :-------- | :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| Air Quality Index         | 0         | 50        | 100       | Absolute AQI scale, based on your city location.                                                                                   |
| Alt.me Fear & Greed Index | 0         | 50        | 100       | Absolute sentiment index (0 = extreme fear, 100 = extreme greed).                                                                  |
| CMC Crypto Tracker        | -5%       | 0%        | +5%       | Relative 24h price change; centre is no change. CMC API key required.                                                              |
| CMC Fear & Greed Index    | 0         | 50        | 100       | Absolute sentiment index. CMC API key required.                                                                                    |
| Display                   | —         | —         | —         | **Default.** Autonomous needle walk; no data source, no configuration, no internet. Works with any face insert.                    |
| 12-hour Sweep             | 12.00     | 06.00     | 11.59     | Sweeps through 180 degrees in 12h                                                                                                  |
| 24-hour Sweep             | 10.00     | 12.00     | 23.59     | Sweeps through 180 degrees in 24h                                                                                                  |
| Finnhub Stock Tracker     | -5%       | 0%        | +5%       | Relative 24h price change; centre is no change.                                                                                    |
| HN Hotness                | 0%        | 50%       | 100%      | Hacker News front-page hotness — #1 story score against a maximum value (500 points by default). Pairs with the 0–100 face insert. |
| Home Assistant            | 0         | 50        | 100       | Maps any numeric entity state from your local Home Assistant instance. For indoor temperature, choose a range like 9-25C           |
| Pomodoro Timer            | 0         | 12m30s    | 25m       | Focus sweep toward task completion (counts down). Minutes.                                                                         |
| Temperature               | -10C      | 15C       | 40C       | Maps a OpenMeteo temperature report for your city location.                                                                        |

### DISPLAY MODE

The needle picks a destination on the dial, travels there over a series of small moves, pauses when it arrives, then picks somewhere else. A full crossing of the dial takes around three minutes.

It is deliberately neither random nor a repeating sweep. Every move is a different size — most are about a unit of the dial, a full-size move is occasional, and the walk sometimes pauses mid-journey. Nothing settles into a rhythm. Movement is capped at 5 units of the dial (about 27 of the motor's 540 steps) per move and is usually a fifth of that, so it stays quiet enough for a shop floor or a desk.

Each device seeds itself from hardware randomness, so two units side by side do not move in step with each other.

There is nothing to configure. Display works with any AMBIENCE — **Sentiment** is worth trying, as the LEDs track the needle as it walks.

| Behaviour                             | Value                        |
| :------------------------------------ | :--------------------------- |
| Time between moves                    | 5 seconds                    |
| Largest possible move                 | 5 units of the dial (of 100) |
| Smallest move                         | 0.4 units                    |
| Minimum distance to a new destination | 15 units                     |
| Chance of pausing mid-journey         | 15% per move                 |
| Pause on arrival                      | 5 to 20 seconds              |

### READING THE DIAL

The rotation of the pointer is defined by a `position` value between 0 (MIN) and 1 (MAX).

- MIN: Pointing left
- MID: Pointing up
- MAX: Pointing right

The table above shows each mode's mapping.

You can also go to ADVANCED / DIAGNOSTICS / EVENT LOG in the UI to see the real-time value generated by the current mode.

Optionally, pick a face insert (see below) whose printed MIN/MID/MAX labels match the mode you've selected, so the scale on the dial reads correctly. You can also create your own custom face inserts.

---

## 07 / FACE INSERTS

IDX accepts a swappable, printed face insert behind the needle, so the dial always reads correctly for whatever MODE you're tracking.

### INCLUDED DESIGNS

Pre-cut face inserts are provided, which might include things like:

| Face insert       | Scale              | Suits                                             |
| :---------------- | :----------------- | :------------------------------------------------ |
| Percentage        | 0 – 100%           | HN Hotness, Home Assistant, generic 0-100 sources |
| Relative %        | -5% – +5%          | Stock / Crypto Tracker                            |
| Percentage (fine) | 0 – 100% (20-step) | Home Assistant, generic 0-100 sources             |
| 12-Hour Clock     | 0 – 12 HOUR        | Clock (12h)                                       |
| Temperature       | -10°C – 30°C       | Temperature                                       |
| Air Quality       | 0 – 200 AQI        | Air Quality Index                                 |
| Blank             | —                  | Custom labelling by hand                          |
| Generic Scale     | 0 – 25             | Pomodoro Timer (minutes), custom sources          |

### DOWNLOADS

Prefer to design your own? Both the pre-designed sheet and a blank template are available as vector (SVG) and print-ready (PDF) files, as a starting point:

<div class="manual-download">

[IDX_inserts_dials_v3.pdf](IDX_inserts_dials_v3.pdf) · [IDX_inserts_dials_v3.svg](IDX_inserts_dials_v3.svg)

[IDX_gauge_inserts_blank_v2.2.pdf](IDX_gauge_inserts_blank_v2.2.pdf) · [IDX_gauge_inserts_blank_v2.2.svg](IDX_gauge_inserts_blank_v2.2.svg)

</div>

Print on transparent stock (acetate), then cut along the dotted line.

### SWAPPING A FACE INSERT

**Tools required:** 2mm hex key.

**Remove circular faceplate**

1. Unplug IDX and lay it on its back with the front facing up.
2. Unscrew the brass corner fixings on the front, using the 2mm hex key.
3. Lift off the clear front window. Hold by the edge to avoid fingerprints. Place somewhere clean.
4. Lift off the 10mm clear spacer.
5. Lift off the plywood face with the circular cutout.

**Add face insert**

1. Choose a transparent face insert (gauge scale) and slide it behind the needle hub. The needle axle should fit into the slot.
2. Ensure the edge of the face insert is aligned with the edge of the device on the 'top' edge.

**Refit gauge faceplate**

1. Slide the faceplate onto the corner pins.
2. Replace the 10mm spacer and front window.
3. Refit the brass corner screws loosely.
4. Ensure all layers are aligned, then perform final tightening of the corner screws. **Do not overtighten.**

---

## 08 / AMBIENCE

We recommend long **CYCLE DURATIONS** (e.g., 600 seconds) for maximum calm. A new or factory-reset device runs **Glacial**.

| Theme         | Effect                                                                       |
| :------------ | :--------------------------------------------------------------------------- |
| **Static**    | A single unchanging colour of your choice.                                   |
| **Pulse**     | Slowly undulating; like breathing.                                           |
| **Glacial**   | Breathless whites and ice blues.                                             |
| **Aurora**    | Electromagnetic storms of green and blue.                                    |
| **Nebula**    | Deep space in blue and purple.                                               |
| **Sunset**    | Soothing end-of-day colours.                                                 |
| **Sentiment** | Red (left), Green (right). Best for market trackers and Display. Adjustable. |
| **Alert**     | White, until a threshold is reached, then red                                |

---

## 09 / ADVANCED & TROUBLESHOOTING

- **Pointer Calibration:** If misaligned, set Mode to "Off" and tweak by +/- 10° until pointing at 12 o'clock position.
- **Password:** Set your own web interface password (6 to 64 characters). The current password is shown on this page. If forgotten, perform a factory reset to return to `idxsetup`.
- **Timezone:** Adjust to ensure Night Mode operates correctly.
- **OTA Updates:** Firmware can be updated via the Advanced page (ElegantOTA); the same login applies. Updates are **not** possible over the setup network — use WiFi or USB.
- **Router Down at Boot:** IDX retries its saved WiFi every 60 seconds and restarts itself onto the network once it returns. No action needed.

### FACTORY RESET

A factory reset returns IDX to the state it shipped in.

**What it clears**

| Setting                   | After reset                        |
| :------------------------ | :--------------------------------- |
| WiFi network and password | Erased — the setup network reopens |
| Web interface password    | Back to `idxsetup`                 |
| API keys and tokens       | Erased                             |
| MODE                      | Display                            |
| AMBIENCE                  | Glacial                            |

**How to do it**

No tools required — the reset is triggered by power alone.

1. Watch the LEDs as the device starts. The first five seconds of every boot are the **WHITE** phase — this is the reset window.
2. Unplug the USB-C cable while the LEDs are still white.
3. Plug it back in, wait for white, and unplug again.
4. Repeat until the LEDs glow **MAGENTA**, which confirms the reset has been triggered. This normally takes three power cycles.
5. Leave the device powered. It reboots, zeroes the needle (cyan), flashes deep blue and returns to **Display / Glacial** with the setup network open.

If you miss the white phase, let the device finish booting and start again. Follow section 03 to put IDX back on your WiFi.

### COMMON QUESTIONS

- **"I can't find the setup network."** It closes 5 minutes after it was last used. Power-cycle the device to reopen it.
- **"It's asking for a password."** `idx` / `idxsetup`, or whatever you set under ADVANCED.
- **"I've forgotten my password."** Perform a factory reset. The password returns to `idxsetup`.
- **"It says too many failed sign-in attempts."** Five wrong passwords in a row lock sign-in for 30 seconds. Wait, then try again.
- **"A page said the device could not save my settings."** That is a genuine storage fault, not a cosmetic one. Nothing was changed and the previous setting — including your existing password — is still in use. Power-cycle the device and try again; if it repeats, contact support.
- **"Why can't I see my API key?"** It is stored but never shown again. Leave the field blank to keep it, or type a new one to replace it.
- **"The needle is moving on its own."** That is Display MODE, the default before setup. Choose another MODE once the device is on WiFi.
- **"Can I update the firmware before setting up WiFi?"** No. Use WiFi or USB.

---

## 10 / CARE & MAINTENANCE

- **Cleaning:** Use only a dry microfibre cloth.
- **Warning:** **Do not use isopropyl alcohol or glass cleaners**, as they cause "crazing" in the acrylic.
- **Hardware:** Periodically check that M3 corner bolts are finger-tight. Do not overtighten.
- **Face Inserts:** Printed face inserts may fade in direct sunlight over time; reprint from the supplied files as needed.

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
