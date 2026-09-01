---
name: "Symmetric Gripper"
kind: "end_effector"
maker: "PathOn Robotics"
category: "Gripper"
description: "Rack-and-pinion parallel-jaw gripper where both fingers move equally, giving balanced grasping force for reliable pick-and-place."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/end_effectors/symmetric_gripper"
image: "/robots/so101-symmetric-gripper.png"
specs:
  dof: "1"
  servos: "1 × STS3215"
  mechanism: "Rack and pinion, symmetric travel"
  fits: "SO-101 / SO-ARM100 family"
  formats: "STL, STEP, URDF, MJCF"
  interfaces: "ROS 2, MoveIt, MuJoCo"
  status: "Released — hardware files, assembly guide"
purpose:
  - "Research"
  - "Education"
media:
  - title: "mod101 — a configurable SO-101 with a web configurator and ROS 2 packages"
    url: "https://www.linkedin.com/posts/cristian-paul-dragomir-70095b11b_robot-arms-are-cool-but-no-two-people-want-ugcPost-7491175299758485505-avuB/"
  - title: "Vision-language grasping (real robot)"
    url: "https://www.loom.com/share/fe4379299d904ffc811d0ab0f7dc357c"
  - title: "Vision-language grasping (simulation)"
    url: "https://www.loom.com/share/2fed8ad63ee7416fad60bd227efd1a95"
components:
  - name: "frame + cam"
    type: "Gripper Body"
  - name: "rack_up / rack_down"
    type: "Symmetric Rack Pair"
  - name: "l_gripper / r_gripper"
    type: "Fingers"
  - name: "STS3215 Servo"
    type: "Actuator (x1)"
---

## Overview

A parallel-jaw gripper in which both fingers move equally. A single STS3215 drives a pinion between two
racks, so the jaws close symmetrically about the tool centre instead of one finger
swinging into the other — the grasp point stays where the planner expects it, which
is what makes the gripper work cleanly with grasp generation models.

It mounts on the yaw link of the
[6DoF arm upgrade](/robots/so101-6dof-arm), and ships with the same URDF/MJCF
assets.

## Use Cases

- Vision-language grasping (SAM3 segmentation + grasp generation)
- Pick-and-place where the grasp centre must stay fixed
- Sim-to-real manipulation on a low-cost arm
