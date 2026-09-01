---
name: "PathOn Conveyor — Sensor-Triggered Infeed"
kind: "robot"
maker: "PathOn Robotics"
category: "Conveyor"
description: "3D-printed belt conveyor that feeds the Smart Logistics Cell — carries a block to an IR-monitored pick point, where the sensor firing starts the whole line. Placeholder: built and running, files not yet released."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/conveyor"
image: "/robots/pathon-conveyor.jpg"
specs:
  job: "Infeed — carries a block to a fixed pick point"
  drive: "Hobby servo driving the belt"
  sensing: "IR beam at the pick point"
  controller: "ESP32"
  formats: "None released yet"
  status: "Placeholder — built and running, files not yet released"
purpose:
  - "Education"
components:
  - name: "3D-Printed Frame & Rollers"
    type: "Structure"
  - name: "Hobby Servo"
    type: "Belt Drive"
  - name: "IR Sensor"
    type: "Pick-Point Detection"
  - name: "ESP32"
    type: "Controller"
---

## Overview

> **Placeholder.** The conveyor is built and running — it's the first station in the Smart
> Logistics Cell demo. What doesn't exist yet is anything you could build one from: no CAD,
> no meshes, no BOM, no firmware.

A small 3D-printed belt conveyor that feeds the PathOn Smart Logistics Cell. A block goes on
the belt and rides to an IR-monitored pick point, where the sensor firing is what starts the
line.

## The least glamorous part is the one that makes it a line

Robots sitting on a floor are just robots. What makes them a *line* is that finishing one
step starts the next with no one pressing a button — and that begins here, with a beam
breaking at a known point.

It's also the cheapest honest way to teach industrial control: one sensor input, one motor
output, and the logic between them. The rest of the cell reacts to what the sensor reports,
not to a script that assumes how long the belt takes.

## Use Cases

- Teaching control basics — sensor in, motor out, logic between
- The infeed station of a multi-robot line
- Triggering the next step without hard-coded timing
