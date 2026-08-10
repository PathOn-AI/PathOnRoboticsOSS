# PathOn Dexterous Hand V2

A compact, servo-actuated dexterous hand designed for fast prototyping and manipulation research. Built around the **Feetech SCS0009** micro servo. This is **V2** of the PathOn Dexterous Hand.

| Isometric view | Servo reference |
|---|---|
| ![Isometric view](media/hand_iso.jpg) | ![Feetech SCS0009 servo](media/feetech_scs0009_v9.jpg) |

## Design Goals

- **Fast to prototype** - servo-actuated joints with a compact printed structure.
- **Small actuator package** - Feetech SCS0009 servos keep the hand lightweight and compact.
- **Simple printable layout** - the bundled 3MF file includes a prepared build plate for the printable parts.

## Specs

| Spec | Value |
|---|---|
| **Fingers** | 3 |
| **Servo model** | Feetech SCS0009 |
| **Print project** | Bambu Studio 3MF |
| **Printable parts** | Palm, palm mount, fingers, mirrored finger, male/female mounts |

## Hardware Files

```
dexterous_hand/v2/
|-- cad/
|   `-- .gitkeep                         # CAD folder kept for V1 structure parity
|-- stl/
|   |-- Palm.stl                         # palm body
|   |-- Palm_mount.stl                   # palm mount
|   |-- Finger.stl                       # finger body
|   |-- MirroredFinger.stl               # mirrored finger body
|   |-- Mountmale.stl                    # male mount
|   |-- Mountfemale.stl                  # female mount
|   |-- Hand-assembled.stl               # assembled hand reference
|   `-- Feetech SCS0009 v9.stl           # servo reference model
|-- 3mf/
|   `-- dex3_hand_v2.3mf                 # Bambu Studio print project
`-- media/
    |-- hand_iso.jpg
    |-- feetech_scs0009_v9.jpg
    `-- print_layout.jpg
```

## Printing

Use the bundled `3mf/dex3_hand_v2.3mf` to load the pre-arranged plate directly in Bambu Studio.

![Print layout](media/print_layout.jpg)

Suggested print settings starting point:

| Setting | Value |
|---|---|
| Material | PLA or PETG |
| Layer height | 0.2 mm |
| Walls | 4 |
| Infill | 25-40% |
| Supports | Tree supports where needed |

> CAD source files are not included in this V2 release. The `cad/` folder is present to mirror the V1 package layout.
