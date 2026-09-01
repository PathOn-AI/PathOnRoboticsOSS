# PathOn Dexterous Hand

Compact, servo-actuated 3-finger dexterous hands for fast prototyping and manipulation research. All three versions are designed in-house at PathOn Robotics, and each is a self-contained hardware package — CAD, printable STLs, and a pre-arranged print plate where available.

| Version | Actuator | Fingers | Highlight | Status |
|---|---|---|---|---|
| [**V1**](v1/) | 7 × DYNAMIXEL XL330-M288-T | 3 (2 + opposable thumb) | Research-grade servos with full position / velocity / current feedback | Released — CAD, STL, 3MF |
| [**V2**](v2/) | Feetech SCS0009 | 3 | Smaller, lighter actuator package; simpler printable layout | ⚠️ **Reference only** — published as-is; see [known issues](v2/README.md#known-issues) |
| [**V3**](v3/) | 4 × DYNAMIXEL X-series | 3 | Barrett-style: 8 joints from 4 motors — underactuated 2-link fingers + coupled spread DOF | Partial release — CAD + first STLs; 3MF, sim models and assembly docs pending |

## Which version should I use?

- **[V1](v1/) — build this one.** Complete and released: STEP source, STLs, a pre-arranged print plate, full servo specs, and a demo of a working hand.
- **[V3](v3/) — watch this one.** Our current in-house hand and where active development is going: Barrett-style, 8 joints on 4 motors, modelled for MuJoCo + ROS 2. Partially released and still changing — CAD and first STLs are up; the 3MF, sim models, and assembly docs are not.
- **[V2](v2/) — ⚠️ reference only.** **A volunteer-led design that did not go through the same review as V1 and V3. We publish it as-is**, and it has [**known issues**](v2/README.md#known-issues) that prevent it from being assembled as released. Kept for its Feetech-based layout, which is smaller and cheaper than either DYNAMIXEL version.

## How the versions relate

**V1** and **V2** are direct-drive: one servo per joint. V1 optimizes for feedback and SDK maturity (DYNAMIXEL), V2 for size and weight (Feetech). **V1 is the one to build** — it is the only version released as a complete, assembled-and-verified package. V2's released STL set is missing the link needed for the two-servo finger, and it ships no CAD source to fix that with.

**Actuator ecosystems are not mixed freely.** V1 and V3 are DYNAMIXEL (Protocol 2.0, U2D2, DYNAMIXEL SDK); V2 is Feetech (SCS serial bus, FE-URT-1, SCServo SDK). The two cannot share a bus or a controller, and only the DYNAMIXEL side gives you current feedback for grasp-force control. Pick the version that matches the stack you already run.

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

- Printable models: <https://makerworld.com/en/@user_2131935394>
- Questions: [Discord](https://discord.gg/xukJ3nh9wC)
