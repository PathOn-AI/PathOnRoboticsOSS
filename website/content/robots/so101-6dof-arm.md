---
name: "SO-101 6DoF Arm"
kind: "robot"
maker: "Pathon Robotics"
category: "Robotic Arm"
description: "The SO-101 arm upgraded from 5DoF to 6DoF — two printed wrist links (pitch + yaw) and one added STS3215 servo, so the arm can approach objects from any angle."
link: "https://github.com/PathOn-AI/pathon_opensource/tree/main/hardware/so101_6dof_symmetric_gripper/hardware/3d_printed_parts/6dof"
image: "/robots/so101-6dof-arm.png"
specs:
  dof: "6 (5 stock + 1 added)"
  servos: "1 × STS3215 added (yaw)"
  base: "Built SO-101 / SO-ARM100 required"
  formats: "STL, STEP, URDF, MJCF"
  interfaces: "ROS 2, MoveIt, MuJoCo"
  status: "Released — hardware files, assembly guide"
purpose:
  - "Research"
  - "Education"
components:
  - name: "link_pitch"
    type: "Wrist Pitch Link"
  - name: "link_yaw"
    type: "Wrist Yaw Link"
  - name: "STS3215 Servo"
    type: "Actuator (x1, added)"
---

## Overview

The stock [SO-101](https://github.com/TheRobotStudio/SO-ARM100) is a 5DoF arm,
which limits how it can approach an object. This upgrade replaces the wrist with
two printed links — `link_pitch` and `link_yaw` — and one added STS3215 servo,
making it a 6DoF arm that can reach a target from any angle.

You supply the SO-101 as the base; this release covers the parts that turn it into
the 6DoF version. It pairs with the
[symmetric gripper](/robots/so101-symmetric-gripper), which mounts on the yaw link.

## Assembly

`link_pitch` mounts on the arm's last servo horn and rotates on the pitch axis. The
added STS3215 sits flush inside `link_yaw`, secured with two self-tapping screws,
and the yaw servo horn attaches to the top face of the pitch link.

## Use Cases

- Off-axis and top-down approaches on a low-cost arm
- Grasp generation models that assume a 6DoF wrist
- MoveIt motion planning with a full 6-DOF chain
