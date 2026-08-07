// Shared types and constants for robot entries. Kept free of Node built-ins so
// client components can import it (lib/robots.ts reads the filesystem).

export interface Component {
  name: string;
  type: string;
}

/**
 * The line is actuation, not standalone-ness:
 * "robot" — anything with motors you drive, including end-effectors (hands, grippers).
 * "part" — passive printed hardware: sensor mounts, arm-to-tool adapters.
 */
export type RobotKind = "robot" | "part";

export const PATHON_MAKER = "Pathon Robotics";

export const KIND_LABELS: Record<RobotKind, string> = {
  robot: "Robot",
  part: "Mount & Adapter",
};

export interface Robot {
  slug: string;
  name: string;
  kind: RobotKind;
  maker: string;
  category: string;
  description: string;
  link: string;
  image: string;
  content: string;
  specs: Record<string, string>;
  components: Component[];
  purpose: string[];
}

export function isPathon(robot: Robot): boolean {
  return robot.maker === PATHON_MAKER;
}
