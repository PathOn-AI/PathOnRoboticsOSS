---
name: "PathOn Dexterous Hand V2"
kind: "end_effector"
maker: "PathOn Robotics"
category: "Dexterous Hand"
description: "Compact 3-finger hand built on Feetech SCS0009 micro servos — smaller and lighter than V1, with a prepared print plate."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/dexterous_hand/v2"
image: "/robots/dexterous-hand-v2.jpg"
specs:
  fingers: "3"
  servos: "Feetech SCS0009"
  interfaces: "TTL serial bus"
  status: "Released — STL, 3MF"
purpose:
  - "Research"
  - "Education"
media:
  - title: "PathOn Robotics Open Source: Dex-3 hand"
    url: "https://www.loom.com/share/2af562428e9e4f7997235696ade344c9"
components:
  - name: "Feetech SCS0009 Micro Servos"
    type: "Actuators"
  - name: "3D-Printed Palm, Palm Mount, Fingers"
    type: "PLA / PETG"
  - name: "Bambu Studio 3MF Plate"
    type: "Print Project"
---

## Overview

The PathOn Dexterous Hand V2 trades V1's research-grade DYNAMIXEL package for the
much smaller Feetech SCS0009 micro servo. The result is a lighter, more compact
hand with a simpler printable layout — a good fit when the hand has to sit on a
small arm or when build cost matters more than actuator feedback.

Like V1, it is direct-drive: one servo per joint.

## What's Included

- Printable STLs (palm, palm mount, fingers, mirrored finger, male/female mounts)
- Bambu Studio 3MF with a prepared build plate

## Use Cases

- Lightweight end-effector for small arms
- Low-cost classroom and workshop builds
- Manipulation prototyping where size and weight dominate
