---
name: "Piper Leader Arm"
kind: "robot"
maker: "PathOn Robotics"
category: "Robotic Arm"
description: "3D-printable 6-DOF leader arm for teleoperation, built around Feetech SCS215 serial bus servos with a squeeze trigger at the wrist."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/robots/piper_leader"
image: "/robots/piper-leader.webp"
specs:
  dof: "6"
  servos: "6 × Feetech SCS215 serial bus"
  interfaces: "TTL serial bus (daisy-chained)"
  feedback: "Position, velocity, load, voltage, temperature"
  gripper: "Squeeze trigger at the wrist"
  printbed: "220 mm largest part — fits 256 mm bed"
  status: "Released — STL, CAD, specs"
purpose:
  - "Teleoperation"
  - "Research"
media:
  - title: "Teleoperating a Piper arm with the printed leader"
    url: "https://www.loom.com/share/76692481e2974dc4ab211c4a76d80e24"
components:
  - name: "Feetech SCS215 Serial Bus Servos"
    type: "Actuators (x6)"
  - name: "3D-Printed Structure"
    type: "PLA / PETG"
  - name: "Wrist Squeeze Trigger"
    type: "Gripper Input"
---

## Overview

A 3D-printable 6-DOF leader arm for teleoperation, built around Feetech SCS215
serial bus servos. You move the leader by hand and the follower arm — an AgileX
Piper in our setup — tracks it. Several structural parts are shared with the
SO-101 design.

Every servo reports position, velocity, load, voltage, and temperature over a
daisy-chained TTL serial bus, and a squeeze trigger at the wrist drives the
follower's gripper.

## Printing

The largest part is 220 mm, so the whole arm fits on a 256 mm bed (Bambu A1 / P1S).

## Use Cases

- Teleoperated data collection for imitation learning
- Low-cost leader for the AgileX Piper and similar 6-DOF arms
- Teleoperation research on printable hardware
