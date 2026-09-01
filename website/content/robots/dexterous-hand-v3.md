---
name: "PathOn Dexterous Hand V3 — Barrett-Style"
kind: "end_effector"
maker: "PathOn Robotics"
category: "Dexterous Hand"
description: "Barrett-style underactuated hand: 8 joints driven by 4 DYNAMIXEL servos. CAD assembly and the first printable STLs are released; 3MF, sim models and assembly docs are still to come."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/end_effectors/dexterous_hand/v3"
image: "/robots/dexterous-hand-v3.webp"
specs:
  fingers: "3"
  dof: "8 joints / 4 actuated DOF"
  servos: "DYNAMIXEL X-series (XL330-M288-T class)"
  interfaces: "TTL half-duplex daisy chain"
  material: "PLA / PETG, 0.2 mm layers"
  printbed: "256 × 256 mm"
  formats: "SolidWorks CAD, STL"
  status: "Partial release — CAD + first STLs"
purpose:
  - "Research"
media:
  - title: "Dexterous Hand V3 — CAD walkthrough"
    url: "https://www.loom.com/share/a6dab9213ed04e7084dc8da638d73888"
components:
  - name: "DYNAMIXEL X-series"
    type: "Actuators (x4)"
  - name: "Underactuated 2-Link Fingers"
    type: "Mechanism (x3)"
  - name: "Coupled Spread DOF"
    type: "Mechanism"
  - name: "Printed Wrist Adapter"
    type: "Arm Mount (AgileX Piper reference) — pending"
---

## Overview

> **This is the hand we are actively developing.** V1 is still the complete package
> to build today; new work goes into V3.

V1 and V2 use one actuator per joint — simple, but the motor count grows with
every joint and the palm fills up fast. V3 takes the Barrett Hand (BH8-280/282)
topology instead, closing the gap between joints and actuators mechanically:
**8 joints on 4 motors**.

- **3 finger-flexion DOF** — one servo per finger, each finger underactuated: the
  servo drives the proximal link and a coupling carries the distal link at a fixed
  ratio until the proximal link stalls against the object, after which the distal
  link keeps curling. Adaptive, shape-conforming grasps from one motor per finger.
- **1 spread DOF** — a single servo rotates two of the three fingers about the palm
  axis, reconfiguring between pinch, spherical/wrap, and cylindrical grasps.

The hand is arm-agnostic; the only arm-specific part is the printed wrist adapter.
The reference integration targets the AgileX Piper 6-DOF arm.

It is also the first version modelled for a full simulation stack — MuJoCo, ROS 2
Jazzy, and MoveIt 2. Those models exist in-house but are not part of this release.

## What's Included

- SolidWorks CAD: the full `dex_hand` assembly plus per-part source
- First printable STLs: palm plate, proximal link, distal link, finger base
- Isometric CAD render of the assembly

Still to come: the complete STL set (coupler, spread gear), a pre-arranged Bambu
Studio 3MF plate, the URDF/MJCF simulation models, the printed wrist adapter, and
the assembly guide with a fastener and bearing BOM.

## Measured vs. Target

The image above is a **CAD render, not a photo** — no hand has been assembled yet.
Bounding boxes and mesh integrity come from the committed STLs (the palm measures
150.2 mm across; the proximal + distal link stack is 81 + 52.6 mm). Everything
else — joint count, DOF, travel ranges, the ≤ 600 g mass budget — is design
intent, and will be replaced with as-built numbers once a hand is built and
weighed.

`base_base.STL` is the stock blank the palm is cut from. It is kept for CAD
traceability and is **not** a printable part.

## Use Cases

- Underactuated grasping research without a per-joint motor budget
- Sim-to-real work on a Barrett-style topology
- Reconfigurable grasp studies (pinch / wrap / cylindrical)
