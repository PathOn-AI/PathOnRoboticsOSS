# Hardware

Grouped by what a thing **is**: a **robot** works on its own, an **end effector** mounts to
an arm, a **mount** joins two things, and **equipment** is standalone hardware that is not a
robot.

## [robots/](robots/)

| Project | What it is |
|---|---|
| [`so101_6dof_wrist/`](robots/so101_6dof_wrist/) | 6DoF wrist upgrade (pitch + yaw) for the SO-101, plus the URDF/MJCF for the whole arm |
| [`piper_leader/`](robots/piper_leader/) | 3D-printable 6-DOF leader arm for teleoperation |
| [`openarm_leader/`](robots/openarm_leader/) | 3D-printable leader arm for teleoperating OpenArm V2 *(placeholder)* |
| [`agv/`](robots/agv/) | Line-following shuttle from the Smart Logistics Cell *(placeholder)* |
| [`amr/`](robots/amr/) | Nav2 autonomous mobile robot from the Smart Logistics Cell *(placeholder)* |

## [end_effectors/](end_effectors/)

| Project | What it is |
|---|---|
| [`dexterous_hand/`](end_effectors/dexterous_hand/) | Three generations of 3-finger dexterous hand (V1, V2, V3) |
| [`symmetric_gripper/`](end_effectors/symmetric_gripper/) | Rack-and-pinion parallel-jaw gripper; mounts to the 6DoF wrist |

## [mounts/](mounts/)

| Project | What it is |
|---|---|
| [`livox_mid360_go2_mount/`](mounts/livox_mid360_go2_mount/) | Cantilever bracket holding a Livox Mid-360 forward of a Unitree Go2's head |

## [equipment/](equipment/)

| Project | What it is |
|---|---|
| [`handheld_lidar_scanner/`](equipment/handheld_lidar_scanner/) | Handheld enclosure turning a Livox Mid-360 into a walk-around 3D scanner *(placeholder)* |
| [`conveyor/`](equipment/conveyor/) | 3D-printed belt conveyor feeding the Smart Logistics Cell *(placeholder)* |

## Moved paths

These projects used to sit directly under `hardware/`:

| Old path | Now |
|---|---|
| `hardware/piper_leader/` | [`robots/piper_leader/`](robots/piper_leader/) |
| `hardware/dexterous_hand/` | [`end_effectors/dexterous_hand/`](end_effectors/dexterous_hand/) |
| `hardware/livox_mid360_go2_mount/` | [`mounts/livox_mid360_go2_mount/`](mounts/livox_mid360_go2_mount/) |
| `hardware/so101_6dof_symmetric_gripper/` | split into [`robots/so101_6dof_wrist/`](robots/so101_6dof_wrist/) (wrist + arm models) and [`end_effectors/symmetric_gripper/`](end_effectors/symmetric_gripper/) (gripper) |

## License

**Personal use only. No redistribution. No organizational or commercial use
without written permission.**

Everything in this directory — CAD, printable meshes, assembly documentation,
bills of materials, and photographs — is covered by the
[hardware LICENSE](LICENSE), a Standard Digital File License. Print and build
these for your own personal, non-commercial use. Do not repost the files or
printed parts anywhere, remix and republish them, sell them, or use them inside
an organization — a company, a school, or a university — without permission.

Licensing for organizations, including schools and universities, is available —
contact the copyright holder.
Code outside `hardware/` is covered by the [root LICENSE](../LICENSE) instead.

**Exception:** the SO-101 arm-body meshes under
[`robots/so101_6dof_wrist/software/robot_assets/`](robots/so101_6dof_wrist/software/robot_assets/)
come from [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) and stay
under the Apache License 2.0, which does permit commercial use — see their
[NOTICE](robots/so101_6dof_wrist/software/robot_assets/NOTICE).
