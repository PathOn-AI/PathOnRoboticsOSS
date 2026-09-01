---
name: "PathOn AGV — Line-Following Shuttle"
kind: "robot"
maker: "PathOn Robotics"
category: "Mobile Base"
description: "Line-following shuttle from the Smart Logistics Cell — moves material within one work cell, arm to arm, along tape on the floor. No map, no localization. Placeholder: built and running, files not yet released."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/agv"
image: "/robots/pathon-agv.jpg"
specs:
  job: "Shuttling within one work cell"
  guidance: "Line following — optical sensor on floor tape"
  localization: "None — it tracks the line, not a map"
  handoff: "Arm loads at one end, arm unloads at the other"
  formats: "None released yet"
  status: "Placeholder — built and running, files not yet released"
purpose:
  - "Education"
  - "Research"
components:
  - name: "Line Sensor"
    type: "Guidance"
  - name: "Differential Drive Base"
    type: "Chassis"
  - name: "Load Deck"
    type: "Payload (shared interface with the AMR)"
---

## Overview

> **Placeholder.** The AGV is built and running — it appears in the Smart Logistics Cell
> demo shuttling a load between two arms. What doesn't exist yet is anything you could
> build one from: no CAD, no BOM, no controller code.

A small line-following shuttle that moves material within a single work cell in the PathOn
Smart Logistics Cell. One arm loads it, it follows a line taped to the floor to the next
arm, and that arm unloads it. It has no map and no localization — the route is physically
stuck to the floor.

## Why a line follower, not a map

It would be easy to read the AGV as the lesser robot next to the
[AMR](/opensource/robots/pathon-amr). It isn't. It's the right choice for a large share of
real plant transport, where the same load moves between the same two points every shift for
years — nothing about that job rewards a map. Tape is cheap, an optical line sensor is
nearly impossible to confuse, and the failure modes are few and obvious.

What it gives up is just as clear: it stops when something blocks it, it can't be rerouted
from software, and every route change is physical work on the floor.

## Two vehicles, one line

The Smart Logistics Cell deliberately runs both. The AGV shuttles within a cell; the AMR
carries between cells. Watching them in a single run is the point — choosing between fixed
routes and autonomous navigation is a decision real plants make every day.

## Use Cases

- Teaching the guided-vs-autonomous trade-off on one work cell
- Fixed-route material handoff between two stations
