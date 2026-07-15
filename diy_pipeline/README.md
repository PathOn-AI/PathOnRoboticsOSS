# Agentic DIY Robot Pipeline

> **From a one-line description of a robot to a working simulation and ROS 2 control stack — driven by coding agents.**

## About this release

This is the design of an end-to-end "Bring Your Own Robot" pipeline that the
PathOn Robotics team built and ran from **January to May 2026**.

We've since pivoted, so rather than let the work sit in a private repo we're
releasing it to the DIY maker and generative-robotics community. This first
drop is the **architecture and the results** — what we built, what worked, what
didn't, and the design decisions we'd keep. **The full agentic pipeline —
the agent skills themselves — will be open-sourced soon**, along with demo
videos of each stage.

One stage is already public: end-effector attachment ships today as
[`robot-assets-skills/`](../robot-assets-skills/) — a Claude Code skill bundle
that attaches any gripper to any arm at the URDF/MJCF layer.

---

## The idea

Take a natural-language description of a robot — *"a 6-DOF arm with a
parallel-jaw gripper, mounted on a fixed base"* — and produce, in order:

1. A **CAD model** of the arm (and, separately, of grippers).
2. A **URDF** robot description, and from it an **MJCF** file that runs in MuJoCo.
3. A **combined arm + gripper** description, produced by an agent skill that
   bolts any gripper onto any arm's end effector.
4. A **ROS 2 integration** suitable for experiments — teleop, motion planning,
   IL/RL, VLA.

Each stage is an agent skill that owns one transformation and emits exactly the
input the next stage expects.

The load-bearing decision: **gripper attachment happens on URDF/MJCF, not on
CAD.** So you can attach grippers to arms you didn't generate yourself — an
off-the-shelf open-source URDF works fine — without ever going back to CAD.

---

## Pipeline overview

Two flavors: a **simplified** version starting from existing CAD, and a
**comprehensive** version starting from natural language.

### Simplified — start from STEP files

```
       Arm STEP ──▶ Arm URDF ──▶ Arm MJCF ──┐
                                            │
                                            ▼
                                   ┌──────────────────┐
                                   │ End-Effector     │
                                   │ Attach           │──▶ Combined URDF/MJCF ──▶ ROS 2
                                   └──────────────────┘
                                            ▲
                                            │
 End-Effector STEP ──▶ End-Effector URDF ──▶ End-Effector MJCF ─┘
       (gripper / hand / tool)
```

The fastest path when you already have STEP files and just want a working sim +
ROS 2 stack.

### Comprehensive — start from text

```
            ┌─────────────────────┐
   Text ───▶│  1. Text → CAD      │   build123d / OCP source + STEP/STL/GLB
            │  (arms and grippers │   "@cad[...]" feature references.
            │   as separate parts)│   Arms and grippers stay independent.
            └──────────┬──────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │  2. CAD / URDF →    │   cad-to-urdf and urdf-to-mjcf skills
            │     URDF / MJCF     │   produce reviewable robot cases and
            │  (sim-ready model)  │   simulation-ready MuJoCo XML.
            └──────────┬──────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │  3. Gripper-Attach  │   Agent skill that takes any arm
            │     Agent Skill     │   URDF/MJCF + any gripper URDF/MJCF
            │  (URDF/MJCF in,     │   and produces a combined URDF/MJCF
            │   URDF/MJCF out)    │   with correct mount frames.
            └──────────┬──────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │  4. ROS 2           │   ros2_control, MoveIt, teleop, sim
            │     Integration     │   bring-up. Substrate for IL / RL / VLA
            │  (experiments)      │   experiments.
            └─────────────────────┘
```

---

## The stages

**Stage 1 — Text → CAD.** A coding agent reads the prompt, picks the closest
match from a small parts library of simulation-ready arms and grippers (or
generates a new variant), and writes a **build123d** (OpenCascade) script that
models the part, defines a clean tool flange or mount face with a known origin
frame, and exports STEP/STL/GLB. Geometry is referenced by stable feature
handles (`@cad[tool_flange]`) so follow-up edits — *"move the gripper 20 mm
forward"* — are precise. Arms and grippers are generated as separate parts; no
assembly happens here.

**Stage 2 — CAD → URDF → MJCF.** STEP assemblies become reviewable URDF drafts;
URDF/xacro becomes simulation-stable MJCF; MJCF projects back to URDF when a
downstream consumer needs it, with the runtime losses called out explicitly
rather than hidden.

**Stage 3 — End-effector attachment.** A pure URDF/MJCF → URDF/MJCF
transformation. Combines MJCF inputs via MuJoCo attachment sites, or source
URDFs via a fixed mount joint plus optional `tool0`/`tcp` frames. *This is the
stage that's already open — see [`robot-assets-skills/`](../robot-assets-skills/).*

**Stage 4 — ROS 2 integration.** Drops the combined description into a ROS 2
workspace: `ros2_control`, MoveIt 2, teleop. The substrate for IL/RL/VLA work.

---

## What we validated

Cases that shaped the skill contracts. `✅` worked, `⚠️` had known gaps.

| Stage | Case | Result |
|---|---|---|
| CAD → URDF | PathOn symmetric gripper | ✅ jaw mimic + named states reviewed |
| CAD → URDF | PathOn SO-101 6-DOF arm subset | ✅ OCCT/XCAF mesh export, 5 reviewed joints |
| CAD → URDF | PathOn dexterous hand | ✅ viewer-checked axes; placeholder limits |
| CAD → URDF | PincOpen gripper (Pollen Robotics) | ⚠️ mimic joint open/close not implemented |
| CAD → URDF | reBot-DevArm (Seeed) | ✅ axis/origin review still required |
| URDF → MJCF | SO-101 6-DOF | ✅ verified sample asset |
| URDF → MJCF | SO-101 6-DOF arm + gripper | ✅ 7 position actuators; compile, headless + viewer verified; not hardware-calibrated |
| MJCF → URDF | PathOn symmetric gripper | ✅ lossy projection, losses reported |
| MJCF → URDF | SO-101 6-DOF symmetric gripper | ✅ lossy projection; `robot.json` verified |
| Attach | Piper arm + Allegro right hand | ✅ combined URDF + `tool0`/`tcp` frames |
| ROS/MoveIt | MyCobot 280 | ✅ staged assets + package manifest |
| ROS/MoveIt | Interbotix wx250s | ✅ preview generated; live plan-only evidence |
| ROS/MoveIt | UR5e + Allegro right | ⚠️ dry-run only; blocked on hand semantics |
| ROS/MoveIt | SO-101 (symmetric gripper / PincOpen), Piper 6-DOF | ✅ example manifests |

Demo videos of these stages are coming with the full release.

---

## Why this shape

Four principles, and they're the part we'd defend:

1. **Each stage's output is the next stage's first-class input.** No human glue.
2. **Attachment lives at the URDF/MJCF layer, not CAD.** You can bolt a custom
   gripper onto an off-the-shelf arm URDF without ever modeling the arm — and
   vice versa. The pipeline isn't all-or-nothing; enter at any stage.
3. **Agents own the messy stages.** URDF → MJCF needs a long tail of small
   fixes — frames, units, freejoints, mesh paths. Encoding those as an
   iterative agent loop is more robust than a brittle one-shot converter.
4. **Source over artifacts.** CAD scripts, xacros, conversion guides and launch
   files are the source of truth. STEP, STL and generated MJCF are derived and
   reproducible.

---

## Status

| Stage | Component | Status |
|---:|---|---|
| 1 | Text → CAD (build123d, arms and grippers separately) | Harness built; curated outputs |
| 2a | CAD / STEP → URDF | Working draft workflow |
| 2b | URDF/xacro → MJCF | Working wrapper |
| 2c | MJCF → URDF | Working lossy projection |
| 3 | End-effector attachment | **Working — released, see [`robot-assets-skills/`](../robot-assets-skills/)** |
| 4 | ROS 2 integration (`ros2_control` + MoveIt 2) | Working preview/gatekeeper |
| 4b | Dexterous-hand ROS/MoveIt package generation | Not started |

---

## Coming next

- The agent skills themselves: `cad-to-urdf`, `urdf-to-mjcf`, `mjcf-to-urdf`,
  `ros-moveit-package`
- Loom walkthroughs of each stage
- The curated robot cases and their validation evidence

Questions or want a particular piece released first — open an issue or find us
on [Discord](https://discord.gg/xukJ3nh9wC).
