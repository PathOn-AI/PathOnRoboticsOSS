# Pathon Robotics Open Source

[![discord-badge](https://dcbadge.limes.pink/api/server/xukJ3nh9wC)](https://discord.gg/xukJ3nh9wC)
[![followers](https://custom-icon-badges.demolab.com/github/followers/PathOn-AI?color=236ad3&labelColor=1155ba&style=for-the-badge&logo=person-add&label=Follow&logoColor=white)](https://github.com/PathOn-AI?tab=followers)
[![stars](https://custom-icon-badges.demolab.com/github/stars/PathOn-AI/pathon_opensource?color=55960c&style=for-the-badge&labelColor=488207&logo=star)](https://github.com/PathOn-AI/pathon_opensource/stargazers)

Open-source tools and resources by [Pathon Robotics](https://www.pathon.ai) — joint work with [PathOnAI.org](https://www.pathonai.org) — for building and controlling real robots.

**Website**: https://www.pathon.ai/opensource

**MakerWorld**: https://makerworld.com/en/@user_2131935394 — printable models from Pathon Robotics

Step-by-step tutorials at https://www.pathon.ai/blog

## Hardware Projects

| **Project** | **Description** | **Docs** |
|---|---|---|
| **SO-101 6DoF + Symmetric Gripper** | 6DoF wrist upgrade and symmetric parallel-jaw gripper for the SO-101 arm — hardware files, assembly guide | [hardware/so101_6dof_symmetric_gripper/](hardware/so101_6dof_symmetric_gripper/) |
| **Piper Leader Arm** | 3D-printable 6-DOF leader arm for teleoperation built around Feetech SCS215 serial bus servos — hardware files, specs, demo | [hardware/piper_leader/](hardware/piper_leader/) |
| **Dexterous Hand** | Compact servo-actuated dexterous hands for prototyping and manipulation research — V1 (DYNAMIXEL XL330) and V2 (Feetech SCS0009), with CAD, STL, and 3MF files | [hardware/dexterous_hand/](hardware/dexterous_hand/) |
| **Livox Mid-360 Mount for Unitree Go2** | 3D-printable cantilever bracket that mounts a Livox Mid-360 LiDAR forward of the Go2's head for unobstructed 360° FOV | [hardware/livox_mid360_go2_mount/](hardware/livox_mid360_go2_mount/) |

## Software Projects

| **Project** | **Description** | **Docs** |
|---|---|---|
| **Agentic DIY Robot Pipeline** | End-to-end "Bring Your Own Robot" pipeline design: text → CAD → URDF/MJCF → end-effector attach → ROS 2, driven by coding agents — architecture and results from the Jan–May 2026 work | [software/diy_pipeline/](software/diy_pipeline/) |
| └ **Robot Assets Skills** | End-effector attachment stage of the pipeline — a Claude Code skill bundle for working with robot URDF/MJCF assets: attach end-effectors via MuJoCo MjSpec, convert URDF↔MJCF, with the post-processing fixups the underlying scripts don't handle | [software/diy_pipeline/robot-assets-skills/](software/diy_pipeline/robot-assets-skills/) |
| **iPhone Sensor Suite** | Use iPhone as a full sensor suite (LiDAR, RGB, IMU) for robot manipulation and navigation — includes iOS app, Python SDK, ROS2 driver, and calibration | [software/iphone_sensor_suite/](software/iphone_sensor_suite/) |

## Resources

See [lerobot_resources.md](lerobot_resources.md) for a curated list of open-source hardware, policy networks, teleoperation tools, datasets, and simulation environments.
