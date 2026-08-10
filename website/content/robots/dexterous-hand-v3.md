---
name: "PathOn Dexterous Hand V3 — Barrett-Style"
kind: "robot"
maker: "PathOn Robotics"
category: "Dexterous Hand"
description: "Barrett-style underactuated hand: 8 joints driven by 4 DYNAMIXEL servos, with MuJoCo + ROS 2 Jazzy + MoveIt 2 integration. Files not yet released."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/dexterous_hand/v3"
image: "/robots/dexterous-hand-v3.svg"
specs:
  fingers: "3"
  dof: "8 joints / 4 actuated DOF"
  servos: "DYNAMIXEL X-series (XL330-M288-T class)"
  interfaces: "TTL half-duplex daisy chain"
  status: "Placeholder — files not yet released"
purpose:
  - "Research"
components:
  - name: "DYNAMIXEL X-series"
    type: "Actuators (x4)"
  - name: "Underactuated 2-Link Fingers"
    type: "Mechanism (x3)"
  - name: "Coupled Spread DOF"
    type: "Mechanism"
  - name: "Printed Wrist Adapter"
    type: "Arm Mount (AgileX Piper reference)"
---

## Overview

> **Status: placeholder.** V3 is designed and running in simulation in-house, but
> the CAD, meshes, and models are not released yet. This page documents the design
> intent; files will land in the repository when the release is cleared.

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
Jazzy, and MoveIt 2.

## Use Cases

- Underactuated grasping research without a per-joint motor budget
- Sim-to-real work on a Barrett-style topology
- Reconfigurable grasp studies (pinch / wrap / cylindrical)
