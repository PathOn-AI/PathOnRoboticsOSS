---
name: "Livox Mid-360 Mount for Unitree Go2"
kind: "part"
maker: "PathOn Robotics"
category: "Sensor Mount"
description: "3D-printable cantilever bracket that holds a Livox Mid-360 LiDAR forward of the Go2's head for an unobstructed 360° horizontal FOV."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/livox_mid360_go2_mount"
image: "/robots/livox-mid360-go2-mount.jpg"
specs:
  fits: "Unitree Go2 + Livox Mid-360"
  material: "PETG (recommended) or PLA+"
  formats: "STL"
  hardware: "4× M3 to sensor, M3 + nuts to T-track base"
  status: "Released — STL"
purpose:
  - "Research"
media:
  - title: "Post by @RexDQZhang"
    url: "https://x.com/RexDQZhang/status/2052173490414113196"
  - title: "PathOn Robotics: Unitree Go2 Navigation"
    url: "https://www.loom.com/share/0165c6a3c50d40ba8e25a56c2344a5cd"
components:
  - name: "Cantilever Bracket"
    type: "Printed Part"
  - name: "T-Track 30 Base Plate"
    type: "Companion Part (printed separately)"
  - name: "Sorbothane Washers"
    type: "Vibration Damping (optional)"
---

## Overview

A 3D-printable cantilever bracket that mounts a
[Livox Mid-360](https://www.livoxtech.com/mid-360) LiDAR forward of the Unitree
Go2's head. The bracket bolts onto a T-track base plate on the Go2's back deck and
holds the sensor clear of the body, so the LiDAR gets an unobstructed 360°
horizontal field of view.

This is a printed part, not a robot — it needs a Go2 and a Mid-360 to be useful.

## Companion part

The bracket slides into a separately printed T-track base plate:
[Base Unitree Go2 (T-Track 30)](https://www.printables.com/model/1221220-base-unitree-go-2-t-track-30/files).

## Printing

PETG is preferred over PLA: the sensor weighs ~265 g and hangs at the end of a long
cantilever, where PLA can creep under sustained load. Print flat on the bed with
tree supports under the cantilever, 0.20 mm layers, 4 walls, 30–40% gyroid infill.

## Use Cases

- LiDAR-inertial odometry and SLAM on the Go2
- Legged-robot mapping and navigation research
