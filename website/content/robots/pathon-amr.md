---
name: "PathOn AMR — Autonomous Mobile Robot"
kind: "robot"
maker: "PathOn Robotics"
category: "Mobile Base"
description: "Nav2 mobile robot from the Smart Logistics Cell — carries material between work cells, holds a map, plans its own path, and routes around obstacles. Placeholder: built and running, files not yet released."
link: "https://github.com/PathOn-AI/PathOnRoboticsOSS/tree/main/hardware/robots/amr"
image: "/robots/pathon-amr.jpg"
specs:
  job: "Delivery between work cells"
  navigation: "Nav2 — maps, localizes, and plans its own path"
  obstacles: "Replans around them"
  handoff: "Loaded by an arm, drives itself to the next station"
  formats: "None released yet"
  status: "Placeholder — built and running, files not yet released"
purpose:
  - "Education"
  - "Research"
components:
  - name: "Nav2 Stack"
    type: "Navigation"
  - name: "Lidar"
    type: "Mapping & Localization"
  - name: "Differential Drive Base"
    type: "Chassis"
  - name: "Load Deck"
    type: "Payload (shared interface with the AGV)"
---

## Overview

> **Placeholder.** The AMR is built and running — it appears in the Smart Logistics Cell
> demo driving itself between work cells with a load on its deck. What doesn't exist yet is
> anything you could build one from: no CAD, no BOM, no bringup code.

A small autonomous mobile robot that handles delivery between work cells in the PathOn
Smart Logistics Cell. An arm transfers the load onto its deck and the AMR drives itself to
the next station — it holds a map, plans its own path, and can route around an obstacle
that appears in front of it.

## Against the AGV

The Smart Logistics Cell runs this alongside a
[line-following AGV](/opensource/robots/pathon-agv), because choosing between them is the
decision a real plant makes every day. The AGV's route is fixed — tape on the floor, no map,
cheap and dependable, and changing it means re-laying tape. The AMR's route is software: it
costs more and has more that can go wrong, since mapping, localization, and planning all
have to work, but it can be redirected with a new goal and it plans around a blocked path
instead of stopping at it.

The AGV shuttles within a cell; the AMR carries between them.

## Use Cases

- Teaching Nav2 on a real robot rather than in simulation alone
- Autonomous transport between stations on a small line
- Comparing autonomous navigation against guided transport on one work cell
