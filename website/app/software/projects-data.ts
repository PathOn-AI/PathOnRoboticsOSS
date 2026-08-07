const REPO = "https://github.com/PathOn-AI/pathon_opensource/tree/main";

export interface Project {
  name: string;
  description: string;
  href: string;
  /** Sub-projects nested inside the parent folder, as in the README. */
  children?: Project[];
}

// Mirrors software/ in the repo: two top-level folders, one with a nested bundle.
export const PROJECTS: Project[] = [
  {
    name: "Agentic DIY Robot Pipeline",
    description:
      "End-to-end “bring your own robot” pipeline: text → CAD → URDF/MJCF → end-effector attach → ROS 2, driven by coding agents.",
    href: `${REPO}/software/diy_pipeline`,
    children: [
      {
        name: "Robot Assets Skills",
        description:
          "The end-effector attach stage — a Claude Code skill bundle for robot URDF/MJCF assets, with the fixups the underlying scripts don't handle.",
        href: `${REPO}/software/diy_pipeline/robot-assets-skills`,
      },
    ],
  },
  {
    name: "iPhone Sensor Suite",
    description:
      "Use an iPhone as a full sensor suite (LiDAR, RGB, IMU) for robot manipulation and navigation — iOS app, Python SDK, ROS 2 driver, and calibration.",
    href: `${REPO}/software/iphone_sensor_suite`,
  },
];
