# OpenArm Leader Arm

> **Status: placeholder — under development, nothing released.** There is no CAD, no BOM, no
> printable meshes, and no photos yet. Everything below is design intent, not a built and
> measured thing. This page exists so the work is visible while it happens.

A 3D-printable leader arm for teleoperating [**OpenArm V2**](https://openarm.dev) — the
7-DOF, torque-controlled, CAN FD arm. Same idea as our
[Piper leader arm](../piper_leader/): an operator moves the printed arm by hand, and the
follower tracks its joint positions.

## Why build one

OpenArm's own teleoperation path is **bilateral, with force feedback** — and it gets that by
using a **second motorised OpenArm** as the leader. That is an excellent capability with an
awkward consequence: the leader costs about what the follower costs, and for a bimanual rig
you are buying a whole second set of arms to drive the first. Bilateral control also wants a
**≥500 Hz** loop, which in practice means a dedicated host rather than a thread on the robot's
existing computer.

A printed leader answers a different question: *what does it take to get a human driving this
arm at all?* It gives up force feedback and returns joint-position teleoperation at roughly
**2% of the arm's cost** — enough for demonstration capture, scripted-motion authoring, and
teaching, which is most of what a leader arm is used for day to day.

## What it cannot do, and why that is physics

**A printed leader cannot give force feedback.** Not with better firmware, not with more
tuning. The reason is worth stating plainly, because it is the whole design boundary:

OpenArm is **quasi-direct drive** — a deliberately low gear ratio leaves each joint
backdrivable, so joint torque is very nearly proportional to motor current, and current
sensing becomes torque sensing for free. A printed leader built from hobby servos runs a
**high** gear ratio, and its friction and backlash swamp exactly the signal that bilateral
control depends on. No amount of software recovers the operator's force from underneath that.

So the scope is fixed: **position-only leader–follower here; force feedback requires a
quasi-direct-drive leader**, which means motors of the same class as the follower's.

## Design intent

Not specifications — these are the targets the design is being held to.

| | Intent |
|---|---|
| **Follower** | OpenArm V2, 7 DOF |
| **Joints** | One leader joint per follower joint, so the mapping needs no retargeting |
| **Gripper** | Operator trigger at the wrist, as on the Piper leader |
| **Teleop mode** | Joint-position only — explicitly **not** bilateral |
| **Manufacturing** | FDM printable on a 256 × 256 mm bed |
| **Cost** | A small fraction of the follower's — the reason this exists |

## What a release would contain

- [ ] CAD source and printable meshes
- [ ] BOM: servos, bearings, fasteners
- [ ] Joint mapping and calibration: leader zero, follower zero, and the transform between them
- [ ] Teleoperation bringup, and how it joins the follower's CAN FD bus
- [ ] Assembly guide and print orientations
- [ ] A demo of the arm driving an OpenArm

Interested in this one, or want to be told when it lands?
[Discord](https://discord.gg/xukJ3nh9wC).

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
