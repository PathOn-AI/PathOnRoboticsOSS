---
name: "PathOn Dexterous Hand V3"
kind: "end_effector"
maker: "PathOn Robotics"
category: "Dexterous Hand"
description: "3-finger hand on four DYNAMIXEL XL330 servos: one per finger plus a geared spread drive, soft printed fingertips. Built and running on our robot; printable STLs, a demo video and a hosted step-by-step assembly guide."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/end_effectors/dexterous_hand/v3"
image: "/robots/dexterous-hand-v3.png"
specs:
  fingers: "3 (two on spread turrets + fixed thumb)"
  dof: "4 actuated: three finger flex + one spread (second spread finger geared −1:1)"
  servos: "4 × DYNAMIXEL XL330-M288-T"
  interfaces: "DYNAMIXEL Protocol 2.0, TTL half-duplex, 57,600 baud; Waveshare Bus Servo Adapter (A)"
  fingertips: "Soft printed fins (TPU)"
  travel: "~96–100° per joint as calibrated"
  printbed: "All parts fit a 256 × 256 mm bed"
  formats: "STL (13 parts)"
  status: "Released — built and running since 2026-10-15; demo video available; 3MF, photos and MJCF to come"
purpose:
  - "Research"
  - "Education"
media:
  - title: "Interactive assembly guide (23 steps, 3D view per step)"
    url: "https://web-6gov.vercel.app/"
  - title: "Demo video: picking up a plush bear on our mobile manipulator (2026-10-19)"
    url: "https://www.loom.com/share/fe40257b80d7402cbd5068077b4870d3"
components:
  - name: "DYNAMIXEL XL330-M288-T"
    type: "Actuators (x4)"
  - name: "Geared Spread Drive"
    type: "Mechanism — two turrets on F6803ZZ bearings, meshing printed gears"
  - name: "Soft-Fin Fingers"
    type: "Printed finger link + TPU fin (x3)"
  - name: "Waveshare Bus Servo Adapter (A)"
    type: "Servo interface, pocketed in the wrist plate"
  - name: "J7 Wrist Adapter + Camera Decoupler"
    type: "Arm mount"
---

## Overview

> **This is the hand on our robot.** V1 stays the simplest complete kit; V3 is the one we use,
> calibrated and running grasps since 2026-10-15.

A compact 3-finger hand on four DYNAMIXEL XL330-M288-T servos. One servo flexes each finger;
a fourth rotates two of the fingers about the palm through a pair of meshing printed gears, so
the hand moves between a pinch, a wrap and a cylindrical grasp with one command. The fingers are
single printed links with soft fins at the tip, and it is the fin that conforms to the object.
The palm is a printed box with a top plate; the two spread fingers sit on turrets riding on
F6803ZZ bearings around an idler pin.

The image above is a render of the assembled CAD. To see the built hand working, watch the
[bear pick-up video](https://www.loom.com/share/fe40257b80d7402cbd5068077b4870d3) recorded on our mobile manipulator on 2026-10-19. Photos are
still to come.

## What's included

- **STL:** all 13 printed parts with counts (2 turrets, 2 gears, 3 finger links, 3 fins)
- **Demo video:** [the hand picking up a plush bear on our mobile manipulator](https://www.loom.com/share/fe40257b80d7402cbd5068077b4870d3)
  (Loom, 2026-10-19)
- **Assembly guide:** hosted at <https://web-6gov.vercel.app/> — 23 steps in four stages, each
  with its parts, exact fasteners and counts, numbered actions and a 3D view of the hand built
  up to that step; every fastener drawn at 1:1 for sorting. The guide's source is not released.

Still to come: a pre-arranged Bambu Studio 3MF plate, photos of the built hand, the as-built mass,
and the STEP / URDF / bring-up files.

## Bought parts

4 × XL330-M288-T with horn, Waveshare Bus Servo Adapter (A), 2 × F6803ZZ bearings,
2 × ⌀4 × 16 cross pins, M2 / M2.5 / M3 socket-head screws, M2.5 and M3 nuts, 4 × M3 heat-set
inserts. Power the adapter with 5 V / 4 A into its barrel jack.

## Use Cases

- A low-cost dexterous end effector for a small arm (ours runs on a 7-DOF arm with a wrist camera)
- Grasp studies that need a spread DOF without a per-joint motor budget
- Teaching: the hosted guide walks a first-time builder through the whole assembly
