import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { isPathon, type Robot, type RobotKind } from "./robot-types";

export * from "./robot-types";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/opensource";

const robotsDirectory = path.join(process.cwd(), "content/robots");

export function getAllRobots(): Robot[] {
  const files = fs.readdirSync(robotsDirectory);
  const robots = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(robotsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        name: data.name,
        kind: (data.kind as RobotKind) || "robot",
        maker: data.maker || "",
        category: data.category,
        description: data.description,
        link: data.link,
        image: `${BASE_PATH}${data.image}`,
        content,
        specs: data.specs || {},
        components: data.components || [],
        purpose: data.purpose || [],
        media: data.media || [],
      };
    });

  // Our own hardware first, then everything else alphabetically.
  return robots.sort((a, b) => {
    if (isPathon(a) !== isPathon(b)) return isPathon(a) ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

export function getRobotBySlug(slug: string): Robot | undefined {
  return getAllRobots().find((r) => r.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllRobots().map((r) => r.slug);
}

export function getCategories(robots: Robot[]): string[] {
  return [...new Set(robots.map((r) => r.category))];
}

export function getPurposes(robots: Robot[]): string[] {
  return [...new Set(robots.flatMap((r) => r.purpose))];
}

const SPEC_LABELS: Record<string, string> = {
  dof: "DOF",
  weight: "Weight",
  payload: "Payload",
  reach: "Reach",
  price: "Price",
  controller: "Controller",
  interfaces: "Interfaces",
  power: "Power",
  repeatability: "Repeatability",
  status: "Status",
  fingers: "Fingers",
  servos: "Servos",
  torque: "Stall torque",
  resolution: "Resolution",
  feedback: "Feedback",
  gripper: "Gripper",
  fits: "Fits",
  formats: "File formats",
  material: "Material",
  hardware: "Fasteners",
  printbed: "Print bed",
};

export function getSpecLabel(key: string): string {
  return SPEC_LABELS[key] || key.charAt(0).toUpperCase() + key.slice(1);
}
