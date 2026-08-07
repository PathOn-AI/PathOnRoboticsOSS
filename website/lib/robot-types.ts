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

/** A demo video or a post about this entry. The platform comes from the URL. */
export interface MediaLink {
  title: string;
  url: string;
}

export type MediaPlatform = "loom" | "youtube" | "linkedin" | "x" | "link";

export const PLATFORM_LABELS: Record<MediaPlatform, string> = {
  loom: "Loom",
  youtube: "YouTube",
  linkedin: "LinkedIn",
  x: "X",
  link: "Link",
};

export function mediaPlatform(url: string): MediaPlatform {
  if (url.includes("loom.com")) return "loom";
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
  if (url.includes("linkedin.com")) return "linkedin";
  if (url.includes("x.com") || url.includes("twitter.com")) return "x";
  return "link";
}

/**
 * Embed URL for platforms that allow framing. Returns null for anything we only
 * link out to — X needs its own widget script, so it stays a link.
 */
export function embedUrl(url: string): string | null {
  const loom = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/);
  if (loom) return `https://www.loom.com/embed/${loom[1]}`;

  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/,
  );
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`;

  // Public LinkedIn posts embed by URN, which is at the tail of the share slug:
  // .../posts/<author>_<words>-ugcPost-7491175299758485505-avuB/
  const linkedin = url.match(/linkedin\.com\/.*?(ugcPost|activity)-(\d+)/);
  if (linkedin) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:${linkedin[1]}:${linkedin[2]}`;
  }

  // The frame X's own widget script creates, minus the script.
  const post = url.match(/(?:twitter|x)\.com\/\w+\/status\/(\d+)/);
  if (post) {
    return `https://platform.twitter.com/embed/Tweet.html?id=${post[1]}`;
  }

  return null;
}

/** Posts are portrait; videos are 16:9. */
export function embedFrameClass(platform: MediaPlatform): string {
  return platform === "linkedin" || platform === "x"
    ? "h-[30rem]"
    : "aspect-video";
}

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
  media: MediaLink[];
}

export function isPathon(robot: Robot): boolean {
  return robot.maker === PATHON_MAKER;
}
