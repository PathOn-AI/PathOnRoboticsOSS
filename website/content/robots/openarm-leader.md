---
name: "OpenArm Leader Arm"
kind: "robot"
maker: "PathOn Robotics"
category: "Robotic Arm"
description: "3D-printable 7-DOF leader arm for teleoperating OpenArm, built around eight Feetech STS3215 serial bus servos with a trigger at the wrist for gripper input — joint-position teleop at a fraction of the cost of a motorised leader."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/robots/openarm_leader"
image: "/robots/openarm-leader.png"
specs:
  dof: "7 arm DOF + 1 gripper input"
  servos: "8 × Feetech STS3215-C046 serial bus (7.4 V, 1:147)"
  interfaces: "TTL serial bus (daisy-chained)"
  feedback: "Position, velocity, load, voltage"
  gripper: "Trigger at the wrist"
  teleop: "Joint-position only — not bilateral"
  printbed: "159 mm largest part — fits 256 mm bed"
  formats: "STEP, STL (11 parts)"
  status: "Released — STL, CAD, specs"
purpose:
  - "Teleoperation"
  - "Research"
  - "Education"
media:
  - title: "Teleoperating an OpenArm with the printed leader"
    url: "https://www.loom.com/share/2e685700c64042b793715e626f05dbb4"
components:
  - name: "Feetech STS3215-C046 Serial Bus Servos"
    type: "Actuators (x8)"
  - name: "3D-Printed Structure"
    type: "11 printed parts, STEP + STL"
  - name: "Wrist Trigger"
    type: "Gripper Input"
  - name: "Waveshare Serial Bus Servo Driver Board"
    type: "Servo interface"
---

## Overview

A 3D-printable 7-DOF leader arm for teleoperating [OpenArm](https://openarm.dev), the
torque-controlled arm. Same idea as our [Piper leader arm](/opensource/robots/piper-leader):
an operator moves the printed arm by hand and the follower tracks its joint positions.

Each arm uses eight Feetech STS3215-C046 serial bus servos: seven for the arm joints and one
for gripper input from a trigger at the wrist. Every servo reports position, velocity, load,
and voltage over a daisy-chained TTL serial bus through a Waveshare Serial Bus Servo Driver
Board.

The image above is a CAD render; an assembled-arm photo is in the repository README.

## Why build one

OpenArm's own teleoperation path is bilateral, with force feedback — and it gets that by using
a **second motorised OpenArm** as the leader. Excellent capability, awkward consequence: the
leader costs about what the follower costs, and for a bimanual rig you're buying a whole second
set of arms to drive the first. Bilateral control also wants a ≥500 Hz loop, which in practice
means a dedicated host rather than a thread on the robot's existing computer.

A printed leader answers a different question — what does it take to get a human driving this
arm at all? It gives up force feedback and returns joint-position teleoperation at a small
fraction of the arm's cost, which covers most of what a leader arm does day to day:
demonstration capture, scripted-motion authoring, and teaching.

## What it can't do, and why that's physics

A printed leader **cannot** give force feedback. Not with better firmware, not with more tuning.

OpenArm is quasi-direct-drive: a deliberately low gear ratio leaves each joint backdrivable, so
joint torque is very nearly proportional to motor current, and current sensing becomes torque
sensing for free. A printed leader built from hobby servos runs a *high* gear ratio (1:147 here),
and its friction and backlash swamp exactly the signal bilateral control depends on. No amount
of software recovers the operator's force from underneath that.

So the scope is fixed: position-only leader–follower here; force feedback requires a
quasi-direct-drive leader, meaning motors of the same class as the follower's.

## Printing

Eleven printed parts: eight joint parts (`j1` through `j8`), a handle, a trigger, and a mount
for the Waveshare driver board. The largest part is 159 mm, so the whole arm fits on a 256 mm
bed (Bambu A1 / P1S). STEP source is provided for editing and binary STL for print preparation.

Joints 4 and 6 use anti-slip silicone elastic straps; links are in the repository README.

## Setup

Assign each servo a unique ID before assembly: IDs 1–7 for the arm joints and ID 8 for the
gripper input, using a Feetech servo configuration tool and the Waveshare driver board. Then
calibrate the leader joint positions and verify the joint mapping before teleoperating the
follower.

## Use Cases

- Demonstration capture for imitation learning on a 7-DOF arm
- Authoring scripted motions by hand instead of by keyframe
- Teaching teleoperation without a second set of arms
