# PathOn Dexterous Hand

Compact, servo-actuated 3-finger dexterous hands for fast prototyping and manipulation research. All three versions are designed in-house at PathOn Robotics, and each is a self-contained hardware package — CAD, printable STLs, and a pre-arranged print plate where available.

| Version | Actuator | Fingers | Highlight | Status |
|---|---|---|---|---|
| [**V1**](v1/) | 7 × DYNAMIXEL XL330-M288-T | 3 (2 + opposable thumb) | Research-grade servos with full position / velocity / current feedback | Released — CAD, STL, 3MF |
| [**V2**](v2/) | Feetech SCS0009 | 3 | Smaller, lighter actuator package; simpler printable layout | ⚠️ **Reference only** — published as-is; see [known issues](v2/README.md#known-issues) |
| [**V3**](v3/) | 4 × DYNAMIXEL XL330-M288-T | 3 (two on a geared spread + thumb) | The hand on our robot: one servo per finger plus a geared spread, soft printed fingertips; hosted step-by-step assembly guide | Released — STL, [assembly guide](https://web-6gov.vercel.app/), [demo video](https://www.loom.com/share/fe40257b80d7402cbd5068077b4870d3). 3MF and photos pending |

## Which version should I use?

- **[V1](v1/) — build this one.** Complete and released: STEP source, STLs, a pre-arranged print plate, full servo specs, and a demo of a working hand.
- **[V3](v3/) — the hand we actually run.** Four XL330 servos: one per finger plus a geared spread drive, soft fins at the fingertips, built and running on our robot since October 2026. Printable STLs, an interactive assembly guide at <https://web-6gov.vercel.app/>, and a [demo video](https://www.loom.com/share/fe40257b80d7402cbd5068077b4870d3) of it picking up a plush bear. No print plate or photos yet, so V1 is still the easier first build.
- **[V2](v2/) — ⚠️ reference only.** **A volunteer-led design that did not go through the same review as V1 and V3. We publish it as-is**, and it has [**known issues**](v2/README.md#known-issues) that prevent it from being assembled as released. Kept for its Feetech-based layout, which is smaller and cheaper than either DYNAMIXEL version.

## How the versions relate

**V1** and **V2** are direct-drive: one servo per joint. V1 optimizes for feedback and SDK maturity (DYNAMIXEL), V2 for size and weight (Feetech). **V1 is the one to build** — it is the only version released as a complete, assembled-and-verified package. V2's released STL set is missing the link needed for the two-servo finger, and it ships no CAD source to fix that with.

**Actuator ecosystems are not mixed freely.** V1 and V3 are DYNAMIXEL (Protocol 2.0, U2D2, DYNAMIXEL SDK); V2 is Feetech (SCS serial bus, FE-URT-1, SCServo SDK). The two cannot share a bus or a controller, and only the DYNAMIXEL side gives you current feedback for grasp-force control. Pick the version that matches the stack you already run.

**V3** keeps one motor per finger but drops the per-joint budget elsewhere: a single spread servo turns two fingers about the palm through meshing printed gears, and the fingers are single links with soft fins instead of jointed phalanges, so compliance comes from the fingertip rather than from a second joint. Four motors, four DOF, the same DYNAMIXEL stack as V1, and it is the version with a hosted assembly guide.

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

## License

Hardware files in this project — CAD, meshes, assembly docs, and photos — are
covered by the [hardware LICENSE](../../LICENSE), a Standard Digital File License:

- **Personal use** — print, build, and modify these for your own personal,
  non-commercial use.
- **No redistribution** — do not repost the files or printed parts anywhere,
  free or paid, including remixes.
- **No organizational or commercial use** without written permission — this
  applies to companies, schools, and universities alike, and covers selling the
  files or prints *and* using the parts in a product, production line, service,
  course, or lab.

Licensing for organizations, including schools and universities, is available —
contact the copyright holder.
