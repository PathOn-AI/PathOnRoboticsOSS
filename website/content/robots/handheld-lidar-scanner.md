---
name: "Handheld 3D LiDAR Scanner"
kind: "part"
maker: "PathOn Robotics"
category: "Handheld Scanner"
description: "3D-printable handheld enclosure that turns a Livox Mid-360 into a self-contained walk-around 3D scanner — sensor, Raspberry Pi 5, power bank, and 4G dongle in one printed body. Placeholder: built and working, files not yet released."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/handheld_lidar_scanner"
image: "/robots/handheld-lidar-scanner.jpg"
specs:
  sensor: "Livox Mid-360 / Mid-360S, tilted 20° rearward"
  compute: "Raspberry Pi 5 (fits metal armour case)"
  power: "Power bank, 150 × 68 × 41.5 mm envelope"
  connectivity: "4G LTE USB dongle"
  parts: "~10 printable parts, snap-fit + quick-release pin"
  material: "PLA or PETG, 256 × 256 mm bed"
  formats: "STL + STEP — not yet released"
  status: "Placeholder — built, files not yet released"
purpose:
  - "Research"
components:
  - name: "Livox Mid-360"
    type: "LiDAR Sensor"
  - name: "Raspberry Pi 5"
    type: "Onboard Compute"
  - name: "Printed Enclosure"
    type: "Upper body, lid, bridge, handle, cable bay, hood, raceway, pin, dongle cradle"
  - name: "Power Bank"
    type: "Power (handle slot)"
---

## Overview

> **Placeholder.** The scanner in the photo is real and working, but the CAD source,
> printable meshes, and export tooling have not been cleared for release yet. Nothing
> is downloadable from this page today.

A 3D-printable handheld enclosure that turns a [Livox
Mid-360](https://www.livoxtech.com/mid-360) into a self-contained, walk-around 3D
scanner. Sensor, compute, power, and connectivity all ride in one printed body with a
pistol grip and a tripod-style anti-tip base, so a mapping run needs nothing but the
scanner in your hand.

## Why the 20° tilt

The Mid-360's vertical field of view runs roughly −7° to −52°. Tilting the sensor
plate 20° rearward swings that cone up and forward into the space a person walking
with the scanner actually wants to map, instead of at their own feet.

## Design

The body is modelled as a single parametric source, so the sensor tilt, the
power-bank envelope, and the print clearances are dimensions rather than baked-in
geometry. About ten printable parts, toolless where it matters: snap clips on the
upper lid, a spigot-and-socket mate between handle and bridge locked by a
quick-release pin, a snap-on raceway cover down the front of the handle, and a
slide-on holster for the 4G dongle. A release would ship the exported STLs and
STEP, not the source.

Cable management is part of the enclosure rather than an afterthought — figure-8
spooling posts in the front bay hold ~1.5 m of slack plus the M12 aviation connector
and Ethernet splitter, with zip-tie strain relief at the M12 plug and the RJ45 port.

## Commercial reference

The closest off-the-shelf equivalent is the
[Manifold Pocket2](https://www.3dmanifold.com/products/pocket2/) (from $3,495) — the same
idea in a finished product: a Mid-360-class sensor, an IMU, compute, and a battery in a
handheld grip. Manifold doesn't name the LiDAR, but its published numbers (905 nm,
40 m @ 10% / 70 m @ 80%, 200,000 points/s, 360° × −7° to 52°) match the
[Mid-360 datasheet](https://www.livoxtech.com/mid-360/specs) line for line.

The gap is software, not the enclosure: Pocket2 adds global-shutter RGB cameras, a
proprietary real-time SLAM, and a cloud processing suite. This project is the sensor rig.

## Use Cases

- Walk-around indoor and site mapping without a cart or a backpack rig
- LiDAR-inertial odometry and SLAM data collection
- Ground-truth capture for robot navigation work
