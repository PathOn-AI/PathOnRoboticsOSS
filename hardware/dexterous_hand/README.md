# Pathon Dexterous Hand

Compact, servo-actuated 3-finger dexterous hands for fast prototyping and manipulation research. Each version is a self-contained hardware package — CAD, printable STLs, and a pre-arranged print plate where available.

| Version | Actuator | Fingers | Highlight | Status |
|---|---|---|---|---|
| [**V1**](v1/) | 7 × DYNAMIXEL XL330-M288-T | 3 (2 + opposable thumb) | Research-grade servos with full position / velocity / current feedback | Released — CAD, STL, 3MF |
| [**V2**](v2/) | Feetech SCS0009 | 3 | Smaller, lighter actuator package; simpler printable layout | Released — STL, 3MF |
| [**V3**](v3/) | 4 × DYNAMIXEL X-series | 3 | Barrett-style: 8 joints from 4 motors — underactuated 2-link fingers + coupled spread DOF | Placeholder — files not yet released |

## How the versions relate

**V1** and **V2** are direct-drive: one servo per joint. V1 optimizes for feedback and SDK maturity (Dynamixel), V2 for size and weight (Feetech). Both are good starting points if you want a printable hand you can control joint-by-joint.

**V3** changes the approach. Instead of adding a motor for every joint, it takes the Barrett Hand topology — mechanical couplings close the gap between joints and actuators, so **8 joints run on 4 motors**: three underactuated 2-link fingers that conform to the object shape, plus one spread DOF that rotates two fingers about the palm axis to reconfigure between pinch, wrap, and cylindrical grasps. It is also the first version modelled for a full simulation stack (MuJoCo + ROS 2 Jazzy + MoveIt 2).

## Printing

Every released version bundles a Bambu Studio 3MF with the parts pre-arranged on a plate. Starting point for print settings, common to all versions:

| Setting | Value |
|---|---|
| Material | PLA or PETG |
| Layer height | 0.2 mm |
| Walls | 4 |
| Infill | 25–40% |
| Supports | Tree, only where needed |

Per-version notes are in each version's README.

## Links

- Step-by-step tutorials: <https://www.pathon.ai/blog>
- Printable models: <https://makerworld.com/en/@user_2131935394>
- Questions: [Discord](https://discord.gg/xukJ3nh9wC)
