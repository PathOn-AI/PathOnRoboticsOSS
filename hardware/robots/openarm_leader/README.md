# OpenArm Leader Arm

A 3D-printable 7-DOF leader arm for teleoperating [OpenArm](https://openarm.dev/),
built around eight Feetech STS3215-C046 serial bus servos per arm: seven for
arm joints and one for gripper input.

## Specs

| Spec | Value |
|---|---|
| **DOF** | 7 arm DOF + 1 gripper input ([OpenArm specifications](https://docs.openarm.dev/)) |
| **Servos** | 8 × Feetech STS3215-C046 serial bus servos per arm (7.4 V, 1:147) |
| **Protocol** | TTL serial bus (daisy-chained) |
| **Feedback** | Position, velocity, load, voltage |

## Printed parts

Dimensions in mm, from the STL bounding boxes.

| File | Bounding box (X × Y × Z) |
|---|---|
| [`cad_files/stl/j1.stl`](cad_files/stl/j1.stl) | 81.4 × 66.5 × 99.7 |
| [`cad_files/stl/j2.stl`](cad_files/stl/j2.stl) | 56.6 × 80.7 × 40.1 |
| [`cad_files/stl/j3.stl`](cad_files/stl/j3.stl) | 81.1 × 51.9 × 47.4 |
| [`cad_files/stl/j4.stl`](cad_files/stl/j4.stl) | 159.2 × 41.7 × 52.0 |
| [`cad_files/stl/j5.stl`](cad_files/stl/j5.stl) | 102.1 × 51.9 × 67.4 |
| [`cad_files/stl/j6.stl`](cad_files/stl/j6.stl) | 52.7 × 48.2 × 54.0 |
| [`cad_files/stl/j7.stl`](cad_files/stl/j7.stl) | 51.7 × 54.2 × 59.1 |
| [`cad_files/stl/j8.stl`](cad_files/stl/j8.stl) | 54.7 × 73.5 × 77.4 |
| [`cad_files/stl/j_handle.stl`](cad_files/stl/j_handle.stl) | 113.0 × 25.0 × 46.1 |
| [`cad_files/stl/j_trigger.stl`](cad_files/stl/j_trigger.stl) | 42.0 × 61.0 × 36.0 |
| [`cad_files/stl/waveshare_mount.stl`](cad_files/stl/waveshare_mount.stl) | 51.0 × 42.0 × 7.6 |

## Files

[STEP source](cad_files/step/) for editing and [STL meshes](cad_files/stl/) for
print preparation. Each format contains the same 11 parts.

```
openarm_leader/
├── README.md
└── cad_files/
    ├── step/                    # STEP parts
    │   ├── j1.step … j8.step
    │   ├── j_handle.step
    │   ├── j_trigger.step
    │   └── waveshare_mount.step
    └── stl/                     # printable parts (binary STL)
        ├── j1.stl … j8.stl
        ├── j_handle.stl
        ├── j_trigger.stl
        └── waveshare_mount.stl
```

## Software

Assign a unique servo ID before assembly: IDs 1–7 for the arm joints and ID 8
for the gripper input. Use a compatible Feetech servo configuration tool and a
Waveshare Serial Bus Servo Driver Board.

Calibrate the leader joint positions and verify the joint mapping before
teleoperating the follower.

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

## Links to the straps

- Joint 4: [Trilancer anti-slip silicone elastic straps](https://www.amazon.com/dp/B0DPLXWT27)
- Joint 6: [Strap](https://www.amazon.com/dp/B0FS1JYQYK)
