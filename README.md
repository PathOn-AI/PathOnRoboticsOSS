# PathOn Robotics Open Source

[![discord-badge](https://dcbadge.limes.pink/api/server/xukJ3nh9wC)](https://discord.gg/xukJ3nh9wC)
[![followers](https://custom-icon-badges.demolab.com/github/followers/PathOn-AI?color=236ad3&labelColor=1155ba&style=for-the-badge&logo=person-add&label=Follow&logoColor=white)](https://github.com/PathOn-AI?tab=followers)
[![stars](https://custom-icon-badges.demolab.com/github/stars/PathOn-AI/PathOnRoboticsOSS?color=55960c&style=for-the-badge&labelColor=488207&logo=star)](https://github.com/PathOn-AI/PathOnRoboticsOSS/stargazers)

Open-source tools and resources by [PathOn Robotics](https://www.pathon.ai) — joint work with [PathOnAI.org](https://www.pathonai.org) — for building and controlling real robots.

**Website**: https://www.pathon.ai/opensource

**MakerWorld**: https://makerworld.com/en/@user_2131935394 — printable models from PathOn Robotics

Step-by-step tutorials at https://www.pathon.ai/blog

## Hardware Projects

Grouped the way the catalog is: a **robot** works on its own, an **end effector** mounts to
an arm, a **mount** joins two things, and **equipment** is standalone hardware that is not a
robot.

### Robots

| **Project** | **Description** | **Docs** |
|---|---|---|
| **SO-101 6DoF Wrist Upgrade** | Adds a 6th degree of freedom (wrist pitch + yaw) to the SO-101 arm so it can approach from any angle — STL/STEP, assembly guide, and the URDF/MJCF for the whole arm | [hardware/robots/so101_6dof_wrist/](hardware/robots/so101_6dof_wrist/) |
| **Piper Leader Arm** | 3D-printable 6-DOF leader arm for teleoperation built around Feetech SCS215 serial bus servos — hardware files, specs, demo | [hardware/robots/piper_leader/](hardware/robots/piper_leader/) |
| **PathOn AGV — Line-Following Shuttle** *(placeholder, files not yet released)* | Line-following shuttle from the Smart Logistics Cell: moves material within one work cell, arm to arm, along tape on the floor — no map, no localization | [hardware/robots/agv/](hardware/robots/agv/) |
| **PathOn AMR — Autonomous Mobile Robot** *(placeholder, files not yet released)* | Nav2 mobile robot from the Smart Logistics Cell: carries material between work cells, holds a map, plans its own path, and routes around obstacles | [hardware/robots/amr/](hardware/robots/amr/) |

### End Effectors

| **Project** | **Description** | **Docs** |
|---|---|---|
| **SO-101 Symmetric Gripper** | Rack-and-pinion parallel-jaw gripper — both fingers move equally, so force is balanced about the tool axis. Mounts to the 6DoF wrist upgrade | [hardware/end_effectors/so101_symmetric_gripper/](hardware/end_effectors/so101_symmetric_gripper/) |
| **Dexterous Hand** | Compact servo-actuated dexterous hands for prototyping and manipulation research — V1 (DYNAMIXEL XL330) and V2 (Feetech SCS0009), with CAD, STL, and 3MF files | [hardware/end_effectors/dexterous_hand/](hardware/end_effectors/dexterous_hand/) |
| └ **Dexterous Hand V3 — Barrett-style** *(placeholder, files not yet released)* | 3-finger underactuated hand: 8 joints from 4 DYNAMIXEL servos — 2-link fingers plus a coupled spread DOF — with MuJoCo + ROS 2 Jazzy + MoveIt 2 integration | [hardware/end_effectors/dexterous_hand/v3/](hardware/end_effectors/dexterous_hand/v3/) |

### Mounts & Adapters

| **Project** | **Description** | **Docs** |
|---|---|---|
| **Livox Mid-360 Mount for Unitree Go2** | 3D-printable cantilever bracket that mounts a Livox Mid-360 LiDAR forward of the Go2's head for unobstructed 360° FOV | [hardware/mounts/livox_mid360_go2_mount/](hardware/mounts/livox_mid360_go2_mount/) |

### Equipment

| **Project** | **Description** | **Docs** |
|---|---|---|
| **Handheld 3D LiDAR Scanner** *(placeholder, files not yet released)* | 3D-printable handheld enclosure that turns a Livox Mid-360 into a self-contained walk-around scanner — sensor, Raspberry Pi 5, power bank, and 4G dongle in one printed body | [hardware/equipment/handheld_lidar_scanner/](hardware/equipment/handheld_lidar_scanner/) |
| **PathOn Conveyor — Sensor-Triggered Infeed** *(placeholder, files not yet released)* | 3D-printed belt conveyor that feeds the Smart Logistics Cell — carries a block to an IR-monitored pick point, where the sensor firing starts the whole line | [hardware/equipment/conveyor/](hardware/equipment/conveyor/) |

## Software Projects

| **Project** | **Description** | **Docs** |
|---|---|---|
| **Agentic DIY Robot Pipeline** | End-to-end "Bring Your Own Robot" pipeline design: text → CAD → URDF/MJCF → end-effector attach → ROS 2, driven by coding agents — architecture and results from the Jan–May 2026 work | [software/diy_pipeline/](software/diy_pipeline/) |
| └ **Robot Assets Skills** | End-effector attachment stage of the pipeline — a Claude Code skill bundle for working with robot URDF/MJCF assets: attach end-effectors via MuJoCo MjSpec, convert URDF↔MJCF, with the post-processing fixups the underlying scripts don't handle | [software/diy_pipeline/robot-assets-skills/](software/diy_pipeline/robot-assets-skills/) |
| **iPhone Sensor Suite** | Use iPhone as a full sensor suite (LiDAR, RGB, IMU) for robot manipulation and navigation — includes iOS app, Python SDK, ROS2 driver, and calibration | [software/iphone_sensor_suite/](software/iphone_sensor_suite/) |

## Resources

See [lerobot_resources.md](lerobot_resources.md) for a curated list of open-source hardware, policy networks, teleoperation tools, datasets, and simulation environments.
