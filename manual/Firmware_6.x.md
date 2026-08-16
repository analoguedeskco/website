# IDX Firmware 6.0.0 — Documentation Handoff

Everything user-facing that changed in this release, for whoever is updating the
documentation. Internal refactors are listed at the end only so you know to ignore them.

Two areas changed: **Display mode** (a new default mode and a new first-boot experience)
and **access control** (the web interface now requires a login).

---

## Breaking changes — lead with these

1. **The web interface now requires a login.** Username `idx`, password `idxsetup`.
   Firmware upload (`/update`) requires the same.
2. **The setup WiFi network has been renamed and now has a password.**
   It was `IDX-setup`, open. It is now `IDX-<serial>-setup` with the password `idxsetup`.
3. **The setup network closes 5 minutes after anyone last used it.** Power-cycle the
   device to reopen it.
4. **Stored API keys and tokens can no longer be viewed or cleared from the interface.**
   They can be replaced, but not read back.
5. **A factory-reset unit now starts in Display mode**, not HN Hotness. Devices already
   set up keep whatever mode they were on — this only affects new and reset units.

---

## Part 1 — Display mode

### What it is

A new mode that moves the needle around the dial on its own, with no data source and no
internet connection. It exists so a unit can demonstrate itself out of the box — on a shop
shelf, or on a desk before it has been set up.

It is now the **factory default**, and it is also selectable like any other mode once the
device is on WiFi.

### How it behaves

The needle picks a destination on the dial, travels there over a series of small moves,
pauses when it arrives, then picks somewhere else. A full crossing of the dial takes around
three minutes.

Deliberately neither random nor a repeating sweep. Every move is a different size — most are
about a unit of the dial, a full-size move is occasional, and the walk sometimes pauses
mid-journey. Nothing settles into a rhythm.

Movement is capped at 5 units of the dial (about 27 of the motor's 540 steps) per move and is
usually a fifth of that, so it stays quiet enough for a shop floor or a desk.

Each unit seeds itself from hardware randomness, so two units side by side do not move in
step with each other.

### Configuration

None. There are no settings for this mode.

### Ambience

Works with any ambience. A fresh unit runs Glacial, which is the existing factory default for
ambience and is unchanged. **Sentiment** is worth recommending as a pairing — the LED bar
tracks the needle as it walks.

### Reference values

Only needed if the docs quote specifics.

| Behaviour                             | Value                        |
| ------------------------------------- | ---------------------------- |
| Time between moves                    | 5 seconds                    |
| Largest possible move                 | 5 units of the dial (of 100) |
| Smallest move                         | 0.4 units                    |
| Minimum distance to a new destination | 15 units                     |
| Chance of pausing mid-journey         | 15% per move                 |
| Pause on arrival                      | 5 to 20 seconds              |
| Mode name in the interface            | Display                      |

---

## Part 2 — First boot and the setup network

### The new boot sequence

What an owner sees on a brand-new or factory-reset unit:

1. LEDs go dark briefly, then white — device starting.
2. Cyan comet sweeps the bar while the needle calibrates. (Unchanged.)
3. **The bar flashes deep blue for one second.** This means the setup network is now live.
4. The bar fades into the Glacial ambience and **the needle starts walking** — Display mode
   is running.

The blue flash appears on any boot where the setup network opens. Once WiFi is configured it
never appears again.

The important change: the setup network runs **alongside** the working device. Previously the
unit sat motionless with a solid blue bar until someone configured it. Now it demonstrates
itself while it waits, and configuring WiFi never interrupts the demo.

### Joining the setup network

|                                                      | Value                                        |
| ---------------------------------------------------- | -------------------------------------------- |
| Network name                                         | `IDX-<serial>-setup`, e.g. `IDX-3-002-setup` |
| Password                                             | `idxsetup`                                   |
| Address if the setup page doesn't open automatically | `http://192.168.4.1`                         |

The serial is in the network name so that several units in the same room stay distinguishable.
Without this, a phone would treat them as one network and could silently switch between units
part-way through setup. A unit also hides other IDX setup networks from its own network list,
so you cannot accidentally join one IDX to another.

### The 5-minute window

The setup network closes once nobody has been connected to it for 5 minutes, so a display unit
is not left broadcasting all day.

**To reopen it, power-cycle the device.** This is the single most important thing to document
— there is no way to discover it from the device itself. It needs to be in the printed
material as well as online.

Staying connected keeps the window open, so a slow setup will not be cut off part-way.

### While the setup network is up

Only the setup page is available. The normal interface — modes, ambience, diagnostics — is not
reachable until the device is on WiFi. This is deliberate: a display unit on a shop shelf must
not let a passer-by change what it is doing, and several modes need WiFi before they show
anything at all.

**Firmware update is unavailable over the setup network.** An unconfigured unit can only be
updated over WiFi or by USB.

### Finishing setup

The setup page shows the device's address and login details, then restarts the device onto the
owner's network.

### If the router was down at boot

The device retries its saved WiFi every 60 seconds and restarts itself onto the network once
it comes back. No intervention needed. Worth a line in troubleshooting.

---

## Part 3 — Signing in

### Credentials

|          | Value          |
| -------- | -------------- |
| Username | `idx` (always) |
| Password | `idxsetup`     |

The same password as the setup network, so there is one credential for the whole product.

Owners can set their own under **Advanced** (minimum 6 characters). The current password is
shown on that page, and printed to the USB serial log at every boot — so a forgotten custom
password is recoverable over USB, or by factory reset.

The login also covers firmware upload.

### Be honest about what this protects

The default password is the same on every unit and is printed in the documentation, so it is
public knowledge. It stops casual and accidental access — a housemate, a customer poking at a
shop unit, another device on the network finding an open page — but it is not protection from
someone who knows the product.

The Advanced page says so directly while the password is still the default, and recommends
setting your own if the device shares a network with people the owner doesn't know. The
documentation should say the same rather than implying the device is locked down.

### Stored API keys and tokens

Keys and tokens (CoinMarketCap, Finnhub, Home Assistant) are **never sent back to the browser**
once saved. The field shows "Saved — leave blank to keep" instead of the value.

Consequences to document:

- **Leaving the field blank keeps the stored key.** You do not need to re-enter it to change
  other settings on the page.
- **A stored key cannot be viewed again.** Owners should keep their own copy.
- **A stored key cannot be cleared from the interface, only replaced.** Factory reset is the
  only way to remove one.

This matters most for Home Assistant: the long-lived access token grants full control of the
owner's Home Assistant, and it was previously readable by anything on the same network.

### Pages that stay open

The stylesheet and the favicon are served without a login, so the sign-in prompt renders
correctly. Nothing else is.

---

## Documentation surfaces

| Surface                      | Status                                                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `README.md`                  | Updated in this release — first boot, signing in, setup network, Display mode, troubleshooting                                                                            |
| Printed insert / packaging   | **Not done — needs action.** Must carry the network name pattern, the password `idxsetup`, and the 5-minute window. An owner without this cannot set the device up at all |
| Product page / store listing | Display mode is worth selling: a unit that works out of the box with no configuration                                                                                     |
| Support / FAQ                | New entries below                                                                                                                                                         |

### Suggested FAQ entries

- "I can't find the setup network." — It closes after 5 minutes. Power-cycle the device.
- "It's asking for a password." — `idx` / `idxsetup`, or whatever you set under Advanced.
- "I've forgotten my password." — Connect over USB and read the serial log, or factory reset.
- "Why can't I see my API key?" — It is stored but never shown again. Leave the field blank to
  keep it, or type a new one to replace it.
- "The needle is moving on its own." — That's Display mode, the default before setup. Choose a
  different mode once the device is on WiFi.
- "Can I update the firmware before setting up WiFi?" — No. Use WiFi or USB.

---

## Not user-facing — ignore for documentation

Listed only so you don't chase them:

- The setup portal was restructured so it no longer blocks the device's main loop. This is what
  makes Display mode run while the setup network is up.
- Fixed a bug where a device with no clock stalled its own main loop for 5 seconds at a time,
  freezing the needle and the LED fade.
- Setup networks now spread across WiFi channels 1, 6 and 11 instead of all using channel 1.
- Cross-site request protection and a POST-only save endpoint.
- Test coverage: unit tests for the Display walk and for secrets not leaking; integration tests
  for the login requirement.
