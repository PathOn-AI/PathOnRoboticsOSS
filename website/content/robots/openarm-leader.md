---
name: "OpenArm Leader Arm"
kind: "robot"
maker: "PathOn Robotics"
category: "Robotic Arm"
description: "3D-printable leader arm for teleoperating the 7-DOF OpenArm V2 — joint-position teleop at a fraction of the cost of the motorised leader that OpenArm's bilateral path requires. Placeholder: under development, nothing released."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/robots/openarm_leader"
specs:
  follower: "OpenArm V2, 7 DOF, torque-controlled"
  teleop: "Joint-position only — not bilateral"
  gripper: "Operator trigger at the wrist"
  manufacturing: "FDM, 256 × 256 mm bed"
  formats: "None released yet"
  status: "Placeholder — under development, nothing released"
purpose:
  - "Research"
  - "Education"
components:
  - name: "Printed Links"
    type: "Structure — one leader joint per follower joint"
  - name: "Serial Bus Servos"
    type: "Joint position sensing"
  - name: "Wrist Trigger"
    type: "Gripper input"
---

## Overview

> **Placeholder.** Under development — there's no CAD, no BOM, no printable meshes, and no
> photos yet. Everything here is design intent, not a built and measured thing.

A 3D-printable leader arm for teleoperating [OpenArm V2](https://openarm.dev), the 7-DOF
torque-controlled arm. Same idea as our [Piper leader arm](/opensource/robots/piper-leader):
an operator moves the printed arm by hand and the follower tracks its joint positions.

## Why build one

OpenArm's own teleoperation path is bilateral, with force feedback — and it gets that by using
a **second motorised OpenArm** as the leader. Excellent capability, awkward consequence: the
leader costs about what the follower costs, and for a bimanual rig you're buying a whole second
set of arms to drive the first. Bilateral control also wants a ≥500 Hz loop, which in practice
means a dedicated host rather than a thread on the robot's existing computer.

A printed leader answers a different question — what does it take to get a human driving this
arm at all? It gives up force feedback and returns joint-position teleoperation at roughly 2%
of the arm's cost, which covers most of what a leader arm does day to day: demonstration
capture, scripted-motion authoring, and teaching.

## What it can't do, and why that's physics

A printed leader **cannot** give force feedback. Not with better firmware, not with more tuning.

OpenArm is quasi-direct-drive: a deliberately low gear ratio leaves each joint backdrivable, so
joint torque is very nearly proportional to motor current, and current sensing becomes torque
sensing for free. A printed leader built from hobby servos runs a *high* gear ratio, and its
friction and backlash swamp exactly the signal bilateral control depends on. No amount of
software recovers the operator's force from underneath that.

So the scope is fixed: position-only leader–follower here; force feedback requires a
quasi-direct-drive leader, meaning motors of the same class as the follower's.

## Use Cases

- Demonstration capture for imitation learning on a 7-DOF arm
- Authoring scripted motions by hand instead of by keyframe
- Teaching teleoperation without a second set of arms
