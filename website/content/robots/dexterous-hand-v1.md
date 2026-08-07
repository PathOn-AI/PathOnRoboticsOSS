---
name: "Pathon Dexterous Hand V1"
kind: "robot"
maker: "Pathon Robotics"
category: "Dexterous Hand"
description: "3-finger servo-actuated hand built around 7 DYNAMIXEL XL330-M288-T servos — research-grade feedback, printable CAD/STL/3MF."
link: "https://github.com/PathOn-AI/pathon_opensource/tree/main/hardware/dexterous_hand/v1"
image: "/robots/dexterous-hand-v1.png"
specs:
  dof: "7"
  fingers: "3 (2 fingers + opposable thumb)"
  torque: "0.52 Nm per servo"
  resolution: "4096 steps (12-bit)"
  interfaces: "TTL half-duplex, SBUS / iBUS / PWM"
  power: "5 V"
  status: "Released — CAD, STL, 3MF"
purpose:
  - "Research"
components:
  - name: "DYNAMIXEL XL330-M288-T"
    type: "Actuators (x7)"
  - name: "3D-Printed Palm & Fingers"
    type: "PLA / PETG"
  - name: "Bambu Studio 3MF Plate"
    type: "Print Project"
---

## Overview

The Pathon Dexterous Hand V1 is a 3-finger, servo-actuated hand designed for fast
prototyping and manipulation research. It is servo-actuated rather than
tendon-driven, which keeps the accessory count low and the assembly simple, and
the DYNAMIXEL XL330-M288-T gives full position / velocity / current feedback
through a mature SDK.

Two fingers plus an opposable thumb cover a wide range of grasps while keeping
mechanical complexity manageable for a first build.

## What's Included

- CAD source files
- Printable STLs
- Bambu Studio 3MF with the parts pre-arranged on a plate

## Use Cases

- Manipulation research on a printable, low-cost end-effector
- Grasp experiments with per-joint position and current feedback
- Teaching and prototyping platform for dexterous manipulation
