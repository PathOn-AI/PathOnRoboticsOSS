# Hardware

Grouped by what a thing **is**: a **robot** works on its own, an **end effector** mounts to
an arm, a **mount** joins two things, and **equipment** is standalone hardware that is not a
robot.

## [robots/](robots/)

| Project | What it is |
|---|---|
| [`so101_6dof_wrist/`](robots/so101_6dof_wrist/) | 6DoF wrist upgrade (pitch + yaw) for the SO-101, plus the URDF/MJCF for the whole arm |
| [`piper_leader/`](robots/piper_leader/) | 3D-printable 6-DOF leader arm for teleoperation |
| [`agv/`](robots/agv/) | Line-following shuttle from the Smart Logistics Cell *(placeholder)* |
| [`amr/`](robots/amr/) | Nav2 autonomous mobile robot from the Smart Logistics Cell *(placeholder)* |

## [end_effectors/](end_effectors/)

| Project | What it is |
|---|---|
| [`dexterous_hand/`](end_effectors/dexterous_hand/) | Three generations of 3-finger dexterous hand (V1, V2, V3) |
| [`so101_symmetric_gripper/`](end_effectors/so101_symmetric_gripper/) | Rack-and-pinion parallel-jaw gripper; mounts to the 6DoF wrist |

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
| `hardware/so101_6dof_symmetric_gripper/` | split into [`robots/so101_6dof_wrist/`](robots/so101_6dof_wrist/) (wrist + arm models) and [`end_effectors/so101_symmetric_gripper/`](end_effectors/so101_symmetric_gripper/) (gripper) |
