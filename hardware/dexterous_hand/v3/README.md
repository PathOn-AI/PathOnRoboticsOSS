# Pathon Dexterous Hand V3 — Barrett-Style (Placeholder)

> **Status: placeholder.** V3 is designed and running in simulation in-house, but the CAD, meshes, and models are **not released yet**. This page documents the design intent so the folder layout and links are in place; files will land here when the release is cleared.

A 3-finger, **Barrett-style** dexterous hand: high grasp versatility from very few actuators, built around **DYNAMIXEL X-series** servos. This is **V3** of the Pathon Dexterous Hand, following [V1](../v1/) (DYNAMIXEL XL330) and [V2](../v2/) (Feetech SCS0009).

The hand itself is arm-agnostic — the only arm-specific part is the printed wrist adapter. Our reference integration is the AgileX Piper 6-DOF arm; swapping the adapter is what it takes to put it on something else.

## Why Barrett-style

V1 and V2 give one actuator per joint — simple, but the motor count grows with every joint you add and the palm fills up fast. The Barrett Hand (BH8-280/282) is the canonical answer: **8 joints driven by 4 actuators**, where the gap between the two is closed mechanically rather than electrically. V3 takes that topology:

- **3 independent finger-flexion DOF** — one servo per finger, with each finger **underactuated**: the servo drives the proximal link, and a coupling carries the distal link at a fixed ratio until the proximal link stalls against the object, after which the distal link keeps curling. Adaptive, shape-conforming grasps from one motor per finger.
- **1 spread (abduction) DOF** — a single servo synchronously rotates **two of the three fingers** about the palm axis, letting the hand reconfigure between pinch, spherical/wrap, and cylindrical grasps.

Accounting: 3 fingers × 2 joints = 6 finger joints, + 2 spread joints (both on one motor) = **8 joints, 4 motors, 4 actuated DOF**.

Reference: Townsend, *"The BarrettHand grasper — programmably flexible part handling and assembly,"* Industrial Robot, 2000 · <https://barrett.com/barretthand>

## Target Specs

| Spec | Target |
|---|---|
| **Fingers** | 3 |
| **Joints / actuated DOF** | 8 joints / 4 DOF |
| **Finger actuation** | 1 servo per finger, 2-link underactuated (proximal + distal, breakaway coupling) |
| **Spread DOF** | 1 servo, two fingers mechanically coupled, ~0–180° |
| **Servos** | DYNAMIXEL X-series (XL330-M288-T class baseline) |
| **Protocol** | TTL half-duplex daisy chain |
| **Arm mount** | Printed wrist adapter; reference adapter targets the AgileX Piper tool flange |
| **Mass budget** | ≤ 600 g incl. servos and fasteners — leaves most of a 1.5 kg arm payload for the object |
| **Scale** | Fingers ~100 mm; palm under 150 mm across |
| **Manufacturing** | FDM (PLA / PETG), 256 × 256 mm bed; fasteners, bearings, shafts, springs as standard purchasable parts |

*All values are design targets, not measured results — they will be replaced with as-built numbers at release.*

## Simulation Stack

V3 is modelled for **MuJoCo** with a **ROS 2 Jazzy + MoveIt 2** integration: URDF/xacro and MJCF of the hand, a combined arm + hand scene, `ros2_control` interfaces over all arm and hand joints, and MoveIt planning groups for the arm, the hand, the spread DOF, and a combined arm+hand group. The underactuated coupling is approximated in sim with coupled joints / equality constraints rather than a modelled clutch.

## Hardware Files

```
dexterous_hand/v3/
|-- cad/     # STEP assembly + per-part STEP  (TBD)
|-- stl/     # printable parts                (TBD)
|-- 3mf/     # Bambu Studio print project     (TBD)
`-- media/   # renders, photos, demo stills   (TBD)
```

Nothing here yet — the `.gitkeep` files hold the layout so it matches the V1/V2 packages.

## Roadmap

- [ ] Release CAD: full-assembly STEP + per-part STEP
- [ ] Release printable STLs and a pre-arranged Bambu Studio 3MF plate
- [ ] Release URDF/xacro + MJCF, with a load-and-sweep script per model
- [ ] Release the wrist adapter and the combined arm + hand scene
- [ ] Publish `ros2_control` config and the MoveIt 2 config package
- [ ] Assembly guide, fastener/bearing BOM, print orientation notes
- [ ] Demo video

Questions or interest in V3 before release: [Discord](https://discord.gg/xukJ3nh9wC).
